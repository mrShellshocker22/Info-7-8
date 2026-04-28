

function coinFlip(){


    let coinNumber = Math.random()
    let body = document.querySelector("h1")

    if (coinNumber > 0.5){
        body.innerHTML = "Heads"
    }

    if (coinNumber < 0.5){
        body.innerHTML = "Tails"
    }
    
    console.log(coinNumber)
}

