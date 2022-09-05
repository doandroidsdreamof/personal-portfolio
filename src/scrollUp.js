// Dom Variables //
const upButton = document.querySelector('.scroll__up');

// Scroll Up //

window.addEventListener('scroll', () => {
  window.scrollY > 100 ? upButton.style.display = "block" : upButton.style.display = "none";
});


const scrollUpButton = () => {
  upButton.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });

}





scrollUpButton()