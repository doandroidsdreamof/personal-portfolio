import trPdf from '../src/resume/Berkay Kuytuoğlu Öz Geçmiş.pdf'
import engPdf from '../src/resume/Berkay Kuytuoğlu Resume.pdf'

// Dom Variables //

const allImageClass = document.querySelectorAll('.projects__card__image');
const allImageAndSvgClass = document.querySelectorAll('.link');
const allSvg = document.querySelectorAll('.live');
const allSkillsCard = document.querySelectorAll('.skills__card');
const englishButton = document.querySelector('.popup__languagebuttons__english')
const turkishButton = document.querySelector('.popup__languagebuttons__türkçe')
const resumeButtons = document.querySelectorAll('.resume');

// Open links projects //

allImageAndSvgClass.forEach(item => {
  item.addEventListener('mouseup', (e) => {
    e.stopPropagation()
    const target = e.target;
    const handleClicks = e.button;
    const currentSvg = target.parentNode.childNodes["0"];
    const handleLinks = currentSvg.nextElementSibling.classList[1];
    if (handleClicks === 0 || handleClicks === 1) {
      switch (handleLinks) {
        case "project1":
          window.open("https://github.com/doandroidsdreamof/telegram-youtube-music-sharing-bot")
          break;
        case "project2":
          window.open("https://rest-countries-solution-react-app.netlify.app/");
          break;
        case "project3":
          window.open("https://front-end-todo-app.netlify.app/");
          break;
        case "project4":
          window.open("https://doandroidsdreamof.github.io/frontend-mentor-e-commerce-product-page/");
          break;
        case "project5":
          window.open("https://frontend-mentor-ip-address-tracker.netlify.app/");
          break;
        case "project6":
          window.open("https://doandroidsdreamof.github.io/frontend-mentor-loopstudios-landing-page/");
          break;
      }

    }

  })
})


// Open links projects svg//
allSvg.forEach(item => {
  item.addEventListener('mouseup', (e) => {
    e.stopPropagation()
    const target = e.target;
    const handleClicks = e.button;
    const handleLinks = target.parentElement.classList["1"];
    if (handleClicks === 0 || handleClicks === 1) {
      switch (handleLinks) {
        case "link1":
          window.open("https://github.com/doandroidsdreamof/telegram-youtube-music-sharing-bot")
          break;
        case "link2":
          window.open("https://rest-countries-solution-react-app.netlify.app/");
          break;
        case "link3":
          window.open("https://front-end-todo-app.netlify.app/");
          break;
        case "link4":
          window.open("https://doandroidsdreamof.github.io/frontend-mentor-e-commerce-product-page/");
          break;
        case "link5":
          window.open("https://frontend-mentor-ip-address-tracker.netlify.app/");
          break;
        case "link6":
          window.open("https://doandroidsdreamof.github.io/frontend-mentor-loopstudios-landing-page/");
          break;
      }

    }

  })
})



// Skills card links //

allSkillsCard.forEach(item => {
  item.addEventListener('mouseup', (e) => {
    e.stopPropagation()
    const target = e.target;
    const handleClicks = e.button;
    const handleLinks = target.classList["1"];
    console.log(handleLinks)
    if (handleClicks === 0 || handleClicks === 1) {
      switch (handleLinks) {
        case "react":
          window.open("https://reactjs.org/")
          break;
        case "JavaScript":
          window.open("https://www.javascript.com/");
          break;
        case "tailwind":
          window.open("https://tailwindcss.com/");
          break;
        case "node":
          window.open("https://nodejs.org/en/");
          break;
        case "git":
          window.open("https://git-scm.com/");
          break;
        case "npm":
          window.open("https://www.npmjs.com/");
          break;
        case "sass":
          window.open("https://sass-lang.com/");
          break;
        case "webpack":
          window.open("https://webpack.js.org/");
          break;
        case "figma":
          window.open("https://www.figma.com/");
          break;
      }
    }
  })
})

// Resume PDF download //

resumeButtons.forEach(items => {
  items.addEventListener('mouseup', (e) => {
    e.stopPropagation()
    const target = e.target;
    const handleClicks = e.button;
    const handleLinks = target.classList["0"];
    console.log(handleLinks)
    if (handleClicks === 0 || handleClicks === 1) {
    switch (handleLinks) {
      case "popup__languagebuttons__türkçe":
        window.open(trPdf);
        break;
      case "popup__languagebuttons__english":
        window.open(engPdf);
        break;
    }
    }
  })
})


