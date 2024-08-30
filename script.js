
// ----------------- Nav

const menuBtn = document.getElementById("menu-btn")
const cartBtn = document.getElementById("cart-btn")
const navLink = document.getElementById("nav-links")
const cart = document.getElementById("cart")
const cartClose = document.getElementById("cart-close-icon")
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




// ----------------- Cart
cartBtn.addEventListener('click', e => {
    
    if (!cart.classList.contains('show')) {
        
        cart.classList.add('show');
        
    }
    
    else {
        
        cart.classList.remove('show')
        
    }
})

cartClose.addEventListener('click',()=>{
    cart.classList.remove('show')
})
    // ----------------- Cart END