// normal text animations
console.log("this is about page")
const services = gsap.utils.toArray(['p', 'h1', 'h3', 'h5', 'row', 'button', '.awrds-char', 'h4', '.brands', '.carousel']);
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

tl.from(mySplitText.chars, { opacity: 0, y: 15, ease: "power6", stagger: 0.03 }, 0);

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
    menuAnimation.reversed(!menuAnimation.reversed());
});

function reverse() {
    menuAnimation.reversed(!menuAnimation.reversed());
}


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 768,
            
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
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