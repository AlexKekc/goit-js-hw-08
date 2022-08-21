import { save, load } from './local-storage-service.js';

const LOCALSTORAGE_KEY_2 = 'feedback-form-state';
const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(saveUserData, 500));
refs.form.addEventListener('submit', submitUserData);

fillingFormFromLocalStorage();

function saveUserData(event) {
  const userDataObject = { email: '', message: '' };

  userDataObject.email = event.currentTarget.email.value;
  userDataObject.message = event.currentTarget.message.value;

  save(LOCALSTORAGE_KEY_2, userDataObject);
}

function submitUserData(event) {
  event.preventDefault();

  console.log(load(LOCALSTORAGE_KEY_2));
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY_2);
}

function fillingFormFromLocalStorage() {
  const savedData = load(LOCALSTORAGE_KEY_2);

  if (savedData) {
    refs.email.value = savedData.email;
    refs.message.value = savedData.message;
  }
}
