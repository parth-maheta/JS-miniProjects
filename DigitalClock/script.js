const clock = document.querySelector("#clock");

setInterval(() => {
  let currentdate = new Date();
  clock.innerHTML = currentdate.toLocaleTimeString();
}, 2000);
