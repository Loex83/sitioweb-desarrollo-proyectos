import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Calculator,
  Check,
  ChevronDown,
  ClipboardList,
  Minus,
  Plus,
  Printer,
  Send,
  ShoppingBag,
  Trash2,
  UserRound,
  WalletCards
} from 'lucide-react';
import { catalog, volumeDiscount } from './data.js';

const IVA_RATE = 0.19;
const currency = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
const today = new Intl.DateTimeFormat('es-CL', { dateStyle: 'medium' });

function formatCurrency(value) {
  return currency.format(value);
}

function App() {
  const [items, setItems] = useState([]);
  const [company, setCompany] = useState({ name: '', contact: '', email: '', validity: '15 días' });
  const [category, setCategory] = useState('Todas');
  const [sent, setSent] = useState(false);

  const categories = ['Todas', ...new Set(catalog.map((item) => item.category))];
  const visibleCatalog = category === 'Todas' ? catalog : catalog.filter((item) => item.category === category);
  const discountRate = volumeDiscount(items);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * discountRate;
  const net = subtotal - discount;
  const iva = net * IVA_RATE;
  const total = net + iva;

  const quoteNumber = useMemo(() => `TP-${new Date().getFullYear()}-${String(Date.now()).slice(-5)}`, []);

  const addItem = (product) => {
    setSent(false);
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setItems((current) => current.flatMap((item) => {
      if (item.id !== id) return [item];
      const quantity = item.quantity + change;
      return quantity > 0 ? [{ ...item, quantity }] : [];
    }));
  };

  const removeItem = (id) => setItems((current) => current.filter((item) => item.id !== id));

  const shareWhatsApp = () => {
    const detail = items.map((item) => `• ${item.name} x${item.quantity}: ${formatCurrency(item.price * item.quantity)}`).join('\n');
    const message = `Hola, quisiera revisar esta cotización TechPyme (${quoteNumber}).\n\n${detail}\n\nTotal estimado: ${formatCurrency(total)}\nEmpresa: ${company.name || 'Por completar'}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const requestQuote = () => {
    setSent(true);
    document.querySelector('#quote-summary')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="quote-app">
      <header className="quote-header">
        <a className="back-home" href="../../index.html"><ArrowLeft size={16} /> Volver al sitio</a>
        <div className="quote-brand"><span className="brand-symbol">T</span><span>TechPyme <small>cotizador comercial</small></span></div>
        <div className="quote-number"><span>Cotización</span><strong>{quoteNumber}</strong></div>
      </header>

      <main className="quote-main">
        <section className="quote-hero">
          <div><p className="hero-kicker">Propuesta comercial demostrativa</p><h1>Configure una solución<br /><em>a la medida.</em></h1><p>Combine productos y servicios tecnológicos, revise la inversión estimada y prepare una conversación comercial en minutos.</p></div>
          <div className="hero-stamp"><Calculator size={22} /><span>Valores en CLP<br /><strong>IVA incluido al final</strong></span></div>
        </section>

        <div className="quote-layout">
          <section className="catalog-panel">
            <div className="section-heading"><div><p className="section-kicker">01 / Catálogo</p><h2>Seleccione los servicios</h2></div><label className="category-filter"><span>Filtrar por</span><div><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label></div>
            <div className="product-grid">{visibleCatalog.map((product) => <ProductCard key={product.id} product={product} onAdd={addItem} selected={items.some((item) => item.id === product.id)} />)}</div>
          </section>

          <aside className="quote-side" id="quote-summary">
            <div className="summary-card">
              <div className="summary-header"><div><p className="section-kicker">02 / Resumen</p><h2>Su cotización</h2></div><span className="summary-icon"><ClipboardList size={18} /></span></div>
              {items.length === 0 ? <div className="empty-cart"><ShoppingBag size={25} /><p>Aún no hay servicios seleccionados.</p><small>Agregue una opción del catálogo para comenzar.</small></div> : <div className="selected-items">{items.map((item) => <div className="selected-item" key={item.id}><div><strong>{item.name}</strong><small>{formatCurrency(item.price)} / {item.unit}</small></div><div className="quantity-control"><button onClick={() => updateQuantity(item.id, -1)} aria-label={`Reducir ${item.name}`}><Minus size={13} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} aria-label={`Aumentar ${item.name}`}><Plus size={13} /></button></div><strong className="item-total">{formatCurrency(item.price * item.quantity)}</strong><button className="remove-item" onClick={() => removeItem(item.id)} aria-label={`Eliminar ${item.name}`}><Trash2 size={14} /></button></div>)}</div>}
              {items.length > 0 && <div className="totals"><div><span>Subtotal</span><strong>{formatCurrency(subtotal)}</strong></div>{discountRate > 0 && <div className="discount-line"><span>Descuento por volumen ({discountRate * 100}%)</span><strong>- {formatCurrency(discount)}</strong></div>}<div><span>Neto</span><strong>{formatCurrency(net)}</strong></div><div><span>IVA (19%)</span><strong>{formatCurrency(iva)}</strong></div><div className="grand-total"><span>Total estimado</span><strong>{formatCurrency(total)}</strong></div></div>}
            </div>

            <div className="client-card"><div className="summary-header"><div><p className="section-kicker">03 / Datos</p><h2>Datos de la empresa</h2></div><UserRound size={18} /></div><div className="form-fields"><label>Empresa<input value={company.name} onChange={(event) => setCompany({ ...company, name: event.target.value })} placeholder="Nombre de la empresa" /></label><label>Persona de contacto<input value={company.contact} onChange={(event) => setCompany({ ...company, contact: event.target.value })} placeholder="Nombre y apellido" /></label><label>Correo electrónico<input type="email" value={company.email} onChange={(event) => setCompany({ ...company, email: event.target.value })} placeholder="contacto@empresa.cl" /></label><label>Vigencia de la cotización<div className="field-select"><select value={company.validity} onChange={(event) => setCompany({ ...company, validity: event.target.value })}><option>15 días</option><option>30 días</option><option>60 días</option></select><ChevronDown size={15} /></div></label></div></div>

            <div className="summary-actions"><button className="primary-action" onClick={requestQuote} disabled={items.length === 0}><Send size={16} /> Preparar cotización</button><div className="secondary-actions"><button onClick={() => window.print()} disabled={items.length === 0}><Printer size={15} /> Imprimir</button><button onClick={shareWhatsApp} disabled={items.length === 0}><Send size={15} /> WhatsApp</button></div>{sent && <p className="success-message"><Check size={15} /> Cotización preparada. Puede imprimirla o compartirla.</p>}</div>
          </aside>
        </div>
        <footer className="quote-footer"><span>TechPyme · Cotizador comercial B2B</span><span><WalletCards size={14} /> Valores demostrativos, sujetos a validación comercial</span></footer>
      </main>
    </div>
  );
}

function ProductCard({ product, onAdd, selected }) {
  return <article className={`product-card ${selected ? 'is-selected' : ''}`}><div className="product-top"><span className="category-label">{product.category}</span>{selected && <span className="selected-mark"><Check size={13} /></span>}</div><h3>{product.name}</h3><p>{product.description}</p><div className="product-bottom"><div><strong>{formatCurrency(product.price)}</strong><small> / {product.unit}</small></div><button onClick={() => onAdd(product)}><Plus size={15} /> Agregar</button></div></article>;
}

export default App;
