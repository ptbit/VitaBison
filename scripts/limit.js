console.log('limit');
document.addEventListener('DOMContentLoaded', function () {
  // Встановлюємо сьогоднішню дату у форматі "DD.MM.YYYY"
  const currentDate = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  // Знаходимо елемент для зміни дати
  const messageBlock = document.querySelector('.hero__message');
  const messageText = document.querySelector('.hero__message-text');
  messageText.innerHTML = `WARNING: Due to extremely high media demand, there is a limited supply of VitaBison™ in stock as of ${formattedDate}. Hurry!! <span id="countdown">10:00</span>`;

  messageBlock.classList.add('active');
  // Встановлюємо таймер на 10 хвилин (600 секунд)
  let timeLeft = 600;

  const countdownElement = document.getElementById('countdown');

  const timerInterval = setInterval(() => {
    // Обчислюємо хвилини та секунди
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Оновлюємо відображення таймера
    countdownElement.textContent = `${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;

    // Зменшуємо час
    timeLeft--;

    // Якщо час закінчився, зупиняємо таймер
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      countdownElement.textContent = '00:00';
    }
  }, 1000);
});
