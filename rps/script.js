
function Game(){

    const choise = prompt("Type the option you choosed");

    if (choise == 1 ) {

        console.log("Rock");
    }

    else if (choise == 2 ) {

        console.log("Paper");
    }

    else if (choise == 3 ) {

        console.log("Sissor's");
    }

    let bot = Math.random()
    bot = bot * 3;

    console.log(bot);

    let botChoise

    if (bot < 2){
        botChoise = "Rock"
    }

    else if (bot > 1 && bot < 2 ) {
        botChoise = "Paper"
    }

    else if (bot > 2 && bot < 3 ) {
        botChoise = "Sissor's"
    }


        console.log("Sissor's");
    }



