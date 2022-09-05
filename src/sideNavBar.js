// Dom Variables //
const toggleButton = document.querySelector('.sidenav__hamburger');
const openNav = document.getElementById("sidenav");
const allItem = document.querySelectorAll('.sidenav__icons');

const container = document.getElementById('container')
// Colors //





toggleButton.addEventListener('click',() =>{
  //const element = document.getElementById("sidenav");
  //element.classList.toggle("is-collapsed");
  toggleButton.classList.toggle('is-active');
  //navBarList.classList.toggle('is-collapsed');
  openNav.classList.toggle('open');
for(let x in allItem){
  allItem[x].classList.toggle('openlist')
}

})


window.addEventListener('load',() =>{
  openNav.classList.toggle("is-collapsed");


})


function collapse(){
  element.classList.add("is-collapsed");
  navBarList.classList.add('is-collapsed');

}
