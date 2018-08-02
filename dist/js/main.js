//select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
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

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

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

  console.log("funckija");
}
