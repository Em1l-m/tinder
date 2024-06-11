document.addEventListener('DOMContentLoaded', () => {
    const registration = document.querySelector('.registration');
    const mainContent = document.querySelector('.main-content');
    const cards = document.querySelectorAll('.card');
    const message = document.getElementById('message');
    let currentIndex = 0;

    function handleRegistration() {
        registration.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto';
    }

    function showMessage(text) {
        message.textContent = text;
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }

    function showNextCard() {
        if (currentIndex < cards.length - 1) {
            cards[currentIndex].classList.remove('active');
            currentIndex++;
            cards[currentIndex].classList.add('active');
        } else {
            showMessage('No more advertisements!');
        }
    }

    document.querySelectorAll('.registration button').forEach(button => {
        button.addEventListener('click', handleRegistration);
    });

    document.querySelectorAll('.like').forEach(button => {
        button.addEventListener('click', () => {
            showMessage('You liked this property!');
            showNextCard();
        });
    });

    document.querySelectorAll('.dislike').forEach(button => {
        button.addEventListener('click', () => {
            showMessage('You disliked this property!');
            showNextCard();
        });
    });

    // Carousel functionality
    document.querySelectorAll('.carousel-container').forEach(container => {
        const carousel = container.querySelector('.carousel');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        let carouselIndex = 0;

        prevBtn.addEventListener('click', () => {
            if (carouselIndex > 0) {
                carouselIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (carouselIndex < carousel.children.length - 1) {
                carouselIndex++;
                updateCarousel();
            }
        });

        function updateCarousel() {
            const width = container.clientWidth;
            const offset = -carouselIndex * width;
            carousel.style.transform = `translateX(${offset}px)`;
        }

        // Initial update to set the correct transform
        updateCarousel();
    });
});

