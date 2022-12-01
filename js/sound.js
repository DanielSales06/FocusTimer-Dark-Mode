import {
  inputForestVolume,
  inputRainVolume,
  inputCoffeeVolume,
  inputFireVolume
} from "./elements.js"

export default function() {
  const forestAudio = new Audio("./Audio/Floresta.wav")
  const rainAudio = new Audio("./Audio/Chuva.wav")
  const coffeeAudio = new Audio("./Audio/Cafeteria.wav")
  const fireAudio = new Audio("./Audio/Lareira.wav")

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireAudio.loop = true

  function setAudioVolume() {
    forestAudio.volume = inputForestVolume.value
    rainAudio.volume = inputRainVolume.value
    coffeeAudio.volume = inputCoffeeVolume.value
    fireAudio.volume = inputFireVolume.value
  }

  function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
  if (isPaused) {
    myAudio.play()
  } else {
    myAudio.pause()
  }
}

  return {
  setAudioVolume,
  toggleAudioPlay,
  forestAudio,
  rainAudio,
  coffeeAudio,
  fireAudio
  }
}