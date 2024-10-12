document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.skills__bar');
    const percentages = document.querySelectorAll('.skills__percentage');

    bars.forEach((bar, index) => {
        const percentageElem = percentages[index];
        const targetPercentage = parseInt(percentageElem.getAttribute('data-percentage'), 10);
        
        // Set CSS variable for animation
        bar.style.setProperty('--skill-width', `${targetPercentage}%`);
        
        // Apply animation to the bar
        bar.style.animation = 'fillBar 2s ease-out forwards'; // Adjust duration if needed

        // Animate percentage
        let currentPercentage = 0;
        const increment = targetPercentage / 100;
        const interval = setInterval(() => {
            if (currentPercentage >= targetPercentage) {
                clearInterval(interval);
            } else {
                currentPercentage += increment;
                percentageElem.textContent = `${Math.min(Math.round(currentPercentage), targetPercentage)}%`;
            }
        }, 20); // Adjust interval timing if needed
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Example: Replace with actual button or condition
    const serviceButton = document.querySelector('.btn-learn_more'); // Adjust selector as needed

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust this value to control when the animation triggers
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && serviceButton.classList.contains('active')) {
                entry.target.classList.add('animate');
                // Optionally, unobserve the target after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to observe
    const elementsToAnimate = document.querySelectorAll('.services-title, .services-container, .learn-more-container, .service');

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Add event listener to toggle 'active' class on button click
    serviceButton.addEventListener('click', () => {
        serviceButton.classList.toggle('active');
        // Optional: you might need additional logic here to handle button states
    });
});
