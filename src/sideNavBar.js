// Dom Variables //
const toggleButton = document.querySelector('.sidenav__hamburger');
const openNav = document.getElementById("sidenav");
const allItem = document.querySelectorAll('.sidenav__icons');
const container = document.getElementById('container')
const navigationButtons = document.querySelectorAll('.navbuttons');
const sections = document.querySelectorAll('.section');
const bodyToggleLang = document.querySelector('.eng');

// Sections //
const skillsSection = document.querySelector('.section__languages')
const projectsSection = document.querySelector('.projects__card__head')
const contactSection = document.querySelector('.contact__head')
const homeSection = document.querySelector('.hero__container__head')

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
    const target = e.target;
    const classNameTarget = target.classList["0"]
    if (classNameTarget === 'sidenav__list2') {
      homeSection.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    if (classNameTarget === 'sidenav__list3') {
      skillsSection.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    if (classNameTarget === 'sidenav__list4') {
      projectsSection.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    if (classNameTarget === 'sidenav__list5') {
      contactSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

  })
})


// Translate Button  //

const translateButton = document.querySelector('.sidenav__list1');
const heroHead = document.querySelector('.hero__container__head')
const heroText = document.querySelector('.hero__container__text');
const buttonText = document.querySelector('.popup__button__text');
const trButtonText = document.querySelector('.popup__languagebuttons__türkçe')
const engButtonText = document.querySelector('.popup__languagebuttons__english')

// Contact Labels //
const labelName = document.querySelector('.label__name');
const labelMail = document.querySelector('.label__mail');
const labelMessage = document.querySelector('.label__message');
const submitMessage = document.querySelector('.send__message');

// Projects Texts //
const textProjectOne = document.querySelector('.label__name');
const textProjectTwo = document.querySelector('.label__mail');
const textProjectThree = document.querySelector('.label__message');
const textProjectFour = document.querySelector('.send__message');
const textProjectFive = document.querySelector('.send__message');
const textProjectSix = document.querySelector('.send__message');



translateButton.addEventListener('click',() =>{
 const logic =  bodyToggleLang.classList; 
if(logic.contains('eng')){
  logic.replace('eng','tr')
  heroHead.innerHTML = '<span>' + "Web üzerine çözüm "  + '</span>' + '<br>' + "üretirim" ;
  heroText.innerText = 'Merhaba, ben Berkay. Programlama üzerine yeni şeyler öğrenmekten ve problem çözmekten keyif alıyorum.';
  buttonText.innerText = 'Öz Geçmişi Görüntüle';
  trButtonText.innerText = 'Türkçe';
  engButtonText.innerText = 'İngilizce';
  skillsSection.innerText = 'BECERİLER';
}
else if(logic.contains('tr')){
  logic.replace('tr','eng')
  heroHead.innerHTML = '<span>' + "I solve problems" + '<br>' + "for the" + '</span>' + "web";
  heroText.innerText = "Hi there, I'm Berkay. I'm a self-taught, enthusiastic web developer who enjoys learning new things and solving problems.";
  buttonText.innerText = 'Download Resume';
  trButtonText.innerText = 'Turkish';
  engButtonText.innerText = 'English';
}

console.log(bodyToggleLang)
})




/*
skillsSection
projectsSection
contactSection


  */