import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const ourTimer = document.querySelector('.timer');
btnStart.disabled = true;

let timeOfDeadline = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      timeOfDeadline = Date.parse(selectedDates[0]);
    }
  },
};

const timer = {
  intervalId: null,

  start(rootSelector, deadline) {
    this.intervalId = setInterval(() => {
      const ms = deadline - Date.now();

      if (ms <= 0) {
        this.stop();
        return;
      }

      const { days, hours, minutes, seconds } = this.convertMs(ms);

      rootSelector.querySelector('[data-days]').textContent =
        this.addLeadingZero(days);
      rootSelector.querySelector('[data-hours]').textContent =
        this.addLeadingZero(hours);
      rootSelector.querySelector('[data-minutes]').textContent =
        this.addLeadingZero(minutes);
      rootSelector.querySelector('[data-seconds]').textContent =
        this.addLeadingZero(seconds);
      1000;
    });
  },

  stop() {
    clearInterval(this.intervalId);
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
};

btnStart.addEventListener('click', () => {
  timer.start(ourTimer, timeOfDeadline);
});

flatpickr(input, options);
