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
