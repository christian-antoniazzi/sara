document.addEventListener('DOMContentLoaded', () => {
    /* --- Alive Background Parallax --- */
    const orbs = document.querySelectorAll('.mesh-orb');
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5) * 20;
        const yPercent = (clientY / window.innerHeight - 0.5) * 20;
        
        orbs.forEach((orb, index) => {
            const factor = (index + 1) * 0.5;
            orb.style.transform = `translate(${xPercent * factor}px, ${yPercent * factor}px)`;
        });
    });

    /* --- Scroll & UI Interactions --- */
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        // Navbar Scrolled State
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.7)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.borderBottom = 'none';
        }

        // Parallax scroll for orbs
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.top = `${(index * 20) - (window.scrollY * speed)}px`;
        });
    });

    /* --- Checkout Form Logic --- */
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = checkoutForm.querySelector('.btn-checkout');
            const originalText = btn.textContent;
            
            btn.textContent = 'Booking...';
            btn.disabled = true;
            btn.style.opacity = '0.5';
            
            // Simulate Booking Request
            setTimeout(() => {
                btn.textContent = 'Session Secured!';
                btn.style.background = '#10b981'; // Green
                btn.style.opacity = '1';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = 'var(--text-primary)';
                    btn.disabled = false;
                    checkoutForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    /* --- Intersection Observer for Animations --- */
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

    document.querySelectorAll('.animate-fade-up, .checkout-box').forEach(el => {
        observer.observe(el);
    });
});
