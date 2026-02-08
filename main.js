// Fade in animations for intro
window.onload = () => {
    setTimeout(() => document.getElementById('welcomeText').classList.add('visible'), 500);
    setTimeout(() => document.getElementById('subText').classList.add('visible'), 1500);
};

// Smooth scroll function
function scrollToNext(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Falling Hearts Background Effect
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; // Or '💖' '💗'
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.fontSize = Math.random() * 25 + 15 + 'px';
    heart.style.opacity = Math.random() * 0.7 + 0.3; // Random opacity
    heart.style.transition = 'top 7s linear, transform 7s linear';
    document.getElementById('heartBackground').appendChild(heart);

    setTimeout(() => {
        heart.style.top = '110vh';
        heart.style.transform = `translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
    }, 100);

    setTimeout(() => heart.remove(), 7100); // Remove after falling
}
setInterval(createHeart, 500); // New heart every 0.5 seconds

// Purane Proposal Logic ko isse replace karein
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');

let yesSize = 1.5; // Initial font size in rem

// Jab 'No' par hover ya tap ho
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton() {
    // 1. No button ko random jagah bhagana
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);
    
    this.style.position = 'fixed';
    this.style.left = x + 'px';
    this.style.top = y + 'px';

    // 2. Yes button ko bada karna
    yesSize += 0.3;
    yesBtn.style.fontSize = yesSize + 'rem';
    yesBtn.style.padding = (yesSize * 10) + 'px ' + (yesSize * 20) + 'px';
}

// Jab 'Yes' click ho
yesBtn.addEventListener('click', function() {
    responseMessage.innerHTML = "I knew it!(isi liye maine no ka option diya hi nhi 😁)❤️ I love you Yashika! Aapne mera din bana diya!";
    noBtn.style.display = 'none'; // No button gayab
    this.style.fontSize = '2rem';
    this.innerHTML = "Forever! ❤️";
});
