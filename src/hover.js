
const liveSvg = document.querySelector('.live');
const image1 = document.getElementById('image1');
const project1 = document.querySelector('.project1');
const blurOne = document.querySelector('.blur');
const allImageClass = document.querySelectorAll('.projects__card__image')

image1.classList.add("blur");

allImageClass.forEach(item => {
  item.addEventListener('mouseover', (e) => {
    e.stopPropagation()
    const target = e.target;
    const currentSvg = target.parentNode.childNodes["0"];
    currentSvg.style.display = "block";


  })
})

allImageClass.forEach(item => {
  item.addEventListener('mouseout', (e) => {
    e.stopPropagation()
    const target = e.target;
    const currentSvg = target.parentNode.childNodes["0"];
    currentSvg.style.display = "none";


  })
})

