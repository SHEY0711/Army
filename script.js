const gallery = document.getElementById('gallery');

// Lista de imágenes y mensajes
const cards = [
  { src: 'yoongi 1.jpeg', msg: 'Tu luz es tan suave como la mirada de Yoongi 💜' },
  { src: 'yoongi2.jpeg', msg: 'Eres arte, como cada letra que él escribe 🎶' },
  { src: 'yoongi 4.jpeg', msg: 'Siéntete orgullosa, como él en cada escenario 🌟' },
  { src: 'yoongi 3.jpeg', msg: 'Tu paz vale tanto como su sonrisa' },
  { src: 'yoongi 5.jpeg', msg: 'Sigue brillando, como su talento infinito ✨' },
  { src: 'yoongi 6.jpeg', msg: 'Nunca dejes de soñar. Yoongi tampoco lo hizo 💫' },
  { src: 'yoongi 7.jpeg', msg: 'El mundo necesita más personas como tú 🫶' },
  { src: 'yoongi 8 .jpeg', msg: 'Eres especial para quienes te rodean 💜' },
  { src: 'yoongi 9.jpeg', msg: 'Así como él inspira, tú también puedes hacerlo' },
  { src: 'yoongi 10.jpeg', msg: 'Gracias por ser tú, con corazón de ARMY 💜 KRIS' }
];

// Crear las tarjetas
cards.forEach(card => {
  const div = document.createElement('div');
  div.className = 'card';
  
  const img = document.createElement('img');
  img.src = card.src;

  const message = document.createElement('div');
  message.className = 'message';
  message.textContent = card.msg;

  div.appendChild(img);
  div.appendChild(message);

  // Evento para mostrar/ocultar mensaje
  div.addEventListener('click', () => {
    div.classList.toggle('active');
  });

  gallery.appendChild(div);

 

});

const playBtn = document.getElementById('playMusic');
const music = document.getElementById('bgMusic');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    playBtn.textContent = '⏸️ Pausar música';
  } else {
    music.pause();
    playBtn.textContent = '▶️ Reproducir música';
  }
  isPlaying = !isPlaying;
});