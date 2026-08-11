// ============================
// Name (Only Change Here)
// ============================

const girlName = "Your My Best Friend";

// Auto Update Name
document.getElementById("girlName").textContent = girlName;
document.title = "Happy Birthday " + girlName + " ❤️";


// ============================
// Loader
// ============================

window.onload = function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(function () {

            loader.remove();

        }, 1000);

    }, 2500);

};


// ============================
// Typing Animation
// ============================

const code = `// Birthday Program ❤️

const birthdayGirl = "${girlName}";

let happiness = Infinity;
let smiles = Infinity;
let blessings = Infinity;

function celebrate(){

    console.log("Happy Birthday ❤️");

    console.log("May all your dreams come true.");

    console.log("Keep Smiling 🌸");

    console.log("Stay Blessed ✨");

}

celebrate();

let memories = [];

memories.push("Beautiful Smile");
memories.push("Kind Heart");
memories.push("Positive Energy");

console.log(memories);

console.log("Today is all about YOU 🎂");
`;

const typingArea = document.getElementById("typingArea");

let index = 0;

function typeCode() {

    if (index < code.length) {

        typingArea.textContent += code.charAt(index);

        index++;

        typingArea.scrollTop = typingArea.scrollHeight;

        setTimeout(typeCode, 22);

    }

}

setTimeout(typeCode, 2600);


// ============================
// Secret Card
// ============================

const secretBtn = document.getElementById("secretBtn");
const secretCard = document.getElementById("secretCard");

secretBtn.onclick = () => {

    if (secretCard.style.display === "block") {

        secretCard.style.display = "none";
        secretBtn.innerHTML = "💌 Open Secret";

    } else {

        secretCard.style.display = "block";
        secretBtn.innerHTML = "❤️ Hide";

        secretCard.scrollIntoView({
            behavior: "smooth"
        });

    }

};


// ============================
// Celebrate Button
// ============================

document.getElementById("celebrate").onclick = () => {

    alert("🎉 Happy Birthday " + girlName + " ❤️");

};

// ============================
// Music Player
// ============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Music";

    }

});




// ============================
// Floating Petals
// ============================

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-40px";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.pointerEvents="none";

    petal.style.zIndex="999";

    petal.style.opacity=Math.random();

    petal.style.transition="transform 8s linear";

    document.body.appendChild(petal);

    let x=(Math.random()*200)-100;

    setTimeout(()=>{

        petal.style.transform=
        `translate(${x}px,110vh) rotate(${Math.random()*720}deg)`;

    },50);

    setTimeout(()=>{

        petal.remove();

    },8000);

}

setInterval(createPetal,1200);




// ============================
// Celebrate Animation
// ============================

const celebrateBtn=document.getElementById("celebrate");

celebrateBtn.addEventListener("click",()=>{

    for(let i=0;i<40;i++){

        setTimeout(createPetal,i*80);

    }

});




// ============================
// Browser Title Animation
// ============================

const titles=[

"🎂 Happy Birthday ❤️",

"🌸 Keep Smiling",

"✨ Have a Wonderful Day",

"💖 Stay Blessed"

];

let titleIndex=0;

setInterval(()=>{

    document.title=titles[titleIndex];

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

},3000);




// ============================
// Soft Cursor Glow
// ============================

const glow=document.createElement("div");

glow.style.width="18px";

glow.style.height="18px";

glow.style.borderRadius="50%";

glow.style.background="#ff8ab7";

glow.style.position="fixed";

glow.style.pointerEvents="none";

glow.style.filter="blur(8px)";

glow.style.zIndex="9999";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";

    glow.style.top=e.clientY-9+"px";

});




// ============================
// Smooth Fade Sections
// ============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

// =======================================
// HEART EXPLOSION
// =======================================
// =======================================
// HEART EXPLOSION
// =======================================

function heartExplosion() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = (18 + Math.random() * 18) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "all 2s ease-out";

        document.body.appendChild(heart);

        const x = (Math.random() - 0.5) * 700;
        const y = (Math.random() - 0.5) * 700;

        requestAnimationFrame(() => {

            heart.style.transform =
                `translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`;

            heart.style.opacity = "0";

        });

        setTimeout(() => heart.remove(), 2000);

    }

}



// =======================================
// SIMPLE CONFETTI
// =======================================

function confetti() {

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.left = Math.random() * window.innerWidth + "px";
        piece.style.top = "-20px";
        piece.style.width = "8px";
        piece.style.height = "14px";
        piece.style.borderRadius = "2px";

        const colors = [
            "#ff6fa5",
            "#ffd166",
            "#7dd3fc",
            "#ffffff",
            "#c084fc"
        ];

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.pointerEvents = "none";
        piece.style.zIndex = "9998";

        document.body.appendChild(piece);

        const duration = 3000 + Math.random() * 3000;

        piece.animate([
            {
                transform: "translateY(0px) rotate(0deg)"
            },
            {
                transform:
                    `translate(${(Math.random()-0.5)*250}px,
                    ${window.innerHeight+100}px)
                    rotate(${720*Math.random()}deg)`
            }
        ], {
            duration: duration,
            easing: "linear"
        });

        setTimeout(() => piece.remove(), duration);

    }

}



// =======================================
// FIREWORKS
// =======================================

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function drawFirework() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;

    for(let i=0;i<80;i++){

        ctx.beginPath();

        ctx.arc(

            x + (Math.random()-0.5)*180,

            y + (Math.random()-0.5)*180,

            2,

            0,

            Math.PI*2

        );

        ctx.fillStyle =
            `hsl(${Math.random()*360},100%,65%)`;

        ctx.fill();

    }

}

setInterval(drawFirework,1200);



// =======================================
// CELEBRATE BUTTON
// =======================================

document.getElementById("celebrate").onclick = () => {

    confetti();

    heartExplosion();

    drawFirework();

    document.getElementById("messageSection")
        .scrollIntoView({
            behavior:"smooth"
        });

};



// =======================================
// SECRET BUTTON
// =======================================

secretBtn.addEventListener("dblclick",()=>{

    heartExplosion();

    alert("💖 Wishing you a lifetime of happiness!");

});



// =======================================
// END MESSAGE
// =======================================

setTimeout(()=>{

console.log("❤️ Website Made With Love & Code ❤️");

},5000);