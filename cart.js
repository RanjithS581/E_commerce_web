var carts = document.getElementById("carts");
carts.style.display = "none";

function cart(){
   carts.style.display = "block";
}

function cancel(){
    if(carts.style.display = "block"){
        carts.style.display = "none";
    }
}

let dataitems = document.getElementById("add");

function buy(){
    if(dataitems.children.length === 0){
        alert("There is no item in cart");
    }
    else{
        alert("Your order is placed");
        alert("Thankyou for your purchase");
    }
}

function addtocart(element){
    let name = element.parentNode.parentNode.querySelector(".items h4");
    let rate = element.parentNode.querySelector(".price h2 span ");
    let img = element.parentNode.parentNode.parentNode.querySelector(".product img");
    let addData = document.getElementById("add");

addData.innerHTML += `<div class="addingdata" style = "Display : flex">
                        <div class="left">
                            <img src="${img.src}" class="img1">
                            <h3>${name.innerHTML}</h3>
                            <div class = "l1">
                            <h3> $ <span class="price">${rate.innerHTML} </span> </h3>
                            </div>
                            <input type="number" value = "1" min = "1" onchange="updateTotal()" class="count" >
                        
                        </div>
                        
                        <div class="right">
                            <button onclick="remove(this)" style = "color : "yellow"> X </button>
                        </div>
                    </div>
                    <br> <br>`;
updateTotal();
}

function updateTotal(){
    let total = 0;
    document.querySelectorAll(".addingdata").forEach(cartitem => {
        let amount = parseFloat(cartitem.querySelector(".price").innerText);
        let qty = parseInt(cartitem.querySelector(".count").value);
        total += amount * qty;
    })

    document.querySelector(".item1 h4 span").innerText = total.toFixed(2);
}

function remove(e1){
    let del = e1.parentNode.parentNode.remove();
    updateTotal();
}