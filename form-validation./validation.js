const click = (() => {
    const submit = document.querySelector('button');
    submit.addEventListener('click', () => {
        showError('all');
    })
})();

const check = (() => {
    const email = document.querySelector('#email');
    const emailError = document.querySelector('#emailError');
    email.addEventListener('input', () => {
        if (!email.validity.valid){
            showError('email');
        }
        else {
            emailError.textContent = '';
            emailError.classList.remove('activeError');
        }
    });

    const country = document.querySelector('#country');
    const countryError = document.querySelector('#countryError');
    country.addEventListener('input', () => {
        if (!country.validity.valid){
            showError('country');
        }
        else {
            countryError.textContent = '';
            countryError.classList.remove('activeError');
        }
    });

    const zip = document.querySelector('#zipcode');
    const zipError = document.querySelector('#zipError');
    zip.addEventListener('input', () => {
        if (!zip.validity.valid){
            showError('zip');
        }
        else {
            zipError.textContent = '';
            zipError.classList.remove('activeError');
        }
    });

    const pass = document.querySelector('#password');
    const passError = document.querySelector('#passError');
    pass.addEventListener('input', () => {
        if (!pass.validity.valid){
            showError('pass');
        }
        else {
            passError.textContent = '';
            passError.classList.remove('activeError');
        }
    });

    const confirm = document.querySelector('#password-confirm');
    const confirmError = document.querySelector('#passConfirmError');
    confirm.addEventListener('input', () => {
        if (!confirm.validity.valid || confirm.value != pass.value){
            showError('confirm');
        }
        else {
            check.confirm.classList.remove('errorActive');
            confirmError.textContent = '';
            confirmError.classList.remove('activeError');
        }
    });
    
    return{email, emailError, country, countryError, zip, zipError, pass, passError, confirm, confirmError}
})();

const showError = (input) => {
    if(input == 'email'){emailErrors();}
    if(input == 'country'){countryErrors();}
    if(input == 'zip'){zipErrors();}
    if(input == 'pass'){passErrors();}
    if(input == 'confirm'){confirmErrors();}
    if(input == 'all'){
        emailErrors();
        countryErrors();
        zipErrors();
        passErrors();
        confirmErrors();
    }
}

const emailErrors = () => {
    if(!email.validity.valid){
        check.emailError.classList.add('errorActive');
    }
    if (email.validity.valueMissing){
        check.emailError.textContent = 'required';
    }
    else if (email.validity.tooShort){
        check.emailError.textContent = 'too short';
    }
    else if (email.validity.typeMismatch){
        check.emailError.textContent = 'must be an email';
    }
}

const countryErrors = () => {
    if(!country.validity.valid){
        check.countryError.classList.add('errorActive');
    }
    if (country.validity.valueMissing){
        check.countryError.textContent = 'required';
    }
    else if (email.validity.typeMismatch){
        check.emailError.textContent = 'must be a country';
    }
}

const zipErrors = () => {
    if(!check.zip.validity.valid){
        check.zipError.classList.add('errorActive');
    }
    if (check.zip.validity.valueMissing){
        check.zipError.textContent = 'required';
    }
    else if (check.zip.validity.tooShort){
        check.zipError.textContent = 'too short';
    }
    else if (check.zip.validity.typeMismatch){
        check.zipError.textContent = 'must be a zipcode';
    }
}

const passErrors = () => {
    if(!check.pass.validity.valid){
        check.passError.classList.add('errorActive');
    }
    if (check.pass.validity.valueMissing){
        check.passError.textContent = 'required';
    }
    else if (check.pass.validity.tooShort){
        check.passError.textContent = 'too short';
    }
    else if (check.pass.validity.typeMismatch){
        check.passError.textContent = 'must be a zipcode';
    }
}

const confirmErrors = () => {
    if(!check.confirm.validity.valid){
        check.confirmError.classList.add('errorActive');
    }
    if (check.confirm.validity.valueMissing){
        check.confirmError.textContent = 'required';
    }
    if (check.confirm.value != check.pass.value){
        check.confirm.classList.add('errorActive');
        check.confirmError.textContent = 'passwords must match';
    }
}
