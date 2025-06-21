class MobileMenu {
    constructor() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.mobileMenu = document.querySelector('.hamburger-menu');
        this.body = document.body;
        
        this.init();
    }
    
    init() {
        if (!this.navToggle || !this.mobileMenu) return;
        
        // Toggle menu on hamburger click
        this.navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
            }
        });
        
        // Close menu when window resizes to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        const isActive = this.mobileMenu.classList.contains('active');
        
        if (isActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.mobileMenu.classList.add('active');
        this.navToggle.setAttribute('aria-expanded', 'true');
        // Prevent body scroll when menu is open
        this.body.style.overflow = 'hidden';
    }
    
    closeMenu() {
        this.mobileMenu.classList.remove('active');
        this.navToggle.setAttribute('aria-expanded', 'false');
        // Restore body scroll
        this.body.style.overflow = '';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});

/*SMOOTH SCROLLING */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

