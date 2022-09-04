import variables from "./style/variables.scss";


/*

document.getElementById("container").style.background = variables.background;
console.log(variables)


*/
const upButton = document.querySelector('.scroll__up');
const staySameTheme = document.querySelectorAll('.stay-same')
const up = document.getElementById('up')

up.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode')
 /* for(let i = 0; i < staySameTheme.length;i++){
    staySameTheme[i].classList.toggle('inverted')
  }*/


});
