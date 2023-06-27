
document.addEventListener("DOMContentLoaded", function() {

  const sentences = [
    "Thomas and Josh",
    "Data Scientists",
    "Quant Analysts",
    "Software Engineers",
    "Financial Analysts"
  ];
  
  let currentSentenceIndex = 0;
  let currentSentence = "";
  let charIndex = 0;
  let typingTimeout;
  
  function typeWriter() {
    if (currentSentenceIndex === sentences.length) {
      currentSentenceIndex = 0;
    }
  
    currentSentence = sentences[currentSentenceIndex];
    currentSentenceIndex++;
  
    charIndex = 0;
    document.getElementById('typewriter').textContent = "";
    typeNextChar();
  }
  
  function typeNextChar() {
    if (charIndex === currentSentence.length) {
      typingTimeout = setTimeout(typeWriter, 2000); // Delay before typing the next sentence
      return;
    }
  
    const typewriterElement = document.getElementById('typewriter');
    typewriterElement.textContent += currentSentence.charAt(charIndex);
    charIndex++;
  
    typingTimeout = setTimeout(typeNextChar, 100); // Typing speed in milliseconds
  }
  
  function stopTypewriter() {
    clearTimeout(typingTimeout);
  }
  
  typeWriter(); // Start the typewriter effect
  
  
  


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

        var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        var parachuteElement = document.querySelector(".parachute-animation img");
        var rocketElement = document.querySelector(".rocket-animation img");
        var lightelement = document.querySelector(".light")
        var manelement = document.querySelector(".man img")
        var parachute2 = document.getElementById("parachute-2");
        var man2 = document.getElementById("man2");
        var man2 = man2.getElementsByTagName("img")[0]

        
        
        function fadeOutElement(element, time=0.05) {
          element.style.opacity = "0";
          element.style.transition = "opacity " + time + "s ease";
        }
        
        function fadeInElement(element, time=0.2) {
          element.style.opacity = "1";
          element.style.transition = "opacity " + time + "s ease";
        }
        
        window.addEventListener("scroll", function() {
          var scrollAmount = 5; // Adjust the scroll amount to control the speed and distance of the movement
      
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          if(scrollTop < 2500){
            fadeOutElement(manelement);
            fadeOutElement(man2);

            if (scrollTop > prevScrollPos) {
              // Scrolling Down
                fadeOutElement(rocketElement);
                fadeOutElement(lightelement);
                fadeInElement(parachuteElement);
                fadeInElement(parachute2);

          
              var swayAmount = 50; // Adjust the sway amount
              var parallaxTop = scrollTop / 0.9;
              var sway = Math.sin(scrollTop / 200) * swayAmount;
              var rocketsway =  Math.sin(scrollTop / 200) * 5;
              parachute2.style.transform = "translate(10%, " + parallaxTop + "px) rotate(" + -sway/1.2 + "deg)";
              parachuteElement.style.transform = "translate(-150%, " + parallaxTop + "px) rotate(" + sway + "deg)";
              rocketElement.style.transform = "translate(-50%, " + parallaxTop + "px)rotate(" + rocketsway + "deg)";
              lightelement.style.transform = "translate(-50%, " + parallaxTop + "px)rotate(" + -rocketsway + "deg)";
  
  
            } else {
              // Scrolling Up
                fadeOutElement(parachuteElement);
                fadeOutElement(parachute2);
                fadeInElement(rocketElement);
                fadeInElement(lightelement);
  
              var swayAmount = 50; // Adjust the sway amount
              var parallaxTop = scrollTop / 0.9;
              var sway = Math.sin(scrollTop / 200) * swayAmount;
              var rocketsway =  Math.sin(scrollTop / 200) * 5;
              parachute2.style.transform = "translate(10%, " + parallaxTop + "px) rotate(" + -sway/1.2 + "deg)";
              rocketElement.style.transform = "translate(-50%, " + parallaxTop + "px)rotate(" + rocketsway + "deg)";
              parachuteElement.style.transform = "translate(-150%, " + parallaxTop + "px) rotate(" + sway + "deg)";
              lightelement.style.transform = "translate(-50%, " + parallaxTop + "px)rotate(" + -rocketsway + "deg)";
  
            }
          } else{
              man2.style.transform = "translateX(20vw)";
              manelement.style.transform = "translateX(-25vw)";
              fadeInElement(man2, 0.5);
              fadeInElement(manelement, 0.5);
              fadeOutElement(parachuteElement);
              fadeOutElement(rocketElement);
              fadeOutElement(lightelement);
              fadeOutElement(parachute2);
              
          }
          
        
          prevScrollPos = scrollTop;
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
            gsap.to('.intro .header', { opacity: 1, scale: 1, duration: 2 });

          })
          .addTo(controller);

});



