//Business Logic for places we've been

function Place() {
  this.destinations = {};
  this.currentId = 0;
}

Place.prototype.addDestination = function (destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};
Place.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
Place.prototype.findDestination = function (id) {
  if (this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
};

//Business Logic
// object Constructor
function Destination(name, location, landmarks, timeOfYear, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

const destinations = [
  new Place(
    "Spain",
    "Europe",
    ["Retiro Park", "Plaza de España", "Prado Museum"],
    "Spring",
    "Visited Madrid and Mallorca"
  ),
  new Place(
    "Medellin",
    "Colombia",
    ["Guatape", "El Retiro Park", "Comuna 13"],
    "spring",
    "City of Eternal Spring"
  ),
  new Place(
    "Berlin", 
  "Germany", 
  ["Berlin Wall", "Bradenburg Gate"],
  "Spring"
  ),
];
