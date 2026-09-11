import { useEffect, useMemo, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  Download,
  Filter,
  LayoutDashboard,
  MapPin,
  Moon,
  PackageCheck,
  RefreshCcw,
  Sun,
  TrendingUp,
  Users
} from 'lucide-react';
import { categories, channels, regions, salesData } from './data.js';

const currency = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
const integer = new Intl.NumberFormat('es-CL');
const compactCurrency = new Intl.NumberFormat('es-CL', { notation: 'compact', maximumFractionDigits: 1 });

function formatCurrency(value) {
  return currency.format(value);
}

function formatCompactCurrency(value) {
  return `$${compactCurrency.format(value)}`;
}

function aggregateBy(items, key, valueKey) {
  return items.reduce((result, item) => {
    const label = item[key];
    result[label] = (result[label] || 0) + item[valueKey];
    return result;
  }, {});
}

function App() {
  const [filters, setFilters] = useState({ region: 'Todas', category: 'Todas', channel: 'Todos' });
  const [darkMode, setDarkMode] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const filteredSales = useMemo(() => salesData.filter((sale) => (
    (filters.region === 'Todas' || sale.region === filters.region) &&
    (filters.category === 'Todas' || sale.category === filters.category) &&
    (filters.channel === 'Todos' || sale.channel === filters.channel)
  )), [filters]);

  const summary = useMemo(() => {
    const revenue = filteredSales.reduce((total, sale) => total + sale.revenue, 0);
    const cost = filteredSales.reduce((total, sale) => total + sale.cost, 0);
    const units = filteredSales.reduce((total, sale) => total + sale.units, 0);
    return { revenue, cost, units, margin: revenue - cost, marginRate: revenue ? ((revenue - cost) / revenue) * 100 : 0 };
  }, [filteredSales]);

  const monthlyData = useMemo(() => {
    const totals = aggregateBy(filteredSales, 'date', 'revenue');
    const months = {};
    Object.entries(totals).forEach(([date, value]) => {
      const month = date.slice(0, 7);
      months[month] = (months[month] || 0) + value;
    });
    return Object.entries(months).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredSales]);

  const categoryData = useMemo(() => Object.entries(aggregateBy(filteredSales, 'category', 'revenue')).sort(([, a], [, b]) => b - a), [filteredSales]);
  const regionData = useMemo(() => Object.entries(aggregateBy(filteredSales, 'region', 'revenue')).sort(([, a], [, b]) => b - a).slice(0, 7), [filteredSales]);
  const channelData = useMemo(() => Object.entries(aggregateBy(filteredSales, 'channel', 'revenue')).sort(([, a], [, b]) => b - a), [filteredSales]);

  const resetFilters = () => setFilters({ region: 'Todas', category: 'Todas', channel: 'Todos' });

  const trendOption = {
    color: ['#2563eb'],
    tooltip: { trigger: 'axis', valueFormatter: formatCurrency },
    grid: { left: 12, right: 18, top: 18, bottom: 10, containLabel: true },
    xAxis: { type: 'category', boundaryGap: false, data: monthlyData.map(([month]) => month.replace('-', '/')), axisLine: { lineStyle: { color: '#d4d4d8' } }, axisLabel: { color: '#71717a' } },
    yAxis: { type: 'value', axisLabel: { color: '#71717a', formatter: formatCompactCurrency }, splitLine: { lineStyle: { color: '#e4e4e7', type: 'dashed' } } },
    series: [{ name: 'Ventas', type: 'line', smooth: true, symbol: 'circle', symbolSize: 7, areaStyle: { color: 'rgba(37, 99, 235, .12)' }, data: monthlyData.map(([, value]) => value) }]
  };

  const categoryOption = {
    color: ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6'],
    tooltip: { trigger: 'item', formatter: (params) => `${params.name}<br/><strong>${formatCurrency(params.value)}</strong>` },
    legend: { bottom: 0, icon: 'circle', textStyle: { color: '#71717a' } },
    series: [{ type: 'pie', radius: ['52%', '74%'], center: ['50%', '43%'], avoidLabelOverlap: true, itemStyle: { borderRadius: 7, borderColor: '#fff', borderWidth: 3 }, label: { show: false }, data: categoryData.map(([name, value]) => ({ name, value })) }]
  };

  const regionOption = {
    color: ['#0f766e'],
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, valueFormatter: formatCurrency },
    grid: { left: 8, right: 22, top: 12, bottom: 10, containLabel: true },
    xAxis: { type: 'value', axisLabel: { color: '#71717a', formatter: formatCompactCurrency }, splitLine: { lineStyle: { color: '#e4e4e7', type: 'dashed' } } },
    yAxis: { type: 'category', data: regionData.map(([name]) => name).reverse(), axisLabel: { color: '#52525b' } },
    series: [{ type: 'bar', barWidth: 18, data: regionData.map(([, value]) => value).reverse(), itemStyle: { borderRadius: [0, 5, 5, 0] } }]
  };

  const handleFilter = (name, value) => setFilters((current) => ({ ...current, [name]: value }));

  return (
    <div className="dashboard-shell">
      <header className="dashboard-header">
        <div className="brand-lockup">
          <div className="app-mark"><LayoutDashboard size={19} /></div>
          <div><p className="overline">TechPyme / Analytics</p><h1>Dashboard comercial</h1></div>
        </div>
        <div className="header-actions">
          <span className="demo-badge"><span /> Datos demostrativos</span>
          <button className="icon-button" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'} title="Cambiar tema">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="back-link" href="../../index.html">Volver al sitio</a>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="intro-row">
          <div><p className="eyebrow">Resumen ejecutivo · enero a diciembre 2025</p><h2>Una lectura clara de sus ventas.</h2><p className="intro-copy">Explore el desempeño comercial por región, categoría y canal. Los valores están expresados en pesos chilenos.</p></div>
          <div className="source-note"><span className="source-dot" /><span>Dataset sintético de referencia<br /><strong>Listo para conectar datos reales</strong></span></div>
        </section>

        <section className="filters-card" aria-label="Filtros del dashboard">
          <div className="filter-heading"><Filter size={16} /><strong>Filtros</strong><span>Actualice la vista sin perder los datos originales</span></div>
          <div className="filter-controls">
            <FilterSelect label="Región" value={filters.region} options={regions} onChange={(value) => handleFilter('region', value)} />
            <FilterSelect label="Categoría" value={filters.category} options={categories} onChange={(value) => handleFilter('category', value)} />
            <FilterSelect label="Canal" value={filters.channel} options={channels} onChange={(value) => handleFilter('channel', value)} />
            <button className="reset-button" onClick={resetFilters}><RefreshCcw size={15} /> Restablecer</button>
          </div>
        </section>

        <section className="kpi-grid">
          <KpiCard icon={<CircleDollarSign />} label="Ventas brutas" value={formatCurrency(summary.revenue)} trend="+18,4%" positive />
          <KpiCard icon={<TrendingUp />} label="Margen operacional" value={formatCurrency(summary.margin)} trend={`${summary.marginRate.toFixed(1).replace('.', ',')}% sobre ventas`} positive />
          <KpiCard icon={<PackageCheck />} label="Unidades vendidas" value={integer.format(summary.units)} trend={`${filteredSales.length} operaciones`} positive />
          <KpiCard icon={<Users />} label="Ticket promedio" value={formatCurrency(filteredSales.length ? summary.revenue / filteredSales.length : 0)} trend="por operación" positive={false} />
        </section>

        <section className="chart-grid">
          <ChartCard title="Evolución de ventas" subtitle="Facturación mensual acumulada" icon={<BarChart3 size={17} />} wide><ReactECharts option={trendOption} style={{ height: 300 }} theme={darkMode ? 'dark' : undefined} /></ChartCard>
          <ChartCard title="Mix por categoría" subtitle="Distribución de ventas brutas" icon={<PackageCheck size={17} />}><ReactECharts option={categoryOption} style={{ height: 300 }} theme={darkMode ? 'dark' : undefined} /></ChartCard>
          <ChartCard title="Rendimiento regional" subtitle="Las principales regiones por facturación" icon={<MapPin size={17} />}><ReactECharts option={regionOption} style={{ height: 300 }} theme={darkMode ? 'dark' : undefined} /></ChartCard>
        </section>

        <section className="lower-grid">
          <div className="table-card">
            <div className="card-header"><div><h3>Últimas operaciones</h3><p>Detalle de la muestra filtrada</p></div><button className="export-button" onClick={() => exportCsv(filteredSales)}><Download size={15} /> Exportar CSV</button></div>
            <div className="table-scroll"><table><thead><tr><th>Operación</th><th>Fecha</th><th>Cliente / comuna</th><th>Categoría</th><th>Canal</th><th className="align-right">Venta bruta</th></tr></thead><tbody>{filteredSales.slice().reverse().slice(0, 8).map((sale) => <tr key={sale.id} onClick={() => setSelectedSale(sale)} className={selectedSale?.id === sale.id ? 'selected-row' : ''}><td><span className="operation-id">{sale.id}</span></td><td>{new Intl.DateTimeFormat('es-CL', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${sale.date}T12:00:00`))}</td><td><strong>{sale.item}</strong><small>{sale.commune}, {sale.region}</small></td><td><span className="category-dot" />{sale.category}</td><td>{sale.channel}</td><td className="align-right"><strong>{formatCurrency(sale.revenue)}</strong></td></tr>)}</tbody></table></div>
            <div className="table-footer"><span>Mostrando {Math.min(8, filteredSales.length)} de {filteredSales.length} operaciones</span><span>Seleccione una fila para ver el detalle</span></div>
          </div>
          <aside className={`insight-card ${selectedSale ? 'has-selection' : ''}`}>
            {selectedSale ? <><div className="card-header"><div><p className="overline">Detalle de operación</p><h3>{selectedSale.id}</h3></div><button className="close-detail" onClick={() => setSelectedSale(null)} aria-label="Cerrar detalle">×</button></div><div className="detail-amount"><span>Venta bruta</span><strong>{formatCurrency(selectedSale.revenue)}</strong><small>{selectedSale.units} unidades · {selectedSale.status}</small></div><dl className="detail-list"><div><dt>Servicio / producto</dt><dd>{selectedSale.item}</dd></div><div><dt>Ubicación</dt><dd>{selectedSale.commune}, {selectedSale.region}</dd></div><div><dt>Canal</dt><dd>{selectedSale.channel}</dd></div><div><dt>Margen estimado</dt><dd>{formatCurrency(selectedSale.revenue - selectedSale.cost)}</dd></div></dl></> : <div className="empty-insight"><div className="empty-icon"><MapPin size={19} /></div><h3>Explore una operación</h3><p>Seleccione una fila de la tabla para revisar su detalle comercial.</p></div>}
          </aside>
        </section>
        <footer className="dashboard-footer"><span>TechPyme Analytics · versión demostrativa</span><span>Actualizado con dataset local de referencia · CLP</span></footer>
      </main>
    </div>
  );
}

function FilterSelect({ label, value, options, onChange }) {
  return <label className="filter-select"><span>{label}</span><div><select value={value} onChange={(event) => onChange(event.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={15} /></div></label>;
}

function KpiCard({ icon, label, value, trend, positive }) {
  return <article className="kpi-card"><div className="kpi-top"><span className="kpi-icon">{icon}</span><span className={`trend ${positive ? 'positive' : ''}`}>{positive && <ArrowUpRight size={13} />}{trend}</span></div><p>{label}</p><strong>{value}</strong></article>;
}

function ChartCard({ title, subtitle, icon, children, wide = false }) {
  return <article className={`chart-card ${wide ? 'wide' : ''}`}><div className="card-header"><div className="chart-heading"><span className="chart-icon">{icon}</span><div><h3>{title}</h3><p>{subtitle}</p></div></div></div>{children}</article>;
}

function exportCsv(rows) {
  const headers = ['id', 'date', 'region', 'commune', 'category', 'item', 'channel', 'units', 'revenue', 'cost', 'status'];
  const csv = [headers.join(','), ...rows.map((row) => headers.map((header) => `"${String(row[header]).replaceAll('"', '""')}"`).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'techpyme-ventas.csv';
  link.click();
  URL.revokeObjectURL(url);
}

export default App;
