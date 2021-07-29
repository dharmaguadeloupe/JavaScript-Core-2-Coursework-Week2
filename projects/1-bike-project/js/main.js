//coloured buttons
const blueButton = document.getElementById("blueBtn");
const orangeButton = document.getElementById("orangeBtn");
const greenButton = document.getElementById("greenBtn");

//variables of other button elements for changing theme colours
const jumbotron = document.querySelector(".jumbotron");
const donateButton = document.getElementsByClassName("btn btn-primary btn-lrg");
const volunteerButton = document.getElementsByClassName("btn btn-secondary btn-lrg");

//form variables
const emailInputField = document.getElementById("exampleInputEmail1");
const textInputName = document.getElementById("example-text-input");
const textArea = document.getElementById("exampleTextarea");
const submitButton = document.querySelector("button[type='submit'].btn.btn-primary");

//Part 1
function blueTheme() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateButton[0].style.backgroundColor = "#ffa500";
  volunteerButton[0].style.backgroundColor = "black";
  volunteerButton[0].style.color = "white";
}

blueButton.addEventListener("click", blueTheme);

function orangeTheme() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateButton[0].style.backgroundColor = "#5751fd";
  volunteerButton[0].style.backgroundColor = "#31b0d5";
  volunteerButton[0].style.color = "white";
}

orangeButton.addEventListener("click", orangeTheme);

function greenTheme() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateButton[0].style.backgroundColor = "black";
  volunteerButton[0].style.backgroundColor = "#8c9c08";
}

greenButton.addEventListener("click", greenTheme);

//Part 2
function formInput(event) {

  event.preventDefault();

  const emailInputValue = emailInputField.value;
  const textInputNameValue = textInputName.value;
  const textAreaValue = textArea.value;

  const isValidEmailInput = emailInputValue.length > 0 && emailInputValue.includes("@");
  const isValidNameInput = textInputNameValue.length > 0;
  const isValidTextAreaInput = textAreaValue.length > 0;

  if(emailInputValue.length === 0 || !emailInputValue.includes("@")) {
      emailInputField.style.backgroundColor = "red";
      //alert("A valid email is required to proceed");
   } else {
      emailInputField.style.backgroundColor = undefined;
   }
  
  if(textInputNameValue.length === 0) {
    textInputName.style.backgroundColor = "red";
    //alert("Name is required to proceed");
  } else {
    textInputName.style.backgroundColor = "";
  }

  if(textAreaValue.length === 0) {
    textArea.style.backgroundColor = "red";
    //alert("Please tell us a bit more about yourself");
   } else {
    textArea.style.removeProperty("background-color"); 
 
    if(
      isValidEmailInput === true &&
      isValidNameInput === true &&
      isValidTextAreaInput === true
      ) {
        emailInputField.value = "";
        textInputName.value = "";
        textArea.value = "";
        alert("Thank you for filling out the form");
    }
  }
}

submitButton.addEventListener("click", formInput);
