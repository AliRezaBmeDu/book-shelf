const clock = document.querySelector('.clock');
function updateTime() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var dateTime = 'today: ' + date+' '+'time: '+ time;
  clock.innerHTML =  dateTime;
}

updateTime()
setInterval(updateTime, 1000)
