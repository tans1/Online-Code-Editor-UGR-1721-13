const Name = document.querySelector("#name")
const email = document.querySelector("#email")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const form = document.querySelector(".signUp__form")


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})


const Return_Error_message = (element, message) => {
    element.parentElement.querySelector(".error").innerHTML = `<span class="error">${message}</span>`
}


const Email__validation = email => {
    const validator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validator.test(String(email).toLowerCase());
}



const validateInputs = () => {
    nameValue = Name.value.trim()
    emailValue = email.value.trim()
    usernameValue = username.value.trim()
    passwordValue = password.value.trim

    if(nameValue === '') {
        Return_Error_message(Name, 'Name is required');
    } 

    if(emailValue === '') {
        Return_Error_message(email, 'Email is required');
    } else if (!Email__validation(emailValue)) {
        Return_Error_message(email, 'Provide a valid email address');
    } 

    if(usernameValue === '') {
        Return_Error_message(username, 'Username is required');
    } 

    if(passwordValue === '') {
        Return_Error_message(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        Return_Error_message(password, 'Password must be at least 8 character.')
    } 
    
}