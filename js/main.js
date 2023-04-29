// show & hidden password
function showHiddenPW(loginPass, loginEye) {
    var input = document.getElementById(loginPass),
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


// shopping cart

function toLogin() {
    window.location.href = 'dangnhap.html';
}

var itemList = {
    'sp001': {
        'name': 'Xe A',
        'price': '1000',
        'photo': 'img/xe-a.jpg'
    },
    'sp002': {
        'name': 'Xe B',
        'price': '1500',
        'photo': 'img/xe-a.jpg'
    },
    'sp003': {
        'name': 'Xe C',
        'price': '2000',
        'photo': 'img/xe-a.jpg'
    },
    'sp004': {
        'name': 'Xe D',
        'price': '2500',
        'photo': 'img/xe-a.jpg'
    }
};

function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    var current = parseInt(window.localStorage.getItem(code));
    if (typeof localStorage[code] === 'undefined') {
        window.localStorage.setItem(code, number);
    }
    else {
        if (number + current > 100) {
            window.localStorage.setItem(code, 100);
        }
        else {
            window.localStorage.setItem(code, number + current);
        }
    }
}

function showCart() {

}

$(document).ready(function () {


    
    showHiddenPW('input-password', 'password-eye');
    showHiddenPW('re-input-password', 're-password-eye');
});