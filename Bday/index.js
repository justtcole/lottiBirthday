document.getElementById("lotti").addEventListener("click", function () {
    const landing = document.getElementById("landingPage");
    const home = document.getElementById("home");

    // Fall-Animation starten
    landing.classList.add("fall");

    setTimeout(() => {
        landing.style.display = "none";
        home.style.display = "block";
        home.style.opacity = 0;

        setTimeout(() => {
            burstFromSides(); 

        }, 500);

        setTimeout(() => {
            home.style.opacity = 1;
        }, 50);
    }, 500);
});