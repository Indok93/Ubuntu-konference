const myForm = document.getElementById("tilmeldingsform");
const submit = document.getElementById("myBtn");
const myFeedback = document.getElementById("feedback");

// events
submit.addEventListener("click", Selected);

function Selected(){
    // console.log(myFeedback.value);

}

function buildMessage(fMessage, fDay, fInterest){
    
    
    // create or get elements for message
    const myDiv = document.getElementById("feedback");
    const myMessage = document.getElementById("ThankYouMessage");
    const myDay = document.getElementById("DayChosen");
    const myInterest = document.getElementById("InterestChosen");

    // Assign elements corrosponding values
    myMessage.innerHTML = fMessage;
    myDay.innerHTML = fDay;
    myInterest.innerHTML = fInterest;
    //append card
    myForm.appendChild(myDiv);
    myDiv.appendChild(myMessage);
    myDiv.appendChild(myDay);
    myDiv.appendChild(myInterest);
}