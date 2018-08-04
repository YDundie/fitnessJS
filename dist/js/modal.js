let table = document.getElementById("todoWork");
let modalO = document.querySelector(".bg-modal");
let id = localStorage.length + 1; // used to find items and to save items that will be displayed
let counter = 1; // used to properly list items in table
let lastID = 0; // helping variable for finding lastID when refreshing the page

if (id >= 1) {
  id = getLastID();
  id++;
}
//opening modal

displayItems();

function openModal(open) {
  modalO.style.display = open;
}

//Adding activity to table

function addActivity(open) {
  let workout = {
    cardio: document.getElementById("min-cardio").value,
    strenght: document.getElementById("min-strenght").value,
    date: document.getElementById("date").value
  };
  workout.caloreis = workout.cardio * 5 + workout.strenght * 7;
  workout.id = id;

  //Checking if input is good

  if (workout.cardio === "0" && workout.strenght === "0") {
    modalO.style.display = open;
  } else if (workout.cardio < "0" || workout.strenght < "0") {
    modalO.style.display = open;
  } else {
    workout.date === ""
      ? (workout.date = "No date set")
      : (workout.date = workout.date);
    //saving input to local storage

    localStorage.setItem("workout" + id, JSON.stringify(workout));
    id = getLastID();
    id++;
    //calling a function to display items
    displayNewItem();
    modalO.style.display = open;
  }
}

// Content inside the modal

function activity(activity) {
  document.getElementById(activity).classList.toggle("selected");
  document.getElementById("hidden-" + activity).classList.toggle("hidenn");
  document.getElementById("min-" + activity).value = 0;
}

//Display items on load

function displayItems() {
  for (let i = 0; i <= getLastID(); i++) {
    //string to object

    var retrievedObject = localStorage.getItem("workout" + i);
    retrievedObject = JSON.parse(retrievedObject);

    if (retrievedObject != null) {
      var row = table.insertRow(counter);
      counter++;
      let index = 0;
      for (property in retrievedObject) {
        row.insertCell(index).innerHTML = retrievedObject[property];
        index++;
      }
      row.insertCell(index).innerHTML =
        "<a href'' onclick=remove(" + retrievedObject.id + ")>X</a>";
    }
  }
}

//Refreshing the page for new displayed item
function displayNewItem() {
  location.reload();
}

//Removing the item from localStorage and refreshing

function remove(ID) {
  localStorage.removeItem("workout" + ID);

  location.reload();
}

//FINDING THE LAST INPUTED ID

function getLastID() {
  Object.keys(localStorage).forEach(function(key) {
    let test = JSON.parse(localStorage.getItem(key));
    if (lastID < test.id) {
      lastID = test.id;
    }
  });

  return lastID;
}

//DELETE ALL IN TABLE

function clearList() {
  if (confirm("Are you sure you want to delete all the records")) {
    Object.keys(localStorage).forEach(function(key) {
      localStorage.removeItem(key);
    });
    displayNewItem();
  }
}
