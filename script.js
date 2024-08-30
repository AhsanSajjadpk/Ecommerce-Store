
// ----------------- Nav

const menuBtn = document.getElementById("menu-btn")
const navLink = document.getElementById("nav-links")
const menuIcon = document.getElementById("menu-icon")

menuBtn.addEventListener('click', e => {

    if (!navLink.classList.contains('show')) {
        
        navLink.classList.add('show');
        menuIcon.className = "fa-solid fa-square-xmark"
    }
    
    else {
        
        navLink.classList.remove('show')
        menuIcon.className = "fa-solid fa-bars"
    }
})

// ----------------- endNav

