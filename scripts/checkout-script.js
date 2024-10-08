const items = document.querySelectorAll('.buy__item');

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    items.forEach((item) => {
      item.classList.remove('active');
    });

    item.classList.add('active');
  });
});

const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.popup__close');
const buttons = document.querySelectorAll('.btn-add');
const closeModal = () => {
  popup.classList.remove('active');
};

closeBtn.addEventListener('click', closeModal);
document.querySelector('.popup__body').addEventListener('click', closeModal);
document.querySelector('.popup__content').addEventListener('click', (e) => {
  e.stopPropagation();
});

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('click');
    popup.classList.add('active');
  });
});
