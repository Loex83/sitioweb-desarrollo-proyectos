// ============================
// Menú hamburguesa
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            
            // Animar el hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navLinks.style.display === 'flex' ? 'rotate(45deg) translate(8px, 8px)' : 'none';
            spans[1].style.opacity = navLinks.style.display === 'flex' ? '0' : '1';
            spans[2].style.transform = navLinks.style.display === 'flex' ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
        });
        
        // Cerrar menú al hacer click en un enlace
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.style.display = 'none';
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ============================
// Validación y envío de formulario
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validaciones básicas
            if (!data.nombre || !data.email || !data.empresa || !data.tipo || !data.mensaje) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Por favor ingresa un email válido');
                return;
            }
            
            // Simular envío (en producción, enviar a servidor)
            console.log('Datos del formulario:', data);
            
            // Mostrar mensaje de éxito
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = '¡Mensaje enviado!';
            submitButton.style.backgroundColor = '#4caf50';
            
            // Limpiar formulario
            form.reset();
            
            // Restaurar botón después de 3 segundos
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);
            
            // En producción, descomentar esto y ajustar según tu backend:
            /*
            fetch('/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                alert('Gracias por tu mensaje. Nos contactaremos pronto.');
                form.reset();
            })
            .catch(error => console.error('Error:', error));
            */
        });
    }
});

// ============================
// Animación de scroll suave para números estadísticos
// ============================
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateCounter(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(element => {
    observer.observe(element);
});

function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text);
    
    if (!isNaN(number)) {
        let current = 0;
        const increment = Math.ceil(number / 50);
        const interval = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = text;
                clearInterval(interval);
            } else {
                element.textContent = current;
            }
        }, 20);
    }
}

// ============================
// Scroll suave para navegación
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================
// Efecto de aparición al scroll
// ============================
const revealElements = document.querySelectorAll('.service-card, .benefit-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// ============================
// Agregar clases interactivas
// ============================
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// ============================
// Log de inicialización
// ============================
console.log('%cTechPyme iniciado correctamente', 'color: #0066cc; font-size: 14px; font-weight: bold;');
