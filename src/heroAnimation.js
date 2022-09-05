import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  scrub: 3,
  ease: 'power4.inOut',


})

window.addEventListener('load',()=>{
let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 1}})
tl.to('.hero__container__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2})
.to('.popup__button', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0,stagger: .2}, "-=2")
.to('.hero__container__text', {  duration: 1.2, opacity: 1, y: 0}, "-=2")
tl.to('.languages__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1},"-=2");
tl.to('.projects__card__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1},"-=2");
tl.to('.contact__head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1},"-=2");


})

