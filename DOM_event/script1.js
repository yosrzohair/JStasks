const slides = document.querySelector('.slides');
        const slideContainers = document.querySelectorAll('.slide-container');
        let currentIndex = 0;

        const showSlide = (index) => {
            const slideWidth = slideContainers[0].offsetWidth;
            slides.style.transform = `translateX(-${index * slideWidth}px)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slideContainers.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slideContainers.length) % slideContainers.length;
            showSlide(currentIndex);
        };

        document.querySelector('.next').addEventListener('click', nextSlide);
        document.querySelector('.prev').addEventListener('click', prevSlide);

      //  setInterval(nextSlide, 3000);
