
// ----------------- Nav

const menuBtn = document.getElementById("menu-btn")
const cartBtn = document.getElementById("cart-btn")
const navLink = document.getElementById("nav-links")
const cart = document.getElementById("cart")
const cartClose = document.getElementById("cart-close-icon")
const menuIcon = document.getElementById("menu-icon")
const alllink = navLink.querySelectorAll("a")
const allproductcontainer = document.getElementById("all-products")

// ================================================================================
// Data
// ================================================================================


let allproduct =[
{
    title : "Brown purse",
    category : "Bag",
    price : 100,
    thumbnail : "./Assets/bag 1.jpg"
},
{
    title : "Camera",
    category : "Electronics",
    price : 200,
    thumbnail : "./Assets/camera 1.jpg"
},
{
    title : "Lense",
    category : "Gadgets",
    price : 200,
    thumbnail : "./Assets/lense 1.jpg"
},
{
    title : "Brown purse",
    category : "Bag",
    price : 100,
    thumbnail : "./Assets/bag 2.jpg"
},
{
    title : "Camera",
    category : "Electronics",
    price : 200,
    thumbnail : "./Assets/camera 2.jpg"
},
{
    title : "Lense",
    category : "Gadgets",
    price : 200,
    thumbnail : "./Assets/lense 2.jpg"
},
{
    title : "Brown purse",
    category : "Bag",
    price : 100,
    thumbnail : "./Assets/bag 3.jpg"
},
{
    title : "Camera",
    category : "Electronics",
    price : 200,
    thumbnail : "./Assets/camera 3.jpg"
},
{
    title : "Lense",
    category : "Gadgets",
    price : 200,
    thumbnail : "./Assets/lense 3.jpg"
},
{
    title : "Brown purse",
    category : "Bag",
    price : 100,
    thumbnail : "./Assets/bag 4.jpg"
},
{
    title : "Camera",
    category : "Electronics",
    price : 200,
    thumbnail : "./Assets/camera 4.jpg"
},
{
    title : "Lense",
    category : "Gadgets",
    price : 200,
    thumbnail : "./Assets/lense 4.jpg"
},





]




// ================================================================================
// Functions
// ================================================================================



const updateAllProductDom = ()=>{
    allproductcontainer.innerHTML = `
    ${
        allproduct.map((product)=>{

            return `<div class="product-card">

              <div class="product-img">
              <img src="${product.thumbnail}" alt="bag">
              </div>

              <div class="product-details">
                  <h2>${product.title}</h2>
                  <small>Category : ${product.category}</small>
                  <p>price : ${product.price} Pkr</p>
                  </div>
                  
                  </div>`
                  
                }).join("")
            }
            `
            
            
        }
        
        
        
        
        
        // ================================================================================
        // All Event Listener
        // ================================================================================
        
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
        
        alllink.forEach(link => {
            
            
            link.addEventListener('click', ()=>{
                navLink.classList.remove('show')
                menuIcon.className = "fa-solid fa-bars"
                
            })
            
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


// ----------------- Product

// ================================================================================
// INIT
// ================================================================================
updateAllProductDom()


