 // Initialize ScrollReveal
 const sr = ScrollReveal();

 // Define the animation options
 const animationOptions = {
     origin: 'bottom',   // Animation origin (from the bottom of the element)
     distance: '50px',   // Animation distance
     duration: 1000,     // Animation duration in milliseconds
     delay: 0,           // Delay before the animation starts (in milliseconds)
     easing: 'ease',     // Easing function
     reset: false,       // Disable reset on reveal
 };

 // Add the scroll animation to elements with the 'scroll' class
 sr.reveal('.scroll', animationOptions);