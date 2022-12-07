
let products = JSON.parse(localStorage.getItem(".records"))
  ? JSON.parse(localStorage.getItem(".accomodation"))
  : [
      {
        accomodationID: 1,
        accomodationName: "Lagoon Beach Hotel",
        imgUrl: "https://i.postimg.cc/Y060pkGY/lagoon.jpg",
        accomodationPrice: 1670,
        accomodationLocation: "Cape Town",
        
        
      },
      {
        accomodationID: 2,
        accomodationName: "The Glen Boutique Hotel",
        imgUrl: "https://i.postimg.cc/Qd2vMv8Y/glen-boutique-hotel.jpg",
        accomodationPrice: 1750,
        accomodationLocation: "Cape Town",
        
        
      },
      {
        accomodationID: 3,
        accomodationName: "The Maslow Hotel",
        imgUrl: "https://i.postimg.cc/Gh4y1Nr2/revato-480812-12100737-644980.jpg",
        accomodationPrice: 1291,
        accomodationLocation: "Johanesburg",
        
        
      },
      {
        accomodationID: 4,
        accomodationName: "Aquanzi Lodge",
        imgUrl: "https://i.postimg.cc/FHLGhp3y/aquanzi.jpg",
        accomodationPrice: 1496,
        accomodationLocation: "Cape Town",
        
        
      },
      {
        accomodationID: 5,
        accomodationName: "Anthurium Lodge B & B",
        imgUrl: "https://i.postimg.cc/pTQwGxq6/anthurium-lodge-b-b.jpg",
        accomodationPrice: 1152,
        accomodationLocation: "Durban",
        
        
      },
      {
        accomodationID:6,
        accomodationName: "The Riverside Hotel",
        imgUrl: "https://i.postimg.cc/Qd2vMv8Y/glen-boutique-hotel.jpg",
        accomodationPrice: 1384,
        accomodationLocation: "Cape Town",
       
        
      },
    ]

async function addRecords(){ 
let record = document.querySelector(".records");
  products.forEach((item) => {
    record.innerHTML += `
  <tbody>
    <tr>
      <th scope="row">${item.accomodationID}</th>
      <td>${item.accomodationName}</td>
      <td>${item.imgUrl}</td>
      <td>R,${item.accomodationPrice}</td>
      <td>${item.accomodationLocation}</td>
      <td><i class='fas fa-edit' style='font-size:20px'></i>/<i class='fas fa-trash-alt' style='font-size:24px'></i></td>
      <td></td>
    </tr>
    </tbody>`;
    




  // });
});
}
addRecords();
















// const btnAdd = document.querySelector(".btnAdd"); 
// const btnSave = document.querySelector(".btnSave");
// let accomodationArray=[];

// function showForm(){
//   btnAdd.addEventListener('click',(e)=>{
//     e.preventDefault();
  
//     const form = document.querySelector(".adminForm");
  
//     if(form.style.visibility === 'hidden') {
//       form.style.visibility = 'visible';
//     } 
//     else {
//       form.style.visibility = 'hidden'
//     };
//   });

// }
// showForm()


// async function addAccomodation(){

// btnSave.addEventListener('click',(e)=>{
//   e.preventDefault();
//  let accomodationID = document.querySelector('#accomodationID').value;
//  let accomodationName = document.querySelector('#accomodationName').value;
//  let imgUrl = document.querySelector('#imgUrl').value;
//  let accomodationPrice = (document.querySelector('#accomodationPrice').value);
//  let accomodationLocation = document.querySelector('#accomodationLocation').value;

//  // Push an object into an array 
//  accomodationArray.push( 
//   {
//       accomodationID,
//       accomodationName,
//       imgUrl,
//       accomodationPrice,
//       accomodationLocation
      
//   }
//  )
//   console.table(accomodationArray);
//     // Local Storage
//     localStorage.setItem('data', JSON.stringify(accomodationArray));

// location.reload();

// });
// }
// addAccomodation();




  