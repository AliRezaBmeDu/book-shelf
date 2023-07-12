const clock = document.querySelector('.clock');
function updateTime() {
  const today = new Date();
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  clock.innerHTML = `today: ${date}, time: ${time}`;
}

updateTime();
setInterval(updateTime, 1000);
