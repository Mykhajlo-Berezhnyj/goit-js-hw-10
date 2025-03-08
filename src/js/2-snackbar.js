import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const params = {
  delayInput: document.querySelector('input[type="number"]'),
  radiobuttons: document.querySelectorAll('input[name="state"]'),
  btnCreate: document.querySelector('button[type="submit"]'),
};

setTimeout(() => {
  iziToast.show({
    title: 'Hello',
    message: 'Welcome!',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
    position: 'bottomRight',
    backgroundColor: '#0099FF',
    iconUrl: '../img/hello.svg',
  });
}, 3000);

params.btnCreate.addEventListener('click', promiceCreate);

function promiceCreate(event) {
  const checkRadio = document.querySelector('input[name="state"]:checked');
  const delayValue = params.delayInput.value.trim();

  if (!checkRadio || delayValue === '') {
    iziToast.show({
      title: 'Caution',
      message: 'You forgot important data',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      position: 'topRight',
      backgroundColor: '#FFA000',
      iconUrl: '../img/caution.svg',
    });
    return;
  }
  event.preventDefault();

  const delay = Number(delayValue);
  const state = checkRadio.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(message => {
      iziToast.show({
        title: 'OK',
        message: message,
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        position: 'topRight',
        backgroundColor: ' #326101',
        iconUrl: '../img/ok.svg',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message: error,
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        position: 'topRight',
        backgroundColor: '#EF4040',
        iconUrl: '../img/error.svg',
      });
    });
}
