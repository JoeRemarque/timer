const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#minutes');
const secs = document.querySelector('#seconds');

const frs = document.querySelector('.frs');
const second = document.querySelector('.second');
const countdown = document.querySelector('#countdown');

function updateCounter() {
  const currentDate = new Date();
  const nextDate = new Date(`June 21 2023 12:00:00`);
  const diff = nextDate - currentDate;

  const dayLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minLeft = Math.floor(diff / 1000 / 60) % 60;
  const secLeft = Math.floor(diff / 1000) % 60;

  days.innerText = dayLeft;
  hours.innerText = hoursLeft;
  mins.innerText = minLeft;
  secs.innerText = secLeft;
}

setInterval(updateCounter, 1000);

setTimeout(function () {
  frs.remove();
  second.remove();
  title.style.display = 'flex';
  countdown.style.display = 'flex';
}, 2500);
