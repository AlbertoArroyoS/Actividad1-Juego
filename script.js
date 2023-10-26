let site;
let myName;
let changeName;
let buttonStart;
let opponentScore = 0;
let playerScore = 0;
let scoreOpponent;
let yourScore;
let rock;
let paper;
let scissor;
let lizard;
let spock;
let yourChoice;
let opponentChoice;
let result;
let buttonRules;
let opponentInterval;
let gameActive = false;

function variableInitialization(){
    site = document.getElementById("site");
    myName = document.getElementById("name");
    changeName = document.getElementById("changeName");
    buttonStart = document.getElementById("start"); 
    scoreOpponent = document.getElementById("opponent-score");
    yourScore = document.getElementById("your-score");
    rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissor = document.getElementById("scissor");
    lizard = document.getElementById("lizard");
    spock = document.getElementById("spock");
    yourChoice = document.getElementById("your-choice");
    opponentChoice = document.getElementById("opponent-choice");
    result = document.getElementById("result");
    buttonRules = document.getElementById("rules");
};

function starting(){
    buttonStart.disabled = true;
    buttonRules.disabled = true;
    site.style.pointerEvents = "none";
    site.style.opacity = 0.5; 
    myName.focus(); 
};

function activeButton(){
    if(myName.value.length >= 2){
        buttonStart.disabled = false;
    }else {         
        buttonStart.disabled = true;
        starting();
        resetGame();
        stopRandomOpponentChoice();
    }
};

function activeGame() {
    if (buttonStart.disabled) {
        site.style.pointerEvents = "none"; 
        site.style.opacity = 0.5; 
        buttonStart.style.display = "block";
        buttonRules.style.display = "block";
    } else {
            site.style.pointerEvents = "auto";
            site.style.opacity = 1;
            buttonRules.disabled = false;
            buttonStart.disabled = true;
            startRandomOpponentChoice();
    }
};

function resetGame() {
    playerScore = 0;
    opponentScore = 0;
    yourScore.textContent = playerScore;
    scoreOpponent.textContent = opponentScore;
    result.textContent = '';
    changeName.textContent = 'Nombre';
};

function changeNames (){
    resetGame();
    document.getElementById("changeName").textContent = myName.value;
};

function popUpRules(){
    let popupImagen = new Image();
    popupImagen.src = "images/rulesGame.png";
    popupImagen.style.width = "100%";
    popupImagen.style.height = "100%";
    let ventanaEmergente = window.open("", "Popup", "width=600,height=400"); 
    ventanaEmergente.document.body.style.margin = "0";
    ventanaEmergente.document.body.appendChild(popupImagen);
};

function zoomInImage() {
    this.style.transform = "scale(1.2)";
    this.style.transition = "transform 0.3s";
};

function zoomOutImage() {
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.3s";
};

function getRandomOpponentChoice() {
    const opponentChoices = ["rock", "paper", "scissor", "lizard", "spock"];
        let randomIndex = Math.floor(Math.random() * opponentChoices.length);
        return opponentChoices[randomIndex];
};  

function startRandomOpponentChoice() {
    opponentInterval = setInterval(() => {
        const opponent = getRandomOpponentChoice();
        opponentChoice.src = `images/${opponent}.png`;
    }, 10); 
};

function stopRandomOpponentChoice() {
    clearInterval(opponentInterval);
};

function myChoice(choice) {

    if (gameActive) {
        return;
    }
    
    gameActive = true;

    const choiceButtons = [rock, paper, scissor, lizard, spock];
    choiceButtons.forEach((button) => {
        button.style.boxShadow = 'none'; 
    });

    const currentChoice = document.getElementById(choice);
    yourChoice.src = `images/${choice}.png`;
    stopRandomOpponentChoice();
    
    const opponent = getRandomOpponentChoice();
    opponentChoice.src = `images/${opponent}.png`;
    game(choice, opponent);

    currentChoice.style.boxShadow = '0 0 10px yellow';
    
    setTimeout(() => {
        currentChoice.style.boxShadow = "none";
        startRandomOpponentChoice();
        gameActive = false;

    }, 500); 
};

function game(myChoice, opponentChoice) {

    const rules = {
        rock: ["scissor", "lizard"],
        paper: ["rock", "spock"],
        scissor: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissor", "rock"]
    };

    if (myChoice === opponentChoice) {
        result.textContent = "Empate!";

    } else if (rules[myChoice].includes(opponentChoice)) {
        result.textContent = "Ganaste!";
        playerScore++;
    } else {
        result.textContent = "Perdiste!";
        opponentScore++;
    }

    yourScore.textContent = playerScore;
    scoreOpponent.textContent = opponentScore;
};

function setListeners(){
    myName.addEventListener("input", activeButton);
    buttonStart.addEventListener("click", changeNames);
    buttonStart.addEventListener("click", activeGame);
    buttonRules.addEventListener("click", popUpRules);

   const images = [rock, paper, scissor, lizard, spock];
    images.forEach((image) => {
        image.addEventListener("mouseover", zoomInImage);
        image.addEventListener("mouseout", zoomOutImage);
    });

    const choiceButtons = [rock, paper, scissor, lizard, spock];
    choiceButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const choice = button.id;
            myChoice(choice);
        });
    }); 
};

window.addEventListener("load",()=>{
    variableInitialization();
    starting();  
    setListeners();
});