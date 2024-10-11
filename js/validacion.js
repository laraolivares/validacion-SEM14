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

        if (password1.value !== password2.value || !password1.checkValidity() || (password1.value === "" && password2.value === ""))  {
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
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const errorNombre = document.getElementById("faltaNombre");
    const errorApellido = document.getElementById("faltaApellido");
   
    
    const validateTerms = () => {
      if (!terminos.checked) {
        terminos.setCustomValidity("Debes aceptar los términos y condiciones.");
        termsFeedback.classList.remove("d-none");
        modalTerminosBtn.classList.add("invalid");
      } else {
        terminos.setCustomValidity("");
        termsFeedback.classList.add("d-none");
        modalTerminosBtn.classList.remove("invalid");
      }
    };

    const validateInputs = () => {
// Validar el nombre
        if (!nombre.value.trim()) {
            nombre.setCustomValidity("Este campo es obligatorio.");
            errorNombre.style.color = "red";
            errorNombre.textContent = "Campo obligatorio";
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        } else {
            nombre.setCustomValidity("");
            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
            errorNombre.textContent = "";
        }

  // Validar el apellido
        if (!apellido.value.trim()) {
            apellido.setCustomValidity("Este campo es obligatorio.");
            errorApellido.style.color = "red";
            errorApellido.textContent = "Campo obligatorio";
            apellido.classList.add("is-invalid");
            apellido.classList.remove("is-valid");
        } else {
            apellido.setCustomValidity("");
            apellido.classList.remove("is-invalid");
            apellido.classList.add("is-valid");
            errorApellido.textContent = "";
        }
    };

    nombre.addEventListener("input", validateInputs);
    apellido.addEventListener("input", validateInputs);
    
    form.addEventListener("submit", function(event) {
      validateInputs();
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
  }
});

