// Dom Variables //
const toggleButton = document.querySelector('.sidenav__hamburger');
const openNav = document.getElementById("sidenav");
const allItem = document.querySelectorAll('.sidenav__icons');
const container = document.getElementById('container')
const navigationButtons = document.querySelectorAll('.navbuttons');
const sections = document.querySelectorAll('.section');


toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('is-active');
  openNav.classList.toggle('open');
  for (let x in allItem) {
    allItem[x].classList.toggle('openlist')

  }

})




// Navigation Buttons //

navigationButtons.forEach(item => {
  item.addEventListener('click', (e) => {
    const skillsSection = document.querySelector('.section__languages')
    const projectsSection = document.querySelector('.projects__card__head')
    const contactSection = document.querySelector('.contact__head')
    const homeSection = document.querySelector('.hero__container__head')
    const rect = skillsSection.getBoundingClientRect();
    console.log(rect.y)
    const target = e.target;
    const classNameTarget = target.classList["0"]
    window.addEventListener('scroll',() =>{
      
    })
    window.scroll({
      top: rect.y,
      left: 0,
      behavior: 'smooth'
    });

  

  })
})


/*

   
  switch (classNameTarget) {
      case 'sidenav__list2':
        alert('home');
        break;
      case '':
 
        break;
      case 'sidenav__list4':
        alert('projects');
        break;
      case 'sidenav__list5':
        alert('Contact');
        break;
    }


*/
