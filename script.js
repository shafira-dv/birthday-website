/* ===========================================
   BIRTHDAY WEBSITE
   script.js
=========================================== */

/* ===========================================
   ELEMENT
=========================================== */

const loading = document.getElementById("loading");
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const pages = document.querySelectorAll(".page");

let currentPage = 0;
let autoSlide;

/* ===========================================
   LOADING
=========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.transition = "1s";

        setTimeout(() => {

            loading.style.display = "none";

        },1000);

    },2000);

});

/* ===========================================
   START BUTTON
=========================================== */

startBtn.addEventListener("click", () => {

    music.play();

    showPage(1);

    startAutoSlide();

});

/* ===========================================
   SHOW PAGE
=========================================== */

function showPage(index){

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage = index;

}

/* ===========================================
   AUTO SLIDE
=========================================== */

function startAutoSlide(){

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        currentPage++;

        if(currentPage >= pages.length){

            clearInterval(autoSlide);

            return;

        }

        showPage(currentPage);

        if(currentPage == 2){

            createConfetti();

        }

        if(currentPage == 4){

            launchFireworks();

        }

    },7000);

}

/* ===========================================
   CONFETTI
=========================================== */

function createConfetti(){

    const container = document.getElementById("confetti");

    for(let i=0;i<150;i++){

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random()*100+"vw";

        confetti.style.animationDuration =
        (Math.random()*3+2)+"s";

        confetti.style.background =
        randomColor();

        confetti.style.width =
        Math.random()*8+5+"px";

        confetti.style.height =
        Math.random()*12+8+"px";

        container.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

/* ===========================================
   FIREWORKS
=========================================== */

function launchFireworks(){

    const fire = document.getElementById("fireworks");

    for(let i=0;i<15;i++){

        setTimeout(()=>{

            createFirework(fire);

        },i*400);

    }

}

function createFirework(container){

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left =
    Math.random()*90+"vw";

    firework.style.top =
    Math.random()*60+"vh";

    firework.style.background =
    randomColor();

    container.appendChild(firework);

    setTimeout(()=>{

        firework.remove();

    },1000);

}

/* ===========================================
   RANDOM COLOR
=========================================== */

function randomColor(){

    const colors=[

        "#FFD700",
        "#00FFFF",
        "#FF4D6D",
        "#7CFFCB",
        "#9D4EDD",
        "#4CC9F0",
        "#FFFFFF",
        "#89CFF0"

    ];

    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}

/* ===========================================
   RESTART
=========================================== */

restartBtn.addEventListener("click",()=>{

    clearInterval(autoSlide);

    showPage(0);

    music.currentTime = 0;

    music.play();

});

/* ===========================================
   KEYBOARD SUPPORT
=========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentPage < pages.length-1){

            showPage(currentPage+1);

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentPage>0){

            showPage(currentPage-1);

        }

    }

});

/* ===========================================
   END
=========================================== */