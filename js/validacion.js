
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("#myForm");
  const botonReg = document.getElementById('botonReg');
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById('email');
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const terminos = document.getElementById("terminos");
  const modalTerminosBtn = document.getElementById("modalTerminosBtn");
  const termsFeedback = document.getElementById("termsFeedback");
  const labelTerminos = document.getElementById("labelTerminos")

  const errorMsg = {
    nombre: document.getElementById("faltaNombre"),
    apellido: document.getElementById("faltaApellido"),
    email: document.getElementById("faltaEmail"),
    password: document.getElementById("passwordError"),
    passwordRep: document.getElementById("passwordErrorRep")
  };

  form.addEventListener('submit', function(event) {
      let validity = true;

      // Validación de nombre
      if (!nombre.value.trim()) {
          nombre.classList.add("is-invalid");
          errorMsg.nombre.textContent = "Campo obligatorio.";
          validity = false;
      } else {
          nombre.classList.remove("is-invalid");
          nombre.classList.add("is-valid");
          errorMsg.nombre.textContent = "";
      }

      // Validación de apellido
      if (!apellido.value.trim()) {
          apellido.classList.add("is-invalid");
          errorMsg.apellido.textContent = "Campo obligatorio.";
          validity = false;
      } else {
          apellido.classList.remove("is-invalid");
          apellido.classList.add("is-valid");
          errorMsg.apellido.textContent = "";
      }

      // Validación de email
      if (!email.checkValidity()) {
          email.classList.add("is-invalid");
          errorMsg.email.textContent = "Debe ingresar un email válido.";
          validity = false;
      } else {
          email.classList.remove("is-invalid");
          email.classList.add("is-valid");
          errorMsg.email.textContent = "";
      }
// Validación de contraseña
// Validación de contraseña
if (password1.value.length < 6 || password1.value === "") {
    password1.classList.add("is-invalid");
    errorMsg.password.textContent = "Debe ingresar una contraseña de al menos 6 caracteres.";
    password2.classList.add("is-invalid");
    password2.classList.remove("is-valid");
    errorMsg.passwordRep.textContent = "Las contraseñas deben coincidir.";
    validity = false;
} 
// Validación de repetir contraseña
// Validación de contraseña
if (password1.value.length < 6 || password1.value === "") {
    password1.classList.add("is-invalid");
    password2.classList.add("is-invalid");
    errorMsg.password.textContent = "Debe ingresar una contraseña de al menos 6 caracteres.";
    errorMsg.passwordRep.textContent = "Las contraseñas deben coincidir.";
    validity = false;
} 
else{
    password1.classList.remove("is-invalid");
    password1.classList.add("is-valid");
    errorMsg.password.textContent = "";
}
// Validación de repetir contraseña
if (password2.value !== password1.value || !password1.checkValidity()) {
    password2.classList.add("is-invalid");
    password2.classList.remove("is-valid");
    errorMsg.passwordRep.textContent = "Las contraseñas deben coincidir.";
    validity = false;
} 
else {
    password2.classList.remove("is-invalid");
    password2.classList.add("is-valid");
    errorMsg.passwordRep.textContent = "";
}

// No se necesita modificar password2.validity aquí, ya que es manejado por la lógica de validación.



      // Validación de términos y condiciones
      if (!terminos.checked) {
          termsFeedback.classList.remove("d-none");
          modalTerminosBtn.classList.add("is-invalid");
          validity = false;
          modalTerminosBtn.classList.add("text-danger");
          labelTerminos.classList.add("text-danger");
          terminos.classList.add("btn-outline-danger");
      } else {
          termsFeedback.classList.add("d-none");
          modalTerminosBtn.classList.remove("is-invalid");
          modalTerminosBtn.classList.remove("text-danger");
          labelTerminos.classList.remove("text-danger");
          terminos.classList.remove("btn-outline-danger");
      }

      // Si alguna validación falla, prevenir envío del formulario
      if (!validity) {
          event.preventDefault();
          event.stopPropagation();
      }

      form.classList.add('was-validated');
  });
});
