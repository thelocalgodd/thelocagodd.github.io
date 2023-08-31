//alert("hello")

function calculate() {
    let amount = document.getElementById("amount").value;
    let elevy = 1.5 * amount;

    let elevy_amount = elevy + amount;

    document.getElementById("elevy").innerHTML = elevy;
    document.getElementById("elevy_amount").innerHTML = elevy_amount;
}

document.getElementById("calculate").addEventListener("click", calculate);

console.log("amount:", amount);
console.log("elevy:", elevy);
console.log("elevy Amount:", elevy_amount);
