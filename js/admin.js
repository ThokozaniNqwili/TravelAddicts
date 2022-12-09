let accommodation = JSON.parse(localStorage.getItem("accomodation"))
  
async function display() {
  let record = document.querySelector(".records");
  record.innerHTML = '';
  accommodation.forEach((item) => {
    record.innerHTML += `
    <tbody>
      <tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.imgUrl}</td>
        <td>R,${item.price}</td>
        <td>${item.location}</td>
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

sortbyPrice.addEventListener("click", (e)=>{
  accommodation.sort(
    (p1, p2) =>
    (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
    console.table(accommodation);

})

save.addEventListener("click", (e) => {
  e.preventDefault();
  let id = parseInt(
    document.querySelector("#accomodationID").value
  );
  let name = document.querySelector("#accomodationName").value;
  let imgUrl = document.querySelector("#imgUrl").value;
  let price = parseInt(document.querySelector("#accomodationPrice").value
  );
  let location = document.querySelector(
    "#accomodationLocation"
  ).value;

  accommodation.push({
    id,
    name,
    imgUrl,
    price,
    location
  });
  localStorage.setItem("accomodation", JSON.stringify(accommodation));
  display()
  
});

function deleteAccomodation(id) {
  var i = id.parentNode.parentNode.rowIndex;
  document.querySelector(".records").deleteRow(i);
  accommodation.pop({
    id,
    name,
    imgUrl,
    location,
    price
    
  });
  localStorage.setItem("accomodation", JSON.stringify(accommodation))
 
  console.table(accommodation);
}


// function sort(){
//     accommodationlist.sort(
//       (p1, p2) =>
//       (p1.accomodationPrice < p2.accomodationPrice) ? 1 : (p1.accomodationPrice > p2.accomodationPrice) ? -1 : 0);
//       console.table(accommodationlist);
     
//   }
//   sort();

