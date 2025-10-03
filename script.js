// ================================
// JAVASCRIPT PARA LANDING PAGE
// ================================

// Objeto de traducciones
const translations = {
    es: {
        // Navbar
        inicio: 'Inicio',
        servicios: 'Servicios',
        planes: 'Planes',
        contacto: 'Contacto',
        login: 'Login',
        signup: 'Sign up',
        
        // Hero
        heroTitle: 'TU TRANSPORTE BAJO<br><span class="highlight">CONTROL</span>, SIEMPRE EN<br>TIEMPO REAL',
        heroDescription: 'Una plataforma innovadora que digitaliza, controla y potencia la gestión del transporte de carga.',
        getStarted: 'Contáctanos',
        learnMore: 'Learn More',
        
        // About
        aboutTitle: 'SOBRE <span class="highlight">NOSOTROS</span>',
        aboutText1: 'En MoveSys creemos que la logística debe ser más eficiente, transparente y sencilla.',
        aboutText2: 'Somos una startup enfocada en transformar la gestión del transporte de carga a través de la tecnología.',
        aboutText3: 'Nuestra plataforma inteligente permite a las empresas monitorear sus operaciones en tiempo real, optimizar costos y garantizar la trazabilidad de cada entrega.',
        aboutText4: 'Con MoveSys, digitalizamos los procesos logísticos y los llevamos al siguiente nivel, asegurando más control, eficiencia y confianza en cada kilómetro recorrido.',
        
        // Benefits
        benefitsTitle: 'BENEFICIOS',
        benefitsSubtitle: 'Descubre cómo MoveSys transforma tu operación logística',
        benefit1Title: 'Trazabilidad en tiempo real',
        benefit1Desc: 'Monitorea tus unidades y entregas con geolocalización precisa y evidencia fotográfica en cada operación.',
        benefit2Title: 'Eficiencia operativa',
        benefit2Desc: 'Automatiza el registro de kilometraje, genera reportes de desempeño y optimiza rutas para reducir costos y tiempos.',
        benefit3Title: 'Decisiones inteligentes',
        benefit3Desc: 'Accede a indicadores y reportes claros que te permiten mejorar la planificación y garantizar la satisfacción del cliente.',
        
        // Features
        featuresTitle: 'CARACTERÍSTICAS',
        featuresSubtitle: 'Aquí te propongo tres bloques que resumen las funcionalidades clave de MoveSys:',
        feature1Title: 'Registro automatizado',
        feature1Desc: 'Sistema inteligente que captura automáticamente datos de operación, elimina trabajo manual y reduce errores.',
        feature1Item1: 'Captura automática de datos',
        feature1Item2: 'Integración con sistemas GPS',
        feature1Item3: 'Reducción del 95% en errores',
        feature2Title: 'Evidencia en cada entrega',
        feature2Desc: 'Documentación completa con fotografías, firmas digitales y geolocalización para cada entrega realizada.',
        feature2Item1: 'Fotos automáticas de entrega',
        feature2Item2: 'Firmas digitales verificadas',
        feature2Item3: 'Geolocalización precisa',
        feature3Title: 'Geolocalización precisa',
        feature3Desc: 'Seguimiento en tiempo real con tecnología GPS avanzada para máximo control y seguridad.',
        feature3Item1: 'Rastreo GPS en tiempo real',
        feature3Item2: 'Alertas automáticas',
        feature3Item3: 'Histórico de rutas',
        
        // Pricing
        pricingTitle: 'Planes y Precios',
        pricingSubtitle: 'Elige el plan perfecto para tu empresa',
        basicPlan: 'Básico',
        proPlan: 'Profesional',
        enterprisePlan: 'Empresarial',
        perMonth: '/mes',
        selectPlan: 'Seleccionar Plan',
        
        // Team
        teamTitle: 'Nuestro Equipo',
        teamSubtitle: 'Profesionales apasionados por transformar la logística',
        
        // Contact
        contactTitle: 'Contacto',
        contactSubtitle: 'Estamos aquí para ayudarte',
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        sendMessage: 'Enviar Mensaje',
        
        // Footer
        footerDescription: 'Transformando la logística con tecnología innovadora.',
        quickLinks: 'Enlaces Rápidos',
        services: 'Servicios',
        about: 'Acerca de',
        followUs: 'Síguenos',
        allRights: 'Todos los derechos reservados.',
        newsletter: 'Suscríbete a nuestro newsletter'
    },
    en: {
        // Navbar
        inicio: 'Home',
        servicios: 'Services',
        planes: 'Plans',
        contacto: 'Contact',
        login: 'Login',
        signup: 'Sign up',
        
        // Hero
        heroTitle: 'YOUR TRANSPORT UNDER<br><span class="highlight">CONTROL</span>, ALWAYS IN<br>REAL TIME',
        heroDescription: 'An innovative platform that digitalizes, controls and enhances freight transport management.',
        getStarted: 'Contact Us',
        learnMore: 'Learn More',
        
        // About
        aboutTitle: 'ABOUT <span class="highlight">US</span>',
        aboutText1: 'At MoveSys we believe that logistics should be more efficient, transparent and simple.',
        aboutText2: 'We are a startup focused on transforming freight transport management through technology.',
        aboutText3: 'Our intelligent platform allows companies to monitor their operations in real time, optimize costs and guarantee traceability of each delivery.',
        aboutText4: 'With MoveSys, we digitize logistics processes and take them to the next level, ensuring more control, efficiency and confidence in every kilometer traveled.',
        
        // Benefits
        benefitsTitle: 'BENEFITS',
        benefitsSubtitle: 'Discover how MoveSys transforms your logistics operation',
        benefit1Title: 'Real-time traceability',
        benefit1Desc: 'Monitor your units and deliveries with precise geolocation and photographic evidence in every operation.',
        benefit2Title: 'Operational efficiency',
        benefit2Desc: 'Automate mileage recording, generate performance reports and optimize routes to reduce costs and time.',
        benefit3Title: 'Smart decisions',
        benefit3Desc: 'Access clear indicators and reports that allow you to improve planning and guarantee customer satisfaction.',
        
        // Features
        featuresTitle: 'FEATURES',
        featuresSubtitle: 'Here I propose three blocks that summarize the key functionalities of MoveSys:',
        feature1Title: 'Automated registration',
        feature1Desc: 'Intelligent system that automatically captures operation data, eliminates manual work and reduces errors.',
        feature1Item1: 'Automatic data capture',
        feature1Item2: 'GPS system integration',
        feature1Item3: '95% reduction in errors',
        feature2Title: 'Evidence in every delivery',
        feature2Desc: 'Complete documentation with photographs, digital signatures and geolocation for each delivery made.',
        feature2Item1: 'Automatic delivery photos',
        feature2Item2: 'Verified digital signatures',
        feature2Item3: 'Precise geolocation',
        feature3Title: 'Precise geolocation',
        feature3Desc: 'Real-time tracking with advanced GPS technology for maximum control and security.',
        feature3Item1: 'Real-time GPS tracking',
        feature3Item2: 'Automatic alerts',
        feature3Item3: 'Route history',
        
        // Pricing
        pricingTitle: 'Plans & Pricing',
        pricingSubtitle: 'Choose the perfect plan for your company',
        basicPlan: 'Basic',
        proPlan: 'Professional',
        enterprisePlan: 'Enterprise',
        perMonth: '/month',
        selectPlan: 'Select Plan',
        
        // Team
        teamTitle: 'Our Team',
        teamSubtitle: 'Professionals passionate about transforming logistics',
        
        // Contact
        contactTitle: 'Contact',
        contactSubtitle: 'We are here to help you',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        sendMessage: 'Send Message',
        
        // Footer
        footerDescription: 'Transforming logistics with innovative technology.',
        quickLinks: 'Quick Links',
        services: 'Services',
        about: 'About',
        followUs: 'Follow Us',
        allRights: 'All rights reserved.',
        newsletter: 'Subscribe to our newsletter'
    }
};

// Funciones de traducción
let currentLanguage = 'es';

function updateLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    // Navbar
    document.querySelector('a[href="#inicio"]').textContent = t.inicio;
    document.querySelector('a[href="#servicios"]').textContent = t.servicios;
    document.querySelector('a[href="#planes"]').textContent = t.planes;
    document.querySelector('a[href="#contacto"]').textContent = t.contacto;
    document.querySelector('.btn-login').textContent = t.login;
    document.querySelector('.btn-primary').textContent = t.signup;
    
    // Hero
    document.querySelector('.hero-title').innerHTML = t.heroTitle;
    document.querySelector('.hero-description').textContent = t.heroDescription;
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) heroButtons[0].textContent = t.learnMore;
    if (heroButtons[1]) heroButtons[1].textContent = t.getStarted;
    
    // About
    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) aboutTitle.innerHTML = t.aboutTitle;
    const aboutTexts = document.querySelectorAll('.about-description p');
    if (aboutTexts[0]) aboutTexts[0].textContent = t.aboutText1;
    if (aboutTexts[1]) aboutTexts[1].textContent = t.aboutText2;
    if (aboutTexts[2]) aboutTexts[2].textContent = t.aboutText3;
    if (aboutTexts[3]) aboutTexts[3].textContent = t.aboutText4;
    
    // Benefits
    const benefitsTitle = document.querySelector('.benefits .bene-title');
    if (benefitsTitle) benefitsTitle.textContent = t.benefitsTitle;
    const benefitsSubtitle = document.querySelector('.benefits .section-subtitle');
    if (benefitsSubtitle) benefitsSubtitle.textContent = t.benefitsSubtitle;
    
    const benefitCards = document.querySelectorAll('.benefit-card');
    if (benefitCards[0]) {
        const h3 = benefitCards[0].querySelector('h3');
        const p = benefitCards[0].querySelector('p');
        if (h3) h3.textContent = t.benefit1Title;
        if (p) p.textContent = t.benefit1Desc;
    }
    if (benefitCards[1]) {
        const h3 = benefitCards[1].querySelector('h3');
        const p = benefitCards[1].querySelector('p');
        if (h3) h3.textContent = t.benefit2Title;
        if (p) p.textContent = t.benefit2Desc;
    }
    if (benefitCards[2]) {
        const h3 = benefitCards[2].querySelector('h3');
        const p = benefitCards[2].querySelector('p');
        if (h3) h3.textContent = t.benefit3Title;
        if (p) p.textContent = t.benefit3Desc;
    }
    
    // Features
    const featuresTitle = document.querySelector('.features .carac-title');
    if (featuresTitle) featuresTitle.textContent = t.featuresTitle;
    const featuresSubtitle = document.querySelector('.features .section-subtitle');
    if (featuresSubtitle) featuresSubtitle.textContent = t.featuresSubtitle;
    
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards[0]) {
        const h3 = featureCards[0].querySelector('h3');
        const p = featureCards[0].querySelector('.feature-content p');
        const items = featureCards[0].querySelectorAll('.feature-list li');
        if (h3) h3.textContent = t.feature1Title;
        if (p) p.textContent = t.feature1Desc;
        if (items[0]) items[0].textContent = t.feature1Item1;
        if (items[1]) items[1].textContent = t.feature1Item2;
        if (items[2]) items[2].textContent = t.feature1Item3;
    }
    if (featureCards[1]) {
        const h3 = featureCards[1].querySelector('h3');
        const p = featureCards[1].querySelector('.feature-content p');
        const items = featureCards[1].querySelectorAll('.feature-list li');
        if (h3) h3.textContent = t.feature2Title;
        if (p) p.textContent = t.feature2Desc;
        if (items[0]) items[0].textContent = t.feature2Item1;
        if (items[1]) items[1].textContent = t.feature2Item2;
        if (items[2]) items[2].textContent = t.feature2Item3;
    }
    if (featureCards[2]) {
        const h3 = featureCards[2].querySelector('h3');
        const p = featureCards[2].querySelector('.feature-content p');
        const items = featureCards[2].querySelectorAll('.feature-list li');
        if (h3) h3.textContent = t.feature3Title;
        if (p) p.textContent = t.feature3Desc;
        if (items[0]) items[0].textContent = t.feature3Item1;
        if (items[1]) items[1].textContent = t.feature3Item2;
        if (items[2]) items[2].textContent = t.feature3Item3;
    }
    
    // Pricing
    const pricingTitle = document.querySelector('.pricing .section-title');
    if (pricingTitle) pricingTitle.textContent = t.pricingTitle;
    const pricingSubtitle = document.querySelector('.pricing .section-subtitle');
    if (pricingSubtitle) pricingSubtitle.textContent = t.pricingSubtitle;
    
    // Team
    const teamTitle = document.querySelector('.team .section-title');
    if (teamTitle) teamTitle.textContent = t.teamTitle;
    const teamSubtitle = document.querySelector('.team .section-subtitle');
    if (teamSubtitle) teamSubtitle.textContent = t.teamSubtitle;
    
    // Contact
    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    const contactSubtitle = document.querySelector('.contact .section-subtitle');
    if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle;
    
    // Update language button
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

function toggleLanguage() {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    updateLanguage(savedLang);
    
    // Add event listener to language button
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.addEventListener('click', toggleLanguage);
    }
}

// Auto scroll for team section
function initAutoScroll() {
    const teamGrid = document.querySelector('.team-grid');
    if (!teamGrid) return;
    
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const maxScroll = teamGrid.scrollWidth - teamGrid.clientWidth;
    let animationId;
    let isPaused = false;
    
    function autoScroll() {
        if (!isPaused) {
            if (scrollPosition >= maxScroll) {
                scrollPosition = 0; // Reset to beginning
            } else {
                scrollPosition += scrollSpeed;
            }
            teamGrid.scrollLeft = scrollPosition;
        }
        animationId = requestAnimationFrame(autoScroll);
    }
    
    // Start auto scroll after a small delay
    setTimeout(() => {
        if (maxScroll > 0) {
            autoScroll();
        }
    }, 3000);
    
    // Pause auto scroll on hover
    teamGrid.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    
    teamGrid.addEventListener('mouseleave', () => {
        isPaused = false;
    });
}

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA)
    // ================================
    
    // Seleccionamos los elementos del menú
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Función para alternar el menú móvil
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
    
    // Agregamos el evento click al botón hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerramos el menú cuando se hace click en un enlace (en móvil)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // ================================
    // SCROLL SUAVE PARA ENLACES DE NAVEGACIÓN
    // ================================
    
    // Función para scroll suave personalizado
    function smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // 80px para compensar la navbar fija
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Agregamos scroll suave a todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });
    
    // ================================
    // EFECTO DE NAVBAR AL HACER SCROLL
    // ================================
    
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    // Función para manejar el scroll de la navbar
    function handleNavbarScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Agregamos una clase cuando se hace scroll hacia abajo
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
    
    // Escuchamos el evento scroll
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ================================
    // ANIMACIONES DE ENTRADA (FADE IN)
    // ================================
    
    // Función para verificar si un elemento está visible en la pantalla
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función alternativa más flexible para detectar elementos visibles
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // El elemento es visible si al menos el 20% está en pantalla
        return (rect.top <= windowHeight * 0.8) && (rect.bottom >= 0);
    }
    
    // Seleccionamos elementos que queremos animar
    const animatedElements = document.querySelectorAll('.benefit-card, .feature-card, .team-card, .section-header');
    
    // Función para activar animaciones
    function activateAnimations() {
        animatedElements.forEach(element => {
            if (isElementVisible(element) && !element.classList.contains('fade-in-up')) {
                element.classList.add('fade-in-up');
            }
        });
    }
    
    // Activamos animaciones al cargar y al hacer scroll
    window.addEventListener('scroll', activateAnimations);
    activateAnimations(); // Ejecutamos una vez al cargar
    
    // ================================
    // FORMULARIO DE CONTACTO
    // ================================
    
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitamos que se envíe el formulario normalmente
            
            // Obtenemos los valores del formulario
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validación simple
            if (!name || !email || !message) {
                showNotification('Por favor, completa todos los campos', 'error');
                return;
            }
            
            // Validación de email
            if (!isValidEmail(email)) {
                showNotification('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Aquí normalmente enviarías los datos a un servidor
            // Por ahora, solo mostramos un mensaje de éxito
            showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
            
            // Limpiamos el formulario
            this.reset();
        });
    }
    
    // ================================
    // FORMULARIO DE NEWSLETTER
    // ================================
    
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const submitBtn = newsletterForm.querySelector('button');
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Por favor, ingresa tu email', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            showNotification('¡Gracias por suscribirte! Te mantendremos informado.', 'success');
            emailInput.value = '';
        });
    }
    
    // ================================
    // FUNCIONES AUXILIARES
    // ================================
    
    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Función para mostrar notificaciones
    function showNotification(message, type = 'info') {
        // Creamos el elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Agregamos estilos inline (también se podrían agregar al CSS)
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        // Agregamos al DOM
        document.body.appendChild(notification);
        
        // Animamos la entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Funcionalidad del botón cerrar
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            removeNotification(notification);
        });
        
        // Auto-eliminar después de 5 segundos
        setTimeout(() => {
            removeNotification(notification);
        }, 5000);
    }
    
    // Función para eliminar notificación
    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    // ================================
    // BOTONES DE ACCIÓN
    // ================================
    
    // Manejamos los clicks de los botones principales
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        if (button.textContent.includes('Contáctanos') || button.textContent.includes('Sign up')) {
            button.addEventListener('click', (e) => {
                if (button.getAttribute('href') === '#contacto') {
                    e.preventDefault();
                    smoothScrollTo('#contacto');
                    showNotification('¡Cuéntanos sobre tu proyecto!', 'info');
                }
            });
        }
    });
    
    // Botón "Learn More"
    const learnMoreButtons = document.querySelectorAll('.btn-secondary');
    learnMoreButtons.forEach(button => {
        if (button.textContent.includes('Learn More')) {
            button.addEventListener('click', (e) => {
                if (button.getAttribute('href') === '#servicios') {
                    e.preventDefault();
                    smoothScrollTo('#servicios');
                }
            });
        }
    });
    
    // Botones de planes de precios
    const pricingButtons = document.querySelectorAll('.pricing-card .btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href') === '#contacto') {
                e.preventDefault();
                smoothScrollTo('#contacto');
                showNotification('¡Excelente elección! Cuéntanos más sobre tus necesidades', 'success');
            }
        });
    });
    
    // ================================
    // EFECTOS MODERNOS ADICIONALES
    // ================================
    
    // Efecto parallax mejorado para el hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }, 16));
    }
    
    // Efecto de mouse para las tarjetas
    const cards = document.querySelectorAll('.benefit-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
    
    // Efecto de cursor personalizado
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
    });
    
    // Cursor especial para elementos interactivos
    const interactiveElements = document.querySelectorAll('button, a, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.mixBlendMode = 'difference';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.mixBlendMode = 'normal';
        });
    });
    
    // Efecto de typing para el título principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Observador de intersección para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Efecto especial para títulos
                if (entry.target.classList.contains('hero-title')) {
                    const text = entry.target.textContent;
                    typeWriter(entry.target, text, 80);
                }
            }
        });
    }, observerOptions);
    
  
    
    // ================================
    // ANIMACIONES PARA CARACTERÍSTICAS MODERNAS
    // ================================
    
    // Animar barras del gráfico
    function animateChartBars() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.animation = `growBar 1.5s ease-out forwards`;
            }, index * 100);
        });
    }
    
    // Animar progreso circular
    function animateCircularProgress() {
        const progressCircle = document.querySelector('.progress-circle');
        if (progressCircle) {
            // 70% = 314 * 0.3 = 94.2 offset
            setTimeout(() => {
                progressCircle.style.strokeDashoffset = '94';
            }, 500);
        }
    }
    
    // Animar contadores de estadísticas
    function animateStatNumbers() {
        const statNumber = document.querySelector('.stat-number .number');
        if (statNumber) {
            animateCounter(statNumber, 87000, 2000);
        }
        
        const incomeAmount = document.querySelector('.income-amount');
        if (incomeAmount) {
            // Animar desde 0 hasta 234.98K
            let current = 0;
            const target = 234.98;
            const duration = 2000;
            const increment = target / (duration / 16);
            
            const updateIncome = () => {
                current += increment;
                if (current < target) {
                    incomeAmount.textContent = `$${current.toFixed(1)}K`;
                    requestAnimationFrame(updateIncome);
                } else {
                    incomeAmount.textContent = `$${target}K`;
                }
            };
            
            setTimeout(updateIncome, 800);
        }
        
        const progressNumber = document.querySelector('.progress-number');
        if (progressNumber) {
            let current = 0;
            const target = 4.9;
            const duration = 1500;
            const increment = target / (duration / 16);
            
            const updateProgress = () => {
                current += increment;
                if (current < target) {
                    progressNumber.textContent = current.toFixed(1);
                    requestAnimationFrame(updateProgress);
                } else {
                    progressNumber.textContent = target;
                }
            };
            
            setTimeout(updateProgress, 1000);
        }
        
        const progressPercentage = document.querySelector('.progress-percentage');
        if (progressPercentage) {
            let current = 0;
            const target = 70;
            const duration = 1500;
            const increment = target / (duration / 16);
            
            const updatePercentage = () => {
                current += increment;
                if (current < target) {
                    progressPercentage.textContent = `${Math.floor(current)}%`;
                    requestAnimationFrame(updatePercentage);
                } else {
                    progressPercentage.textContent = `${target}%`;
                }
            };
            
            setTimeout(updatePercentage, 1200);
        }
    }
    
    // Observador específico para sección de características
    const featuresObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('features-animated')) {
                entry.target.classList.add('features-animated');
                
                // Activar animaciones específicas si existen
                setTimeout(animateChartBars, 300);
                setTimeout(animateCircularProgress, 600);
                setTimeout(animateStatNumbers, 900);
            }
        });
    }, { threshold: 0.3 });
    
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
        featuresObserver.observe(featuresSection);
    }
    
    // ================================
    // INTERACCIONES ESPECÍFICAS PARA TARJETAS DE EQUIPO
    // ================================
    
    // Efecto de inclinación para tarjetas del equipo
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
    
    // Efectos de click para badges
    const exploreButtons = document.querySelectorAll('.explore-badge, .btn-explore');
    exploreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Efecto de ripple
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Mostrar notificación
            const memberName = button.closest('.team-card').querySelector('.member-details h3')?.textContent || 'Miembro del equipo';
            showNotification(`Explorando perfil de ${memberName}`, 'info');
        });
    });
    
    // Animación de contadores para estadísticas
    function animateTeamStats() {
        const statValues = document.querySelectorAll('.stat-value, .count-number');
        statValues.forEach(stat => {
            const text = stat.textContent;
            const numberMatch = text.match(/[\d.]+/);
            if (numberMatch) {
                const finalNumber = parseFloat(numberMatch[0]);
                const suffix = text.replace(numberMatch[0], '');
                let currentNumber = 0;
                const increment = finalNumber / 30;
                
                const updateCounter = () => {
                    currentNumber += increment;
                    if (currentNumber < finalNumber) {
                        stat.textContent = Math.floor(currentNumber) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = text; // Restaurar texto original
                    }
                };
                
                updateCounter();
            }
        });
    }
    
    // Activar animación de contadores cuando las tarjetas son visibles
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('stats-animated')) {
                entry.target.classList.add('stats-animated');
                setTimeout(animateTeamStats, 500);
            }
        });
    }, { threshold: 0.3 });
    
    const teamSection = document.querySelector('.team');
    if (teamSection) {
        teamObserver.observe(teamSection);
    }
    
    // Efectos adicionales para los timers
    const cardTimers = document.querySelectorAll('.card-timer');
    cardTimers.forEach(timer => {
        const timeElement = timer.querySelector('span');
        if (timeElement) {
            // Simular tiempo que cambia cada pocos segundos
            setInterval(() => {
                const currentTime = timeElement.textContent;
                const [hours, minutes, seconds] = currentTime.split(':').map(Number);
                let newSeconds = seconds + 1;
                let newMinutes = minutes;
                let newHours = hours;
                
                if (newSeconds >= 60) {
                    newSeconds = 0;
                    newMinutes += 1;
                    if (newMinutes >= 60) {
                        newMinutes = 0;
                        newHours += 1;
                        if (newHours >= 24) {
                            newHours = 0;
                        }
                    }
                }
                
                const formatTime = (num) => num.toString().padStart(2, '0');
                timeElement.textContent = `${formatTime(newHours)}:${formatTime(newMinutes)}:${formatTime(newSeconds)}`;
            }, 2000 + Math.random() * 3000); // Tiempo variable para cada timer
        }
    });
    
    // Contador simple para estadísticas (si las agregas)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start < target) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // ================================
    // MANEJO DE ERRORES Y PERFORMANCE
    // ================================
    
    // Throttle function para optimizar eventos de scroll
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Aplicamos throttle a eventos costosos
    window.addEventListener('scroll', throttle(handleNavbarScroll, 16));
    window.addEventListener('scroll', throttle(activateAnimations, 100));
    
    // Manejo básico de errores
    window.addEventListener('error', function(e) {
        console.error('Error en la aplicación:', e.error);
    });
    
    // ================================
    // INICIALIZACIÓN FINAL
    // ================================
    
    // Mensaje de bienvenida en consola (opcional)
    console.log('%c¡Bienvenido a SmartCoders! 🚀', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cSitio desarrollado con HTML, CSS y JavaScript vanilla', 'color: #6b7280; font-size: 12px;');
    
    // Indicamos que la aplicación se ha cargado correctamente
    document.body.classList.add('app-loaded');
    
    // Activamos las animaciones iniciales después de un pequeño delay
    setTimeout(() => {
        activateAnimations();
    }, 100);
    
    // Inicializar auto scroll para la sección de equipo
    initAutoScroll();
    
    // Inicializar sistema de traducciones
    initLanguageSystem();
});

// ================================
// FUNCIONES GLOBALES (opcional)
// ================================

// Función para cambiar tema (si quisieras agregar modo oscuro)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Función para verificar el tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Cargamos el tema al iniciar (si has implementado modo oscuro)
// loadSavedTheme();

// Sistema de idiomas mejorado
function updatePlaceholders() {
    const isSpanish = document.body.classList.contains('lang-es');
    const inputs = document.querySelectorAll('input[data-placeholder-es], textarea[data-placeholder-es]');
    
    inputs.forEach(input => {
        if (isSpanish && input.dataset.placeholderEs) {
            input.placeholder = input.dataset.placeholderEs;
        } else {
            // Restaurar placeholder original (inglés)
            if (input.type === 'text') {
                input.placeholder = 'Enter your full name';
            } else if (input.type === 'email') {
                input.placeholder = input.classList.contains('newsletter') ? 'your@email.com' : 'Enter your email';
            } else if (input.type === 'tel') {
                input.placeholder = 'Phone number';
            } else if (input.tagName === 'TEXTAREA') {
                input.placeholder = 'Tell us about your project...';
            }
        }
    });
}

// Función para cambiar idioma usando el sistema data-lang
function switchLanguage() {
    const isCurrentlySpanish = document.body.classList.contains('lang-es');
    
    if (isCurrentlySpanish) {
        // Cambiar a inglés
        document.body.classList.remove('lang-es');
        localStorage.setItem('preferredLanguage', 'en');
    } else {
        // Cambiar a español
        document.body.classList.add('lang-es');
        localStorage.setItem('preferredLanguage', 'es');
    }
    
    // Actualizar placeholders
    updatePlaceholders();
}

// Inicializar idioma desde localStorage
function initLanguageSystem() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en'; // Inglés por defecto
    
    if (savedLang === 'es') {
        document.body.classList.add('lang-es');
    } else {
        document.body.classList.remove('lang-es');
    }
    
    // Actualizar placeholders
    updatePlaceholders();
    
    // Agregar event listener al botón de idioma
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.addEventListener('click', switchLanguage);
    }
}
