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

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mesh Gradient Parallax
    const meshOrbs = document.querySelectorAll('.mesh-orb');
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        
        meshOrbs.forEach((orb, i) => {
            const factor = (i + 1) * 0.5;
            orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });

    // Intersection Observer for Reveal Animations
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

    document.querySelectorAll('.reveal-text, .reveal-up, .fade-in, .reveal-image').forEach(el => {
        observer.observe(el);
    });

    // Initial trigger for Hero
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal-text, .hero .fade-in').forEach(el => {
            el.classList.add('active');
        });
    }, 200);
});
