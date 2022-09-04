// Dom Variables //
const toggleButton = document.querySelector('.sidenav__hamburger');
const navBarList = document.querySelector('.sidenav__list');
const openNav = document.getElementById("sidenav");

const container = document.getElementById('container')
// Colors //


toggleButton.addEventListener('click',() =>{
  const element = document.getElementById("sidenav");
  element.classList.toggle("is-collapsed");
  toggleButton.classList.toggle('is-active');
  navBarList.classList.toggle('is-collapsed');
})


window.addEventListener('load',() =>{
  openNav.classList.toggle("is-collapsed");


})


function collapse(){
  element.classList.add("is-collapsed");
  navBarList.classList.add('is-collapsed');

}

