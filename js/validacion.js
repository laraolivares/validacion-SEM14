//validacion contraseña
document.addEventListener('DOMContentLoaded', function() {
    const botonReg = document.getElementById('botonReg');
    const errorMsg = document.getElementById('passwordError');
    const errorMsgRep = document.getElementById('passwordErrorRep');
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    let validity = true;
    
    botonReg.addEventListener('click', function (){
        this.value = this.value.trim(); 

        if (password1.value != password2.value || !password1.checkValidity()) {
            password2.setCustomValidity("Contraseñas deben ser iguales");
            validity = false;
            errorMsg.textContent = "Debe ingresar una contraseña con al menos 6 caracteres";
            errorMsgRep.textContent = "Contraseñas deben ser iguales";
            errorMsg.style.color = "red";
            errorMsgRep.style.color = "red";
            password1.classList.remove('is-valid');
            password1.classList.add('is-invalid');
            password2.classList.remove('is-valid');
            password2.classList.add('is-invalid');

        } else {
            password2.setCustomValidity("");
            password1.classList.remove('is-invalid');
            password1.classList.add('is-valid');
            password2.classList.remove('is-invalid');
            password2.classList.add('is-valid');
        }
    });
});
//

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const terminos = document.getElementById("terminos");
    const modalTerminosBtn = document.getElementById("modalTerminosBtn");
    const termsFeedback = document.getElementById("termsFeedback");
    const terminosError = document.getElementById("terminosError");
  
    
    const validateTerms = () => {
      if (!terminos.checked) {
        terminos.setCustomValidity("Debes aceptar los términos y condiciones.");
        termsFeedback.classList.remove("d-none");
        modalTerminosBtn.classList.add("is-invalid");
        terminosError.textContent = "Debes aceptar los términos y condiciones.";
        terminosError.style.color = "red";
      } else {
        terminos.setCustomValidity("");
        termsFeedback.classList.add("d-none");
        modalTerminosBtn.classList.remove("is-invalid");
      }
    };
  
    
    form.addEventListener("submit", function(event) {
      validateTerms(); 
      if (!form.checkValidity()) {
        event.preventDefault(); 
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  
    
    terminos.addEventListener("change", validateTerms);
  });


// Validación del email
const email = document.getElementById('email');
const errorEmail = document.getElementById("emailError")

email.addEventListener('input', function () {
  this.value = this.value.trim(); // Elimina espacios
  if (this.checkValidity()) {
    this.classList.remove('is-invalid');
    this.classList.add('is-valid');
  } else {
    this.classList.remove('is-valid');
    this.classList.add('is-invalid');
    this.setCustomValidity('Por favor, ingrese un email válido');
    this.setCustomValidity('');
    errorEmail.textContent = 'Por favor, ingrese un email válido';
    errorEmail.style.color = "red";
  }
});

