console.log("Running code in the JavaScript file");
let pizzaCatButton = document.getElementById("pizza-cat-button");

pizzaCatButton.addEventListener("click", pizzaCatButtonClicked);

function pizzaCatButtonClicked() {
    console.log("Hey you clicked the pizza cat button");

    let timesToRun = prompt("How many pizza cats do you want?");
    let timesToRunAsNumber = Number(timesToRun);

//    #inserted a loop here
    for(let timesToRunAsNumber=0; timesToRunAsNumber<timesToRun; timesToRunAsNumber++) {
    let img = document.createElement("img");
    img.src = "./images/pizza-cat.webp";
    document.body.appendChild(img);
    }
    // console.log("add pizza cat");
   
}


let vibeCatButton = document.getElementById("vibe-cat-button");
vibeCatButton.addEventListener("click", vibeCatButtonClicked);

function vibeCatButtonClicked() {
    console.log("add vibe cat");
    let img = document.createElement("img");
    img.src = "./images/vibe-cat.gif";
    document.body.appendChild(img);
}

for (let count=0; count<5; count++) {
    console.log("count is: " + count);
}
