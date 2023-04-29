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
        'name': 'Xe Rebel Silver',
        'price': '125.000.000',
        'photo': 'img/XeRebelSilver.png'
    },
    'sp002': {
        'name': 'Xe NINJA H2 CARBON',
        'price': '1.299.000',
        'photo': 'img/XeNINJAH2CARBON.png'
    },
    'sp003': {
        'name': 'Xe Victory Vegas 8-Ball',
        'price': '289.000.000',
        'photo': 'img/XeVictoryVegas8Ball.png'
    },
    'sp004': {
        'name': 'Xe KTM 390',
        'price': '236.000.000',
        'photo': 'img/XeKTM.png'
    },
    'sp005': {
        'name': 'Xe Ducait SuperleggeraV4',
        'price': '3.000.000.000',
        'photo': 'img/XeDucaitSuperleggeraV4.png'
    },
    'sp006': {
        'name': 'Xe Suzuki GSX R150',
        'price': '57.000.000',
        'photo': 'img/XeSuzukiGSX150.png'
    }
};

function addCart(code) {
    // var number = parseInt(document.getElementById(code).value);
    // var current = parseInt(window.localStorage.getItem(code));
    if (typeof localStorage[code] === 'undefined') {
        window.localStorage.setItem(code, 1);
    }
    console.log(localStorage);
    // else {
    //     if (number + current > 100) {
    //         window.localStorage.setItem(code, 100);
    //     }
    //     else {
    //         window.localStorage.setItem(code, number + current);
    //     }
    // }
}

function showCart() {
    var TotalPreTax = 0;
    var keys = Object.keys(localStorage);
    for (var i = 0; i < keys.length; i++) {
        var code = keys[i];
        var item = itemList[code];
        var name = item.name;
        var price = item.price;
        var photo = item.photo;
        var orderNumber = localStorage.getItem(code);

        var hinhsp = document.createElement("td");
        hinhsp.innerHTML = "<img src='" + photo + "'class='round-figure' width='100px'/>";
        var tensp = document.createElement("td");
        tensp.innerHTML = name;
        var slsp = document.createElement("td");
        slsp.innerHTML = orderNumber;
        var giasp = document.createElement("td");
        giasp.innerHTML = price + " VND";
        var thanhtiensp = document.createElement("td");
        thanhtiensp.innerHTML = orderNumber * price + " VND";
        var xoasp = document.createElement("td");
        xoasp.innerHTML = "<a href='#' data-code = '" + code
            + "' onclick='removeCart(this.dataset.code)'><i class='fa fa-trash icon-pink icon'></i></a>";
        var tr = document.createElement("tr");
        tr.appendChild(hinhsp);
        tr.appendChild(tensp);
        tr.appendChild(slsp);
        tr.appendChild(giasp);
        tr.appendChild(thanhtiensp);
        tr.appendChild(xoasp);
        var tableBody = document.getElementById("cart-table-item-body");
        tableBody.appendChild(tr);
        TotalPreTax = TotalPreTax + (price * orderNumber);
    }
    var tt = document.getElementById("tam-tinh");
    tt.innerText = tt.innerText + " " + TotalPreTax + " VND";
    var chietk = document.getElementById("chiet-khau");
    var discount = TotalPreTax * getDiscountRate();
    chietk.innerHTML = chietk.innerHTML + getDiscountRate() + ' x A = ' + discount + ' VND';
    var thue = document.getElementById("thue");
    var tax = 0.1 * (TotalPreTax - discount);
    thue.innerHTML = thue.innerHTML + tax + ' VND';
    var thanhtien = document.getElementById("thanh-tien");
    thanhtien.innerHTML = thanhtien.innerHTML + (TotalPreTax - discount + tax) + ' VND';
}

function removeCart(code) {
    if (typeof window.localStorage[code] != "undefined") {
        window.localStorage.removeItem(code);
        document.getElementById("cart-table-item-body").getElementsByTagName('tbody')[0].innerHTML = "";
        location.reload();
        showCart();
    }
}

function getDiscountRate() {
    var d = new Date();
    var weekday = d.getDay();
    var totalMins = d.getHours() * 60 + d.getMinutes();
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660)
        || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}

$(document).ready(function () {

    if (window.location.pathname.includes("giohang.html")) {
        showCart();

    }
    if (window.location.pathname.includes("dangnhap.html")) {
        showHiddenPW('input-password', 'password-eye');

    }
    if (window.location.pathname.includes("dangky.html")) {
        showHiddenPW('input-password', 'password-eye');
        showHiddenPW('re-input-password', 're-password-eye');
    }
});