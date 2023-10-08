//Comprobacion de datos del Formulario de Entrada

//Inicializacion de var, objetos, DOM

const nickInput = document.getElementById("nick");
const sizeInput = document.getElementById("size");
const email = document.getElementById("email");
const pass = document.getElementById("nickb");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");

//Funciones de evento
function comprobarForm(event){
    //Comprobar cambios
    if(nickInput.value.match(/(?<!\S)[0-9]/))   {
        nickInput.focus(); //Me regresa el cursor en donde tengo el problema
        event.preventDefault();
        error.innerText="Usuario incorrecto";
        return false;
    } else if(sizeInput.value==0){
        sizeInput.focus();
        event.preventDefault();
        error.innerText="Debe seleccionar un Tipo de registro";
        return false;
    } else if(email.value==0){
        email.focus();
        event.preventDefault();
        error.innerText="Este campo no puede estar vacio";
        return false;
    } else if(pass.value.match(/(?<!\S)[0-9]/)){
        pass.focus();
        event.preventDefault();
        error.innerText="Contraseña incorrecta";
        return false;
    }
    return true;
}

//Carga de objetos
formEntrada.addEventListener('submit', comprobarForm);
