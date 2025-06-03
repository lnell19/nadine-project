const snowCanvas = document.getElementById('snow');
const snowCtx = snowCanvas.getContext('2d');
snowCanvas.width = window.innerWidth;
snowCanvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflake() {
  snowflakes.push({
    x: Math.random() * snowCanvas.width,
    y: -10,
    radius: Math.random() * 3 + 1,
    speedY: Math.random() * 2 + 1
  });
}

function updateSnowflakes() {
  snowCtx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
  snowflakes.forEach((s, i) => {
    s.y += s.speedY;
    snowCtx.beginPath();
    snowCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    snowCtx.fillStyle = '#fff';
    snowCtx.fill();
    if (s.y > snowCanvas.height) {
      snowflakes.splice(i, 1);
    }
  });
}

function animateSnow() {
  updateSnowflakes();
  requestAnimationFrame(animateSnow);
}

setInterval(createSnowflake, 100);
animateSnow();