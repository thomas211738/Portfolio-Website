document.addEventListener("DOMContentLoaded", function () {

  // ----- Sticky header -----
  window.addEventListener("scroll", function () {
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 0);
  }, { passive: true });

  // ----- Hamburger menu -----
  var hamburger = document.getElementById("hamburger");
  var navbar = document.querySelector(".navbar");
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("open");
      navbar.classList.toggle("open");
    });
    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("open");
        navbar.classList.remove("open");
      });
    });
  }

  // ----- Smooth scroll -----
  document.querySelectorAll(".navbar a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = this.getAttribute("href");
      if (!href || href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      var start = window.pageYOffset;
      var distance = target.offsetTop - start;
      var duration = 1500;
      var startTime = null;
      function step(now) {
        if (!startTime) startTime = now;
        var elapsed = now - startTime;
        var t = elapsed / duration;
        t = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        window.scrollTo(0, start + distance * t);
        if (elapsed < duration) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  });

  // ----- Typewriter -----
  var sentences = [
    "Thomas and Josh",
    "Data Scientists",
    "Quantitative Analysts",
    "Software Engineers",
    "Financial Analysts"
  ];
  var sentenceIdx = 0, charIdx = 0;
  var currentSentence = "";

  function typeWriter() {
    if (sentenceIdx === sentences.length) sentenceIdx = 0;
    currentSentence = sentences[sentenceIdx++];
    charIdx = 0;
    document.getElementById("typewriter").textContent = "";
    typeNextChar();
  }

  function typeNextChar() {
    if (charIdx === currentSentence.length) {
      setTimeout(typeWriter, 2000);
      return;
    }
    document.getElementById("typewriter").textContent += currentSentence.charAt(charIdx++);
    setTimeout(typeNextChar, 100);
  }

  typeWriter();

  // ----- VANTA background -----
  if (typeof VANTA !== "undefined") {
    VANTA.NET({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.00,
      scaleMobile: 0.75
    });
  }

  // ----- Scroll animations (single RAF-throttled listener) -----
  var progress = document.getElementById("progressbar");
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  var ticking = false;

  var parachuteEl = document.querySelector(".parachute-animation img");
  var parachute2 = document.getElementById("parachute-2");
  var rocketEl = document.querySelector(".rocket-animation img");
  var lightEl = document.querySelector(".light");
  var manEl = document.querySelector(".man img");
  var man2Wrap = document.getElementById("man2");
  var man2El = man2Wrap ? man2Wrap.getElementsByTagName("img")[0] : null;

  function fadeOut(el, t) {
    if (!el) return;
    el.style.transition = "opacity " + (t || 0.05) + "s ease";
    el.style.opacity = "0";
  }

  function fadeIn(el, t) {
    if (!el) return;
    el.style.transition = "opacity " + (t || 0.2) + "s ease";
    el.style.opacity = "1";
  }

  function onScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Progress bar
    if (progress && totalHeight > 0) {
      progress.style.height = ((scrollTop / totalHeight) * 100) + "%";
    }

    // Parachute / rocket parallax
    if (scrollTop < 2500) {
      fadeOut(manEl);
      fadeOut(man2El);

      var sway = Math.sin(scrollTop / 200) * 50;
      var rockSway = Math.sin(scrollTop / 200) * 5;
      var parallaxTop = scrollTop / 0.9;

      if (scrollTop > prevScrollPos) {
        fadeOut(rocketEl);
        fadeOut(lightEl);
        fadeIn(parachuteEl);
        fadeIn(parachute2);
      } else {
        fadeOut(parachuteEl);
        fadeOut(parachute2);
        fadeIn(rocketEl);
        fadeIn(lightEl);
      }

      if (parachuteEl) parachuteEl.style.transform = "translate(-150%, " + parallaxTop + "px) rotate(" + sway + "deg)";
      if (parachute2) parachute2.style.transform = "translate(10%, " + parallaxTop + "px) rotate(" + (-sway / 1.2) + "deg)";
      if (rocketEl) rocketEl.style.transform = "translate(-50%, " + parallaxTop + "px) rotate(" + rockSway + "deg)";
      if (lightEl) lightEl.style.transform = "translate(-50%, " + parallaxTop + "px) rotate(" + (-rockSway) + "deg)";
    } else {
      if (man2El) man2El.style.transform = "translateX(20vw)";
      if (manEl) manEl.style.transform = "translateX(-25vw)";
      fadeIn(man2El, 0.5);
      fadeIn(manEl, 0.5);
      fadeOut(parachuteEl);
      fadeOut(rocketEl);
      fadeOut(lightEl);
      fadeOut(parachute2);
    }

    prevScrollPos = scrollTop;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // ----- Intersection Observers -----
  var observerOpts = { threshold: 0.1 };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle("show", e.isIntersecting); });
  }, observerOpts);

  var observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle("show2", e.isIntersecting); });
  }, observerOpts);

  var observer3 = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle("show3", e.isIntersecting); });
  }, observerOpts);

  var observer4 = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle("show4", e.isIntersecting); });
  }, observerOpts);

  document.querySelectorAll(".programing_languages").forEach(function (el) { observer.observe(el); });
  document.querySelectorAll(".experience .section").forEach(function (el) { observer2.observe(el); });
  document.querySelectorAll(".about1, .about2, .paragraph, .gradient-text").forEach(function (el) { observer3.observe(el); });
  document.querySelectorAll(".container, .container2").forEach(function (el) { observer4.observe(el); });
});
