export default function Timer ({
  minutesDisplay,
  secondsDisplay,
}) {

  let updateMinutes
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
  
    minutes = minutes === undefined ? minutes : minutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <=0) {
        resetTimer()
        return
      }

      if( seconds <= 0 ) {
        updateDefault()
        seconds = 60

        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateDefault(minutes) {
    updateMinutes = minutes
  }

  function increaseMinutes() {
    minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)
    
    updateDisplay(minutes, 0)
    updateDefault(minutes)
  }

  function decreaseMinutes() {
    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0)
    
    updateDisplay(minutes, 0)
    updateDefault(minutes)
  }

  return {
    updateDisplay,
    reset,
    countdown,
    updateDefault,
    increaseMinutes,
    decreaseMinutes
  }
}