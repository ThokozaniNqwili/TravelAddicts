let accommodationlist = JSON.parse(localStorage.getItem("accomodationlist"))
  ? JSON.parse(localStorage.getItem("accomodationlist"))
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
        imgUrl:
          "https://i.postimg.cc/Gh4y1Nr2/revato-480812-12100737-644980.jpg",
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
        accomodationID: 6,
        accomodationName: "The Riverside Hotel",
        imgUrl: "https://i.postimg.cc/Qd2vMv8Y/glen-boutique-hotel.jpg",
        accomodationPrice: 1384,
        accomodationLocation: "Cape Town",
      },
    ];
function display() {
  let record = document.querySelector(".records");
  accommodationlist.forEach((item) => {
    record.innerHTML += `
    <tbody>
      <tr>
        <th scope="row">${item.accomodationID}</th>
        <td>${item.accomodationName}</td>
        <td>${item.imgUrl}</td>
        <td>R,${item.accomodationPrice}</td>
        <td>${item.accomodationLocation}</td>
        <td><i class='fas fa-edit' style='font-size:20px'></i></td>
        <td><i class='fas fa-trash-alt' style='font-size:20px' onclick="deleteAccomodation(this)"></i></td>
        <td></td>
      </tr>
      </tbody>`;
  });
  
  
}
display();

const save = document.querySelector(".btnSave");
const close = document.querySelector(".btnClose");
const sortbyPrice = document.querySelector(".btnPrice");

save.addEventListener("click", (e) => {
  e.preventDefault();
  let accomodationID = parseInt(
    document.querySelector("#accomodationID").value
  );
  let accomodationName = document.querySelector("#accomodationName").value;
  let imgUrl = document.querySelector("#imgUrl").value;
  let accomodationPrice = parseInt(
    document.querySelector("#accomodationPrice").value
  );
  let accomodationLocation = document.querySelector(
    "#accomodationLocation"
  ).value;

  accommodationlist.push({
    accomodationID,
    accomodationName,
    imgUrl,
    accomodationPrice,
    accomodationLocation,
  });
  localStorage.setItem("accomodationlist", JSON.stringify(accommodationlist));
  console.table(accommodationlist);
  display();
});

function deleteAccomodation(id) {
  var i = id.parentNode.parentNode.rowIndex;
  document.querySelector(".records").deleteRow(i);
  accommodationlist.pop({
    accomodationID,
    accomodationName,
    imgUrl,
    accomodationPrice,
    accomodationLocation,
  });
  localStorage.setItem("accomodationlist", JSON.stringify(accommodationlist));
  console.table(accommodationlist);
}


  function sort(){
    accommodationlist.sort(
      (p1, p2) =>
      (p1.accomodationPrice < p2.accomodationPrice) ? 1 : (p1.accomodationPrice > p2.accomodationPrice) ? -1 : 0);
      console.table(accommodationlist);
      
  }
