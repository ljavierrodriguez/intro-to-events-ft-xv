let loginForm = document.getElementById('loginForm');
console.log(loginForm);

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    /* let username = document.querySelector('#login_username'); */

    let errors = false;

    let form = e.target;

    let { login_username, login_password } = form;

    let onlyText = /^[a-zA-Z0-9]+$/;
    let minLenght =  /^[a-zA-Z\s]{4,12}$/;

    if(login_username.value === ""){
        console.log("El campo username es obligatorio");
        errors = true;
    }else if(!onlyText.test(login_username.value)){
        console.log("El campo username solo puede contener letras.");
        errors = true;
    }else if(!minLenght.test(login_username.value)){
        console.log("username solo puede contener minimo 4 caracteres y maximo 12 caracteres.");
        errors = true;
    }

    if(login_password.value === ""){
        console.log("El campo password es obligatorio");
        errors = true;
    }



    if(!errors){ // true => false false => true
        form.submit();
    }

    /* onlyText.test("abcd"); // true
    onlyText.test("123"); // false */

});