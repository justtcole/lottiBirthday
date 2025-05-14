window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const modalContent = document.querySelector(".modal-content");
});



function burstFromSides() {
    // Von links
    confetti({
      particleCount: 900,
      angle: 60,
      spread: 55,
      origin: { x:0.3 , y: 0.6 }
    });
  
    // Von rechts
    confetti({
      particleCount: 900,
      angle: 120,
      spread: 55,
      origin: { x: 0.7, y: 0.6 }
    });
}
  
  



  