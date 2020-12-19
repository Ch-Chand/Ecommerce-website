/*  Carosel */
$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        300: {
            items: 1
        },
        400: {
            items: 2
        },
        770: {
            items: 3
        },
        900: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})

/* Sign In, Up Forms */

function Creation() {
    val1 = document.getElementById("name2").value;
    val2 = document.getElementById("email2").value;
    val3 = document.getElementById("pwd2").value;
    val4 = document.getElementById("check2").value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
            res = this.responseText;
    };
    xmlhttp.open("GET", "php/signup.php?v1=" + val1 + "&v2=" + val2 + "&v3=" + val3 + "&v4=" + val4, true);
    xmlhttp.send();

    alert(res);

    if (res == "Yes") {
        document.getElementById("sign_up_button").style.display = "none";
        document.getElementById("sign_in_button").style.display = "none";
        document.getElementById("account").innerHTML = "Hi! User";
    }
    if(res=="No"){
        alert("Try with another Email");
    }
}



function Validation() {
    va1 = document.getElementById("email1").value;
    va2 = document.getElementById("pwd1")

    alert("va1");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
            document.getElementById("myspan1").innerHTML = this.responseText;
    };

    xmlhttp.open("GET", "ajaxdbinsert.php?v1=" + rr + "&v2=" + nn + "&v3=" + mm, true);
    xmlhttp.send();

}