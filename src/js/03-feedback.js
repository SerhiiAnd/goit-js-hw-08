import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const submitButton = feedbackForm.querySelector('button[type="submit"]');

const localStorageKey = 'feedback-form-state';

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    saveFormData();
  }, 500)
);
window.addEventListener('load', () => {
  loadFormData();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formData);

  emailInput.value = '';
  messageTextarea.value = '';
});
