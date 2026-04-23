let i = 0;

function showClicks(){
    let numClick = i++;
    let header = document.querySelector("button");

    header.innerHTML = i;
}
