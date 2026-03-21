document.addEventListener('DOMContentLoaded', () => {
    /* --- Alive Background - Pink Parallax --- */
    const orbs = document.querySelectorAll('.mesh-orb');
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5) * 15;
        const yPercent = (clientY / window.innerHeight - 0.5) * 15;
        
        orbs.forEach((orb, index) => {
            const factor = (index + 1) * 0.4;
            // Base animation + mouse tracking
            orb.style.transform = `translate(${xPercent * factor}px, ${yPercent * factor}px)`;
        });
    });

    /* --- Scroll Interactions --- */
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        // Navbar Glassmorphism State
        if (window.scrollY > 40) {
            nav.style.background = 'rgba(255, 255, 255, 0.6)';
            nav.style.backdropFilter = 'blur(15px)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
            nav.style.padding = '0.7rem 0';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.borderBottom = 'none';
            nav.style.padding = '1rem 0';
        }
    });

    /* --- Simple Intersection Observer --- */
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

    document.querySelectorAll('.animate-fade-up, .card, #reviews h2').forEach(el => {
        observer.observe(el);
    });

    /* --- Mock Checkout Form --- */
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = checkoutForm.querySelector('.btn-checkout');
            const originalText = btn.textContent;
            
            btn.textContent = 'Processing...';
            btn.disabled = true;
            btn.style.opacity = '0.5';
            
            setTimeout(() => {
                btn.textContent = 'Confirmed!';
                btn.style.background = '#059669'; // Emerald
                btn.style.opacity = '1';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = 'var(--text-primary)';
                    btn.disabled = false;
                    checkoutForm.reset();
                }, 3000);
            }, 1200);
        });
    }
});
