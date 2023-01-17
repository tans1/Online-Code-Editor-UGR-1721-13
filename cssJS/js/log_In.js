const email =document.querySelector('#username')
const password = document.querySelector('#password');
const form = document.querySelector(".logIn__form")


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})



const Email_Error = (message) => {
    document.querySelector(".Email_error").innerHTML = `<span class="error">${message}</span>`
}
const password__error = (message) => {
    document.querySelector(".password__error").innerHTML = `<span class="error">${message}</span>`
}

const Email__validation = email => {
    const validator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validator.test(String(email).toLowerCase());
}

const validateInputs = () => {  
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        Email_Error( 'Email is required');
    } else if (!Email__validation(emailValue)) {
        Email_Error('Provide a valid email address');
    }


    if(passwordValue === '') {
        password__error('Password is required');
    } else if (passwordValue.length < 8 ) {
        password__error('Password must be at least 8 character.')
    }
}

