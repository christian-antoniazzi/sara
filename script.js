document.addEventListener('DOMContentLoaded', () => {
    /* --- Alive Background - Pink Parallax --- */
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

    /* --- Mock Checkout Form Logic --- */
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = checkoutForm.querySelector('.btn-checkout');
            const originalText = btn.textContent;
            
            btn.textContent = 'Processing...';
            btn.disabled = true;
            btn.style.opacity = '0.5';
            
            // Simulate API Call
            setTimeout(() => {
                btn.textContent = 'Booking Confirmed!';
                btn.style.background = '#059669'; // Emerald
                btn.style.opacity = '1';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = 'var(--pink-accent)';
                    btn.disabled = false;
                    checkoutForm.reset();
                }, 4000);
            }, 1200);
        });
    }
});
