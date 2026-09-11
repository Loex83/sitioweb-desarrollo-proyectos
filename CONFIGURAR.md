# TechPyme — renovación comercial

Estos tres archivos reemplazan la landing actual:

- `index.html`
- `style.css`
- `script.js`

## Antes de publicar

1. El formulario está configurado para enviar las solicitudes directamente a `arojas.sc1@gmail.com` mediante FormSubmit.
2. Si FormSubmit solicita activar el destinatario, confirma el correo desde el mensaje de activación recibido.

3. Reemplaza en `index.html` cualquier enlace social cuando tengas las URL definitivas.
4. Reemplaza el texto de "Sobre TechPyme" por tu presentación personal real cuando quieras incorporar tu nombre y experiencia.

## Publicación en GitHub Pages

Copia `index.html`, `style.css` y `script.js` a la raíz del repositorio `loex83/sitioweb-desarrollo-proyectos` y haz commit/push a `main`.

La página seguirá funcionando como sitio estático, sin backend.

## Nota sobre el formulario

La versión entregada usa FormSubmit para enviar los datos sin abrir el cliente de correo. Para un control más avanzado, conviene migrar después a Formspree, Netlify Forms, un webhook o un backend propio.
