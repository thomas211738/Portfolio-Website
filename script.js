
document.addEventListener("DOMContentLoaded", function() {



  let progress = document.getElementById('progressbar');
  let totalheight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){

    let pregressheight = (window.pageYOffset / totalheight) * 100;
    progress.style.height = pregressheight+ '%';
    progress.style.zIndex = 20000;
  }

    var navLinks = document.querySelectorAll('.navbar a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
  
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1500; // Adjust scrolling duration (in milliseconds) as needed
  
        var startTime = null;
  
        function animation(currentTime) {
          if (startTime === null) {
            startTime = currentTime;
          }
  
          var timeElapsed = currentTime - startTime;
          var scrollTo = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, scrollTo);
  
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        }
  
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) {
            return (c / 2) * t * t + b;
          }
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        }
  
        requestAnimationFrame(animation);
      }
    };
  

  const sentences = [
    "Thomas and Josh",
    "Data Scientists",
    "Quantitative Analysts",
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




          const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
              console.log(entry)
              if (entry.isIntersecting){
                entry.target.classList.add('show');
              }else{
                entry.target.classList.remove('show');
              }
            });
          });

          const observer2 = new IntersectionObserver((entries2) => {

            entries2.forEach((entry) => {
              console.log(entry)
              if (entry.isIntersecting){
                entry.target.classList.add('show2');
              }else{
                entry.target.classList.remove('show2');
              }
            });
          });

          const observer3 = new IntersectionObserver((entries3) => {

            entries3.forEach((entry) => {
              console.log(entry)
              if (entry.isIntersecting){
                entry.target.classList.add('show3');
              }else{
                entry.target.classList.remove('show3');
              }
            });
          });

          const observer4 = new IntersectionObserver((entries4) => {

            entries4.forEach((entry) => {
              console.log(entry)
              if (entry.isIntersecting){
                entry.target.classList.add('show4');
              }else{
                entry.target.classList.remove('show4');
              }
            });
          });


          
          const programing_languages_element = document.querySelectorAll('.programing_languages');
          const exp = document.querySelectorAll('.experience .section'); 
          const about1 = document.querySelectorAll('.about1'); 
          const about2 = document.querySelectorAll('.about2'); 
          const aboutp = document.querySelectorAll('.paragraph');
          const gr = document.querySelectorAll('.gradient-text');
          const tt = document.querySelectorAll('.container');
          const jt = document.querySelectorAll('.container2');


          programing_languages_element.forEach((el) => observer.observe(el));
          exp.forEach((el) => observer2.observe(el));
          about1.forEach((el) => observer3.observe(el));
          about2.forEach((el) => observer3.observe(el));
          aboutp.forEach((el) => observer3.observe(el));
          gr.forEach((el) => observer3.observe(el));
          tt.forEach((el) => observer4.observe(el));
          jt.forEach((el) => observer4.observe(el));
});



