import Sound from "./sound.js"
import Events from "./events.js"
import Timer from "./timer.js"
import Controls from "./controls.js"
import {
  buttonPlay,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
})

const timer = Timer ({
  minutesDisplay,
  secondsDisplay
})

Events({controls, timer, sound})