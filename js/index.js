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
    
    location: "Johanesburg",
    description:
      "Situated in the heart of Sandton's business district, home to top investment banks, financial institutions, the Gautrain station and the Johannesburg Stock Exchange.",
  },
  {
    id: 4,
    name: "Aquanzi Lodge",
    imgUrl: "https://i.postimg.cc/FHLGhp3y/aquanzi.jpg",
    price: 1496,
   
    location: "Johanesburg",
    description:
      "The 4 Star Aquanzi Lodge is situated just minutes from the upmarket Fourways suburb, set in a superb indigenous garden between aloes and acacia trees and offers comfortable and luxurious bed and breakfast and self-catering accommodation ",
  },
  {
    id: 5,
    name: "Anthurium Lodge B & B",
    imgUrl: "https://i.postimg.cc/pTQwGxq6/anthurium-lodge-b-b.jpg",
    price: 1152,
    coastal: true,
    location: "Durban",
    description:
      "Our bedrooms are clean, spacious and very comfortable. We serve a buffet and cooked breakfast under our popular Gazebo, overlooking the koi pond and pool.",
  },
  {
    id: 6,
    name: "The Riverside Hotel",
    imgUrl: "https://i.postimg.cc/Qd2vMv8Y/glen-boutique-hotel.jpg",
    price: 1384,
    coastal: true,
    location: "Durban",
    description:
      "Five minutes from the city centre of Durban, with wonderful views across a magnificent green belt stretching from the Umgeni River to the Indian Ocean. The Riverside Hotel reflects resort life in the city.",
  },
];

async function display() {
  let display = document.querySelector(".accomodation");
  accomodation.forEach((item) => {
    display.innerHTML += `<div class="card" style="width: 30rem;">
        <img src="${item.imgUrl}" class="card-img-top" alt="${item.name}" style="height: 50%; >
        <div class="card-body">
          <h5 class="card-title">${item.name}, ${item.location}</h5>
          <p class="card-text">R ${item.price} p/night , <i class='fas fa-user-friends' style='font-size:20px'></i> guests<br>
           ${item.description}</p>
          <a href="/html/checkout.html" class="btnCheckout">Add to <i class="fa fa-shopping-cart" style="font-size:24px"></i></a>
        </div>
      </div>`;
  });
}
display();

let filterlocation = document.getElementById("location");
filterlocation.addEventListener("change", (e) => {
var newlocation = accomodation.filter(item => {
  return item.location == e.t
  arget.value
}
);
console.log(newlocation);
  display();
   });










