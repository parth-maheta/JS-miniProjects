const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let action = e.target.id;
    switch (action) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "red":
        body.style.backgroundColor = "red";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
    }
  });
});
