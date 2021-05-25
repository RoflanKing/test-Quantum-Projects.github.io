const reLetters = /^[^#%&*:<>?/{|}][a-zа-яё]{1,16}$/i;
const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const formName = document.querySelectorAll('.main__form-first');
const formEmail = document.querySelectorAll('.main__form-email');
const formMessage = document.querySelectorAll('.main__form-message');
const mainForm = document.querySelectorAll('.main__form');
const formButton = document.querySelectorAll('.main__form-button');
const errorName = document.querySelectorAll('.error__first');
const errorEmail = document.querySelectorAll('.error__email');

function validInput(formName, regular, error) {
    for (let i = 0; i < formName.length; i++) {
        formName[i].addEventListener('input', () => {

            if (regular.test(formName[i].value)) {
                formName[0].classList.remove('input__invalid');
                formName[0].classList.add('input__correct');
                error[0].style.display = 'none';
            }
            else {
                formName[0].classList.add('input__invalid');
                formName[0].classList.remove('input__correct');
                error[0].style.display = 'block';
            }
        });
    }

};
validInput(formName, reLetters, errorName);
validInput(formEmail, reEmail, errorEmail);

function buttonDisabled() {
    for (let i = 0; i < mainForm.length; i++) {

        mainForm[i].addEventListener('input', () => {
            if (formName[0].classList.contains('input__correct') === true && formEmail[0].classList.contains('input__correct') === true) {
                for (let i = 0; i < formButton.length; i++) {
                    formButton[i].removeAttribute('disabled');
                    formButton[i].classList.remove('button__invalid');
                    const data = new Object;
                    data.name = formName[0].value
                    data.email = formEmail[0].value
                    data.message = formMessage[0].value
                    console.log(data)
                }
            }
            else {
                for (let i = 0; i < formButton.length; i++) {
                    formButton[i].classList.add('button__invalid');
                    formButton[i].setAttribute('disabled', 'disabled');
                }
            }
        })
    }
}

buttonDisabled();