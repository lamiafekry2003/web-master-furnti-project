// let box=document.querySelector(".box div")
// let bodycard=document.querySelector(".bodycard")
// let products=document.querySelector(".empty")
// let sup=document.querySelector("sup")

// function productDrow(product =[]){
//   if(JSON.parse(localStorage.getItem("productItem")).length === 0){
//     products.innerHTML="<h1>The Card Is Empty</h1>"
//   }
//   let productInCard=JSON.parse(localStorage.getItem("productItem")) || product
//     let productList=productInCard.map((item)=>{
//         return`
//                 <tr>
//                     <td><img src="${item.imgUrl}" alt=""width="100px"></td>
//                     <td>${item.id}</td>
//                     <td>${item.price}</td>
//                     <td>${item.quantity}</td>
//                     <td>${item.price}* ${item.quantity}</td>
//                     <td>
//                     <button type="button" class="btn btn-danger" onclick="removeItemFromCard(${item.id})"><i class="fa-solid fa-minus"></i></button>
//                     </td>
//                 </tr>
                
//         `
//     })
//     bodycard.innerHTML=productList.join("")
// }
// productDrow()

// function removeItemFromCard(id){
//  let productInCard=localStorage.getItem("productItem")
//   if(productInCard){
//     let items=JSON.parse(productInCard)
//     let filterd= items.filter((item)=>item.id !== id)
//     localStorage.setItem("productItem",JSON.stringify(filterd))
//     productDrow(filterd)

//   }
// }

// // ---------------------------------------------
// let pay =document.querySelector("#pay");

// pay.addEventListener("click",payOper);

// function payOper(e){
//     e.preventDefault()
//     window.location="pay.html"
// }
// Select necessary elements
let box = document.querySelector(".box div");
let bodycard = document.querySelector(".bodycard");
let products = document.querySelector(".empty");
let sup = document.querySelector("sup");

// Function to draw the products in the cart
function productDrow(product = []) {
    let storedProducts = JSON.parse(localStorage.getItem("productItem")) || [];
    
    // If cart is empty, show message
    if (storedProducts.length === 0) {
        products.innerHTML = "<h1>The Cart Is Empty</h1>";
    } else {
        // Map over products and generate table rows
        let productList = storedProducts.map((item) => {
            return `
                <tr>
                    <td><img src="${item.imgUrl}" alt="" width="100px"></td>
                    <td>${item.id}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                        <button type="button" class="btn btn-danger" onclick="removeItemFromCard(${item.id})">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        
        // Join the HTML and inject into the table body
        bodycard.innerHTML = productList.join("");
    }
}
productDrow(); // Initialize the cart display

// Function to remove a product from the cart
function removeItemFromCard(id) {
    let storedProducts = JSON.parse(localStorage.getItem("productItem")) || [];
    let filteredProducts = storedProducts.filter((item) => item.id !== id);
    
    // Update local storage and re-render the cart
    localStorage.setItem("productItem", JSON.stringify(filteredProducts));
    productDrow(filteredProducts);
}

// Function to add a product to the cart
function addProductToCart(newProduct) {
    let storedProducts = JSON.parse(localStorage.getItem("productItem")) || [];
    
    // Check if product already exists, then increase quantity
    let existingProduct = storedProducts.find(item => item.id === newProduct.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity
    } else {
        storedProducts.push(newProduct); // Add new product
    }
    
    // Update local storage and re-render the cart
    localStorage.setItem("productItem", JSON.stringify(storedProducts));
    productDrow(storedProducts);
}

// Example of adding a product
let exampleProduct = {
    // id: 1,
    // imgUrl: "path/to/image.jpg",
    // price: 100,
    // quantity: 1
    storedProducts
};

// When the "Add to Cart" button is clicked, add the product
let addButton = document.querySelector("#add-to-cart-btn");
addButton.addEventListener("click", function() {
    addProductToCart(exampleProduct);
});

// ---------------------------------------------
let pay = document.querySelector("#pay");

pay.addEventListener("click", payOper);

function payOper(e) {
    e.preventDefault();
    window.location = "pay.html";
}
// let pay =document.querySelector("#pay");

// pay.addEventListener("click",payOper);

// function payOper(e){
//     e.preventDefault()
//     window.location="pay.html"
// }