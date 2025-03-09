import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_blue.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/error.svg';
import iconCaution from '../img/caution.svg';
import iconHello from '../img/hello.svg';

let userSelectedDate;
let interval;
let newInterval;
let isRunning = false;
const timer = document.querySelector('.timer');
const startButton = document.querySelector('button[data-start]');
const inputData = document.getElementById('datetime-picker');
const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minute = document.querySelector('span[data-minutes]');
const second = document.querySelector('span[data-seconds]');

setTimeout(() => {
  iziToast.show({
    title: 'Hello',
    message: 'Welcome to Timer!',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
    position: 'bottomRight',
    backgroundColor: '#0099FF',
    iconUrl: iconHello,
  });
}, 1000);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate && userSelectedDate <= new Date()) {
      startButton.setAttribute('disabled', 'true');
      console.log(
        'на мою думку onChange тут є кращим рішенням, він відразу при виборі дати дає повідомлення про помилку, швидша взаємодія з користувачем він зразу бачить що дата вибрана не вірно, не закриваючи календар '
      );
      iziToast.show({
        title: 'Error!',
        message: 'Please choose a date in the future',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        position: 'topRight',
        backgroundColor: '#EF4040',
        position: 'topRight',
        iconUrl: iconError,
      });
    }
  },
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    // console.log('🚀 ~ onClose ~ userSelectedDate:', userSelectedDate);
    if (userSelectedDate && userSelectedDate <= new Date()) {
      startButton.setAttribute('disabled', 'true');
      console.log(
        'Тут вже, якщо все ж таки якийсь настирний користувач вибере все ж таки стару дату, додав повідомлення з кнопкою. при натисканні на яку перемикаємося в режим відліку періоду часу, скільки пройшло з памятної для нього дати :) '
      );
      iziToast.show({
        title: 'Warning!',
        message:
          'Ви вибрали дату в минулому, бажаєте дізнатися скільки часу минуло від цієї дати?',
        titleColor: '#0000FF',
        messageColor: '#0000FF',
        position: 'center',
        backgroundColor: '#FFA000',
        layout: 2,
        iconUrl: iconCaution,
        buttons: [
          [
            '<button class="btn">OK</button>',
            function (instance, toast) {
              startButton.removeAttribute('disabled');
              instance.hide({ transitionOut: 'fadeOut' }, toast);
            },
          ],
        ],
      });
    } else {
      startButton.removeAttribute('disabled');
    }
  },
};

document.addEventListener('DOMContentLoaded', function () {
  flatpickr('#datetime-picker', options);
});

startButton.addEventListener('click', dataTimer);

function dataTimer() {
  if (isRunning) {
    console.log('🚀 ~ dataTimer ~ isRunning:', isRunning);
    resetTimer();
    return;
  }
  if (!userSelectedDate) {
    return;
  }
  inputData.disabled = true;
  const currentDate = new Date();
  let differenceData = userSelectedDate - currentDate;
  if (differenceData > 0) {
    startButton.setAttribute('disabled', 'true');
  } else {
    startButton.textContent = 'Stop';
  }
  isRunning = true;

  interval = setInterval(() => {
    const currentDate = new Date();
    newInterval = userSelectedDate - currentDate;
    if (newInterval <= 0 && differenceData > 0) {
      clearInterval(interval);
      differenceData = 0;
      inputData.disabled = false;
      timer.querySelectorAll('.value, .label').forEach(element => {
        element.classList.remove('active');
        isRunning = false;
      });
      defaultDate: new Date();
      iziToast.show({
        title: 'Warning!',
        message: 'Час до даної події минув!',
        titleColor: '#bd34fe',
        messageColor: '#25acda',
        position: 'center',
        backgroundColor: '#d4cec7f3',
      });
      return;
    }
    if (differenceData < 0) {
      newInterval = -newInterval;
    }
    displayData();
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function displayData(value) {
  timer.querySelectorAll('.value, .label').forEach(element => {
    element.classList.add('active');
  });
  const timeInterval = convertMs(newInterval);
  day.textContent = addLeadingZero(timeInterval.days);
  hour.textContent = addLeadingZero(timeInterval.hours);
  minute.textContent = addLeadingZero(timeInterval.minutes);
  second.textContent = addLeadingZero(timeInterval.seconds);
}

function resetTimer() {
  day.textContent = '00';
  hour.textContent = '00';
  minute.textContent = '00';
  second.textContent = '00';
  userSelectedDate = null;
  newInterval = 0;
  isRunning = false;
  startButton.textContent = 'Start';
  inputData.disabled = false;
  clearInterval(interval);
  startButton.setAttribute('disabled', 'true');
  timer.querySelectorAll('.value, .label').forEach(element => {
    element.classList.remove('active');
  });
}
