

// JavaScript code for generating and animating the balloons
const balloonContainer = document.getElementById("balloon-container");

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7);
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
    }
}

function removeBalloons() {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
        balloonContainer.remove();
    }, 500);
}

// Declare a variable to store the number of clicks
let clickCount = 0;

window.addEventListener("load", () => {
    createBalloons(30);
});

window.addEventListener("click", () => {
    // Increment the click count by 1
    clickCount++;
    // Check if the click count is 7
    if (clickCount === 6) {
        // Call the removeBalloons function
        // removeBalloons();
        const button = document.getElementById("my-btn");
        button.textContent = "The final One";

    }
});

let messages = [
    'You are my sunshine!',
    'You make my heart smile!',
    'Every moment with you is precious!',
    'I am grateful for you every day!',
    'You are the best thing that ever happened to me!',
    'I love you more than words can express!',
];
let currentIndex = 0;

function showMessage() {
    if (currentIndex>= messages.length) {
        document.getElementById('finalMessage').style.display = 'block';
        document.getElementById('message').style.display = 'none';
    } else {
        document.getElementById('message').textContent =
            messages[currentIndex];
        createHeart();
        currentIndex++;
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}


