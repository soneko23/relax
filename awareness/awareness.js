const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
})

const timer = 4;
let amountTimer = timer*60;

function readout() {
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTimer/60);
    let seconds = amountTimer%60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTimer--;
    if (amountTimer < 0) {
        stopTimer();
        amountTimer = 0;
    }
    function stopTimer() {
        clearInterval(timerId);
    }
}
let timerId = setInterval(readout, 1000);