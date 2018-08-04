//select DOM items
let sliderH = document.getElementById("myHeight");
let outputH = document.getElementById("height");
let sliderW = document.getElementById("myWeight");
let outputW = document.getElementById("weight");
let BMI = document.getElementById("color");
let save = 30.47;

//displaying values when slider are cheanged

calculateBMI();

sliderW.oninput = function() {
  outputW.innerHTML = this.value;
  calculateBMI();
};

sliderH.oninput = function() {
  outputH.innerHTML = this.value;
  calculateBMI();
};

//Calculating BMI

function calculateBMI() {
  save = BMI.textContent =
    Math.round((sliderW.value / Math.pow(sliderH.value / 100, 2)) * 100) / 100;

  if (save >= 18.5 && save < 25) {
    BMI.style.color = "lime";
  } else {
    BMI.style.color = "red";
  }
  highLight(save);
}

//toggeling beetween visible for inputs

function activity(activity) {
  document.getElementById(activity).classList.toggle("selected");
  document.getElementById("hidden-" + activity).classList.toggle("hidenn");
  document.getElementById("min-" + activity).value = null;
  clcBurnt();
}

//formula for calculating avrage calories burnt

function clcBurnt() {
  document.getElementById("cal").textContent =
    document.getElementById("min-cardio").value * 5 +
    document.getElementById("min-strenght").value * 7;
}

//Highlights li;

function highLight(number) {
  let li = document.querySelectorAll("#bmiCategories li");

  for (let i = 0; i < 4; i++) {
    li[i].style.color = "white";
  }

  li[getNumber(number)].style.color = "gold";
}

//returns a number based on input

function getNumber(number) {
  if (number < 18.5) {
    return 0;
  } else if (number >= 18.5 && number < 25) {
    return 1;
  } else if (number >= 25 && number < 30) {
    return 2;
  } else {
    return 3;
  }
}
