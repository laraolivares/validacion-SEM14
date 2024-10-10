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

