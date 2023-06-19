const billAmount = document.getElementById("billAmount");
const tipPercent = document.getElementById("tip");
const submit = document.getElementById("submit")
const result = document.getElementById("result")

submit.addEventListener("click",calculateTip)

function calculateTip() {
    const bill = billAmount.value;
    const tip = tipPercent.value;
    if(bill==0){
        alert("enter the correct detail")
    }else{
        const totalValue = bill*(1+tip/100);
        result.innerText="Total Amount :"+totalValue.toFixed(2);
    }
    
}