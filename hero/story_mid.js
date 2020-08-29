//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart = {"left": "290px"};
// let lightningEnd   = {"left": "900px", "top":"0px"};
let lightningEnd   = {"left": "900px"};
let options        = {"duration": 800};

let hitTheVallain = () => {
    let villainStart = {
        // transform : 'rotate(1000deg)',
        height: "500px",
        opacity:100
    };
    let VillainEnd = {
        // transform : 'rotate(1000deg)',
        height: "50px",
        opacity : 0,
    };
    let options = {"duration" : 1500};
    villain.animate([villainStart,VillainEnd],options);
}
//Run animation code here
lightning.animate([lightningStart, lightningEnd], options).onfinish = hitTheVallain;