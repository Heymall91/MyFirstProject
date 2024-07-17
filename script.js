
// burger menu animation open/close




const bMenuOpen = document.querySelector('#burger__menu');
const bmenuClose = document.querySelector('#inner__burger__menu');
const burgerMenu = document.querySelector('.header__block__burger__menu');

bMenuOpen.addEventListener('click', () => {
    burgerMenu.style.right = 0;
}
)

bmenuClose.addEventListener('click', ()=>{
    burgerMenu.style.right = '-100%';
    bMenuOpen.checked = false;
})




// intro register verification



const output = document.querySelector('.alert');
const outputTwo = document.querySelector('.newsletter__alert');
const outputThree = document.querySelector('.footer__alert');

const category = document.getElementsByName('category').value;
const nameOne = document.getElementById('name');
const email = document.getElementById('emailOne');
const emailTwo = document.getElementById('emailTwo');
const emailThree = document.getElementById('emailThree');

const infoBtnOne = document.querySelector('.intro__register__form > button');
const infoBtnTwo = document.querySelector('.newsletter__form > button');
const infoBtnThree = document.querySelector('.footer__newsletter__form > button');

infoBtnOne.addEventListener('click', () => {
    if(nameOne.value == '' || nameOne.value.length <= 3){
        output.textContent = 'The name is uncorrect or short!';
    } else if(email.value == ''){
        output.textContent = 'Uncorrect email adress!';
    } else{
        output.textContent = '';
    }

    setTimeout(() => {
        output.textContent = '';
    }, 3000)
});




// newsletter register



infoBtnTwo.addEventListener('click', () => {
    if(emailTwo.value == ''){
        outputTwo.textContent = 'Uncorrect email adress!';
    } else{
        outputTwo.textContent = '';
    }

    setTimeout(() => {
        outputTwo.textContent = '';
    }, 3000)
})




// footer newsletter register



infoBtnThree.addEventListener('click', () => {
    if(emailThree.value == ''){
        outputThree.textContent = 'Uncorrect email adress!';
    } else{
        outputThree.textContent = '';
    }

    setTimeout(() => {
        outputThree.textContent = '';
    }, 3000)
})
