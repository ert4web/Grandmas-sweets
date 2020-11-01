var cartbtn=document.querySelector("#cart-info__btn");
var cartitems=document.querySelector('.cart__items');

cartbtn.onclick=function(){
    if(cartitems.style.display==="block"){
        cartitems.style.display="none"
    }
    else{
        cartitems.style.display="block"

    }
}
// cartbtn.onclick=function(){
//     cartitems.style.display="none"
// }

