document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Target elements
    const animateElements = document.querySelectorAll('.reveal-text, .reveal-up, .fade-in, .reveal-image');
    animateElements.forEach(el => observer.observe(el));

    // Dynamic delay for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        if (!item.style.transitionDelay) {
            item.style.transitionDelay = `${index * 0.1}s`;
        }
    });

    // Form Handling (Visual Only)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            btn.textContent = 'Message Sent';
            btn.style.background = '#10b981'; // Green success
            contactForm.reset();
            setTimeout(() => {
                btn.textContent = 'Send Inquiry';
                btn.style.background = '';
            }, 3000);
        });
    }

    // Parallax effect for hero image
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImg = document.querySelector('.hero-image img');
        if (heroImg && window.innerWidth > 991) {
            heroImg.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Menu Toggle Logic
    const menuToggle = document.getElementById('menu-toggle');
    const overlayMenu = document.getElementById('overlay-menu');
    const closeMenu = document.getElementById('close-menu');
    const navLinksOverlay = document.querySelectorAll('.nav-links-overlay a');

    if (menuToggle && overlayMenu) {
        menuToggle.addEventListener('click', () => {
            overlayMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const hideMenu = () => {
            overlayMenu.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeMenu.addEventListener('click', hideMenu);
        navLinksOverlay.forEach(link => link.addEventListener('click', hideMenu));
    }

    // Scroll to section for indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Initial triggers for above the fold
    setTimeout(() => {
        const grandTitle = document.querySelector('.name-wrapper');
        if (grandTitle) grandTitle.classList.add('active');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.classList.add('active');
        const scrollInd = document.querySelector('.scroll-indicator');
        if (scrollInd) scrollInd.classList.add('active');
    }, 100);
});
