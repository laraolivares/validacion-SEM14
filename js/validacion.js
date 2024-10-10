document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const terminos = document.getElementById("terminos");
    const modalTerminosBtn = document.getElementById("modalTerminosBtn");
    const termsFeedback = document.getElementById("termsFeedback");
  
    
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

email.addEventListener('input', function () {
  this.value = this.value.trim(); // Elimina espacios
  if (this.checkValidity()) {
    this.classList.remove('is-invalid');
    this.classList.add('is-valid');
  } else {
    this.classList.remove('is-valid');
    this.classList.add('is-invalid');
    this.setCustomValidity('Por favor, ingrese un email válido');
  }
});
  
