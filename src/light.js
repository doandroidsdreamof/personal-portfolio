
// Skills Section Variables//
const allCards = document.getElementsByClassName('skills__card')
const cards = document.querySelector('.skills__card')
const skillsContainer = document.getElementById('mainskills')

// Projects Section Variables //
const allProjectsCard = document.getElementsByClassName('projects__card__container')
const projectsCard = document.querySelector('.projects__card__container')
const projectsContainer = document.getElementById('mainsprojects')


// Skills Section  //

skillsContainer.addEventListener('mousemove', (e) => {
    for (let i = 0; i < allCards.length; i++) {
        const trace = allCards[i].getBoundingClientRect();
        horizontical = e.clientX - trace.left;
        vertical = e.clientY - trace.top;
        allCards[i].style.setProperty("--horizontical", `${horizontical}px`);
        allCards[i].style.setProperty("--vertical", `${vertical}px`);
    }
})

// Skills Section clear light effects //

skillsContainer.addEventListener('mouseout', () => {
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].style.removeProperty("--horizontical");
        allCards[i].style.removeProperty("--vertical");
    }
})


// Projects Section //

projectsContainer.addEventListener('mousemove', (e) => {
    const target = e.target;
    for (let i = 0; i < allProjectsCard.length; i++) {
        const trace = allProjectsCard[i].getBoundingClientRect();
        horizontical = e.clientX - trace.left;
        vertical = e.clientY - trace.top;
        allProjectsCard[i].style.setProperty("--horizontical", `${horizontical}px`);
        allProjectsCard[i].style.setProperty("--vertical", `${vertical}px`);
        if(target.matches('.live') || target.matches('.projects__card__image')){
  
        allProjectsCard[i].style.setProperty("--horizontical", `${horizontical}px`);
        allProjectsCard[i].style.setProperty("--vertical", `${vertical}px`);

        }

    }
})



// Projects Section clear light effects //

projectsContainer.addEventListener('mouseout', (e) => {
    const target = e.target;
    for (let i = 0; i < allProjectsCard.length; i++) {
        if(!target.matches('.live') && !target.matches('.projects__card__image')){
            allProjectsCard[i].style.removeProperty("--horizontical");
            allProjectsCard[i].style.removeProperty("--vertical");
        }
        

    }


})