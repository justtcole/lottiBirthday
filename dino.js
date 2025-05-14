let dino = document.getElementById("dino");
let cake = document.getElementById("cake");
let container = document.querySelector(".dino-container");

let dinoPos = 0;
let cakePos = 100;
let direction = 1;
let cakeDirection = 1;
const dinoSpeed = 2;
const cakeSpeed = 12;

function moveDino() {
    const containerWidth = container.offsetWidth;
    const dinoWidth = dino.offsetWidth;

    dinoPos += direction * dinoSpeed;

    if(dinoPos >= containerWidth - dinoWidth) {
        // dinoPos = containerWidth - dinoWidth;
        direction = -1;
        dino.style.setProperty('--scale', 'scaleX(-1)');
    } else if (dinoPos <= 0) {
        dinoPos = 0;
        direction = 1;
        dino.style.setProperty('--scale', 'scaleX(1)');
    }

    dino.style.left = dinoPos + "px";

    requestAnimationFrame(moveDino);
}

function moveCake() {
    const cakeWidth = cake.offsetWidth;
    const fullWidth = container.offsetWidth;
    const edgeBuffer = 80;
    const cakeContainerMin = edgeBuffer;
    const cakeContainerMax = fullWidth - cakeWidth - edgeBuffer;
    const cakeContainerWidth = fullWidth - 80;
    const buffer = 100;

    const distance = cakePos - dinoPos;


    if (cakePos <= cakeContainerMin) {
        cakePos = cakeContainerMin;
        cakeDirection = 1;
        cake.style.transform = 'scaleX(1)';
    }

    if (cakePos >= cakeContainerMax) {
        cakePos = cakeContainerMax;
        cakeDirection = -1;
        cake.style.transform = 'scaleX(-1)';
    }

    if (direction === 1 && distance < buffer && cakeDirection === 1) {
        cakePos += cakeSpeed;
    } else if (direction === -1 && -distance < buffer && cakeDirection === -1) {
        cakePos -= cakeSpeed;
    }

    cakePos = Math.max(cakeContainerMin, Math.min(cakeContainerMax, cakePos));
    cake.style.left = cakePos + "px";

    requestAnimationFrame(moveCake);
}

document.addEventListener("keydown", function (e) {
    if (e.code === "Space" && !dino.classList.contains("jump")) {
        dino.classList.add("jump");
        dino.style.transition = "bottom 0.3s ease";
        dino.style.bottom = "50px";
        setTimeout(() => {
            dino.style.bottom = "0";
            setTimeout(() => dino.classList.remove("jump"), 300);
        }, 300);
    }
});

dino.style.setProperty('--scale', 'scaleX(1)');

moveDino();
moveCake();





