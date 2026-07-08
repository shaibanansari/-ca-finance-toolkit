function calculate(){

let amount=document.getElementById("amount").value;

let days=document.getElementById("days").value;

let interest=(amount*18*days)/(365*100);

document.getElementById("result").innerHTML=
"Interest = ₹"+interest.toFixed(2);

}
