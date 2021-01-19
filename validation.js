const errorIcon = document.querySelector("body > section > div.txt-container > div.input-container > div > img.error")
const errorTxt = document.querySelector("body > section > div.txt-container > p.error-txt");
const boton = document.getElementById('boton');
const test = document.getElementById('test')


const validate = () => {
    const RE = /\S+@\S+\.\S+/;
    const inputValue = document.getElementById('input').value;


    if(RE.test(inputValue)) {
        console.log('EXITO');
    } else {
        errorIcon.classList.toggle('display');
        errorTxt.classList.toggle('display');
    }

}

boton.addEventListener('click', validate);
