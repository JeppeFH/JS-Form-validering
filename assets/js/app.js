let form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault;
});

let submitInput = document.querySelector("#submitIput");
let nameInput = document.querySelector("#nameInput");
let birthInput = document.querySelector("#birthIput");
let mailInput = document.querySelector("#mailIput");

let isValid = true;
let errorMessage = [];

if (nameInput.value.trim() === "") {
  isValid = false;
  nameInput.classList.add("Error");
  errorMessage.push("Skriv dit navn");
} else {
  nameInput.classList.remove("error");
}

if (birthInput.value.trim() === "") {
  isValid = false;
  birthInput.classList.add("Error");
  errorMessage.push("Skriv din fødselsdato");
} else {
  birthInput.classList.remove("Error");
}

if (mailInput.value.trim() === "") {
  isValid = false;
  mailInput.classList.add("Error");
  errorMessage.push("Skriv din E-mail");
} else {
  mailInput.classList.remove("Error");
}

if (isValid) {
  form.submit();
}

/*Forklaring*/

//if (nameInput.value.trim() === "")
// value = angiver værdien
// trim() = Betyder at man ikke vil kunne bruge spaceknappen til at lave mellemrum for at validere.
// === "" {isValid = false;} = Betyder at den er tom, hvilket betyder at den er false.
