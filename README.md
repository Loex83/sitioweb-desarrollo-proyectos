# TechPyme - Página Web para Servicios Digitales

Una página web moderna, responsiva y profesional diseñada especialmente para ofrecer servicios de diseño web, desarrollo de software y automatizaciones a PYMEs chilenas.

## 📋 Características

✅ **Diseño Responsivo** - Se adapta perfectamente a dispositivos móviles, tablets y desktops
✅ **Moderno y Limpio** - Interfaz intuitiva y atractiva
✅ **Rápido** - Sin dependencias pesadas, código optimizado
✅ **SEO Friendly** - Estructura HTML semántica
✅ **Accesible** - Cumple con estándares de accesibilidad
✅ **Personalizable** - Fácil de adaptar a tu branding
✅ **Formulario de Contacto** - Sistema de contacto interactivo
✅ **Menú Móvil** - Navegación optimizada para smartphones

## 📁 Estructura de archivos

```
sitioweb-desarrollo-proyectos/
│
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── README.md          # Este archivo
└── .gitignore         # Archivos a ignorar en Git
```

## 🚀 Cómo usar

### 1. Descarga o clona el proyecto
```bash
git clone <tu-repositorio>
cd sitioweb-desarrollo-proyectos
```

### 2. Abre el sitio localmente
Simplemente abre `index.html` en tu navegador web.

Para un servidor local más completo, puedes usar:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

Luego accede a: `http://localhost:8000`

## 🎨 Personalización

### Cambiar el nombre de la empresa
En `index.html`, busca y reemplaza:
- `TechPyme` por el nombre de tu empresa
- `contacto@techpyme.cl` por tu email
- `+56 9 XXXX XXXX` por tu teléfono

### Cambiar colores
En `style.css`, modifica las variables de color en la sección `:root`:
```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #00d4ff;    /* Cyan secundario */
    --dark-color: #1a1a1a;         /* Negro */
    --light-color: #f5f5f5;        /* Gris claro */
}
```

### Cambiar textos y contenidos
Todos los textos están en `index.html`. Busca las secciones:
- `.hero` - Encabezado principal
- `.servicios` - Descripción de servicios
- `.por-que` - Ventajas competitivas
- `.contacto` - Información de contacto

### Agregar o quitar servicios
En la sección `.services-grid` del `index.html`, puedes agregar o quitar tarjetas de servicios.

## 📞 Configurar el formulario de contacto

Por defecto, el formulario muestra un mensaje de éxito. Para enviar emails reales, debes:

### Opción 1: Con un servicio como Formspree (Recomendado para principiantes)

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta y nuevo formulario
3. Obtén tu URL de endpoint
4. En `script.js`, descomentar y adaptar la sección de `fetch`:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

### Opción 2: Con tu propio servidor

Crea un archivo backend (Node.js/Python) que procese el formulario y envíe emails.

### Opción 3: Usar EmailJS (Cliente-side, sin servidor)

1. Ve a [emailjs.com](https://www.emailjs.com/)
2. Sigue su documentación
3. Integra el código en `script.js`

## 📱 Características Especiales

### Menú móvil
El menú se transforma automáticamente en un menú hamburguesa en pantallas pequeñas.

### Animaciones
- Desvanecimiento suave de elementos al hacer scroll
- Animación de números de estadísticas
- Efecto hover en tarjetas de servicios

### Navegación suave
Los enlaces internos desplazan suavemente a sus secciones.

## 🌐 Desplegar online

### Opción 1: GitHub Pages (Gratis)
1. Crea un repositorio en GitHub y sube tu proyecto.
2. Asegúrate de que tu rama principal sea `main` o `master`.
3. Si quieres despliegue automático, ya creamos un workflow en `.github/workflows/github-pages.yml`.
4. Cada vez que hagas `git push` a `main` o `master`, GitHub Actions desplegará el sitio.
5. Después de la primera ejecución, tu sitio estará disponible en `https://tuusuario.github.io/nombre-repo`.

> Si tu repositorio usa otra rama principal, cambia el nombre en el workflow o ajusta el trigger a esa rama.

### Opción 2: Netlify (Gratis)
1. Ve a [netlify.com](https://www.netlify.com)
2. Conecta tu repositorio de GitHub
3. Netlify deployará automáticamente

### Opción 3: Vercel (Gratis)
1. Ve a [vercel.com](https://vercel.com)
2. Importa tu proyecto
3. Vercel deployará automáticamente

### Opción 4: Hosting tradicional
Sube los archivos vía FTP a tu hosting y listo.

## 📊 SEO Básico

Para mejorar tu posicionamiento en Google:

1. Personaliza las etiquetas en `<head>`:
```html
<title>TechPyme - Soluciones Digitales para PYMEs</title>
<meta name="description" content="Servicios web, software y automatización...">
```

2. Agrega un sitemap.xml
3. Crea un robots.txt
4. Considera agregar datos estructurados (schema.org)

## 🔒 Seguridad

- El formulario no envía datos a ningún lado sin configuración
- Valida siempre en el servidor (no solo en cliente)
- Usa HTTPS en producción
- Sanitiza todas las entradas del usuario

## 🐛 Solución de problemas

### El sitio no se ve correctamente
- Limpia la caché del navegador (Ctrl+Shift+Delete)
- Verifica que todos los archivos estén en la misma carpeta

### El formulario no funciona
- Abre la consola (F12) y revisa errores
- Verifica que hayas configurado correctamente el endpoint

### Problemas de responsividad
- Verifica que tengas `<meta name="viewport">` en el `<head>`
- Prueba con diferentes tamaños de ventana

## 📝 Licencia

Este proyecto es libre para usar, modificar y distribuir.

## 💡 Tips de mejora

- Agrega un blog de consejos digitales
- Crea un portafolio de proyectos realizados
- Agrega testimonios de clientes
- Implementa chat en vivo
- Agrega certificados y acreditaciones
- Crea un plan de precios transparente

## 📧 Soporte

Para preguntas o mejoras, crea un issue o contacta directamente.

---

**Hecho con ❤️ para PYMEs chilenas**
