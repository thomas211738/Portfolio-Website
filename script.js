
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
});

