function Destination(name, location, landmarks, timeOfYear, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
//UI Logic
// document.getElementById("spain").addEventListener;

//Business Logic for places we've been

// function Place() {
//   this.destinations = {};
//   this.currentId = 0;
// }

// Place.prototype.addDestination = function (destination) {
//   destination.id = this.assignId();
//   this.destinations[destination.id] = destination;
// };
// Place.prototype.assignId = function () {
//   this.currentId += 1;
//   return this.currentId;
// };
// Place.prototype.findDestination = function (id) {
//   if (this.destinations[id] !== undefined) {
//     return this.destinations[id];
//   }
//   return false;
// };
Destination.prototype.displayDestination = function () {
  document.getElementById("destination-name").textContent = this.name;
  document.getElementById("destination-location").textContent = this.location;
  document.getElementById("destination-landmarks").textContent = this.landmarks;
  document.getElementById("destination-time-of-the-year").textContent =
    this.timeOfYear;
  document.getElementById("destination-notes").textContent = this.notes;
};
function addDestination(name, location, landmarks, timeOfYear, notes) {
  const destination = new Destination(
    name,
    location,
    landmarks,
    timeOfYear,
    notes
  );
  const destinationList = document.getElementById("destination-list");
  const destinationItem = document.createElement("li");
  destinationItem.textContent = name;
  destinationItem.addEventListener("click", function () {
    destination.displayDestination();
  });
  destinationList.append(destinationItem);
}

//Business Logic
// object Constructor

addDestination(
  "Spain",
  "Europe",
  "Retiro Park, Plaza de España, Prado Museum",
  "Spring",
  "Visited Madrid and Mallorca"
);
addDestination(
  "Medellin",
  "Colombia",
  "Guatape",
  "El Retiro Park",
  "Comuna 13",
  "spring",
  "City of Eternal Spring"
);
addDestination("Berlin", "Germany", "Berlin Wall, Bradenburg Gate", "Spring"),
  addDestination(
    "Santander",
    "Colombia",
    "Barichara, Guane, San Gil",
    "winter",
    "Visited San Gil and Barichara"
  );
