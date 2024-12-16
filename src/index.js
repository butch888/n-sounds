import './index.scss'

const root = document.getElementById('app')

// Title
const title = document.createElement('h1')
title.textContent = 'Sounds of Nature'
root.append(title)

const btns = ['Rain', 'Summer', 'Winter']
const audioSources = {
  Rain: 'rain.mp3',
  Summer: 'summer.mp3',
  Winter: 'winter.mp3'
}
const imageSources = {
  Rain: 'rainy-bg.jpg',
  Summer: 'summer-bg.jpg',
  Winter: 'winter-bg.jpg'
}

// Add audio
const audio = document.createElement('audio')
root.append(audio)

let currentSound = null
let buttons = []
let volumeSlider = null

// Create volume slider
volumeSlider = document.createElement('input')
volumeSlider.style.display = 'block'
volumeSlider.style.margin = '0 0 10px 0'
volumeSlider.type = 'range'
volumeSlider.min = 0
volumeSlider.max = 1
volumeSlider.step = 0.01
volumeSlider.value = 1
root.append(volumeSlider)

// Set initial volume
audio.volume = parseFloat(volumeSlider.value)

// Add event listener to volume slider
volumeSlider.addEventListener('input', () => {
  audio.volume = parseFloat(volumeSlider.value)
})

btns.forEach(sound => {
  const btn = document.createElement('button')
  btn.textContent = sound
  root.append(btn)
  buttons.push({ button: btn, sound: sound, paused: true })

  btn.addEventListener('click', () => handleButtonClick(sound))
})

// Add image
const image = document.createElement('img')
image.style.width = '100%'
root.append(image)

function handleButtonClick(clickedSound) {
  const clickedButton = buttons.find(button => button.sound === clickedSound)

  if (clickedSound !== currentSound) {
    changeSoundAndImage(clickedSound)
  } else {
    togglePlayPause(clickedButton)
  }
}

function changeSoundAndImage(newSound) {
  if (currentSound) {
    audio.pause()
    const previousButton = buttons.find(button => button.sound === currentSound)
    previousButton.button.textContent = previousButton.sound
    previousButton.paused = true
  }
  
  currentSound = newSound
  audio.src = audioSources[newSound]
  image.src = imageSources[newSound]
  audio.play()

  const newButton = buttons.find(button => button.sound === newSound)
  newButton.button.textContent = 'Pause'
  newButton.paused = false
}

function togglePlayPause(button) {
  if (button.paused) {
    audio.play()
    button.button.textContent = 'Pause'
    button.paused = false
  } else {
    audio.pause()
    button.button.textContent = button.sound
    button.paused = true
  }
}
