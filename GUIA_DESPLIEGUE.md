# Guía de despliegue - TechPyme

La landing es un sitio estático y se publica automáticamente en GitHub Pages mediante `.github/workflows/github-pages.yml`.

## Antes de publicar

1. Abre `script.js`.
2. El formulario ya está configurado para enviar las solicitudes directamente a `arojas.sc1@gmail.com` mediante FormSubmit.
3. Revisa el contenido y los enlaces de `index.html`.
4. Comprueba que la URL canonical, `robots.txt` y `sitemap.xml` coincidan con el dominio publicado.

## Publicar en GitHub Pages

Si el repositorio aún no existe en GitHub:

```bash
git init
git add .
git commit -m "Publica sitio web TechPyme"
git branch -M main
git remote add origin https://github.com/loex83/sitioweb-desarrollo-proyectos.git
git push -u origin main
```

En GitHub, abre **Settings > Pages** y selecciona **GitHub Actions** como fuente de publicación. El workflow se ejecuta en cada push a `main` o `master`.

La URL pública configurada actualmente es:

`https://loex83.github.io/sitioweb-desarrollo-proyectos/`

## Verificación

- Comprueba que el workflow termine correctamente en **Actions**.
- Prueba la navegación y el formulario en escritorio y móvil.
- Verifica que el formulario abra el cliente de correo con el destinatario correcto.
- Revisa `robots.txt` y `sitemap.xml` en la URL publicada.

GitHub Pages sirve archivos estáticos. El formulario utiliza FormSubmit para enviar los datos sin backend propio. Para capturar leads con mayor control, será necesario integrar un servicio de formularios dedicado o un backend.
