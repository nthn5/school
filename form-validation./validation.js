const click = (() => {
    const submit = document.querySelector('button');
    submit.addEventListener('click', () => {
        showError();
    })
})();

const check = (() => {
    const email = document.querySelector('#email');
    email.addEventListener('input', () => {
        if (!email.validity.valid){
            showError();
        }
    });
    
    return{email}
})();

const showError = (input) => {
    const emailError = document.querySelector('#emailError');
    if (email.validity.valueMissing){
        emailError.textContent = 'required';
    }
    else if (email.validity.tooShort){
        emailError.textContent = 'too short';
    }
    else if (email.validity.typeMismatch){
        emailError.textContent = 'must be an email';
    }
}
