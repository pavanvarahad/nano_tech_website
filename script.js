// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add mobile menu button to the navigation
    const nav = document.querySelector('nav > div > div');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'md:hidden p-2 text-white';
    mobileMenuBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
    `;
    nav.appendChild(mobileMenuBtn);

    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-black bg-opacity-50 md:hidden hidden z-50';
    mobileMenu.innerHTML = `
        <div class="bg-black h-full w-80 transform transition-transform duration-300 -translate-x-full border-r border-gray-800">
            <div class="p-6 space-y-4">
                <a href="#products" class="block text-gray-300 hover:text-white py-2">Products</a>
                
                <!-- Solutions Dropdown -->
                <div class="relative">
                    <button class="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 group">
                        <span>Solutions</span>
                        <svg class="w-4 h-4 transition-transform group-[.active]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="hidden pl-4 space-y-2 border-l border-gray-700">
                        <a href="#network-services" class="block text-gray-400 hover:text-white py-2">Network Services</a>
                        <a href="#network-security" class="block text-gray-400 hover:text-white py-2">Network Security</a>
                        <a href="#cyber-security" class="block text-gray-400 hover:text-white py-2">Cyber Security</a>
                        <a href="#application-services" class="block text-gray-400 hover:text-white py-2">Application Services</a>
                        <a href="#full-stack" class="block text-gray-400 hover:text-white py-2">Full Stack Development</a>
                    </div>
                </div>

                <a href="#learn" class="block text-gray-300 hover:text-white py-2">Learn</a>
                <a href="#services" class="block text-gray-300 hover:text-white py-2">Services</a>
                <a href="#resources" class="block text-gray-300 hover:text-white py-2">Resources</a>
                <a href="#company" class="block text-gray-300 hover:text-white py-2">Company</a>
                <a href="/contact.html" class="block bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white px-6 py-3 rounded-md hover:opacity-90 transition-all duration-300 text-center">
                    Contact Us
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    // Toggle mobile menu
    let isMenuOpen = false;
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        const menuContent = mobileMenu.querySelector('div');
        setTimeout(() => {
            menuContent.classList.toggle('-translate-x-full');
        }, 10);
    });

    // Handle Solutions dropdown in mobile menu
    const solutionsBtn = mobileMenu.querySelector('.relative button');
    const solutionsContent = mobileMenu.querySelector('.relative div');
    solutionsBtn.addEventListener('click', () => {
        solutionsBtn.classList.toggle('active');
        solutionsContent.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            mobileMenu.querySelector('div').classList.add('-translate-x-full');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (isMenuOpen) {
                    isMenuOpen = false;
                    mobileMenu.classList.add('hidden');
                    mobileMenu.querySelector('div').classList.add('-translate-x-full');
                }
            }
        });
    });

    // Navbar scroll behavior
    let lastScroll = 0;
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('shadow-lg');
            return;
        }
        
        if (currentScroll > lastScroll) {
            // Scrolling down
            navbar.classList.add('-translate-y-full', 'transition-transform', 'duration-300');
        } else {
            // Scrolling up
            navbar.classList.remove('-translate-y-full');
            navbar.classList.add('shadow-lg');
        }
        
        lastScroll = currentScroll;
    });
}); 