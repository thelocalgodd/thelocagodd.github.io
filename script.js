//alert("hello")


    function calculate() {
        const amount = Number(document.getElementById("amount").value);

        const elevy = 0.01 * amount;
        const elevy_amount = elevy + amount;

        document.getElementById("elevy").innerHTML = "E-LEVY: " + elevy;
        document.getElementById("elevy_amount").innerHTML = "TOTAL COST: " + elevy_amount;
        }
    
