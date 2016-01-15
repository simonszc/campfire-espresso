function Kiosk (locName, minTraffic, maxTraffic, cupsPer, poundsPer) {
  this.locationName = locName;
  this.minHourlyTraffic = minTraffic;
  this.maxHourlyTraffic = maxTraffic;
  this.cupsPerCust = cupsPer;
  this.poundsPerCust = poundsPer;
  this.hourlyTraffic = [];
  this.totalTrafficCounter = 0;
  this.totalTraffic = [];
  this.soldCupsInCups = [];
  this.hourlyCupsInCups = [];
  this.soldCupsInPounds = [];
  this.soldToGoInPounds = [];
  this.soldPoundsTotal = [];
};
Kiosk.prototype.calculateHourlyTraffic = function() {
  this.hourlyTraffic = [];
  this.totalTrafficCounter = 0;
  this.totalTraffic = [];
  for (var i = 0; i < hoursOpen.length; i++) {
    this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
    this.totalTrafficCounter += this.hourlyTraffic[i];
    this.totalTraffic.push(this.totalTrafficCounter);
  }
};
Kiosk.prototype.calculateHourlySales = function (){
  this.soldCupsInCups = [];
  this.hourlyCupsInCups = [];
  this.soldCupsInPounds = [];
  this.soldToGoInPounds = [];
  this.soldPoundsTotal = [];
  var totalCupsInCups = 0;
  var totalCupsInPounds = 0;
  var totalToGoInPounds = 0;
  var totalPoundsSold = 0;
  for(var i = 0; i < hoursOpen.length; i++){
    CupsInCups = this.hourlyTraffic[i] * this.cupsPerCust;
    this.hourlyCupsInCups.push(CupsInCups);
    totalCupsInCups += this.hourlyTraffic[i] * this.cupsPerCust;
    this.soldCupsInCups.push(totalCupsInCups);
    totalCupsInPounds = this.soldCupsInCups[i] * 0.05;
    this.soldCupsInPounds.push(totalCupsInPounds);
    totalToGoInPounds += this.hourlyTraffic[i] * this.poundsPerCust;
    this.soldToGoInPounds.push(totalToGoInPounds);
    totalPoundsSold += this.hourlyTraffic[i] * this.cupsPerCust * 0.05 + this.hourlyTraffic[i] * this.poundsPerCust;
    this.soldPoundsTotal.push(totalPoundsSold.toFixed(1));
  }
};
var pike = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new Kiosk('Capitol Hill', 32,48, 3.2, 0.4);
var seaPubLib = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var southLakeUnion = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);
var allKiosks = [pike, capHill, seaPubLib, southLakeUnion, seaTacAirport, websiteSales];
var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
for (var i = 0; i < allKiosks.length; i++) {
  allKiosks[i].calculateHourlyTraffic();
  allKiosks[i].calculateHourlySales();
}

var newStoreForm = document.getElementById('new-store-form');

function handleStoreSubmit(event) {
  console.log(event);
  event.preventDefault();

  var newKioskLocation = event.target.where.value;
  var newKioskMin = parseInt(event.target.min.value);
  var newKioskMax = parseInt(event.target.max.value);
  var newKioskCups = parseInt(event.target.cups.value);
  var newKioskPounds = parseInt(event.target.pounds.value);

  if (!event.target.where.value || !event.target.min.value ||!event.target.max.value || !event.target.cups.value ||!event.target.pounds.value) {
    return alert('You left a field empty!')
  }
  else {
    var newKiosk = new Kiosk(newKioskLocation, newKioskMin, newKioskMax, newKioskCups, newKioskPounds);
    allKiosks.push(newKiosk);

    for (var i = 0; i < allKiosks.length; i++) {
      allKiosks[i].calculateHourlyTraffic();
      allKiosks[i].calculateHourlySales();
    }
    newKiosk.displayPoundsTable();
    newKiosk.displayCupsTable();
    newKiosk.displayTrafficTable();
  }
};

newStoreForm.addEventListener('submit', handleStoreSubmit);

Kiosk.prototype.displayPoundsTable = function() {
    document.getElementById('poundsDisplay').textContent = '';
  var tableEl = document.createElement('table');
  //first row is special
    var firstRow = document.createElement('tr');
      var firstRowFirstCell = document.createElement('th');
      firstRowFirstCell.textContent = '';
      firstRow.appendChild(firstRowFirstCell);
      for (var i = 0; i < allKiosks.length; i++) {
        var locationDisplay = document.createElement('th');
        locationDisplay.textContent = allKiosks[i].locationName;
        firstRow.appendChild(locationDisplay);
      }
    tableEl.appendChild(firstRow);
    //rest of rows
    for (var hour = 0; hour < hoursOpen.length; hour++) {
      var newRow = document.createElement('tr');
      var displayHour = document.createElement('th');
      displayHour.textContent = hoursOpen[hour];
      newRow.appendChild(displayHour);
       for (var i = 0; i < allKiosks.length; i++){
         var displayPounds = document.createElement('td');
         displayPounds.textContent = allKiosks[i].soldPoundsTotal[hour];
         newRow.appendChild(displayPounds);
       }
      tableEl.appendChild(newRow);
    }
  document.getElementById('poundsDisplay').appendChild(tableEl);
};

websiteSales.displayPoundsTable();

Kiosk.prototype.displayCupsTable = function() {
  document.getElementById('cupsDisplay').textContent = '';
  var tableEl = document.createElement('table');
  //first row is special
    var firstRow = document.createElement('tr');
      var firstRowFirstCell = document.createElement('th');
      firstRowFirstCell.textContent = '';
      firstRow.appendChild(firstRowFirstCell);
      for (var i = 0; i < allKiosks.length; i++) {
        var locationDisplay = document.createElement('th');
        locationDisplay.textContent = allKiosks[i].locationName;
        firstRow.appendChild(locationDisplay);
      }
    tableEl.appendChild(firstRow);
    //rest of rows
    for (var hour = 0; hour < hoursOpen.length; hour++) {
      var newRow = document.createElement('tr');
      var displayHour = document.createElement('th');
      displayHour.textContent = hoursOpen[hour];
      newRow.appendChild(displayHour);
       for (var i = 0; i < allKiosks.length; i++){
         var displayCups = document.createElement('td');
         displayCups.textContent = allKiosks[i].hourlyCupsInCups[hour].toFixed(1);
         newRow.appendChild(displayCups);
       }
      tableEl.appendChild(newRow);
    }
  document.getElementById('cupsDisplay').appendChild(tableEl);
};

websiteSales.displayCupsTable();

Kiosk.prototype.displayTrafficTable = function() {
    document.getElementById('trafficDisplay').textContent = '';
  var tableEl = document.createElement('table');
  //first row is special
    var firstRow = document.createElement('tr');
      var firstRowFirstCell = document.createElement('th');
      firstRowFirstCell.textContent = '';
      firstRow.appendChild(firstRowFirstCell);
      for (var i = 0; i < allKiosks.length; i++) {
        var locationDisplay = document.createElement('th');
        locationDisplay.textContent = allKiosks[i].locationName;
        firstRow.appendChild(locationDisplay);
      }
    tableEl.appendChild(firstRow);
    //rest of rows
    for (var hour = 0; hour < hoursOpen.length; hour++) {
      var newRow = document.createElement('tr');
      var displayHour = document.createElement('th');
      displayHour.textContent = hoursOpen[hour];
      newRow.appendChild(displayHour);
       for (var i = 0; i < allKiosks.length; i++){
         var displayTraffic = document.createElement('td');
         displayTraffic.textContent = allKiosks[i].hourlyTraffic[hour];
         newRow.appendChild(displayTraffic);
       }
      tableEl.appendChild(newRow);
    }
  document.getElementById('trafficDisplay').appendChild(tableEl);
};

websiteSales.displayTrafficTable();
