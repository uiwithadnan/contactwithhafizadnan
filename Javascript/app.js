$(document).ready(function () {
    // Test for placeholder support
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache our selectors
            var $this = $(this),
                $label = $this.parent().find("label");

            switch (e.type) {
                case 'keyup': {
                    $label.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                    if ($this.val() == '') {
                        $label.addClass('js-hide-label');
                    } else {
                        $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    }
                } break;
                case 'focus': {
                    if ($this.val() !== '') {
                        $label.removeClass('js-unhighlight-label');
                    }
                } break;
                default: break;
            }
            // previous implementation with ifs
            /*if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }*/
        });
    }

    $('#copyright-year').html(new Date().getFullYear());
});

// menu animations and work
var mobileMenuOpened = false;
$('.menu-btn').on('click', function () {
    $('.menu-btn').hide()
    $('#navbar').hide('slow');
    $('.menu-btn').removeClass('ham');
    $('#cross-btn').addClass('ham');
    $('.menu-section').show('slow');
    $('body').addClass('menu-oppened');
});

$('#mobile-menu-btn').on('click', function () {
    reverse();
    $('#mobile-menu-btn').hide()
    $('#navbar').hide('slow')
    $('.menu-section').show('slow');
    $('body').addClass('menu-oppened');
    mobileMenuOpened = true;
});

$('#cross-btn').on('click', function () {
    reverse();
    $('.menu-btn').show()
    if (mobileMenuOpened == true) {
        $('#mobile-menu-btn').show()
        mobileMenuOpened = false;
    }
    setTimeout(() => {
        $('.menu-section').hide();
    }, 3000);
    $('#navbar').show()
    $('body').removeClass('menu-oppened');
    $('#navbar').addClass('mobile-only');
    $('.menu-btn').addClass('ham');
    $('#cross-btn').removeClass('ham');
});



// accordion

$(document).ready(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    };
});

// slider

var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("w3-black", "");
    }
    x[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " w3-black";
};

showDivs(slideIndex);

// normal text animations
// const services = gsap.utils.toArray(['p', 'h1', 'h3', '.h4', 'h5', 'row', 'button', '.project-img', '.awrds-char', 'h4', '.brands', '.carousel']);
// services.forEach((service) => {
//     const anim = gsap.fromTo(service, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
//     ScrollTrigger.create({
//         trigger: service,
//         animation: anim,
//         toggleActions: 'play none none none',
//         once: true,
//     });
// });

// //header text animations
// gsap.registerPlugin(ScrollTrigger);
// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".h1",
//         toggleActions: "restart none none none"
//     }
// }),
//     mySplitText = new SplitText(".h1", {
//         type: "words, lines, chars"
//     });

// tl.from(mySplitText.chars, { opacity: 0, y: 15, ease: "power6", stagger: 0.03 }, 0);


// menu animation
