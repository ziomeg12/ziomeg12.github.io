

const keys_and_answers = [
    ["ser (yo)", "fui"],
    ["asdf", "ghjk"],
    ["qwer", "tyui"]
]

const word_display = document.getElementById("word-display");
const input = document.getElementById("player-input");
const container = document.getElementById("container");
const start_button = document.getElementById("start");
let word = "";
let answer = "";
let player_input = "";
let myIndex = 0;
let nextIndex = -2;
let score = 0;

function generate_word() {
    myIndex = Math.floor(Math.random() * (keys_and_answers.length)); 
    while(myIndex == nextIndex) {
        console.log("gf")
        myIndex = Math.floor(Math.random() * (keys_and_answers.length));
    }
    word = keys_and_answers[myIndex][0];
    answer = keys_and_answers[myIndex][1];
    word_display.textContent = word;

}

generate_word();

function check() {
    player_input = input.value;
    if(player_input == answer) {
        score += 1;
        console.log(score)
        document.getElementById("score").innerHTML = `Wynik: ${score}`
        nextIndex = myIndex;
        generate_word();
    }

}

function start() {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    start_button.style.display = "none";
}