window.onload = function () {
  timer;
};

let time = '1800'; // Берём строку
let timerShow = document.getElementById("timer"); // Берём блок для показа времени

let timer = setInterval(function () {
  let seconds = time % 60 // Получаем секунды
  let minutes = time / 60 % 60 // Получаем минуты
  let hour = time / 60 / 60 % 60 // Получаем часы
  // Условие если время закончилось то...
  if (time <= 0) {
    // Таймер удаляется
    clearInterval(time);
    time = '1800';
    // Выводит сообщение что время закончилось
    alert("Время закончилось");
  } else { // Иначе
    // Создаём строку с выводом времени
    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    // Выводим строку в блок для показа таймера
    timerShow.innerHTML = strTimer;
  }
  --time; // Уменьшаем таймер
}, 1000)