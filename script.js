
document.addEventListener("DOMContentLoaded", function() {
    VANTA.NET({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
      VANTA.WAVES({
        el: "#background2",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color:0x23153c,
        shininess: 90.00,
        waveHeight: 17.00,
        waveSpeed: 1.35,
        zoom: 1.8
        })
        var parallaxElement = document.querySelector(".parachute-animation img");
        var swayAmount = 50; // Adjust the sway amount
      
        window.addEventListener("scroll", function() {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          var parallaxTop = (scrollTop) / 0.9;
          var sway = Math.sin(scrollTop / 200) * swayAmount;
      
          parallaxElement.style.transform = "translate(-80%, " + parallaxTop + "px) rotate(" + sway + "deg)";
        });
        // Initialize ScrollMagic controller
        var controller = new ScrollMagic.Controller();

        // Create a ScrollMagic scene
        var scene = new ScrollMagic.Scene({
          triggerElement: '.intro', // Element that triggers the animation
          triggerHook: 0.7, // Adjust this value to trigger the animation at the desired scroll position
        })
          .on('enter', function () {
            // Animate the element when it enters the trigger position
            gsap.to('.gradient-text', { opacity: 1, scale: 1, duration: 2 });
          })
          .addTo(controller);



        // var parallaxElement = document.querySelector(".parachute-animation img");
        // var rocketElement = document.querySelector(".rocket-animation img");
        // var parallaxContainer = document.getElementById("parachute-section");
        // var containerTop = parallaxContainer.offsetTop;
        // var containerHeight = parallaxContainer.offsetHeight;
       
        // var rocketSpeed = 0.5; // Adjust the rocket speed

        // window.addEventListener("scroll", function() {
        //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //   var scrollPosition = scrollTop - containerTop;

        //   if (scrollPosition >= 0 && scrollPosition <= containerHeight) {
        //     var parallaxTop = scrollPosition / 3;
        //     var rocketTop = (scrollPosition - containerHeight) * rocketSpeed;

            
        //     rocketElement.style.transform = "translate(-50%, " + rocketTop + "px)";
        //   }
        // });

        
});

