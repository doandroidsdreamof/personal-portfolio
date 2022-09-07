import { gsap } from 'gsap';


window.addEventListener('load',()=>{
let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: .5}})
tl.to('.hero__container__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .5})
.to('.popup__button', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0,stagger: .2}, "-=2")
.to('.hero__container__text', {  opacity: 1, y: 0,stagger: .1})
tl.to('.languages__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .5},"-=2");
tl.to('.projects__card__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .5},"-=2");
tl.to('.contact__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .5},"-=2");


})

