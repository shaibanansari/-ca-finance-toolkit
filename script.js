function calculateInterest() {

    let amount = parseFloat(document.getElementById("amount").value);
    let days = parseFloat(document.getElementById("days").value);

    if (isNaN(amount) || isNaN(days)) {
        document.getElementById("interestResult").innerHTML = "Please enter valid values.";
        return;
    }

    let interest = amount * 0.18 * (days / 365);

    document.getElementById("interestResult").innerHTML =
        "Interest Payable: ₹" + interest.toFixed(2);

}

function calculateLateFee() {

    let days = parseFloat(document.getElementById("lateDays").value);

    if (isNaN(days)) {
        document.getElementById("lateFeeResult").innerHTML = "Please enter valid days.";
        return;
    }

    let fee = days * 50;

    document.getElementById("lateFeeResult").innerHTML =
        "Late Fee: ₹" + fee;

}

function calculateEMI() {

    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        document.getElementById("emiResult").innerHTML = "Please enter valid values.";
        return;
    }

    let monthlyRate = rate / 12 / 100;
    let months = years * 12;

    let emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById("emiResult").innerHTML =
        "Monthly EMI: ₹" + emi.toFixed(2);

}
