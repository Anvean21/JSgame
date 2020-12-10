//Скрипт смены картинок по клику
// var myImage = document.querySelector('img');

// myImage.onclick = function () {
//   var mySrc = myImage.getAttribute('src');
//   if (mySrc === 'images/naruto.png') {
//     myImage.setAttribute('src', 'images/some.JPG');
//   } else {
//     myImage.setAttribute('src', 'images/naruto.png');
//   }
// }
///////////////////////////////////////////////////////////////

//Смена текста селектора
// const para = document.querySelector('h1');
// para.addEventListener('click',Changeh1 )
// function Changeh1(){
//     let h = prompt("Enter a new h1")
//     para.textContent=h;
// }
//////////////////////////////////////////////////
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

guessField.focus(); //Помещает текстовый курсор сразу в поле инпута

function checkGuess() {
  var userGuess = Number(guessField.value); //Устанавливает значения с поля ввода
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' '; //Предыдущие результаты
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);//Добавляем событие к кнопке с помощью класса

function setGameOver() {
  guessField.disabled = true; //отключение ввода текста 
  guessSubmit.disabled = true;//отключение кнопки  
  resetButton = document.createElement('button'); //Создание нового элемента
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
//Удаляет все пукнты информации
  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
//Удаляет кнопку сброса из кода
  resetButton.parentNode.removeChild(resetButton);
//Включает элементы формы
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';
//Создает случайное число
  randomNumber = Math.floor(Math.random() * 100) + 1;
}