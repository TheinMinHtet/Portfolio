// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav-links');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('ri-menu-3-line');
        icon.classList.add('ri-close-line');
    } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-3-line');
    }
});

// Close mobile nav when clicking a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        hamburger.querySelector('i').classList.remove('ri-close-line');
        hamburger.querySelector('i').classList.add('ri-menu-3-line');
    });
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

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once animated to keep the state
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with .fade-in-up class
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for sticky navbar
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to Top Button logic
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


