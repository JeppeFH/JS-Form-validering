let form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  /*tilføjer event listener til form. Lytter specifikt efter "submit" event, 
  hvilket sker, når brugeren forsøger at sende formularen enten ved at trykke 
  på en submit-knap*/
  event.preventDefault;
  /*Når brugeren prøver at sende formularen, aktiveres vores 
  event listener-funktion, som straks kalder event.preventDefault(). 
  Dette forhindrer, at formularen bliver sendt og siden genindlæses, 
  hvilket giver os mulighed for at håndtere formularens data på vores 
  egen måde. For eksempel kan vi tjekke om brugeren har udfyldt alle 
  felterne korrekt eller sende dataene til serveren uden at genindlæse 
  siden.*/
});

//variabeldeklarationer
let submitInput = document.querySelector("#submitIput");
let nameInput = document.querySelector("#nameInput");
let birthInput = document.querySelector("#birthIput");
let mailInput = document.querySelector("#mailIput");

// Initialiser variabler
let isValid = true;
let errorMessage = [];

// Valider navn
if (nameInput.value.trim() === "") {
  /*For hvert inputfelt, tjekkes om værdien (efter at have fjernet 
  eventuelle whitespace med trim()) er tom ("").*/
  isValid = false;
  nameInput.classList.add("Error");
  errorMessage.push("Skriv dit navn");
} else {
  nameInput.classList.remove("Error");
}

// Valider fødselsdato
if (birthInput.value.trim() === "") {
  isValid = false;
  birthInput.classList.add("Error");
  errorMessage.push("Skriv din fødselsdato");
} else {
  birthInput.classList.remove("Error");
}

// Valider E-mail
if (mailInput.value.trim() === "") {
  isValid = false;
  mailInput.classList.add("Error");
  errorMessage.push("Skriv din E-mail");
} else {
  mailInput.classList.remove("Error");
}

/*if statement som siger at hvis alle felter er udfyldt korrekt,
send formularen*/
if (isValid) {
  form.submit();
}

// value = angiver værdien
