const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: x,
      y: y,
      speedX: (Math.random() - 0.5) * 8,
      speedY: (Math.random() - 0.5) * 8,
      size: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      life: 100
    });
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  });
}

function animate() {
  updateParticles();
  requestAnimationFrame(animate);
}

canvas.addEventListener('click', (e) => {
  createFirework(e.clientX, e.clientY);
});

setInterval(() => {
  createFirework(Math.random() * canvas.width, Math.random() * canvas.height);
}, 2000);

animate();