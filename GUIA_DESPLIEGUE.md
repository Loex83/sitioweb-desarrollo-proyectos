# 🚀 Guía de Despliegue - TechPyme

Esta guía te ayudará a poner tu sitio web en línea en diferentes plataformas.

## Opción 1: GitHub Pages (Recomendado - Gratis)

### Requisitos
- Cuenta en GitHub (gratis en github.com)
- Git instalado en tu computadora

### Pasos

1. **Crea un repositorio en GitHub**
   - Ve a github.com y crea una nueva cuenta (o inicia sesión)
   - Haz clic en "New repository"
   - Nombre del repositorio: `sitioweb-techpyme` (o el que prefieras)
   - Selecciona "Public"
   - Crea el repositorio

2. **Descarga Git**
   - Ve a git-scm.com y descarga Git
   - Instálalo con las opciones por defecto

3. **Sube tus archivos**
   - Abre PowerShell o CMD en tu carpeta del proyecto
   - Ejecuta estos comandos:
   ```bash
   git init
   git add .
   git commit -m "Sitio web TechPyme"
   git branch -M main
   git remote add origin https://github.com/TUUSUARIO/sitioweb-techpyme.git
   git push -u origin main
   ```

4. **Activa GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Entra a Settings → Pages
   - En "Source", selecciona "main branch"
   - Espera unos minutos

5. **¡Listo!**
   - Tu sitio estará en: `https://TUUSUARIO.github.io/sitioweb-techpyme`

**Ventajas**: Gratis, sin configuración de servidor, actualizaciones automáticas
**Desventajas**: Sin soporte para backend dinámico

---

## Opción 2: Netlify (Gratis con opciones Premium)

### Requisitos
- Cuenta en GitHub o GitLab
- (Opcional) Git en tu computadora

### Pasos

1. **Conecta tu repositorio**
   - Ve a netlify.com
   - Haz clic en "Sign up"
   - Selecciona "GitHub"
   - Autoriza Netlify en GitHub

2. **Crea un nuevo sitio**
   - Haz clic en "New site from Git"
   - Selecciona tu repositorio
   - Las opciones por defecto están bien (build command vacío)
   - Haz clic en "Deploy site"

3. **Espera el despliegue**
   - Netlify compilará automáticamente
   - Tu sitio estará disponible en unos minutos

4. **(Opcional) Usa tu dominio propio**
   - En Site settings → Domain management
   - Agrega tu dominio

5. **¡Listo!**
   - Tu sitio estará en: `https://nombrealeatorio.netlify.app`

**Ventajas**: Integración con GitHub, formularios incluidos, CDN global
**Desventajas**: URL aleatoria sin dominio propio

---

## Opción 3: Vercel (Gratis con opciones Premium)

### Pasos

1. **Registrarse**
   - Ve a vercel.com
   - Haz clic en "Sign up"
   - Selecciona GitHub

2. **Importar proyecto**
   - Haz clic en "New Project"
   - Selecciona tu repositorio
   - Haz clic en "Import"

3. **Deploy**
   - Vercel deployará automáticamente
   - Tu sitio estará listo en minutos

4. **¡Listo!**
   - Tu sitio estará en: `https://proyecto.vercel.app`

**Ventajas**: Super rápido, excelente para React, muy confiable
**Desventajas**: Similar a Netlify

---

## Opción 4: Hosting Tradicional (Cpanel, etc.)

Si contrataste hosting con Cpanel:

### Pasos

1. **Descarga FileZilla**
   - Ve a filezilla-project.org
   - Descarga FileZilla Client

2. **Conecta por FTP**
   - Abre FileZilla
   - Host: ftp://tudominio.com
   - Usuario: el de tu email
   - Contraseña: la de tu hosting
   - Puerto: 21 (o 22 si es SFTP)

3. **Sube tus archivos**
   - En la carpeta remota, ve a `public_html`
   - Arrastra tus archivos HTML, CSS y JS

4. **¡Listo!**
   - Tu sitio estará en: `https://tudominio.com`

**Ventajas**: Control total, soporte 24/7, múltiples dominios
**Desventajas**: Requiere pago mensual (desde $5-10)

---

## Opción 5: AWS (Para proyectos más grandes)

Si necesitas más poder:

1. **Crea una cuenta en aws.amazon.com**
2. **Usa S3 + CloudFront**
3. **O usa Lightsail (más simple)**

Esto es más avanzado. Recomendamos las opciones anteriores para empezar.

---

## 🔧 Con dominio propio

Todos los servicios anteriores permiten agregar tu dominio:

1. **Compra un dominio**
   - Registradores: 
     - GoDaddy (godaddy.com)
     - Namecheap (namecheap.com)
     - NIC.cl (para dominios .cl - RECOMENDADO en Chile)

2. **Configura los DNS**
   - En tu registrador, ve a DNS settings
   - Sigue las instrucciones de tu plataforma (Netlify, Vercel, etc.)
   - Espera 24-48 horas para que se propague

3. **¡Listo!**
   - Tu sitio estará en: `https://tudominio.cl`

---

## ✅ Checklist antes de desplegar

- [ ] Actualiza el nombre de tu empresa en `index.html`
- [ ] Actualiza el email de contacto
- [ ] Actualiza el teléfono
- [ ] Configura el formulario (Formspree, EmailJS, etc.)
- [ ] Revisa los colores corporativos
- [ ] Prueba en móvil
- [ ] Verifica todos los enlaces
- [ ] Prueba el formulario de contacto

---

## 🔍 Pruebas antes de ir en vivo

### Pruebas en navegadores
- Chrome
- Firefox
- Safari
- Edge

### Pruebas en dispositivos
- iPhone
- Android
- Tablet

### Herramientas de prueba
- Google PageSpeed Insights
- GTmetrix
- Mobile-Friendly Test de Google

---

## 📊 Monitoreo después de desplegar

1. **Google Analytics**
   - Ve a analytics.google.com
   - Crea una propiedad
   - Agrega el código de seguimiento

2. **Google Search Console**
   - Ve a search.google.com/search-console
   - Verifica tu sitio
   - Monitorea errores

3. **Uptime Monitoring**
   - Usa uptimerobot.com
   - Recibe alertas si tu sitio cae

---

## 🚨 Problemas comunes

### "Error: Repositorio no encontrado"
- Verifica que el URL sea correcto
- Verifica tus credenciales de GitHub

### "Mi sitio está vacío"
- Verifica que `index.html` esté en la raíz
- Limpia caché del navegador

### "Los estilos no cargan"
- Verifica que `style.css` esté en la misma carpeta
- Revisa la consola (F12) para errores

### "El formulario no funciona"
- Abre la consola (F12)
- Busca errores en la sección Network
- Verifica que configuraste Formspree o tu backend

---

## 💡 Tips de seguridad para producción

- [ ] Usa HTTPS (todos los servicios lo incluyen)
- [ ] Valida formularios en el servidor
- [ ] No publicites tu email principal en el HTML
- [ ] Usa un email específico para contacto
- [ ] Implementa rate limiting en formularios
- [ ] Agrega CAPTCHA para prevenir spam

---

## 📞 Soporte

Si necesitas ayuda:
1. Consulta la documentación de tu plataforma
2. Busca en Google tu error específico
3. Pregunta en comunidades como Stack Overflow

---

**¡Tu sitio está listo para el mundo! 🌍**
