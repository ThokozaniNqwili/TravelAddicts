let checkoutItems = []
let accomodation = JSON.parse(localStorage.getItem("accomodation"))
  ? JSON.parse(localStorage.getItem("accomodation"))
  : [
  {
    id: 1,
    name: "Lagoon Beach Hotel",
    imgUrl: "https://i.postimg.cc/Y060pkGY/lagoon.jpg",
    price: 1670, 
    location: "Cape Town",
    description:
      "Overlooking Table Mountain and Robben Island, Lagoon Beach Hotel offers direct beach access in Cape Town's Milnerton suburb.Equipped with a satellite TV, mini-bar, tea-and-coffee-making facilities and private bathrooms",
  },
  {
    id: 2,
    name: "The Glen Boutique Hotel",
    imgUrl: "https://i.postimg.cc/Qd2vMv8Y/glen-boutique-hotel.jpg",
    price: 1750,
   
    location: "Cape Town",
    description:
      "The Glen is close to everything that the Mother City offers, including beaches, dining, night-life.Rooms are comfortable with en-suite bathrooms, TV, WiFi.",
  },
  {
    id: 3,
    name: "The Maslow Hotel",
    imgUrl: "https://i.postimg.cc/Gh4y1Nr2/revato-480812-12100737-644980.jpg",
    price: 1291,
    
    location: "Johannesburg",
    description:
      "Situated in the heart of Sandton's business district, home to top investment banks, financial institutions, the Gautrain station and the Johannesburg Stock Exchange.",
  },
  {
    id: 4,
    name: "Aquanzi Lodge",
    imgUrl: "https://i.postimg.cc/FHLGhp3y/aquanzi.jpg",
    price: 1496,
   
    location: "Johannesburg",
    description:
      "The 4 Star Aquanzi Lodge is situated just minutes from the upmarket Fourways suburb, set in a superb indigenous garden between aloes and acacia trees and offers comfortable and luxurious bed and breakfast and self-catering accommodation ",
  },
  {
    id: 5,
    name: "Anthurium Lodge B & B",
    imgUrl: "https://i.postimg.cc/pTQwGxq6/anthurium-lodge-b-b.jpg",
    price: 1152,
    location: "Durban",
    description:
      "Our bedrooms are clean, spacious and very comfortable. We serve a buffet and cooked breakfast under our popular Gazebo, overlooking the koi pond and pool.",
  },
  {
    id: 6,
    name: "The Riverside Hotel",
    imgUrl: "https://i.postimg.cc/Qd2vMv8Y/glen-boutique-hotel.jpg",
    price: 1384,
    location: "Durban",
    description:
      "Five minutes from the city centre of Durban, with wonderful views across a magnificent green belt stretching from the Umgeni River to the Indian Ocean. The Riverside Hotel reflects resort life in the city.",
  },
];

localStorage.setItem("accomodation", JSON.stringify(accomodation));
localStorage.setItem("cart",JSON.stringify(checkoutItems))
// let cartItems = JSON.parse(localStorage.getItem("cart"))


// display Products
async function displayAccomodation() {
  let display = document.querySelector(".accomodation");
  accomodation.forEach((item) => {
    display.innerHTML += `<div class="card" style="width: 30rem;">
        <img src="${item.imgUrl}" class="card-img-top" alt="${item.name}" style="height: 50%; >
        <div class="card-body">
          <h5 class="card-title">${item.name}, ${item.location}</h5>
          <p class="card-text">R ${item.price} p/night , <i class='fas fa-user-friends' style='font-size:20px'></i> guests<br>
           ${item.description}</p>
           <a href="/html/checkout.html" id="${item.id}" onclick="addItems(${item.id})" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
     
  });
  

}
displayAccomodation();



function addItems(id){
  alert(id);
  checkoutItems.push(accomodation[id])
  console.log(checkoutItems);
  
  localStorage.setItem('cart',JSON.stringify(checkoutItems))
  document.location.reload()


    
}


//////====-----Checkout-----======///////


// let checkout = document.querySelector('.btnCheckout');
// let checkoutArray = [];

// let item = [];

// for (const key in item) {
//  console.log(item[key]);
    
    
//   }


// localStorage.setItem("checkout", JSON.stringify(item))


// let checkout= JSON.parse(localStorage.getItem("checkout"))

// function addCheckout(){
//   console.table(checkout)
// }










// for (const i in accomodation) {
//   console.log(accomodation[item]);


//   function addcheckout(){
//     console.log(item);
    
//   }



// checkout.addEventListener('click',(e)=>{
  
//   console.log(accomodation[item]);
//   let newItem = document.querySelector("#item");
//   document.querySelector("#item").value = accomodation[item];
  
//   // accomodation[item].forEach((i) => {
//   //   newItem.value += `<td>${item.name}</td>`

//   // });

 
// });
 









// 
  
// checkoutArray.push(accomodation[item])
  
//  })
//  console.log(checkoutArray);
// console.log(accomodation[item]);
//  console.log(checkoutArray);





//  let checkout = accomodation[i]; let checkout = document.querySelector('.btnCheckout');
// console.log(checkout)
// // let checkout = JSON.parse(localStorage.getItem('checkout'))? 
// // JSON.parse(localStorage.getItem('checkout')): []
// let item = document.querySelector('#item');

// checkout.addEventListener('click',(e)=>{

//   console.log(accomodation)

// });







// function CheckOut(){
//   this.id = id;
//   this.name = name;
//   this.price= price;
//   this.location= location;

  
// }
// console.log();














