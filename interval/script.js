        let counter = 12;
        const alarm = new Audio("alarm.mp3")

        if ()


function count() {

    let minutes = Math.floor(counter/60);
    let seconds = counter % 60;

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    document.querySelector('h1').innerHTML = minutes + ":" + seconds;


    if (counter > 0){
        counter--;
    }
    else if (counter == 0){
            alarm.currentTime = 0;
            alarm.play();
    }

}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };


});
