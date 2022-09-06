
// Dom //
const popUpButton = document.querySelector('.popup__button');
const closeButton = document.querySelector('.popup__module__line');
const popUpText = document.querySelector('.popup__button__text');
const popup = document.querySelector('.popup');
const popUpTop = document.querySelector('.popup__module__top');
const languageButtons = document.querySelector('.popup__languagebuttons');
const popUpHead = document.querySelector('.popup__head');
const englishButton = document.querySelector('.popup__languagebuttons__english')
const turkishButton = document.querySelector('.popup__languagebuttons__türkçe')
const expand = document.querySelector('.popup__button__expand')

// Colors //
const buttonColor = 'rgb(33, 150, 243)';
const popUpTopColor = 'rgb(23, 23, 23)';
const popUpButtonColor = 'white';


// Open popup //

popUpButton.addEventListener('click',(e) =>{
popUpButton.classList.add('expand');
popUpText.style.display = "none";
popUpButton.style.backgroundImage = "none";
popUpButton.style.backgroundColor = `${popUpButtonColor}`;
languageButtons.style.display = "";
popUpHead.style.display = "block";
turkishButton.style.visibility = "visible";
englishButton.style.visibility = "visible";


})



// Close popup //
closeButton.addEventListener('click',(e) =>{
e.stopPropagation();
popUpButton.classList.remove('expand');
popUpText.style.display = "";
popUpButton.style.backgroundImage = "";
popUpButton.style.background = `${buttonColor}`;
popUpTop.style.background = "none";
languageButtons.style.display = "none";
popUpHead.style.display = "none";
turkishButton.style.visibility = "hidden";
englishButton.style.visibility = "hidden";

})


