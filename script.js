function openMenu() {
    document.getElementById("sidemenu").style.left = "0"
}
function closemenu() {
    document.getElementById("sidemenu").style.left = "-60%"
}
function showpopup(event){
    event.preventDefault()
    document.getElementById("popup").style.display="block"
}

function closepopup(){
    document.getElementById("popup").style.display="none"
}

var quantity=0
var price=0

function addtocart(){

    quantity++
    document.getElementById("cartproduct").textContent=""
    document.getElementById("cartqty").textContent=quantity
    document.getElementById("cartprice").textContent=price
    document.getElementById("cartTotal").textContent=quantity*price;
}