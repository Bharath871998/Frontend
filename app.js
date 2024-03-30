// Select the hamburger icon and the navigation menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Event listener for the hamburger icon click
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger icon
    hamburger.classList.toggle("active");
    // Toggle the 'active' class on the navigation menu
    navMenu.classList.toggle("active");
})

// Event listeners for the navigation links
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () =>{
    // Remove the 'active' class from the hamburger icon
    hamburger.classList.remove('active');
    // Remove the 'active' class from the navigation menu
    navMenu.classList.remove('active');
}))
