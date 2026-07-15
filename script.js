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

// Chatbot UI Logic
const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSendBtn = document.getElementById('chatbot-send-btn');
const chatbotMessages = document.getElementById('chatbot-messages');

if (chatbotToggleBtn && chatbotWindow) {
    // Open chat
    chatbotToggleBtn.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
        // If opened, focus input
        if (chatbotWindow.classList.contains('active')) {
            setTimeout(() => chatbotInput.focus(), 300);
        }
    });

    // Close chat
    chatbotCloseBtn.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    // Send logic
    const appendMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-message', sender);
        msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const handleSendMessage = async () => {
        const text = chatbotInput.value.trim();
        if (!text) return;

        // Append user message
        appendMessage(text, 'user');
        chatbotInput.value = '';

        // Add loading bubble
        const loadingId = 'loading-' + Date.now();
        appendMessage('<span class="ri-loader-4-line ri-spin"></span> Thinking...', 'bot');

        try {
            // Fetch real answer from the Node backend
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: text })
            });

            if (!response.ok) {
                let errorMsg = "API response error";
                try {
                    const errorData = await response.json();
                    if (errorData.error) errorMsg = errorData.error;
                } catch (e) { }
                throw new Error(errorMsg);
            }

            const data = await response.json();

            // Remove the loading bubble by finding the last appended bot message
            chatbotMessages.lastElementChild.remove();

            appendMessage(data.reply, 'bot');
        } catch (error) {
            console.error("Chat Error:", error);
            chatbotMessages.lastElementChild.remove();
            appendMessage(error.message || "Sorry, I'm having trouble connecting to the server.", 'bot');
        }
    };

    chatbotSendBtn.addEventListener('click', handleSendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
}
