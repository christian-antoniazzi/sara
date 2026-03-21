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

    // Theme Switcher Logic
    const themeBtn = document.getElementById('theme-btn');
    const themes = ['light', 'dark', 'mono'];
    let currentThemeIndex = localStorage.getItem('theme-index') || 0;

    const applyTheme = (index) => {
        const theme = themes[index];
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme-index', index);
        
        // Update theme dot color or icon if needed
        const themeDot = document.querySelector('.theme-dot');
        if (themeDot) {
            themeDot.style.background = 'var(--bg-primary)';
        }
    };

    // Apply saved theme on load
    applyTheme(currentThemeIndex);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            currentThemeIndex = (parseInt(currentThemeIndex) + 1) % themes.length;
            applyTheme(currentThemeIndex);
        });
    }

    // Scroll Header Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up, .reveal-image, .fade-in').forEach(el => {
        observer.observe(el);
    });
});
