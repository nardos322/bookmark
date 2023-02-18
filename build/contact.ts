const email: HTMLInputElement = document.querySelector('#email');
const form: HTMLFormElement = document.querySelector('#form-email');
const emailReg: RegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const errorIcon: HTMLImageElement = document.createElement('img');
const errorMessage: HTMLParagraphElement = document.createElement('p');
const errorContainer: HTMLDivElement = document.createElement('div');
const btn: HTMLButtonElement = document.querySelector('#btn')


errorIcon.src = './src/images/icon-error.svg';

errorMessage.textContent = "Whoops, make sure it's an email";

form.style.textAlign = 'center';
form.style.width = '306px';
form.style.position = 'relative';



function addError(): void{
    email.insertAdjacentElement('afterend', errorIcon);
    errorIcon.classList.add('error-icon');
    form.insertAdjacentElement('afterbegin', errorContainer);
    errorContainer.appendChild(email);
    email.style.marginBottom = '0px';
    errorContainer.classList.add('error-container');
    errorContainer.insertAdjacentElement('beforeend', errorMessage);
    errorMessage.classList.add('error-message');
    errorIcon.style.display = 'block';
    console.log('email invalido');
}

const removeError = (): void => {
    form.removeChild(errorContainer)
    errorIcon.style.display = 'none';
    form.insertAdjacentElement("afterbegin", email);
    email.style.marginBottom = '12px';
    console.log('corregi el email');
}

export function contactUs(): void{
    email.addEventListener('change', e => {
        console.log(email.value);
    
        if (!emailReg.test(email.value)) {
           addError();
    
        } else if (form.contains(errorContainer)) {
            removeError();
    
    
        }
    });
    
    
    btn.addEventListener('click', e => {
        if(email.value === ''){
            addError();
        }
    })
    
    
    
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        if (emailReg.test(email.value) && email.innerText === '') {
            setTimeout(() => {
                form.submit();
    
            }, 2000);
            email.value = '';
    
            alert('te has subscrito');
        }
    });
    
}




