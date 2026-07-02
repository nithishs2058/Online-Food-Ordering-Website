function calculateBill(){

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    if(name=="" || mobile=="" || address==""){
        alert("Please fill all customer details.");
        return;
    }

    let total = 0;
    let output = "";

    output += "Customer : " + name + "\n\n";

    if(document.getElementById("burger").checked){
        let qty = Number(document.getElementById("burgerQty").value);
        let sub = qty*120;
        total += sub;
        output += "Burger x"+qty+" = ₹"+sub+"\n";
    }

    if(document.getElementById("pizza").checked){
        let qty = Number(document.getElementById("pizzaQty").value);
        let sub = qty*250;
        total += sub;
        output += "Pizza x"+qty+" = ₹"+sub+"\n";
    }

    if(document.getElementById("sandwich").checked){
        let qty = Number(document.getElementById("sandwichQty").value);
        let sub = qty*90;
        total += sub;
        output += "Sandwich x"+qty+" = ₹"+sub+"\n";
    }

    if(document.getElementById("fries").checked){
        let qty = Number(document.getElementById("friesQty").value);
        let sub = qty*80;
        total += sub;
        output += "Fries x"+qty+" = ₹"+sub+"\n";
    }

    if(document.getElementById("juice").checked){
        let qty = Number(document.getElementById("juiceQty").value);
        let sub = qty*60;
        total += sub;
        output += "Juice x"+qty+" = ₹"+sub+"\n";
    }

    output += "\n-----------------------\n";
    output += "Grand Total = ₹"+total;
    output += "\n\nThank You for Ordering!";

    document.getElementById("summary").innerText = output;

}