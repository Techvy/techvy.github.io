document.addEventListener('DOMContentLoaded', () => {
    const topNavLinks = document.querySelectorAll('.top_navbar_links li');

    // Define section positions and IDs
    const sections = [
        { id: 'home', start: 0, end: 600 },
        { id: 'services', start: 600, end: 2269 }, // Updated end value
        { id: 'portfolio', start: 2270, end: 3170 }, // Updated start value
        { id: 'contact', start: 3170, end: Infinity } // Infinity covers from 3170 to the bottom
    ];

    function setActiveLink() {
        let currentSectionId = '';

        // Determine which section is in view
        sections.forEach(section => {
            if (window.scrollY >= section.start && window.scrollY < section.end) {
                currentSectionId = section.id;
            }
        });

        // Update top navigation
        topNavLinks.forEach((link) => link.classList.remove('active'));
        const activeTopNav = document.querySelector(`.top_navbar_links li a[href='#${currentSectionId}']`);
        if (activeTopNav) {
            activeTopNav.parentElement.classList.add('active');
        } else {
            // Special case for 'home' when no other section is active
            if (window.scrollY < sections[1].start) {
                document.querySelector('#top-nav-home').classList.add('active');
            }
        }
    }

    // Initialize active link on page load
    setActiveLink();

    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.top_navbar_links li a');

    // Function to scroll to the section
    function scrollToSection(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});
