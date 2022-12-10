let accommodation = JSON.parse(localStorage.getItem("accomodation"));
let record = document.querySelector(".records");
async function display() {
  
  record.innerHTML = '';
  accommodation.forEach((item) => {
    record.innerHTML += `
      <tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.imgUrl}</td>
        <td>R,${item.price}</td>
        <td>${item.location}</td>
        
        <td><button class="btnUpdate" data-bs-toggle="modal" data-bs-target="#update" onclick="update(${item.id})">
       <i class="fa-solid fa-edit" style='font-size:20px'></i></button></td>
        <td><i class='fas fa-trash-alt' style='font-size:20px' onclick="deleteAccomodation(this)"></i></td>
        <td></td>
      </tr>
      `;
  });
}
display();
console.log(accommodation);

let modal = document.querySelector("#update");
let saveupdate = document.querySelector(".btnUpdate");

let replaceId = 0;
function update(key) {
  let updated = accommodation[key - 1];
  console.log(updated);
  document.querySelector("#updateID").value = updated.id;
  document.querySelector("#updateName").value = updated.name;
  document.querySelector("#updateimgUrl").value = updated.imgUrl;
  document.querySelector("#updatePrice").value = updated.price;
  document.querySelector("#updateLocation").value = updated.location;
  replaceId = key;
}

function replaceAccomodation(){
  let updated = accommodation[replaceId-1] ;
  updated.id = document.querySelector('#updateID').value ;
  updated.name = document.querySelector('#updateName').value;
  updated.imgUrl = document.querySelector('#updateimgUrl').value;
  price = document.querySelector('#updatePrice').value;
  updated.location = document.querySelector('#updateLocation').value;
  localStorage.setItem('accomodation',JSON.stringify(accommodation))
  display()

}

const save = document.querySelector(".btnSave");
const close = document.querySelector(".btnClose");
const sortbyPrice = document.querySelector(".btnPrice");

sortbyPrice.addEventListener("click", (e) => {
  accommodation.sort((p1, p2) =>
    p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
  );
  console.table(accommodation);
  localStorage.setItem("sortPrice", JSON.stringify(accommodation));
  display();
});

save.addEventListener("click", (e) => {
  e.preventDefault();
  let id = parseInt(document.querySelector("#accomodationID").value);
  let name = document.querySelector("#accomodationName").value;
  let imgUrl = document.querySelector("#imgUrl").value;
  let price = parseInt(document.querySelector("#accomodationPrice").value);
  let location = document.querySelector("#accomodationLocation").value;

  accommodation.push({
    id,
    name,
    imgUrl,
    price,
    location,
  });
  localStorage.setItem("accomodation", JSON.stringify(accommodation));
  display();
});

function deleteAccomodation(id) {
  var i = id.parentNode.parentNode.rowIndex;
  document.querySelector(".records").deleteRow(i);
  accommodation.pop({
    id,
    name,
    imgUrl,
    location,
    price,
  });
  localStorage.setItem("accomodation", JSON.stringify(accommodation));

  console.table(accommodation);
}

let filter = document.querySelector(".btnSearch");
let input = document.querySelector("#search")

input.addEventListener('keyup',() => {
  console.log(input);

  if(!input.value.length){
    display()
  }

  let filterbylocation = accommodation.filter((item)=>{
    return item.location.toLowerCase().includes(input.value.toLowerCase())
    })
    record.innerHTML = '';
  filterbylocation.forEach((item) => {
    record.innerHTML += `
      <tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.imgUrl}</td>
        <td>R,${item.price}</td>
        <td>${item.location}</td>
        
        <td><button class="btnUpdate" data-bs-toggle="modal" data-bs-target="#update" onclick="update(${item.id})">
       <i class="fa-solid fa-edit" style='font-size:20px'></i></button></td>
        <td><i class='fas fa-trash-alt' style='font-size:20px' onclick="deleteAccomodation(this)"></i></td>
        <td></td>
      </tr>
      `;
  });
});




    









