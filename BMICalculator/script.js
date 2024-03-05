const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid Height! ${height} is not  valid.`;
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid Height! ${weight} is not  valid.`;
  } else {
    let BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>BMI IS ${"" + BMI}</span>`;
    if (BMI < 18.6) {
      result.innerHTML = `<span style = "color:red">BMI IS ${BMI} and  You are UnderWeight.</span>`;
    } else if (BMI >= 18.6 && BMI < 24.9) {
      result.innerHTML = `<span style = "color:green">BMI IS ${BMI} and  You are in NormalRange.</span>`;
    } else {
      result.innerHTML = `<span style = "color:red">BMI IS ${BMI} and  You are OverWeight.</span>`;
    }
  }
});
