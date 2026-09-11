const CONFIG = {
  destinationEmail: 'REEMPLAZAR_CON_TU_EMAIL@ejemplo.cl'
};

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('#diagnostic-form');
const status = document.querySelector('#form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (CONFIG.destinationEmail.includes('REEMPLAZAR')) {
    status.textContent = 'Configura primero tu email en script.js para activar el envío.';
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent(`Solicitud de diagnóstico | ${data.get('company')}`);
  const body = encodeURIComponent(
`Hola,

Me interesa conversar sobre una posible mejora/automatización para mi empresa.

Nombre: ${data.get('name')}
Empresa: ${data.get('company')}
Email: ${data.get('email')}
Necesidad: ${data.get('need')}

Situación actual:
${data.get('message')}

Saludos`
  );

  window.location.href = `mailto:${CONFIG.destinationEmail}?subject=${subject}&body=${body}`;
  status.textContent = 'Se abrirá tu aplicación de correo con la solicitud preparada.';
});

document.querySelector('#year').textContent = new Date().getFullYear();
