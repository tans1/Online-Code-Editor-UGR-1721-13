const navBar = document.querySelector(".navigation__bar")
const courses = document.querySelector(".courses")
const navIconCont = document.querySelector(".navigation__icons__container")
const sideIconCont = document.querySelector(".sideBar__icon__container")
const submit__button = document.querySelector(".submit__button")
const faqs__button = document.querySelectorAll(".faqs__button")
const form = document.querySelector(".form")
const email = document.querySelector("#feedback__email")
const feedback = document.querySelector("#feedback__text")


function showNavBar() {
    navBar.classList.toggle("active");
    courses.classList.toggle("active");
    const sideBar = document.querySelector(".sideBar")

    if (sideBar){
        sideBar.classList.remove("active");
    }  
}
function showSideBar() {

    const sideBar = document.querySelector(".sideBar")
    if (sideBar){
        navBar.classList.remove("active");
        courses.classList.remove("active");
        sideBar.classList.toggle("active");
    }
}


if (submit__button){
    submit__button.addEventListener("click",()=>{
        window.location.href = "src/home-page.html";
    })
}

if (faqs__button) {
    document.querySelectorAll(".faqs__button").forEach(faqs =>{
        faqs.addEventListener('click',()=>{
            console.log(faqs.nextElementSibling.classList)
            faqs.nextElementSibling.classList.toggle('active')
        })
    }) 
}

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        document.querySelector(".error--message").innerHTML = `<span>email address is requied</span>`;
    } else if (!isValidEmail(emailValue)) {
        document.querySelector(".error--message").innerHTML = `<span>provide a valid email address</span>`
    } else {
        document.querySelector(".feedback--sendButton").innerHTML = `<span>&#10003;</span>`
    }
};


navIconCont.addEventListener('click', showNavBar)
sideIconCont.addEventListener('click',showSideBar)

