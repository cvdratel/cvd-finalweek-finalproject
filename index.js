// clock
document.addEventListener("DOMContentLoaded", () => {
    const deg = 6;
    const hourArrow = document.querySelector("#js-clock-hour-arrow");
    const minuteArrow = document.querySelector("#js-clock-minute-arrow");
    const secondArrow = document.querySelector("#js-clock-second-arrow");
    if (!hourArrow || !minuteArrow || !secondArrow) return;
  
    setInterval(() => {
      let date = new Date();
      let currentHour = date.getHours() * 30;
      let currentMinute = date.getMinutes() * deg;
      let currentSecond = date.getSeconds() * deg;
      hourArrow.style.transform = `rotateZ(${
        currentHour + currentMinute / 12
      }deg)`;
      minuteArrow.style.transform = `rotateZ(${currentMinute}deg)`;
      secondArrow.style.transform = `rotateZ(${currentSecond}deg)`;
    });
  });

  //slider

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})







