// preloader 
const preloader = document.getElementById("preloader");
window.addEventListener('load', () => {
    preloader.style.display = "none";
});

// scroll to top 
const scrollToTop = document.querySelector('#scoll-to-top');

// button display block 
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollToTop.style.transform = "translateY(0px)";
    } else {
        scrollToTop.style.transform = "translateY(100px)"
    };
});

//  button display none 
scrollToTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

//  end of scroll to top  

// sign up form contact 
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {    
    container.classList.remove("active");
});


$(document).ready(() => {
    $("form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            cpassword: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
        },
        messages: {
            fname: {
                required: "Please enter your name*",
                minlength: "Name at least 2 characters*"
            },
            email: {
                required: "Please enter your email*",
            },
            password: {
                required: "Please enter your password*",
                minlength: "Password at least 8 characters*"
            },
            cpassword: {
                required: "Please enter your confirm password*",
                minlength: "Password at least 8 characters*",
                equalTo: "Please confirm your password"
            },

        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
