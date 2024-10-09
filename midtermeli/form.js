document.getElementById("orderButton").addEventListener("click", function() {
    document.getElementById("orderForm").style.display = "block";
});

    document.getElementById("submitOrder").addEventListener("click", function() {

    alert("Order successfully submitted");
    document.getElementById("orderForm").reset();
});

document.getElementById("cancelOrder").addEventListener("click", function() {
    alert("Order successfully canceled");
    document.getElementById("orderForm").reset();
    document.getElementById("orderForm").style.display = "none";
});