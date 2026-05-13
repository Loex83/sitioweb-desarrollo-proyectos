# 🎯 Personalizaciones Avanzadas

## 1. Agregar un Chat en Vivo

### Opción A: Zendesk (Recomendado)
```html
<!-- Agrega esto al final del <body> en index.html -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=YOUR_API_KEY"></script>
```

1. Ve a zendesk.com
2. Crea una cuenta (prueba gratis)
3. Obtén tu API KEY
4. Reemplaza YOUR_API_KEY

### Opción B: Crisp Chat (Gratis)
```html
<!-- Agrega al final del <body> -->
<script type="text/javascript">
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";
    (function(){
        d=document;
        s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;
        d.getElementsByTagName("head")[0].appendChild(s);
    })();
</script>
```

### Opción C: Tawk.to (Gratis)
```html
<!-- Agrega al final del <body> -->
<script src="https://embed.tawk.to/YOUR_PROPERTY_ID/default"></script>
```

---

## 2. Agregar Google Maps

### Mapa en sección de contacto
```html
<!-- Agrega esto en la sección .contacto -->
<div style="width: 100%; height: 400px; border-radius: 8px; overflow: hidden; margin-top: 30px;">
    <iframe width="100%" height="400" frameborder="0" style="border:0" 
        src="https://www.google.com/maps/embed/v1/place?q=lugar:Santiago,Chile&key=YOUR_API_KEY" 
        allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
```

Pasos:
1. Ve a console.cloud.google.com
2. Crea un proyecto
3. Habilita "Maps Embed API"
4. Crea una API key
5. Reemplaza YOUR_API_KEY

---

## 3. Agregar Newsletter/Email List

### Con Mailchimp (Gratis)
```html
<!-- Agrega en la sección de hero o antes del footer -->
<section style="background: linear-gradient(135deg, #0066cc 0%, #00d4ff 100%); color: white; padding: 50px 20px; text-align: center;">
    <div class="container">
        <h2>Suscríbete a nuestro Newsletter</h2>
        <p style="margin-bottom: 20px;">Recibe consejos y actualizaciones sobre transformación digital</p>
        
        <div id="mc_embed_signup" style="max-width: 400px; margin: 0 auto;">
            <form action="https://techpyme.us20.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="mc-field-group" style="margin-bottom: 10px;">
                    <input type="email" value="" name="EMAIL" class="required email" placeholder="Tu email" style="width: 100%; padding: 10px; border-radius: 4px; border: none;">
                </div>
                <div id="mce-responses" style="display: none;">
                    <div id="mce-error-response" style="display:none"></div>
                    <div id="mce-success-response" style="display:none"></div>
                </div>
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_YOUR_USER_ID_YOUR_LIST_ID" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary" style="width: 100%;">
                </div>
            </form>
        </div>
    </div>
</section>
```

Pasos:
1. Ve a mailchimp.com
2. Crea una cuenta
3. Crea una audiencia
4. Obtén tu USER_ID y LIST_ID
5. Copia el código anterior

---

## 4. Agregar Galería de Proyectos

### Galería con lightbox
```html
<!-- Agrega JavaScript al <head> -->
<link href="https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/css/lightbox.min.css" rel="stylesheet">

<!-- Agrega esto en el body antes del script.js -->
<script src="https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/js/lightbox.min.js"></script>

<!-- En tu sección de portafolio -->
<div class="portfolio-grid">
    <a href="imagen-grande-1.jpg" data-lightbox="portfolio" data-title="Proyecto 1">
        <img src="imagen-pequeña-1.jpg" alt="Proyecto 1" class="portfolio-card">
    </a>
    <a href="imagen-grande-2.jpg" data-lightbox="portfolio" data-title="Proyecto 2">
        <img src="imagen-pequeña-2.jpg" alt="Proyecto 2" class="portfolio-card">
    </a>
</div>
```

---

## 5. Agregar Contador de Visitas

### Con un contador simple (localStorage)
```html
<!-- Agrega esto antes de </body> -->
<script>
    // Contador local (solo en este navegador)
    let visits = localStorage.getItem('visitCount') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visitCount', visits);
    console.log('Visitas locales: ' + visits);
</script>
```

### Con Google Analytics (Recomendado)
```html
<!-- Ya incluido en SEO_METATAGS.html -->
<!-- Mira esa sección para implementarlo -->
```

---

## 6. Agregar Whatsapp Float Button

```html
<!-- Agrega antes de </body> -->
<style>
    .whatsapp-float {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background-color: #25d366;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 999;
        text-decoration: none;
    }
    
    .whatsapp-float:hover {
        background-color: #20ba5e;
        transform: scale(1.1);
    }
    
    .whatsapp-float i {
        color: white;
        font-size: 30px;
    }
</style>

<!-- En tu HTML, antes de </body> -->
<a href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s" 
   class="whatsapp-float" 
   target="_blank"
   title="Enviar WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
```

Reemplaza 56912345678 con tu número de WhatsApp

---

## 7. Agregar Testimonios con Slider

```html
<!-- Agrega Font Awesome si no lo tienes -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- En tu HTML -->
<section class="testimonios">
    <div class="container">
        <h2>Testimonios</h2>
        
        <div class="testimonios-slider">
            <div class="testimonio-card">
                <p class="texto">"Excelente trabajo"</p>
                <p class="autor">- Juan García, CEO</p>
            </div>
            <div class="testimonio-card">
                <p class="texto">"Muy recomendados"</p>
                <p class="autor">- María López, Directora</p>
            </div>
        </div>
        
        <button class="slider-btn prev"><i class="fas fa-chevron-left"></i></button>
        <button class="slider-btn next"><i class="fas fa-chevron-right"></i></button>
    </div>
</section>

<!-- JavaScript en script.js -->
<script>
let testimonioIndex = 0;
const testimonios = document.querySelectorAll('.testimonio-card');

function showTestimonio(n) {
    if (n > testimonios.length - 1) testimonioIndex = 0;
    if (n < 0) testimonioIndex = testimonios.length - 1;
    
    testimonios.forEach(t => t.style.display = 'none');
    testimonios[testimonioIndex].style.display = 'block';
}

document.querySelector('.slider-btn.next').addEventListener('click', () => {
    testimonioIndex++;
    showTestimonio(testimonioIndex);
});

document.querySelector('.slider-btn.prev').addEventListener('click', () => {
    testimonioIndex--;
    showTestimonio(testimonioIndex);
});

showTestimonio(0);
</script>

<!-- CSS en style.css -->
<style>
    .testimonios-slider {
        max-width: 500px;
        margin: 30px auto;
        position: relative;
    }
    
    .testimonio-card {
        display: none;
        padding: 30px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .slider-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #0066cc;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 50%;
    }
    
    .slider-btn.prev { left: -50px; }
    .slider-btn.next { right: -50px; }
</style>
```

---

## 8. Agregar FAQ Accordion

```html
<!-- HTML -->
<section class="faq">
    <div class="container">
        <h2>Preguntas Frecuentes</h2>
        
        <div class="accordion">
            <div class="accordion-item">
                <button class="accordion-header">¿Cuál es el costo de un sitio web?</button>
                <div class="accordion-content">
                    <p>El costo depende de la complejidad. Desde $499.000 para sitios simples hasta $5.000.000+ para aplicaciones complejas.</p>
                </div>
            </div>
            
            <div class="accordion-item">
                <button class="accordion-header">¿Cuánto tarda hacer un sitio web?</button>
                <div class="accordion-content">
                    <p>Típicamente 2-4 semanas para un sitio estándar.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- JavaScript en script.js -->
<script>
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const isOpen = item.classList.contains('active');
        
        // Cerrar todos
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // Abrir el clickeado
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});
</script>

<!-- CSS en style.css -->
<style>
    .accordion {
        max-width: 700px;
        margin: 30px auto;
    }
    
    .accordion-item {
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
    }
    
    .accordion-header {
        width: 100%;
        padding: 15px;
        background: #f5f5f5;
        border: none;
        text-align: left;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .accordion-header:hover {
        background: #e8e8e8;
    }
    
    .accordion-header::after {
        content: '▼';
        transition: transform 0.3s;
    }
    
    .accordion-item.active .accordion-header::after {
        transform: rotate(180deg);
    }
    
    .accordion-content {
        display: none;
        padding: 15px;
    }
    
    .accordion-item.active .accordion-content {
        display: block;
    }
</style>
```

---

## 9. Agregar Contador de Visitas en Tiempo Real

```html
<!-- Usar visitas de Google Analytics -->
<!-- Ya está incluido en SEO_METATAGS.html -->
<!-- Puedes ver datos en analytics.google.com en tiempo real
```

---

## 10. Agregar Integración con CRM

### Con HubSpot
```html
<!-- Agrega al <head> -->
<script charset="utf-8" src="https://js.hsforms.net/forms/shell.js"></script>

<!-- En tu sección de contacto -->
<div id="hubspotForm"></div>

<script>
  hbspt.forms.create({
    region: "us1",
    portalId: "TU_PORTAL_ID",
    formId: "TU_FORM_ID",
    target: "#hubspotForm"
  });
</script>
```

---

## Tips para implementar

1. **Prueba localmente primero**
2. **Una cosa a la vez**
3. **Verifica en diferentes navegadores**
4. **No sobrecargues la página**
5. **Mantén la velocidad de carga**

---

¡Tu sitio puede ser mucho más que HTML básico! 🚀
