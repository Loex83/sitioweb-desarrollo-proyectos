# TechPyme

Landing estática de TechPyme: automatización, IA aplicada, datos y software para pequeñas y medianas empresas en Chile.

## Archivos principales

- `index.html`: contenido, estructura y metadatos de la página.
- `style.css`: diseño responsive y estilos visuales.
- `script.js`: menú móvil, formulario y año del pie de página.
- `CONFIGURAR.md`: configuración previa a publicar.
- `GUIA_DESPLIEGUE.md`: publicación en GitHub Pages y otros servicios.
- `robots.txt` y `sitemap.xml`: rastreo e indexación del sitio publicado.

## Uso local

Puedes abrir `index.html` directamente o iniciar un servidor local:

```bash
npm start
```

Después visita `http://localhost:8000`.

También puedes usar Python sin instalar dependencias:

```bash
python -m http.server 8000
```

## Formulario

El formulario prepara un correo mediante `mailto:`. Antes de publicar, abre `script.js` y reemplaza el valor de `CONFIG.destinationEmail` por la dirección que recibirá las solicitudes.

Este mecanismo no almacena datos ni necesita backend. Para capturar leads de forma más robusta, migra el formulario a un servicio como Formspree, Netlify Forms o un backend propio.

## Publicación

El workflow de `.github/workflows/github-pages.yml` publica automáticamente la raíz del repositorio en GitHub Pages cada vez que se actualiza `main` o `master`.

La URL configurada actualmente en los metadatos es:

`https://loex83.github.io/sitioweb-desarrollo-proyectos/`

Si cambia el repositorio o el dominio, actualiza también el enlace canonical de `index.html`, además de `robots.txt` y `sitemap.xml`.
