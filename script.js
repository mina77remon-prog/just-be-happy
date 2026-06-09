// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const sound = new Audio("womp-womp.mp3");
const sound1 = new Audio("haha.mp3");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

   const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
let canPlay = true;

noBtn.addEventListener("mouseover", () => {
    if (canPlay) {
        sound.currentTime = 0;
        sound.play();

        canPlay = false;
        setTimeout(() => canPlay = true, 500);
    }

    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    noBtn.style.transform = `translate(
        ${Math.cos(angle) * distance}px,
        ${Math.sin(angle) * distance}px
    )`;
});
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
yesBtn.addEventListener("click", () => {
    sound1.currentTime = 0;
    sound1.play();
});