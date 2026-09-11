# TechPyme

Landing estática de TechPyme: automatización, IA aplicada, datos y software para pequeñas y medianas empresas en Chile.

## Archivos principales

- `index.html`: contenido, estructura y metadatos de la página.
- `style.css`: diseño responsive y estilos visuales.
- `contact.css`: estilos de las acciones de WhatsApp y llamada.
- `script.js`: menú móvil, formulario y año del pie de página.
- `CONFIGURAR.md`: configuración previa a publicar.
- `GUIA_DESPLIEGUE.md`: publicación en GitHub Pages y otros servicios.
- `robots.txt` y `sitemap.xml`: rastreo e indexación del sitio publicado.
- `dashboard/`: dashboard comercial React con datos demostrativos de ventas en Chile.

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

El formulario envía las solicitudes directamente mediante AJAX a `arojas.sc1@gmail.com` usando FormSubmit, sin abrir el cliente de correo del visitante.

FormSubmit puede solicitar una activación inicial del correo destinatario. Para un control más avanzado, puede sustituirse por Formspree, Netlify Forms o un backend propio.

## Publicación

El workflow de `.github/workflows/github-pages.yml` publica automáticamente la raíz del repositorio en GitHub Pages cada vez que se actualiza `main` o `master`.

La URL configurada actualmente en los metadatos es:

`https://loex83.github.io/sitioweb-desarrollo-proyectos/`

El dashboard está disponible en:

`https://loex83.github.io/sitioweb-desarrollo-proyectos/dashboard/dist/`

Si cambia el repositorio o el dominio, actualiza también el enlace canonical de `index.html`, además de `robots.txt` y `sitemap.xml`.
