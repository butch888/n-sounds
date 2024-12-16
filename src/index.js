import './index.scss'

const root = document.getElementById('app')



// Title
const title = document.createElement('h1')
title.textContent = 'Sounds of Nature'
root.append(title)

const btns = ['Rain', 'Summer', 'Winter']

// Add sound
const audio = document.createElement('audio')
root.append(audio)

let isPlaying = false;

btns.map((el) => {
  const btn = document.createElement('button')
  btn.textContent = el
  root.append(btn)
  btn.addEventListener('click', (e) => {
    if (e.target.textContent === 'Rain') {
      audio.src = 'rain.mp3'
      image.src = 'rainy-bg.jpg'
    } else if (e.target.textContent === 'Summer') {
      audio.src = 'summer.mp3'
      image.src = 'summer-bg.jpg'
    } else if (e.target.textContent === 'Winter') {
      audio.src = 'winter.mp3'
      image.src = 'winter-bg.jpg'
    }

    if (!isPlaying) {
      audio.play();
      isPlaying = true;
      e.target.textContent = 'Pause';
    } else {
      audio.pause();
      isPlaying = false;
      e.target.textContent = 'Play';
    }

// Добавляем обработчик для завершения воспроизведения
  audio.onended = function() {
  isPlaying = false;
  e.target.textContent = el;
};

  })
})

// Add image
const image = document.createElement('img')
root.append(image)








