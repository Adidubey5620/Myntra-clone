// Search Functionality - Trigger search when user presses "Enter"
document.querySelector('.search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const searchQuery = event.target.value;
        alert("Searching for: " + searchQuery); // Replace with actual search logic
    }
});

// Toggle the visibility of the profile, wishlist, and bag sections
const profile = document.querySelector('.profile');
const wishlist = document.querySelector('.wishlist');
const bag = document.querySelector('.bag');

// Function to toggle visibility
function toggleVisibility(element) {
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Add event listeners for profile, wishlist, and bag elements
profile.addEventListener('click', () => toggleVisibility(profile));
wishlist.addEventListener('click', () => toggleVisibility(wishlist));
bag.addEventListener('click', () => toggleVisibility(bag));

// Example functionality to show message on image hover (for user interaction)
const images = document.querySelectorAll('.itemImg');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = "scale(1.1)"; // Enlarge the image on hover
        image.style.transition = "transform 0.3s"; // Smooth transition
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = "scale(1)"; // Reset image size when hover ends
    });
});

// Add event listener to the menu items to show a simple alert
const menuItems = document.querySelectorAll('nav ul li');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        alert("You clicked on " + item.textContent);
    });
});

// Responsive behavior: Toggle the visibility of the menu on smaller screens (optional)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// Select all the images with class 'itemImg'
const itemImages = document.querySelectorAll('.itemImg');

// Add a click event listener to each image
itemImages.forEach(image => {
    image.addEventListener('click', function() {
        console.log("You clicked an Icon");
    });
});