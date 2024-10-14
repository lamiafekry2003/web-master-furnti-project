
let prod=document.querySelector(".products")
let boxShow=document.querySelector(".box")
let box=document.querySelector(".box div")
let sup=document.querySelector("sup")
let cardInfo = document.querySelector(".shopping")


function productDrow(){
    let productList= product.map((item)=>{
        return`
        <div class="container">
        <div class="row">
          <div class="col-md-4 mt-5">
          <img src="${item.imgUrl}" alt=""  >
          <div class="data text-center">
            <h5 class=" mt-4 ">${item.title}</h5>
            <p class=" price ">${item.price}</p>
            <button type="button"class="btn clic" onclick="addToCard(${item.id})">Add to card</button>
            <i class="fa-regular fa-heart  heart  d-block mt-3"  onclick="addToFavurite(${item.id})"></i>
          </div>
          </div>
          <div class="col-md-4 mt-5">
          <img src="${item.imgUrl}" alt=""  >
          <div class="data text-center">
            <h5 class=" mt-4 ">${item.title}</h5>
            <p class=" price ">${item.price}</p>
            <button type="button"class="btn clic" onclick="addToCard(${item.id})">Add to card</button>
            <i class="fa-regular fa-heart  heart  d-block mt-3"  onclick="addToFavurite(${item.id})"></i>
          </div>
          </div>
          <div class="col-md-4 mt-5">
          <img src="${item.imgUrl}" alt=""  >
          <div class="data text-center">
            <h5 class=" mt-4 ">${item.title}</h5>
            <p class=" price ">${item.price}</p>
            <button type="button"class="btn clic" onclick="addToCard(${item.id})">Add to card</button>
            <i class="fa-regular fa-heart d-block heart mt-3" onclick="addToFavurite(${item.id})"></i>
          </div>
          </div>
        </div>
      </div>
        `
    })
    prod.innerHTML=productList
}
productDrow()

// check item in localStorage
let addItem=localStorage.getItem("productItem")?JSON.parse(localStorage.getItem("productItem")):[]
if(addItem){
  addItem.map((item)=>{
    box.innerHTML +=`<p>${item.title}</p> `
  })
  sup.style.display="block";
  sup.style.marginLeft="10px"
  sup.innerHTML=addItem.length
}

let allItem=[]
function addToCard(id){
 if(localStorage.getItem("firstName")){
  let cardLength=document.querySelectorAll(".box div p")
  // console.log(cardLength)
  // put sameitems inside
  let choseItem=product.find((item)=>item.id === id);
  let items=allItem.find((i)=> i.id === id);
  if(items){
    choseItem.quantity +=1
  }else{
    allItem.push(choseItem)
  }
  // remove for but qunitity inside p
  box.innerHTML=""
  allItem.forEach(item=>{
    box.innerHTML +=`<p>${item.title} ${item.quantity}</p> `
  })
  // console.log(choseItem)
  // box.innerHTML +=`<p>${choseItem.title}</p> `

  let uniqueItem = getUniqueArr(addItem ,"id")
  addItem=[...addItem,choseItem]
  localStorage.setItem("productItem",JSON.stringify(uniqueItem));
  
  sup.style.display="block";
  sup.style.marginLeft="10px"
  sup.innerHTML =cardLength.length+1
 }else{
  window.location="register.html"
 }
}
// do to see a uniqueItem in card.js
function getUniqueArr(arr,type){
  // return indexs and filter to remove false and return item
  let unique=arr.map((item)=>item[type]).map((item,i,finarr)=>finarr.indexOf(item)=== i && i).filter((item)=>arr[item])
  .map((item) => arr[item])
  return unique
}
cardInfo.addEventListener("click",showCardInfo)

function showCardInfo(){
  // boxShow.style.display="block"
  if(box.innerHTML !== ""){
     if(boxShow.style.display == "block"){
      boxShow.style.display="none";
     }else{
      boxShow.style.display="block";
     }
  }
}
// addTo favourite
let hert=document.querySelector(".heart")
let favouriteItem=localStorage.getItem("productFavourite")?JSON.parse(localStorage.getItem("productFavourite")):[]
function addToFavurite(id){
    let choseItem=product.find((item)=>item.id === id);
    let uniqueItem = getUniqueArr(favouriteItem ,"id")
    favouriteItem =[...favouriteItem,choseItem]
       hert.style.color="red"
    localStorage.setItem("productFavourite",JSON.stringify(uniqueItem));
}
// ----------------------------------------
