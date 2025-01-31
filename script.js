document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my website!");
    // script.js
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('exploding-image');
  const container = image.parentElement;

  // Create explosion particles
  const particleCount = 20;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.backgroundImage = `url(${image.src})`;
    container.appendChild(particle);
    particles.push(particle);
  }

  // Animate explosion
  image.animate([
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.8)' }
  ], { duration: 500, fill: 'forwards' });

  particles.forEach((particle, index) => {
    const angle = (index / particleCount) * Math.PI * 2;
    const radius = 150 + Math.random() * 50;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    particle.animate([
      { opacity: 0, transform: 'translate(0, 0) scale(0.1)' },
      { opacity: 1, transform: `translate(${x}px, ${y}px) scale(${0.1 + Math.random() * 0.3})` },
      { opacity: 0, transform: `translate(${x * 1.5}px, ${y * 1.5}px) scale(0.1)` }
    ], { duration: 1000, easing: 'ease-out', fill: 'forwards' });
  });
});

});
