document.addEventListener('DOMContentLoaded', function () {
    // Scroll to the top of the page when the DOM content is loaded
    window.scrollTo({
        top: 0,
        behavior: 'auto' // You can set 'smooth' for smooth scrolling
    });

    // Set "Home" button as active by default
    const homeButton = document.querySelector('a[href="#home"]');
    homeButton.setAttribute('id', 'active');

    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-but');

    // Function to check if an element is in viewport
    function isInViewport(element, offset) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset
        );
    }

    // Add click event listener to each button
    navButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'id="active"' from any element that has it
            const activeElement = document.querySelector('[id="active"]');
            if (activeElement) {
                activeElement.removeAttribute('id');
            }

            // Add 'id="active"' to the clicked button
            this.setAttribute('id', 'active');

            // Smooth scroll to the corresponding section with an offset
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjusted with an offset of 20px from the top
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener to update active button when scrolling manually
    window.addEventListener('scroll', function () {
        // Loop through each section and check if it's in viewport
        navButtons.forEach(button => {
            const targetId = button.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement && isInViewport(targetElement, 0)) { // Adjust offset to 100px for example
                // Remove 'id="active"' from any element that has it
                const activeElement = document.querySelector('[id="active"]');
                if (activeElement) {
                    activeElement.removeAttribute('id');
                }
                // Add 'id="active"' to the corresponding button
                button.setAttribute('id', 'active');
            }
        });
    });
    
});


