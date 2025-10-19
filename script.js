        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Testimonials Carousel
        const track = document.querySelector('.testimonials-track');
        const dots = document.querySelectorAll('.carousel-dot');
        let currentIndex = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateCarousel();
            });
        });

        // Auto-advance carousel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            updateCarousel();
        }, 6000);

        // Create cosmic background elements
        function createCosmicBackground(containerId) {
            const container = document.getElementById(containerId);
            
            // Create stars
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                const size = Math.random() * 3 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                const duration = Math.random() * 5 + 3;
                const delay = Math.random() * 5;
                star.style.animationDuration = `${duration}s`;
                star.style.animationDelay = `${delay}s`;
                
                container.appendChild(star);
            }
            
            // Create nebulae
            for (let i = 0; i < 4; i++) {
                const nebula = document.createElement('div');
                nebula.classList.add('nebula');
                
                const width = Math.random() * 400 + 200;
                const height = Math.random() * 400 + 200;
                nebula.style.width = `${width}px`;
                nebula.style.height = `${height}px`;
                
                nebula.style.left = `${Math.random() * 80}%`;
                nebula.style.top = `${Math.random() * 80}%`;
                
                const duration = Math.random() * 20 + 20;
                const delay = Math.random() * 10;
                nebula.style.animationDuration = `${duration}s`;
                nebula.style.animationDelay = `${delay}s`;
                
                container.appendChild(nebula);
            }
            
            // Create planets
            for (let i = 0; i < 2; i++) {
                const planet = document.createElement('div');
                planet.classList.add('planet');
                
                const size = Math.random() * 100 + 50;
                planet.style.width = `${size}px`;
                planet.style.height = `${size}px`;
                
                planet.style.left = `${Math.random() * 70 + 15}%`;
                planet.style.top = `${Math.random() * 70 + 15}%`;
                
                const duration = Math.random() * 40 + 40;
                planet.style.animationDuration = `${duration}s`;
                
                container.appendChild(planet);
            }
        }

        // Initialize cosmic backgrounds for each section
        createCosmicBackground('cosmic-bg');
        createCosmicBackground('product-bg');
        createCosmicBackground('bundles-bg');
        createCosmicBackground('testimonials-bg');
        createCosmicBackground('cta-bg');

        // Product image gallery functionality
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-product-image');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update main image
                mainImage.src = this.getAttribute('data-image');
                
                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Quantity selector functionality
        const decreaseBtn = document.getElementById('decrease-qty');
        const increaseBtn = document.getElementById('increase-qty');
        const quantityValue = document.getElementById('quantity-value');
        let quantity = 1;

        decreaseBtn.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        });

        increaseBtn.addEventListener('click', function() {
            quantity++;
            quantityValue.textContent = quantity;
        });

        // Product specs tabs functionality
        const specsTabs = document.querySelectorAll('.specs-tab');
        const specsContent = document.getElementById('specs-content');

        specsTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Update active tab
                specsTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Update content based on the tab
                const tabType = this.getAttribute('data-tab');
                if (tabType === 'usage') {
                    specsContent.innerHTML = `
                        <h4>Recommended Usage</h4>
                        <p>For optimal results, take one serving each morning as part of your wellness routine. Consistency is key to experiencing the full benefits of our advanced formulation.</p>
                        
                        <h4>Wellness Routine</h4>
                        <ul>
                            <li>Take with 8oz of water upon waking</li>
                            <li>Follow with 15 minutes of meditation or light stretching</li>
                            <li>Maintain consistent usage for 30+ days for full effect</li>
                            <li>Store in a cool, dark place away from direct sunlight</li>
                        </ul>
                        
                        <h4>Important Notes</h4>
                        <p>Consult with your healthcare provider before starting any new wellness regimen, especially if you have pre-existing medical conditions or are taking medications.</p>
                    `;
                } else if (tabType === 'ingredients') {
                    specsContent.innerHTML = `
                        <h4>Key Ingredient Matrix</h4>
                        <p>Our Ultimate Wellness Bundle contains a proprietary blend of scientifically-formulated peptides selected for their specific biological functions and wellness benefits.</p>
                        
                        <div class="ingredient-grid">
                            <div class="ingredient-card">
                                <div class="ingredient-name">Regenerative Peptide Complex</div>
                                <div class="ingredient-desc">Supports cellular repair and regeneration processes for overall tissue health and vitality.</div>
                            </div>
                            <div class="ingredient-card">
                                <div class="ingredient-name">Recovery Acceleration Matrix</div>
                                <div class="ingredient-desc">Enhances physical recovery and reduces fatigue through targeted cellular support.</div>
                            </div>
                            <div class="ingredient-card">
                                <div class="ingredient-name">Metabolic Optimization Blend</div>
                                <div class="ingredient-desc">Promotes efficient energy utilization and supports healthy metabolic function.</div>
                            </div>
                            <div class="ingredient-card">
                                <div class="ingredient-name">Vitality Support Extract</div>
                                <div class="ingredient-desc">Supports overall wellness and balanced energy levels throughout the day.</div>
                            </div>
                        </div>
                        
                        <h4>Purity & Quality Assurance</h4>
                        <p>All ingredients are laboratory tested for purity and potency, ensuring you receive the highest quality formulation possible. Free from artificial additives and preservatives.</p>
                    `;
                } else {
                    specsContent.innerHTML = `
                        <h4>Advanced Cellular Formulation</h4>
                        <p>The Ultimate Wellness Bundle features our proprietary blend of peptides designed to work in harmony with your body's natural processes. Each component is carefully selected for its specific role in promoting overall wellness.</p>
                        
                        <h4>Key Benefits</h4>
                        <ul>
                            <li>Supports cellular regeneration and repair</li>
                            <li>Enhances recovery and reduces fatigue</li>
                            <li>Promotes balanced energy levels</li>
                            <li>Supports overall wellness and vitality</li>
                            <li>Optimizes metabolic function</li>
                        </ul>
                        
                        <h4>Scientifically Backed</h4>
                        <p>Our formulation is based on cutting-edge research, with each peptide selected for its specific biological function that aligns with different aspects of wellness optimization.</p>
                        
                        <h4>Quality Assurance</h4>
                        <p>Manufactured in FDA-registered facilities following strict quality control protocols. Third-party tested for purity and potency.</p>
                    `;
                }
            });
        });

        // Add scroll animation for elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.bundle-card, .testimonial-card, .product-orb').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Floating product card effect
        const productOrb = document.querySelector('.product-orb');
        if (productOrb) {
            document.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                productOrb.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
        }
