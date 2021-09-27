var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var checkButton = document.querySelector("#check");
var errorMessage = document.querySelector("#errorMessage");
const noOfNote = document.querySelectorAll(".notes");
var notesWeKnow = [2000,500,100,20,10,5,1];


checkButton.addEventListener("click" , function(billandcashamount){
    hiddenMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value
            calculateChange(amountToBeReturned);
        }else{
            showMessage("The amount should be atleast equal to the bill amount");   
        }
    }else{
        showMessage("Invalid Amount");
    }

})

function showMessage(message){
    errorMessage.style.display = "block";
        errorMessage.innerText = message ;
}
function hiddenMessage(){
    errorMessage.style.display = "none";
}
function calculateChange(amountToBeReturned){
    for(var i = 0; i < notesWeKnow.length;i++){
        var note = Math.trunc(amountToBeReturned/notesWeKnow[i]);
        amountToBeReturned %= notesWeKnow[i];
        noOfNote[i].innerText = note;
    }
}