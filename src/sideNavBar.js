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
const labelMail = document.querySelector('.label__email');
const labelMessage = document.querySelector('.label__message');
const submitMessage = document.querySelector('.send__message');

// Projects Texts //
const textProjectOne = document.querySelector('.text__one');
const textProjectTwo = document.querySelector('.text__two');
const textProjectThree = document.querySelector('.text__three');
const textProjectFour = document.querySelector('.text__four');
const textProjectFive = document.querySelector('.text__five');
const textProjectSix = document.querySelector('.text__six');

// Section Texts //
const textSkills = document.querySelector('.languages__head')
const textProjects = document.querySelector('.projects__card__head')
const textContact = document.querySelector('.contact__head')


translateButton.addEventListener('click', () => {
  const logic = bodyToggleLang.classList;
  if (logic.contains('eng')) {
    logic.replace('eng', 'tr')
    heroHead.innerHTML = '<span>' + "Web üzerine çözüm " + '</span>' + '<br>' + "üretirim";
    heroText.innerHTML = 'Merhaba, ben Berkay. Programlama üzerine yeni şeyler öğrenmekle ve problemler çözmekle haşır neşirim.';
    buttonText.innerHTML = 'Öz Geçmişi Görüntüle';
    trButtonText.innerHTML = 'Türkçe';
    engButtonText.innerHTML = 'İngilizce';
    textSkills.innerHTML = 'BECERİLER';
    textProjects.innerHTML = 'PROJELER';
    textContact.innerHTML = 'İLETİŞİM';
    labelName.innerHTML = 'İsim';
    labelMail.innerHTML = 'E-posta';
    labelMessage.innerHTML = 'Mesaj';
    submitMessage.innerHTML = 'Mesaj Gönder';
    textProjectOne.innerHTML = 'Youtube Kanalına Yüklenen Son Videoyu Paylaşan Telegram Botu';
    textProjectTwo.innerHTML = 'Ülke Bayrakları ve Bilgileri Üzerine Tek Sayfa Uygulaması';
    textProjectThree.innerHTML = 'Yapılacaklar Listesi Web Uygulaması';
    textProjectFour.innerHTML = 'E-ticaret Sitesi Ürün Sayfası';
    textProjectFive.innerHTML = 'IP Adresi Arama Uygulaması';
    textProjectSix.innerHTML = 'Loopstudios Web Sayfası';

  }
  else if (logic.contains('tr')) {
    logic.replace('tr', 'eng')
    heroHead.innerHTML = '<span>' + "I solve problems" + '<br>' + "for the" + '</span>' + " Web";
    heroText.innerHTML = "Hi there, I'm Berkay. I'm a self-taught, enthusiastic web developer who enjoys learning new things and solving problems.";
    buttonText.innerHTML = 'Download Resume';
    trButtonText.innerHTML = 'Turkish';
    engButtonText.innerHTML = 'English';
    textSkills.innerHTML = 'SKILLS';
    textProjects.innerHTML = 'PROJECTS';
    textContact.innerHTML = 'CONTACT';
    labelName.innerHTML = 'Name';
    labelMail.innerHTML = 'Email';
    labelMessage.innerHTML = 'Message';
    submitMessage.innerHTML = 'Send Message';
    textProjectOne.innerHTML = 'Telegram Bot, It Shares Last Video From YouTube Channels';
    textProjectTwo.innerHTML = 'Rest Countries Single Page Application';
    textProjectThree.innerHTML = 'To Do List Web App';
    textProjectFour.innerHTML = 'E-commerce Product Page';
    textProjectFive.innerHTML = 'IP Address Tracker';
    textProjectSix.innerHTML = 'Loopstudios Landing Page';
  }


})





