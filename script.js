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

    // Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
            btn.style.boxShadow = `${-x * 0.1}px ${-y * 0.1}px 20px var(--accent-glow)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
            btn.style.boxShadow = '';
        });
    });

    // Custom Cursor (Subtle trailing dot)
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Style for custom cursor (added dynamically)
    const style = document.createElement('style');
    style.innerHTML = `
        .custom-cursor {
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--accent-purple);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: width 0.3s, height 0.3s;
            mix-blend-mode: difference;
        }
        .btn-magnetic:hover ~ .custom-cursor {
            width: 40px;
            height: 40px;
            background: rgba(139, 92, 246, 0.2);
            border: 1px solid var(--accent-purple);
        }
    `;
    document.head.appendChild(style);

    // Background Blobs Mouse Follow
    const blobs = document.querySelectorAll('.blob');
    if (blobs.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 60;
            const y = (e.clientY / window.innerHeight - 0.5) * 60;
            
            blobs.forEach((blob, index) => {
                const factor = (index + 1) * 0.8;
                blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }

    // Initial triggers for above the fold
    setTimeout(() => {
        const firstReveal = document.querySelector('.reveal-text');
        if (firstReveal) firstReveal.classList.add('active');
        document.querySelectorAll('.hero .fade-in').forEach(el => el.classList.add('active'));
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) heroVisual.classList.add('active');
    }, 100);
});
