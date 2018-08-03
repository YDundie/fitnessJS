//select DOM items
let sliderH = document.getElementById("myHeight");
let outputH = document.getElementById("height");
let sliderW = document.getElementById("myWeight");
let outputW = document.getElementById("weight");
let BMI = document.getElementById("color");

sliderW.oninput = function() {
  outputW.innerHTML = this.value;
  calculateBMI();
};

sliderH.oninput = function() {
  outputH.innerHTML = this.value;
  calculateBMI();
};

function calculateBMI() {
  BMI.textContent =
    Math.round((sliderW.value / Math.pow(sliderH.value / 100, 2)) * 100) / 100;

  if (BMI.textContent >= 18.5 && BMI.textContent < 25) {
    BMI.style.color = "lime";
  } else {
    BMI.style.color = "red";
  }
}
function activity(activity) {
  document.getElementById(activity).classList.toggle("selected");
  document.getElementById("hidden-" + activity).classList.toggle("hidenn");
  document.getElementById("min-" + activity).value = 0;
  clcBurnt();
}

function clcBurnt() {
  document.getElementById("cal").textContent =
    document.getElementById("min-cardio").value * 5 +
    document.getElementById("min-strenght").value * 7;
}
