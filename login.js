function login() {
    var Email = document.getElementById('Email');
    if (Email.value == '' || Email.value.indexOf('@') == -1) {
        Email.classList.add('is-invalid')
        Email.classList.remove('is-valid')
    } else {
        Email.classList.add('is-valid')
        Email.classList.remove('is-invalid')
    }
    var Password = document.getElementById('Password');
    if (Password.value == '') {
        Password.classList.add('is-invalid')
        Password.classList.remove('is-valid')
    } else {
        Password.classList.add('is-valid')
        Password.classList.remove('is-invalid')
    }

    var data1 = {
        EMAIL: Email.value,
        PASSWORD: Password.value,
    }

    var users = JSON.parse(localStorage.getItem('users')) || []
    var found = users.find((user) => Password.value == user.Password && Email.value == user.Email)
    console.log(found);
    if (found) {
        window.location.href = '/dashboard.html'
    }
    // var test = false;
    // var i = 0;
    // function find() {
    //     while (i < users.length || test == false) {
    //         if (users[i].Email == data1.EMAIL && users[i].Password == data1.PASSWORD) {
    //             test = true;
    //         }
    //         i++
    //     }
    //     return (test);
    // }
    // var acces = document.getElementById('ax');
    //     acces.addEventListener('click', dash);
    //     function dash() {
    //         location.assign('http://127.0.0.1:5500/dashboard.html');
    //     };
}