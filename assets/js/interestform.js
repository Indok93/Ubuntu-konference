
const submit = document.getElementById("myBtn");
// events
submit.addEventListener("click", hideForm);

//functions
function hideForm(){
    const myForm = document.querySelector("form");
    const myText = document.getElementById("hiddentext");
    myForm.classList.add("toggleFormOff");
    myText.style.display = "block";
}