const CONFIG = {
  formEndpoint: 'https://formsubmit.co/ajax/arojas.sc1@gmail.com'
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

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  data.append('_subject', `Solicitud de diagnóstico | ${data.get('company')}`);

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  status.textContent = 'Enviando solicitud...';

  try {
    const response = await fetch(CONFIG.formEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data
    });

    if (!response.ok) {
      throw new Error('No se pudo enviar la solicitud.');
    }

    form.reset();
    status.textContent = 'Solicitud enviada correctamente. Nos pondremos en contacto con usted.';
  } catch (error) {
    status.textContent = 'No pudimos enviar la solicitud. Inténtelo nuevamente o contáctenos por WhatsApp.';
  } finally {
    submitButton.disabled = false;
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
