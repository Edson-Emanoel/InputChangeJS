const inputName = document.getElementById("nameInput");
const txtName = document.getElementById("textName");

const inputEmail = document.getElementById("emailInput");
const txtEmail = document.getElementById("textEmail");

inputName.addEventListener("input", function(e){
      e.preventDefault();

      txtName.textContent = "Nome: " + inputName.value;
});

inputEmail.addEventListener("input", function(e){
      e.preventDefault();

      txtEmail.textContent = "Email: " + inputEmail.value;
});