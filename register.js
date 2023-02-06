function register() {
    var nom = document.getElementById('nom');
    var validForm = true;
    if (nom.value == '') {
        validForm = false
        nom.classList.add('is-invalid')
        nom.classList.remove('is-valid')
    } else {
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid');
    }

    var prenom = document.getElementById('prenom');
    if (prenom.value == '') {
        validForm = false
        prenom.classList.add('is-invalid')
        prenom.classList.remove('is-valid')
    } else {
        prenom.classList.remove('is-invalid')
        prenom.classList.add('is-valid');
    }

    var email = document.getElementById('email');
    if (email.value == '' || email.value.indexOf('@') == -1) {
        validForm = false
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    } else {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid');
    }

    var password = document.getElementById('password');
    if (password.value == '') {
        validForm = false
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
    } else {
        password.classList.add('is-valid')
        password.classList.remove('is-invalid')
    }

    var password1 = document.getElementById('password1');
    if (password1.value == password.value) {
        password1.classList.add('is-valid')
        password1.classList.remove('is-invalid')
    } else {
        validForm = false
        password1.classList.add('is-invalid')
        password1.classList.remove('is-valid')
    }
    if (validForm) {
        var users = JSON.parse(localStorage.getItem('users')) || []
        var data = {
            Nom: nom.value,
            Prenom: prenom.value,
            Email: email.value,
            Password: password.value,
        }
        users.push(data)
        localStorage.setItem('users', JSON.stringify(users));
    }
}