function calculateInterest() {

let amount = Number(document.getElementById("amount").value);

let days = Number(document.getElementById("days").value);

if(amount<=0 || days<=0){
document.getElementById("interestResult").innerHTML="Please enter valid values.";
return;
}

let interest = (amount*18*days)/(365*100);

document.getElementById("interestResult").innerHTML =
"Interest Payable = ₹" + interest.toFixed(2);

}

function calculateLateFee(){

let days = Number(document.getElementById("lateDays").value);

if(days<=0){
document.getElementById("lateFeeResult").innerHTML="Please enter valid days.";
return;
}

let fee = days*50;

if(fee>10000){
fee=10000;
}

document.getElementById("lateFeeResult").innerHTML =
"Estimated Late Fee = ₹" + fee;

}
