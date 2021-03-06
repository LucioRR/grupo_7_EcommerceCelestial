window.addEventListener('load', () => {
    let form = document.querySelector('#login-form');

    form.addEventListener("submit", (event) => {
        let errors = new Map();
        let username = document.querySelector('#login-user');
        let password = document.querySelector('#login-password');
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let passRegex = /(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/;
        let userError = document.querySelector('#user-error');
        let passwordError = document.querySelector('#password-error');

        // Validador de campo de Usuario
        if (username.value.length < 5) {
            errors.set('shortUser', 'Usuario muy corto');
        } else if( !emailRegex.test(username.value)){
            errors.set('invalidUser', 'Usuario Inválido');
        }

        // Validador de campo de Password
        if(password.value.length < 8){
            errors.set('shortPass','Contraseña muy corta');
        }else if(!passRegex.test(password.value)){
            errors.set('invalidPass', 'La contraña debe tener al menos un número, un símbolo y una minuscula.')
        }

        // Inserción de errores en el DOM
        if (errors.size > 0){
            event.preventDefault();
            if (errors.has('shortUser')){
                userError.innerText = errors.get('shortUser');
                username.style.backgroundColor = 'pink';
            }
            if (errors.has('invalidUser')){
                userError.innerText = errors.get('invalidUser');
                username.style.backgroundColor = 'pink';
            }
            if (errors.has('shortPass')){
                passwordError.innerText = errors.get('shortPass');
                password.style.backgroundColor = 'pink';
            }
            if (errors.has('invalidPass')){
                passwordError.innerText = errors.get('invalidPass');
                password.style.backgroundColor = 'pink';
            }
        }
    });
});