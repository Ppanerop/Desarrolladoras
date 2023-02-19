const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    nombre: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
    email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, 
    clave: /^.{8}$/, 
    confirmeclave: /^.{8}$/, 
}

const campos = {
    nombre: false,
    email: false,
    clave: false, 
    confirmeclave: false,
}

const formValidation = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)){
                document.getElementById('group_nombre').classList.remove('form_group-incorrecto');
                document.getElementById('group_nombre').classList.add('form_group-correcto');
                document.querySelector('#group_nombre .form_input-error2').classList.remove('form_input-error2-activo');
                campos['nombre'] = true;
            } else {
                document.getElementById('group_nombre').classList.add('form_group-incorrecto');
                document.getElementById('group_nombre').classList.remove('form_group-correcto');
                document.querySelector('#group_nombre .form_input-error2').classList.add('form_input-error2-activo');
                campos['nombre'] = false;    
            }
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById('group_email').classList.remove('form_group-incorrecto');
                document.getElementById('group_email').classList.add('form_group-correcto');
                document.querySelector('#group_email .form_input-error2').classList.remove('form_input-error2-activo');
                campos['email'] = true;
            } else {
                document.getElementById('group_email').classList.add('form_group-incorrecto');
                document.getElementById('group_email').classList.remove('form_group-correcto');
                document.querySelector('#group_email .form_input-error2').classList.add('form_input-error2-activo');
                campos['email'] = false;
            }
        break;
        case "clave":
            if(expresiones.clave.test(e.target.value)){
                document.getElementById('group_clave').classList.remove('form_group-incorrecto');
                document.getElementById('group_clave').classList.add('form_group-correcto');
                document.querySelector('#group_clave .form_input-error2').classList.remove('form_input-error2-activo');
                campos['clave'] = true;
            } else {
                document.getElementById('group_clave').classList.add('form_group-incorrecto');
                document.getElementById('group_clave').classList.remove('form_group-correcto');
                document.querySelector('#group_clave .form_input-error2').classList.add('form_input-error2-activo');
                campos['clave'] = false;
            }
            confirmeclavevalidation();
        break;
        case "confirmeclave":
            confirmeclavevalidation();
        break;
    }
}    

const confirmeclavevalidation = () => {
    const inputClave = document.getElementById('clave');
    const inputClave2 = document.getElementById('confirmeclave');

    if(inputClave.value !==inputClave2.value){
        document.getElementById('group_confirmeclave').classList.add('form_group-incorrecto');
        document.getElementById('group_confirmeclave').classList.remove('form_group-correcto');
        document.querySelector('#group_confirmeclave .form_input-error2').classList.add('form_input-error2-activo');
    }
    else{
        document.getElementById('group_confirmeclave').classList.remove('form_group-incorrecto');
        document.getElementById('group_confirmeclave').classList.add('form_group-correcto');
        document.querySelector('#group_confirmeclave .form_input-error2').classList.remove('form_input-error2-activo');
    }
 }

inputs.forEach((input) => {
    input.addEventListener('keyup', formValidation);
    input.addEventListener('blur', formValidation);        
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.email && campos.clave ) {
		form.reset();
		document.getElementById('form_alertaexito').classList.add('form_alertaexito-activo');
        document.querySelectorAll('.form_group-correcto').forEach((icon) => {
        icon.classList.remove('form_group-correcto');
        });
    }
});
