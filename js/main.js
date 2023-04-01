// show & hidden password
const showHiddenPW = function (loginPass, loginEye) {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);
    iconEye.addEventListener('click', function () {
        if (input.type === 'password') {
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        }
        else {
            input.type = 'password'
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    })
}

showHiddenPW('login-password', 'login-eye');