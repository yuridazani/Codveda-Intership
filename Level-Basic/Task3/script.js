// Pastikan DOM siap sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    // ------ Project Modal ------
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('project-modal');
    const modalContent = projectModal?.querySelector('.bg-white');

    // Buka Modal dengan animasi
    function openModal() {
        if (!projectModal || !modalContent) return;
        projectModal.classList.remove('hidden');
        modalContent.classList.add('animate-scaleIn');
        document.body.classList.add('overflow-hidden');
    }

    // Tutup Modal dengan animasi
    function closeModal() {
        if (!projectModal || !modalContent) return;
        modalContent.classList.add('animate-scaleOut');
        setTimeout(() => {
            projectModal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            modalContent.classList.remove('animate-scaleIn', 'animate-scaleOut');
        }, 300);
    }

    // Inisialisasi project modal jika elemen ada
    if (projectCards.length && projectModal) {
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('h3')?.textContent;
                const description = card.querySelector('p')?.textContent;
                const image = card.querySelector('img')?.src;
                const techSpans = card.querySelectorAll('.flex span');
                
                if (image) document.getElementById('modal-image').src = image;
                if (title) document.getElementById('modal-title').textContent = title;
                if (description) document.getElementById('modal-description').textContent = description;
                
                const modalTech = document.getElementById('modal-tech');
                if (modalTech) {
                    modalTech.innerHTML = '';
                    techSpans.forEach(span => {
                        const newSpan = document.createElement('span');
                        newSpan.className = span.className;
                        newSpan.textContent = span.textContent;
                        modalTech.appendChild(newSpan);
                    });
                }

                openModal();
            });
        });

        // Penanganan penutupan modal
        const closeBtn = document.getElementById('close-modal');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        
        projectModal.addEventListener('click', (e) => e.target === projectModal && closeModal());
        document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());
    }

    // ------ Dark Mode ------
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'fixed bottom-4 right-4 bg-sky-600 dark:bg-sky-800 text-white p-3 rounded-full shadow-lg z-50 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400';
    darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Inisialisasi state awal
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark', isDarkMode);
    updateDarkModeButton(isDarkMode);

    function updateDarkModeButton(isDark) {
        darkModeToggle.innerHTML = isDark ? '<span aria-hidden="true">☀️</span>' : '<span aria-hidden="true">🌙</span>';
        darkModeToggle.setAttribute('aria-pressed', isDark);
        document.body.style.transition = 'background-color 0.3s ease';
    }

    darkModeToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark');
        document.body.classList.toggle('dark', isDark);
        localStorage.setItem('darkMode', isDark);
        updateDarkModeButton(isDark);
    });
    document.body.appendChild(darkModeToggle);

    // ------ Form Validation ------
    const contactForm = document.querySelector('form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');

        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim()) {
                    input.classList.remove('border-red-500');
                    const errorDiv = input.closest('div')?.querySelector('.error-message');
                    if (errorDiv) errorDiv.textContent = '';
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]');
            const email = contactForm.querySelector('input[type="email"]');
            const message = contactForm.querySelector('textarea');
            let isValid = true;

            // Reset errors
            contactForm.querySelectorAll('.error-message').forEach(error => {
                error.textContent = '';
            });
            [name, email, message].forEach(field => {
                field?.classList.remove('border-red-500');
            });

            // Name validation
            if (!name || name.value.trim() === '') {
                showError(name, 'Nama tidak boleh kosong');
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email.value)) {
                showError(email, 'Email tidak valid');
                isValid = false;
            }

            // Message validation
            if (!message || message.value.trim() === '') {
                showError(message, 'Pesan tidak boleh kosong');
                isValid = false;
            }

            if (isValid) {
                alert('Pesan terkirim! Terima kasih 😊');
                contactForm.reset();
            }
        });

        function showError(field, message) {
            if (!field) return;
            field.classList.add('border-red-500');
            const errorDiv = field.closest('div')?.querySelector('.error-message');
            if (errorDiv) {
                errorDiv.textContent = message;
                errorDiv.classList.add('text-red-500', 'text-sm', 'mt-1');
            }
        }
    }

    // ------ Smooth Scroll ------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Perhitungan offset untuk header tetap (fixed header)
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL tanpa trigger reload
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });

    // Tambahan: Animasi saat scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                const animation = el.getAttribute('data-animate');
                el.classList.add(animation);
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Jalankan sekali saat load
});