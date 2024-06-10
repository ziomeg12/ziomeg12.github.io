const keys_and_answers = [
    ["ser (yo)", "fui"],
    ["hablar (yo)", "hable"],
    ["ver (el)", "vio"],
    ["escribir (nos)", "escribimos"],
    ["poder (vos)", "pudisteis"],
    ["morir (el)", "murio"],
    ["pedir (el)", "pidio"],
    ["tener (vos)", "tuvisteis"],
    ["saber (tu)", "supiste"],
    ["decir (ellas)", "dijeron"],
    ["bailar (uds)", "bailaron"],
    ["leer (el)", "leyo"],
    ["comer (vos)", "comisteis"],
    ["hacer (el)", "hizo"],
    ["saltar (vos)", "saltasteis"],
    ["poner (tu)", "pusiste"],
    ["traer (ella)", "trajo"],
    ["vivir (nos)", "vivimos"],
    ["tocar (yo)", "toque"],
    ["caer (ud)", "cayo"],
    ["correr (vos)", "corristeis"],
    ["ir (yo)", "fui"],
    ["salir (yo)", "sali"],
    ["marchar (nos)", "marchamos"],
    ["volver (tu)", "volviste"],
    ["esperar (vos)", "esperasteis"],
    ["construir (ellos)", "construyeron"],
    ["escuchar (vos)", "escuchasteis"],
    ["beber (yo)", "bebi"],
    ["creer (el)", "creyo"],
    ["apagar (ella)", "apago"],
    ["nadar (vos)", "nadasteis"],
    ["abrir (yo)", "abri"],
    ["poder (tu)", "pudiste"],
]

let used_index = [];

const word_display = document.getElementById("word-display");
const input = document.getElementById("player-input");
const container = document.getElementById("container");
const start_button = document.getElementById("start");
const message = document.getElementById("message");
let word = "";
let answer = "";
let player_input = "";
let myIndex = 0;
let nextIndex = -2;
let score = 0;

function generate_word() {
    myIndex = Math.floor(Math.random() * (keys_and_answers.length)); 

    while(used_index.includes(myIndex) && used_index.length < keys_and_answers.length) {
        myIndex = Math.floor(Math.random() * (keys_and_answers.length));
    }

    if(used_index.length > keys_and_answers.length) {
        used_index = []
    }

    used_index[used_index.length] = myIndex;
    console.log(used_index)

    word = keys_and_answers[myIndex][0];
    answer = keys_and_answers[myIndex][1];
    word_display.textContent = word;

}

generate_word();

function check() {
    player_input = input.value;
    player_input = player_input.toLowerCase();
    player_input = player_input.replace("é","e")
    player_input = player_input.replace("è","e")
    player_input = player_input.replace("á","a")
    player_input = player_input.replace("à","a")
    player_input = player_input.replace("ì","i")
    player_input = player_input.replace("í","i")
    player_input = player_input.replace("ó","o")
    player_input = player_input.replace("ò","o")
    player_input = player_input.replace("ù","u")
    player_input = player_input.replace("ú","u")
    player_input = player_input.replace("ñ","n")
    if(player_input == answer) {
        score += 1;
        console.log(score)
        document.getElementById("score").innerHTML = `Wynik: ${score}`
        nextIndex = myIndex;
        message.textContent = "Poprawna odpowiedź";
        message.style.display = "block";
        message.style.backgroundColor = "springgreen";

        generate_word();
    }
    else {
        message.style.display = "block";
        message.textContent = "Niepoprawna odpowiedź";
        message.style.backgroundColor = "red";
    }
    input.value = ""
}

function start() {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    start_button.style.display = "none";
}

function skip(){
    score -=1;
    document.getElementById("score").innerHTML = `Wynik: ${score}`
    message.style.display = "block";
    message.textContent = "Pominięto pytanie";
    nextIndex = myIndex;
    message.style.backgroundColor = "yellow";
    generate_word()
}
