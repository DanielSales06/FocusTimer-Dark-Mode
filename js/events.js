import {
  inputForestVolume,
  inputRainVolume,
  inputCoffeeVolume,
  inputFireVolume,
  changerBody,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
} from "./elements.js"

export default function ({controls, timer, sound}) {

  buttonLight.addEventListener("click", function() {
    changerBody.classList.toggle("dark")
    buttonLight.classList.toggle("hide")
    buttonDark.classList.toggle("hide")
  })

  buttonDark.addEventListener("click", function() {
    changerBody.classList.toggle("dark")
    buttonLight.classList.toggle("hide")
    buttonDark.classList.toggle("hide")
  })

  buttonPlay.addEventListener("click", function() {
    controls.play()
    timer.countdown()
  })

  buttonStop.addEventListener("click", function() {
    controls.stop()
    timer.reset()
  })

  buttonAdd.addEventListener("click", function (){
    timer.increaseMinutes()
  })

  buttonRemove.addEventListener("click", function (){
    timer.decreaseMinutes()
  })

  buttonForest.addEventListener("click", function (){
    controls.forest()
    sound.toggleAudioPlay(sound.forestAudio)
    sound.rainAudio.pause()
    sound.coffeeAudio.pause()
    sound.fireAudio.pause()
    inputForestVolume.addEventListener("input", sound.setAudioVolume)
  })

  buttonRain.addEventListener("click", function (){
    controls.rain()
    sound.forestAudio.pause()
    sound.toggleAudioPlay(sound.rainAudio)
    sound.coffeeAudio.pause()
    sound.fireAudio.pause()
    inputRainVolume.addEventListener("input", sound.setAudioVolume)
  })

  buttonCoffee.addEventListener("click", function (){
    controls.coffee()
    sound.forestAudio.pause()
    sound.rainAudio.pause()
    sound.toggleAudioPlay(sound.coffeeAudio)
    sound.fireAudio.pause()
    inputCoffeeVolume.addEventListener("input", sound.setAudioVolume)
  })

  buttonFire.addEventListener("click", function (){
    controls.fire()
    sound.forestAudio.pause()
    sound.rainAudio.pause()
    sound.coffeeAudio.pause()
    sound.toggleAudioPlay(sound.fireAudio)
    inputFireVolume.addEventListener("input", sound.setAudioVolume)
  })

  return {
    buttonLight,
    buttonDark,
    buttonPlay,
    buttonStop,
    buttonAdd,
    buttonRemove,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonFire
  }
}