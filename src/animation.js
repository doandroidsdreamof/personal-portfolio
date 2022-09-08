import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  scrub: 3,
  ease: 'power4.inOut',


})


const trigger4 = gsap.utils.toArray('.skills__card');
trigger4.forEach((item, i) => {
  const gridAnimation4 = gsap.fromTo(item, { y: 50, opacity: 0.5 }, { duration: 1, y: 0, opacity: 1 });
  ScrollTrigger.create({
    trigger: item,
    animation: gridAnimation4,


  });
});



const trigger5 = gsap.utils.toArray('.projects__card__container');
trigger5.forEach((item, i) => {
  const gridAnimation5 = gsap.fromTo(item, { y: 40, opacity: 0.5 }, { duration: 1, y: 0, opacity: 1 });
  ScrollTrigger.create({
    trigger: item,
    animation: gridAnimation5,


  });
});


