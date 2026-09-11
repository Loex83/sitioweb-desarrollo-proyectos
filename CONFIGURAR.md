# TechPyme — renovación comercial

Estos tres archivos reemplazan la landing actual:

- `index.html`
- `style.css`
- `script.js`

## Antes de publicar

1. Abre `script.js`.
2. Cambia:

```js
const CONFIG = {
  destinationEmail: 'REEMPLAZAR_CON_TU_EMAIL@ejemplo.cl'
};
```

por el correo real donde quieres recibir los leads.

3. Reemplaza en `index.html` cualquier enlace social cuando tengas las URL definitivas.
4. Reemplaza el texto de "Sobre TechPyme" por tu presentación personal real cuando quieras incorporar tu nombre y experiencia.

## Publicación en GitHub Pages

Copia `index.html`, `style.css` y `script.js` a la raíz del repositorio `loex83/sitioweb-desarrollo-proyectos` y haz commit/push a `main`.

La página seguirá funcionando como sitio estático, sin backend.

## Nota sobre el formulario

La versión entregada usa `mailto:` para que GitHub Pages no necesite servidor. Para una captura de leads más robusta, conviene migrar después a Formspree, Netlify Forms, un webhook o un backend propio.
