console.log('faq');

const questions = document.querySelectorAll('.faq__question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
  });
});
