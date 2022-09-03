
const popUpButton = document.querySelector('.popup__button');
const closeButton = document.querySelector('.popup__module__line');
const popUpText = document.querySelector('.popup__button__text');
const popup = document.querySelector('.popup');
const popUpTop = document.querySelector('.popup__module__top');
const languageButtons = document.querySelector('.popup__languagebuttons');
const popUpHead = document.querySelector('.popup__head');

const buttonColor = 'rgb(33, 150, 243)';

// open popup
popUpButton.addEventListener('click',(e) =>{
popUpButton.classList.add('expand');
popUpText.style.display = "none";
popUpButton.style.backgroundImage = "none";
popUpButton.style.backgroundColor = "#efede9";
//popUpTop.style.background = "rgb(23, 23, 23)";
languageButtons.style.display = "";
popUpHead.style.display = "block";


})


//close popup
closeButton.addEventListener('click',(e) =>{
const target = e.target;
e.stopPropagation();
popUpButton.classList.remove('expand');
popUpText.style.display = "";
popUpButton.style.backgroundImage = "";
popUpButton.style.background = `${buttonColor}`;

popUpTop.style.background = "none";
languageButtons.style.display = "none";
popUpHead.style.display = "none";
})


