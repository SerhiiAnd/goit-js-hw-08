import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const localStorageKey = 'feedback-form-state';

// Відстежуємо подію input на формі і зберігаємо дані у локальне сховище з використанням lodash.throttle
feedbackForm.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }, 500)
); // Збереження не частіше, ніж раз на 500 мілісекунд

// Перевіряємо сховище при завантаженні сторінки і заповнюємо поля форми
window.addEventListener('load', () => {
  const savedFormData = localStorage.getItem(localStorageKey);
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
});

// Обробляємо подію сабміту форми
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  // Очищаємо сховище
  localStorage.removeItem(localStorageKey);

  // Виводимо дані у консоль
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);
});
