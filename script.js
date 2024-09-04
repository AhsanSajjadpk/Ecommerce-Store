
// ----------------- Nav

const menuBtn = document.getElementById("menu-btn")
const cartBtn = document.getElementById("cart-btn")
const navLink = document.getElementById("nav-links")
const cart = document.getElementById("cart")
const cartClose = document.getElementById("cart-close-icon")
const menuIcon = document.getElementById("menu-icon")
const alllink = navLink.querySelectorAll("a")
const allproductcontainer = document.getElementById("all-products")
const addToCart = document.getElementById("add-to-cart-btn")
const cartItemContainer = document.getElementById("cart-items-container")
const totalCartItem = document.getElementById("total-cart-items")
const totalBill = document.getElementById("totalPrice")
const year = document.getElementById("year")

// ================================================================================
// Year
// ================================================================================

let date = new Date();
let n = date.getFullYear();
year.textContent = n;



// ================================================================================
// Data
// ================================================================================


let allproduct = [
    {
        title: "Brown purse",
        category: "Bag",
        price: 2300,
        thumbnail: "./Assets/bag 1.jpg"
    },
    {
        title: "Camera",
        category: "Electronics",
        price: 20000,
        thumbnail: "./Assets/camera 1.jpg"
    },
    {
        title: "Lense",
        category: "Gadgets",
        price: 1200,
        thumbnail: "./Assets/lense 1.jpg"
    },
    {
        title: "Brown purse",
        category: "Bag",
        price: 2200,
        thumbnail: "./Assets/bag 2.jpg"
    },
    {
        title: "Camera",
        category: "Electronics",
        price: 23000,
        thumbnail: "./Assets/camera 2.jpg"
    },
    {
        title: "Lense",
        category: "Gadgets",
        price: 6100,
        thumbnail: "./Assets/lense 2.jpg"
    },
    {
        title: "Brown purse",
        category: "Bag",
        price: 1100,
        thumbnail: "./Assets/bag 3.jpg"
    },
    {
        title: "Camera",
        category: "Electronics",
        price: 10000,
        thumbnail: "./Assets/camera 3.jpg"
    },
    {
        title: "Lense",
        category: "Gadgets",
        price: 2300,
        thumbnail: "./Assets/lense 3.jpg"
    },
    {
        title: "Brown purse",
        category: "Bag",
        price: 2000,
        thumbnail: "./Assets/bag 4.jpg"
    },
    {
        title: "Camera",
        category: "Electronics",
        price: 13000,
        thumbnail: "./Assets/camera 4.jpg"
    },
    {
        title: "Lense",
        category: "Gadgets",
        price: 1950,
        thumbnail: "./Assets/lense 4.jpg"
    }


]

let cartProducts = [

]




// ================================================================================
// Functions
// ================================================================================


const updateAllProductDom = () => {


    if (allproduct.length == 0) {

        allproductcontainer.innerHTML = `
          
            <p>No Product Found</p>
          `
        return;
    }



    allproductcontainer.innerHTML = `
    ${allproduct.map((product, index) => {

       
        return `<div class="product-card">

              <div class="product-img">
              <img loading="lazy" src="${product.thumbnail}" alt="product-image-${index}">
              </div>

              <div class="product-details">
                  <h2>${product.title}</h2>
                  <small>Category : ${product.category}</small>
                  <div class="product-cart">
                  <p>price : ${product.price} Pkr</p>
                        
                        <button data-index = "product-${index}" class="add-to-cart-btn-cl" id="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                  
                  </div>`

    }).join(" ")
        }
            `
            // total += product.price;
            // console.log(total)
    const allProductCardsBtn = document.getElementsByClassName('add-to-cart-btn-cl')

    Array.from(allProductCardsBtn).forEach(card => {
        card.addEventListener('click', addToCartFun)
    })



}

const addToCartFun = (e) => {

    // console.log(cartProducts)

    cartProducts.push(allproduct[e.target.getAttribute("data-index").split("-")[1]])
    
    // console.log(cartProducts)
    // console.log((allproduct[e.target.getAttribute("data-index").split("-")[1]]))
    
    totalCartItem.innerHTML = cartProducts.length;
    updateAllCartDom()

}


const updateAllCartDom = () => {


    if (cartProducts.length == 0) {

        totalBill.innerHTML = "0"
        cartItemContainer.innerHTML = `
          
           <p>No Product Selected</p>
          `
        return;
    }



    cartItemContainer.innerHTML = `
    ${cartProducts.map((product, index) => {

       

        return `
        
        <div class="cart-product-card">
                <img src="${product.thumbnail}" alt="cart-product-${index}">
                <div class="cart-details">
                    <h2>${product.title}</h2>
                    <small>Category : ${product.category}</small>
                    <p>price : ${product.price} Pkr</p>
                </div>
                <button data-index="cart-product-${index}" class="cart-product-close-btn"><i class="fa-solid fa-square-xmark"></i></button>
            </div>
            
             `

    }).join(" ")
        }
            `
    const allCartProductCloseBtn = document.getElementsByClassName('cart-product-close-btn')

    console.log(allCartProductCloseBtn)
    
    Array.from(allCartProductCloseBtn).forEach(btn => {
        btn.addEventListener('click', cartProductClose)
        // console.log(btn)
        
    })

    let total = 0

    cartProducts.forEach((product)=>{
        total += product.price
    })


    totalBill.innerHTML = total;

}

let cartProductClose = (e) => {



    console.log(parseInt(e.target.getAttribute("data-index").split("-")[2]))

    cartProducts = cartProducts.filter((product, index) => index !== parseInt(e.target.getAttribute("data-index").split("-")[2]))
    
   
    totalCartItem.innerHTML = cartProducts.length;
    // totalPrice.innerHTML = total

    updateAllCartDom()

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


    link.addEventListener('click', () => {
        navLink.classList.remove('show')
        menuIcon.className = "fa-solid fa-bars"

    })

})

// ----------------- endNav




// ----------------- Cart
cartBtn.addEventListener('click', e => {

    if (!cart.classList.contains('show')) {

        cart.classList.add('show');
        // navLink.classList.remove('show')


    }

    else {

        cart.classList.remove('show')

    }
})

cartClose.addEventListener('click', () => {
    cart.classList.remove('show')
})
// ----------------- Cart END


// ----------------- Product

// ================================================================================
// INIT
// ================================================================================
updateAllProductDom()
updateAllCartDom()


