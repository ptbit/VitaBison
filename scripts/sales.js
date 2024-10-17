document.addEventListener('DOMContentLoaded', function () {
  // Змінні для часу, які можна легко змінювати
  const initialDelay = 15000; // Затримка перед першим тостом (мс)
  const toastDisplayTime = 3000; // Час показу тосту (мс)
  const toastInterval = 15000; // Інтервал між тостами (мс)
  const maxShows = 5; // Максимальна кількість показів

  let showCount = 0;
  const toast = document.getElementById('toast');
  const saleText = document.querySelector('.sale__text');
  const progressBar = document.getElementById('progressBar');

  const messages = [
    { name: 'Quinn W.', state: 'MS', bottles: 4 },
    { name: 'Liam H.', state: 'TX', bottles: 5 },
    { name: 'Olivia J.', state: 'CA', bottles: 6 },
    { name: 'Noah B.', state: 'NY', bottles: 4 },
    { name: 'Emma L.', state: 'FL', bottles: 5 },
    { name: 'Sophia K.', state: 'AZ', bottles: 6 },
    { name: 'James T.', state: 'WA', bottles: 4 },
    { name: 'Mason A.', state: 'IL', bottles: 5 },
    { name: 'Isabella D.', state: 'NC', bottles: 6 },
    { name: 'Ethan M.', state: 'GA', bottles: 4 },
  ];

  function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  function showToast() {
    if (showCount >= maxShows) return;

    // Вибираємо випадкове повідомлення
    const randomMessage = getRandomMessage();
    saleText.innerHTML = `${randomMessage.name} - ${randomMessage.state} <br /> Purchased <span>${randomMessage.bottles}</span> Bottle(s) of Health <br /> Charm Male Enhancement`;

    // Показуємо тост і запускаємо анімацію прогрес-бару
    toast.classList.add('show');
    progressBar.style.transform = 'scaleX(1)'; // Початкова довжина лінії

    // Починаємо зменшувати прогрес-бар
    setTimeout(() => {
      progressBar.style.transform = 'scaleX(0)';
    }, 100); // Невелика затримка перед початком анімації

    // Ховаємо тост через час показу
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');

      setTimeout(() => {
        toast.classList.remove('hide');
        progressBar.style.transform = 'scaleX(1)'; // Відновлюємо стан прогрес-бару
      }, 500);
    }, toastDisplayTime); // Час показу тосту

    showCount++;
  }

  // Перший тост через затримку
  setTimeout(() => {
    showToast();
    const interval = setInterval(() => {
      if (showCount < maxShows) {
        showToast();
      } else {
        clearInterval(interval);
      }
    }, toastInterval);
  }, initialDelay);
});

