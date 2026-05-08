document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function(){

        let name = document.querySelector("#name").value;
        console.log("Hi" + name);

        document.querySelector("h1").innerHTML = "Hi " + name;

        let now = new Date();

        let hour = now.getHours();
        if (hour < 12){
            document.querySelector("#time").innerHTML = "☀️ Good morning!";
        }   else if (hour < 18){
            document.querySelector("#time").innerHTML = "🌄 Good afternoon!";
        }   else {
            document.querySelector("#time").innerHTML = "🌙 Good night!";
        }

        let day = now.getDay();

        if (day == 0){
            document.querySelector("#day").innerHTML = "Today is Sunday!";
            document.querySelector("#friday").innerHTML = "Enjoy your Weekend";
        }   else if (day == 1){
            document.querySelector("#day").innerHTML = "Today is Monday!";
            document.querySelector("#friday").innerHTML = "Not Friday yet 😒";
        }   else if (day == 2){
            document.querySelector("#day").innerHTML = "Today is Tuesday!";
            document.querySelector("#friday").innerHTML = "Not Friday yet 😒";
        }   else if (day == 3){
            document.querySelector("#day").innerHTML = "Today is Wednesday!";
            document.querySelector("#friday").innerHTML = "Not Friday yet 😒";
        }   else if (day == 4){
            document.querySelector("#day").innerHTML = "Today is Thursday!";
            document.querySelector("#friday").innerHTML = "Not Friday yet 😒";
        }   else if (day == 5){
            document.querySelector("#day").innerHTML = "Today is Friday!";
            document.querySelector("#friday").innerHTML = "Finally Friday!";
        }   else if (day == 6){
            document.querySelector("#day").innerHTML = "Today is Sunday!";
            document.querySelector("#friday").innerHTML = "Enjoy your Weekend!";
        }




        return false;
    }

});
