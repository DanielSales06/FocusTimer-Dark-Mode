export default function Controls({
  buttonPlay,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
}) {

  function play() {
    buttonPlay.classList.add("focus")
    buttonStop.classList.remove("focus")
  }

  function stop() {
    buttonStop.classList.add("focus")
    buttonPlay.classList.remove("focus")
  }

  function forest() {
    buttonForest.classList.add("focus")
    buttonRain.classList.remove("focus")
    buttonCoffee.classList.remove("focus")
    buttonFire.classList.remove("focus")
  }

  function rain() {
    buttonForest.classList.remove("focus")
    buttonRain.classList.add("focus")
    buttonCoffee.classList.remove("focus")
    buttonFire.classList.remove("focus")
  }

  function coffee() {
    buttonForest.classList.remove("focus")
    buttonRain.classList.remove("focus")
    buttonCoffee.classList.add("focus")
    buttonFire.classList.remove("focus")
  }

  function fire() {
    buttonForest.classList.remove("focus")
    buttonRain.classList.remove("focus")
    buttonCoffee.classList.remove("focus")
    buttonFire.classList.add("focus")
  }

  return {
    play,
    stop,
    forest,
    rain,
    coffee,
    fire
  }  
}