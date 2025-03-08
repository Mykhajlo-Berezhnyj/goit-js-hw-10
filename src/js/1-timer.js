import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_blue.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let newInterval;
const timer = document.querySelector('.timer');
const startButton = document.querySelector("button[data-start]");
const inputData = document.getElementById('datetime-picker');
const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minute = document.querySelector('span[data-minutes]');
const second = document.querySelector('span[data-seconds]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0]; 
      console.log("🚀 ~ onClose ~ userSelectedDate:", userSelectedDate)
      if (userSelectedDate && userSelectedDate <= new Date()) {
          startButton.setAttribute('disabled', 'true');
          iziToast.show({
              title: 'Warning!',
              message: 'Please choose a date in the future',
              titleColor: '#bd34fe',
              messageColor: '#25acda',
              position: 'center',
              backgroundColor: '#d4cec7f3',
    
}); 
      } else {
           startButton.removeAttribute('disabled');
      }
  },
};


document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#datetime-picker", options);
});

startButton.addEventListener('click', dataTimer);

function dataTimer() {
    if (!userSelectedDate) {
        return;
    }
    startButton.setAttribute('disabled', 'true');
    inputData.disabled = true;
    
    const interval = setInterval(() => {
        const currentDate = new Date();
        newInterval = userSelectedDate - currentDate;
        if (newInterval <= 0) {
            inputData.disabled = false;
            clearInterval(interval);
            timer.querySelectorAll('.value, .label').forEach(element => {
                element.classList.remove('active');
        });
        defaultDate: new Date()
        iziToast.show({
              title: 'Warning!',
              message: 'Час до даної події минув!',
              titleColor: '#bd34fe',
              messageColor: '#25acda',
              position: 'center',
              backgroundColor: '#d4cec7f3',
    
}); 
        return
    } else {  
        displayData();
    }
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} 


//
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function displayData(value) {
    timer.querySelectorAll('.value, .label').forEach(element => {
        element.classList.add('active');
    });
       const interval = convertMs(newInterval);
        day.textContent = addLeadingZero(interval.days);
        hour.textContent = addLeadingZero(interval.hours);
        minute.textContent = addLeadingZero(interval.minutes);
        second.textContent = addLeadingZero(interval.seconds); 
}