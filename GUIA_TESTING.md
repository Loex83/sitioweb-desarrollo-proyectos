# 🧪 Guía de Pruebas y Testing

## Pruebas Locales

### Método 1: Abrir directamente en el navegador (Simple)
1. Navega a tu carpeta del proyecto
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador

**Limitaciones**: Algunos navegadores no permiten ciertos features sin servidor

### Método 2: Con Python (Recomendado)
```bash
# Si tienes Python 3 instalado
cd tu-carpeta-del-proyecto
python -m http.server 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

### Método 3: Con Node.js
```bash
# Instala http-server si no lo tienes
npm install -g http-server

# En tu carpeta del proyecto
http-server

# Abre en tu navegador
# http://localhost:8080
```

### Método 4: Con VS Code Live Server
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

---

## ✅ Checklist de Funcionalidad

- [ ] **Navegación**: Todos los links funcionan
- [ ] **Menú móvil**: Se abre/cierra correctamente
- [ ] **Formulario**: Se puede llenar y enviar (sin errores en consola)
- [ ] **Scroll suave**: Los anclas funcionan suavemente
- [ ] **Animaciones**: Las tarjetas se mueven al scroll
- [ ] **Responsividad**: Se ve bien en móvil, tablet y desktop

---

## 📱 Pruebas de Responsividad

### En Chrome DevTools
1. Abre tu sitio en Chrome
2. Presiona F12 (o Ctrl+Shift+I)
3. Haz clic en el icono de dispositivo móvil
4. Prueba estos tamaños:
   - iPhone 12: 390x844
   - iPad: 768x1024
   - Desktop: 1920x1080

### En navegadores reales
Prueba en:
- iPhone, iPad, Mac (Safari)
- Samsung, Android (Chrome)
- Windows (Edge, Firefox)

---

## 🔍 Pruebas de SEO

### Google PageSpeed Insights
1. Ve a pagespeed.web.dev
2. Ingresa tu URL
3. Revisa los scores:
   - Performance (idealmente > 90)
   - Accessibility (idealmente > 90)
   - Best Practices (idealmente > 90)
   - SEO (idealmente 100)

### Lighthouse en Chrome
1. Abre DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Haz clic en "Analyze page load"
4. Revisa los reportes

### Mobile-Friendly Test
1. Ve a google.com/test/mobile-friendly
2. Ingresa tu URL
3. Verifica que sea mobile-friendly

---

## 🔐 Pruebas de Seguridad

### Verificar HTTPS
- Tu sitio debe mostrar candadito verde
- URL debe empezar con "https://"

### Verificar Headers de Seguridad
En Chrome DevTools → Network → Ver response headers

Debería incluir:
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
```

---

## 📊 Pruebas de Rendimiento

### Velocidad de carga
Ideal: < 2 segundos

Herramientas:
- GTmetrix.com
- WebPageTest.org
- Pingdom Tools

### Compresión de imágenes
Usa TinyPNG.com o CompressJPEG.com

### Minificación de CSS/JS
Si quieres optim​izar:
- CSS-nano.org
- JSmin.org

---

## 🎨 Pruebas de Diseño

### Contraste de colores (Accesibilidad)
1. Ve a webaim.org/resources/contrastchecker
2. Verifica que texto y fondo tengan suficiente contraste
3. Ratio mínimo recomendado: 4.5:1

### Accesibilidad WCAG
Usar axe DevTools:
1. Instala la extensión en Chrome
2. Abre tu sitio
3. Ejecuta el scan
4. Corrige los errores reportados

---

## 🧩 Pruebas de Funcionalidad

### Formulario
```javascript
// En la consola del navegador (F12)
// Verifica que se registren los valores
document.getElementById('formulario').addEventListener('submit', (e) => {
    console.log('Formulario enviado');
});
```

### Links
- Click en cada link del menú
- Verifica que vayan a la sección correcta
- Prueba el botón "Comienza ahora"

### Responsividad del menú
- En móvil: click en hamburguesa
- Debe abrir/cerrar correctamente
- Click en link debe cerrar el menú

---

## 🐛 Cómo reportar errores

### En la consola del navegador
1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. Busca errores rojos
4. Copia el error completo

### Network issues
1. Ve a la pestaña "Network"
2. Recarga la página
3. Busca requests fallidas (rojo)

---

## ✨ Antes de desplegar

### Verificación final
```
✓ Sin errores en la consola
✓ Todas las imágenes cargan
✓ CSS y JS cargan correctamente
✓ Formulario funciona
✓ Menú móvil funciona
✓ Todas las secciones son accesibles
✓ Sin links rotos
✓ Responsive en móvil
✓ Score PageSpeed > 80
✓ Sin warnings de seguridad
```

---

## 🚀 Automatizar Pruebas

### Usar Lighthouse CI
```bash
npm install -g @lhci/cli@*
lhci autorun
```

### Usar GitHub Actions
Crea `.github/workflows/lighthouse.yml` con:
```yaml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx lhci autorun
```

---

## 📈 Monitoreo en Producción

### Sentry (Error tracking)
```html
<script src="https://browser.sentry-cdn.com/7.0.0/bundle.min.js"></script>
<script>
  Sentry.init({
    dsn: "https://YOUR_DSN@sentry.io/PROJECT_ID"
  });
</script>
```

### LogRocket (Session replay)
```html
<script src="https://cdn.lr-ingest.com/LogRocket.min.js"></script>
<script>
  window.LogRocket && window.LogRocket.init('app/PROJECT_ID');
</script>
```

---

## 💡 Tips de debugging

### Network throttling
En Chrome DevTools → Network:
- Simula conexión lenta (3G, 4G)
- Verifica cómo se ve en conexiones lentas

### Device emulation
- Prueba en diferentes dispositivos
- Prueba en orientación landscape/portrait

### Cookies y Storage
En DevTools → Application:
- Limpia cookies periódicamente
- Verifica localStorage

---

¡Tu sitio está listo para testing! 🎉
