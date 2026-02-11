
// const service = gsap.utils.toArray('.services', '.bottom-services');

// service.forEach((servicess, i) => {
//     const anim = gsap.fromTo(servicess, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
//     ScrollTrigger.create({
//         trigger: servicess,
//         animation: anim,
//         toggleActions: 'play none none none',
//         once: true,
//     });
// }); 

// normal text animations
const services = gsap.utils.toArray(['.header-p', '.projects-button', '.services', '.bottom-services', '.h3', '.pricing-paragraph', '.h2', '.blogs-heading', '.blogs-p', '.form-group', '.theme-button', '.footer-bottom-section']);
services.forEach((service) => {
  const anim = gsap.fromTo(service, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
  ScrollTrigger.create({
    trigger: service,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});

//header text animations
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".h1",
    toggleActions: "restart none none none"
  }
}),
  mySplitText = new SplitText(".h1", {
    type: "words, lines, chars"
  });

tl.from(mySplitText.chars, { opacity: 0, y: 15, ease: "power6", stagger: 0.05 }, 0);


// header animations for text hanging randomly
var vsOpts = {
  slides: document.querySelectorAll('.v-slide'),
  list: document.querySelector('.v-slides'),
  duration: 0.9,
  lineHeight: 50
}

var vSlide = gsap.timeline({
  paused: true,
  repeat: -1
});

vsOpts.slides.forEach(function (slide, i) {
  // Create a label
  let label = "slide" + i;
  vSlide.add(label);

  // Move the whole word
  vSlide.to(vsOpts.list, {
    duration: vsOpts.duration,
    //y: $(window).width() < 768 ? -145 * i + i * i * 13 : $(window).width() >= 768 && $(window).width() <= 992 ? -215 * i + i * i * 26 : -145 * i + i * i * 13 * vsOpts.lineHeight + i * i * 15
    y: $(window).width() < 768 ? -145 * i + i * i * 13 : $(window).width() >= 768 && $(window).width() < 992 ? -215 * i + i * i * 26 : i * -6 * vsOpts.lineHeight + i * i * 15

  }, label);

  // Move each letter
  let letters = new SplitText(slide, { type: "chars" }).chars;
  vSlide.from(letters, { opacity: 0, y: 15, ease: "power4", stagger: 0.05 }, label);

})
vSlide.play();


// animations for the slider section

// ScrollTrigger.defaults({
//   markers: false
// });

// var points = gsap.utils.toArray(".point");

// var height = 100 * points.length;

// var pinner = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".philosophie .wrapper",
//     start: "top top",
//     end: "+=" + height + "%",
//     scrub: true,
//     pin: true,
//     id: "pinning",
//     markers: false
//   }
// });

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".philosophie",
//     start: "top center",
//     end: "+=" + height + "%",
//     scrub: true,
//     id: "points"
//   }
// });

// points.forEach(function (elem, i) {
//   gsap.set(elem, { position: "absolute", top: 0 });

//   tl.set(elem, { zIndex: 100 });
//   tl.from(elem.getElementsByClassName('split right'), { opacity: 0 }, i)
//   tl.from(elem.getElementsByClassName('centered'), { opacity: 0, translateY: 100 }, i);

//   if (i != points.length - 1) {
//     tl.to(elem.getElementsByClassName('centered'), { opacity: 0, translateY: -100 }, i + .25)
//     tl.to(elem.getElementsByClassName('split right'), { opacity: 1 }, i + .25)
//   }
// });

// this is js
// images animation goes here
gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true })
  .to('.m', { duration: (i) => [0.8, 1.3][i], y: -10266, ease: 'steps(29)', stagger: -0.3 }, 0)
  .to('.frog', { duration: 2, scale: 1.1, transformOrigin: '50% 50%', ease: 'power2', onComplete: swapMask }, 0)

let currentMask = 1;
function swapMask() {
  if (currentMask == 3) currentMask = 1;
  else currentMask++;
  gsap.set('.m', { attr: { 'xlink:href': 'https://assets.codepen.io/721952/liquidMask' + currentMask + '.svg' } })
}

//slider js goes here

ScrollTrigger.defaults({
  markers: false,
  ease: 'SlowMo'
});

var points = gsap.utils.toArray(".point");

var height = 100 * points.length;

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".philosophie .wrapper",
    start: "top top",
    end: "+=" + height + "%",
    scrub: true,
    pin: true,
    id: "pinning",
    markers: false,
    ease: 'SlowMo'
  }
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".philosophie",
    start: "top center",
    end: "+=" + height + "%",
    scrub: true,
    id: "points",
    ease: 'SlowMo'
  }
});

points.forEach(function (elem, i) {
  gsap.set(elem, { position: "absolute", top: 0, ease: 'SlowMo' });

  t1.set(elem, { zIndex: 100, ease: 'SlowMo' });
  t1.from(elem.getElementsByClassName('split right'), { opacity: 1, ease: 'SlowMo' }, i)
  t1.from(elem.getElementsByClassName('centered'), { opacity: 1, translateY: 130, ease: 'SlowMo' }, i);

  if (i != points.length - 1) {
    t1.to(elem.getElementsByClassName('centered'), { opacity: 1, translateY: -130, ease: 'SlowMo' }, i + .25)
    t1.to(elem.getElementsByClassName('split right'), { opacity: 1, ease: 'SlowMo' }, i + .25)
  }
});

// menu animation
const ham = document.querySelector(".ham");
const menu = document.querySelector('div.menu-row');
const links = menu.querySelectorAll('div');
var menuAnimation = gsap.timeline({ paused: true });

menuAnimation.to(menu, {
  duration: 0.7,
  opacity: 1,
  height: '60vh', // change this to 100vh for full-height menu
  ease: 'expo.inOut',

})
menuAnimation.from(links, {
  duration: 0.7,
  opacity: 0,
  y: 20,
  stagger: 0.1,
  ease: 'expo.inOut',
}, "-=0.5");

menuAnimation.reverse();
ham.addEventListener('click', () => {
  console.log("opening menu")

  menuAnimation.reversed(!menuAnimation.reversed());
});

function reverse() {
  console.log("inside menu")

  menuAnimation.reversed(!menuAnimation.reversed());
}


$(document).ready(function () {

  function getOffsetLeft(elem) {
    var offsetLeft = 0;
    do {
      if (!isNaN(elem.offsetLeft)) {
        offsetLeft += elem.offsetLeft;
      }
    } while (elem = elem.offsetParent);
    return offsetLeft;
  }
  const sliderHeadings = document.querySelectorAll('.slider-headings');
  sliderHeadings.forEach(heading => {
    heading.addEventListener('click', event => {
      let height = 0;
      const id = parseInt(event.target.id);
      switch (id) {
        case 1:
          height = 1337;//$('#1').position().top;
          break;
        case 2:
          height = 2188;//$('#02').position().top;
          break;
        case 3:
          height = 3238;// $('#003').position().top;
          break;
        case 4:
          height = 4281;//$('#0004').position().top;
          break;
        case 5:
          height = 5206;//$('#00005').position().top;
          break;
        case 6:
          height = 6141;//$('#000006').position().top;
          break;
        case 7:
          height = 7137;// $('#0000007').position().top;
          break;
        case 8:
          height = 8278;//$('#00000008').position().top;
          console.log('i am 8')
          break;
        default:
          break;
      }
      //console.log('top ',height);
      //console.log('window',$(window).scrollTop())
      $(window).scrollTop(height);
    })
  })
})
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Your form submission logic here

    // Display the toast
    toast.classList.remove("hidden");

    // Hide the toast after a few seconds (e.g., 3 seconds)
    setTimeout(function () {
      toast.classList.add("hidden");
    }, 3000);
    form.reset();
  });
});
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})