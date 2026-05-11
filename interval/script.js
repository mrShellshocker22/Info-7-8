        let counter = 5;

function count() {

    document.querySelector('h1').innerHTML = counter;
    
    if (counter > 0){
        counter--;

        const alarm = new Audio("alarm.mp3")
            kick.currentTime = 0;
            kick.play();

    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };


});
