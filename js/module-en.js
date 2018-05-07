
//Initial objects with words to learn
let weekDays = {
    понедельник:'Monday',
    вторник:'Tuesday',
    среда:'Wednesday',
    четверг:'Thursday',
    пятница:'Friday',
    суббота:'Saturday',
    воскресенье:'Sunday'
};
let weather = {
    солнечно:'sunny',
    тепло:'hot',
    холодно:'cold',
    снежно:'snowing',
    дождливо:'raining',
    пасмурно:'cloudy',

};
let numbersElevenTwenty = {
    одинадцать:'eleven',
    двенадцать:'twelve',
    тринадцать:'thirteen',
    четырнадцать:'fourteen',
    пятнадцать:'fifteen',
    шестнадцать:'sixteen',
    семнадцать:'seventeen',
    восемнадцать:'eighteen',
    девятнадцать:'nineteen',
    двадцать:'twenty'
};
let beach = {
    ловить_рыбу:'catch a fish',
    рисовать_картину:'paint a picture',
    есть_мороженое:'eat ice cream',
    фотографировать:'take a photo',
    слушать_музыку:'listen to music',
    искать_ракушки:'look for shells',
    читать_книгу:'read a book',
    строить_песочный_замок:'make a sandcastle',

};
let house = {
    ванная:'bathroom',
    спальня:'bedroom',
    гостинная:'living room',
    прихожая:'hall',
    столовая:'dining room',
    кухня:'kitchen',
    лестница:'stairs',
    подвал:'cellar',

};
let clothing = {
    джинсы:'jeans',
    пиджак:'jacket',
    ботинки:'shoes',
    кепка:'cap',
    футболка:'T-shirt',
    свитер:'sweater',
    юбка:'skirt',
    шорты:'shorts',
    носки:'socks',
    брюки:'trousers'

};
let human = {
    голова:'head',
    кисть:'hand',
    нога:'leg',
    колено:'knee',
    рука:'arm',
    пальцы:'fingers',
    ступня:'foot'
};
let animals = {
    тигр:'tiger',
    попугай:'parrot',
    верблюд:'camel',
    козел:'goat',
    медведь:'bear',
    акула:'shark',
    медуза:'jekkyfish',
    пенгвин:'penguin'
};
//array for shuffled keys, needs to be global
let shuffledWords;

//A function that shuffles keys of an object an results in a array
function shuffleWords(inputObject){
    shuffledWords = Object.keys(inputObject);
    shuffledWords.sort(function() { return 0.5 - Math.random() });
}

//variable to iterate among loops, needs to be global
let elem = 0;

//Variable to store the number of correct responses
let correctAnswersCount = 0;

//variable to store user choice for and object that contains words to learn
let userChoice;

function pauseAudio(x) {
    x.pause();
}
//Play sound
const playSound = note => {

        const audio = document.querySelector(`audio[data-note=${note}]`);
        audio.currentTime = 16;
        audio.play();
};

playSound("main");

//Start to play
function startPlay(){
    let x = document.querySelector("#mainMusic");
    pauseAudio(x);

    playSound("do");
    start.style.visibility = "hidden";
    respond.style.visibility = "visible";
    respond1.style.visibility = "visible";
    respond2.style.visibility = "visible";
    category.style.visibility = "visible";
    respond3.style.visibility = "visible";
    respond3.style.margin = "10px 0 5px 0";
    respond4.style.visibility = "visible";
    respond4.style.margin = "10px 0 5px 0";
    respond5.style.visibility = "visible";
    respond5.style.margin = "10px 0 5px 0";
    respond6.style.visibility = "visible";
    respond6.style.margin = "10px 0 5px 0";
    respond7.style.visibility = "visible";
    respond7.style.margin = "10px 0 5px 0";
}

//Initial definition
function init(array){
    shuffleWords(array);
    userChoice = array;
    inputLine.setAttribute("style","visibility: none");
    respond1.setAttribute("style","visibility: hidden");
    play(elem);
}

//Function that asks questions
function play(elem){
    respond.style.margin = "0 0 0 200px";
    category.style.visibility = "hidden";
    respond2.style.visibility = "hidden";
    respond3.style.visibility = "hidden";
    respond4.style.visibility = "hidden";
    respond5.style.visibility = "hidden";
    respond6.style.visibility = "hidden";
    respond7.style.visibility = "hidden";
    playSound("re");
    question.innerHTML = "Как будет на английском слово \"" + shuffledWords[elem] + "\"?";
    respond.innerHTML = "Проверить";
    document.getElementById("answer").focus();
    respond.setAttribute("onclick", `checkValue("${elem}")`);
}

//Function that check if the user entered the translation correctly
function checkValue(elem) {
    result.setAttribute("style", "visibility: none");
                if (document.getElementById('answer').value != "") {
        if (document.getElementById('answer').value.toLowerCase() === userChoice[shuffledWords[elem]].toLowerCase()) {
            result.setAttribute("style", "font-weight: bold; color: green; font-size:3em; background-color:white; width:600px; margin-top:10px");
            result.innerHTML = "Это правильный ответ!";
            correctAnswersCount++;
        }
        else {
            result.setAttribute("style", "font-weight: bold; color: red");
            result.innerHTML = "Неправильно. Корректно писать \"" + userChoice[shuffledWords[elem]] + "\".";
        }
        respond.innerHTML = "Далее";
        respond.setAttribute("onclick", `next("${elem}")`);
    }
    else {
        result.innerHTML = "Нужно что-то ввести.";
        play(elem);
    }
}

//The function that processes next element logic
function next(elem){
    if (elem++ < shuffledWords.length-1) {
        answer.value = "";
        result.setAttribute("style","visibility: hidden");
        play(elem);
    }
    else {
        playSound("main");
        question.innerHTML = "Игра закончена!";
        inputLine.setAttribute("style","visibility: hidden");
        result.innerHTML = "Твои результаты:<br>правильно " + correctAnswersCount +
            "<br>неправильно " + (shuffledWords.length - correctAnswersCount);
        respond.innerHTML = "Cыграть еще!";
        respond.setAttribute("onclick", `location.reload()`);

    }
}

//Code to check input value on enter, not just on button click
document.getElementById("answer")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("respond").click();
        }
    });