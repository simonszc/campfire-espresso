//Pike will become my constructor
function Kiosk (locName, minTraffic, maxTraffic, cupsPer, poundsPer) {
  this.locationName = locName;
  this.minHourlyTraffic = minTraffic;
  this.maxHourlyTraffic = maxTraffic;
  this.cupsPerCust = cupsPer;
  this.poundsPerCust = poundsPer;
  this.hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
  this.hourlyTraffic = [];
  this.totalTrafficCounter = 0;
  this.totalTraffic = [];
  this.hourlyCupsInCups = [];
  this.hourlyCupsInPounds = [];
  this.hourlyToGoInPounds = [];
  this.hourlyPoundsSoldTotal = [];
  this.calculateHourlyTraffic = function() {
   for (var i = 0; i < this.hoursOpen.length; i++) {
     this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
     this.totalTrafficCounter += this.hourlyTraffic[i];
     this.totalTraffic.push(this.totalTrafficCounter);
   }
 };
  this.calculateHourlyCups = function() {
    var totalCupsInCups = 0;
    var totalCupsInPounds = 0;
    for(var i = 0; i < this.hoursOpen.length; i++){
      totalCupsInCups += this.hourlyTraffic[i] * this.cupsPerCust;
      this.hourlyCupsInCups.push(totalCupsInCups);
      totalCupsInPounds = this.hourlyCupsInCups[i] * 0.05;
      this.hourlyCupsInPounds.push(totalCupsInPounds);
    }
  };
  this.calculateHourlyToGoInPounds = function() {
    var totalToGoInPounds = 0;
    for (var i = 0; i < this.hoursOpen.length; i++) {
      totalToGoInPounds += this.hourlyTraffic[i] * this.poundsPerCust;
      this.hourlyToGoInPounds.push(totalToGoInPounds);
    }
  };
  this.calculateHourlyPoundsSoldTotal = function() {
    var totalPoundsSold = 0;
    for (var i = 0; i < this.hoursOpen.length; i++) {
      totalPoundsSold += this.hourlyTraffic[i] * this.cupsPerCust * 0.05 + this.hourlyTraffic[i] * this.poundsPerCust;
      this.hourlyPoundsSoldTotal.push(totalPoundsSold);
    }
  };
  this.renderLocation = function() {
    var locationEl = document.createElement('h2');
    locationEl.textContent = this.locationName;
    document.body.appendChild(locationEl);
  };
  this.renderData = function () {
    var listContainer = document.createElement('ul');
    document.body.appendChild(listContainer);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var dataOutput = document.createElement('li');
      dataOutput.textContent = this.hoursOpen[i] + ': ' + this.hourlyPoundsSoldTotal[i].toFixed(1) + ' lbs [' + this.totalTraffic[i] + '  customers, ' + this.hourlyCupsInCups[i].toFixed(1) + ' cups (' + this.hourlyCupsInPounds[i].toFixed(1) + ' lbs), ' + this.hourlyToGoInPounds[i].toFixed(1) + ' lbs to-go]';
      listContainer.appendChild(dataOutput);
    }
  };
  this.calculateAndRender = function () {
    this.calculateHourlyTraffic();
    this.calculateHourlyCups();
    this.calculateHourlyToGoInPounds();
    this.calculateHourlyPoundsSoldTotal();
    this.renderLocation();
    this.renderData();
  }
};

var pike = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capHill = new Kiosk('Capitol Hill', 32,48, 3.2, 0.4);
var seaPubLib = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var southLakeUnion = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);

pike.calculateAndRender();
capHill.calculateAndRender();
seaPubLib.calculateAndRender();
southLakeUnion.calculateAndRender();
seaTacAirport.calculateAndRender();
websiteSales.calculateAndRender();
