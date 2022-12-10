let checkout = JSON.parse(localStorage.getItem("cart"));
console.log(checkout);


for (let key of checkout) {
    console.log(key.price)
    displayItem = document.querySelector(".item");
    checkout.forEach((key) => {
        displayItem.innerHTML += `<div class="card" style="width: 25rem;">
            <img src="${key.imgUrl}" class="card-img-top" alt="${key.name}" style="height: 50%; >
            <div class="card-body">
              <h5 class="card-title">${key.name}, ${key.location}</h5>
              <p class="card-text">R ${key.price} p/night , <i class='fas fa-user-friends' style='font-size:20px'></i> guests<br>
               ${key.description}</p>

            </div>
          </div>`;
    });
    price = key.price
    document.getElementById("price").value = key.price;
}
    
    
    function calculateTotal() {
        let nights = document.getElementById("nights").value;
        
        if (nights >= 1) {
            let total = eval(nights * price)
            document.getElementById("total").value = total
            
        } else {
            document.getElementById("total").value = 0;
            
        }
    }




   
    
    // function calculateTotal(){
    //     console.log(nights);
    //    if( nights >= 1 ){
    //    let total = key.price * 5;
       
    //    console.log(total);
    //    document.getElementById("total").value = total;
    //    }
    //    else{
    //     document.getElementById("total").value = 0;

    //    }


       

       
    // }
    // calculateTotal()

