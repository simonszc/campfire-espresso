//my js will be in here
var pike = {
  locationName: 'Pike Place Market',
  minHourlyTraffic: 14,
  maxHourlyTraffic: 55,
  cupsPerCust: 1.2,
  poundsPerCust: 3.7,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  hourlyTraffic: [],
  hourlyCupsInCups: [],
  hourlyCupsInPounds: [],
  hourlyToGoInPounds: [],
  hourlyPoundsSoldTotal: [],
  calculateHourlyTraffic: function() {
   for (var i = 0; i < this.hoursOpen.length; i++) {
     this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
   }
  },
  calculateHourlyCups: function() {
    var totalCupsInCups = 0;
    var totalCupsInPounds = 0;
    for(var i = 0; i < this.hoursOpen.length; i++){
      totalCupsInCups += this.hourlyTraffic[i] * this.cupsPerCust;
      this.hourlyCupsInCups.push(totalCupsInCups);
      totalCupsInPounds += this.hourlyTraffic[i] * this.cupsPerCust * 0.05;
      this.hourlyCupsInPounds.push(totalCupsInPounds);
    }
  },
  calculateHourlyToGoInPounds: function() {
    var totalToGoInPounds = 0;
    for (var i = 0; i < this.hoursOpen.length; i++) {
      totalToGoInPounds += this.hourlyTraffic[i] * this.poundsPerCust;
      this.hourlyToGoInPounds.push(totalToGoInPounds);
    }
  },
  calculateHourlyPoundsSoldTotal: function() {
    var totalPoundsSold = 0;
    for (var i = 0; i < this.hoursOpen.length; i++) {
      totalPoundsSold += this.hourlyTraffic[i] * this.cupsPerCust * 0.05 + this.hourlyTraffic[i] * this.poundsPerCust;
      this.hourlyPoundsSoldTotal.push(totalPoundsSold);
    }
  },
  renderLocation: function() {
    var locationEl = document.createElement('h2');
    locationEl.textContent = this.locationName;
    document.body.appendChild(locationEl);
  },
  renderData: function () {
    var listContainer = document.createElement('ul');
    document.body.appendChild(listContainer);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var dataOutput = document.createElement('li');
      dataOutput.textContent = this.hoursOpen[i] + ': ' + this.hourlyPoundsSoldTotal[i].toFixed(1) + ' lbs [' + this.hourlyTraffic[i] + '  customers, ' + this.hourlyCupsInCups[i].toFixed(1) + ' cups (' + this.hourlyCupsInPounds[i].toFixed(1) + ' lbs), ' + this.hourlyToGoInPounds[i].toFixed(1) + ' lbs to-go]';
      listContainer.appendChild(dataOutput);
    }
  },
  calculateAndRender: function () {
    this.calculateHourlyTraffic();
    this.calculateHourlyCups();
    this.calculateHourlyToGoInPounds();
    this.calculateHourlyPoundsSoldTotal();
    this.renderLocation();
    this.renderData();
  }
};
var capHill = {
  locationName: 'Capitol Hill',
  minHourlyTraffic: 32,
  maxHourlyTraffic: 48,
  cupsPerCust: 3.2,
  poundsPerCust:0.4,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  hourlyTraffic: [],
  hourlyCupsInCups: [],
  hourlyCupsInPounds: [],
  hourlyToGoInPounds: [],
  hourlyPoundsSoldTotal: [],
  calculateHourlyTraffic: function() {
   for (var i = 0; i < this.hoursOpen.length; i++) {
     this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
    }
  },
  calculateHourlyCups: function() {
    for(var i = 0; i < this.hoursOpen.length; i++){
      this.hourlyCupsInCups.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust));
      this.hourlyCupsInPounds.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05));
    }
  },
  calculateHourlyToGoInPounds: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyToGoInPounds.push(Math.round(this.hourlyTraffic[i] * this.poundsPerCust));
    }
  },
  calculateHourlyPoundsSoldTotal: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyPoundsSoldTotal.push(Math.round(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05) + Math.round(this.hourlyTraffic[i] * this.poundsPerCust)));
    }
  },
  renderLocation: function() {
    var locationEl = document.createElement('h2');
    locationEl.textContent = this.locationName;
    document.body.appendChild(locationEl);
  },
  renderData: function () {
    var listContainer = document.createElement('ul');
    document.body.appendChild(listContainer);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var dataOutput = document.createElement('li');
      dataOutput.textContent = this.hoursOpen[i] + ': ' + this.hourlyPoundsSoldTotal[i] + ' lbs [' + this.hourlyTraffic[i] + '  customers, ' + this.hourlyCupsInCups[i] + ' cups (' + this.hourlyCupsInPounds[i] + ' lbs), ' + this.hourlyToGoInPounds[i] + ' lbs to-go]';
      listContainer.appendChild(dataOutput);
    }
  },
  calculateAndRender: function () {
    this.calculateHourlyTraffic();
    this.calculateHourlyCups();
    this.calculateHourlyToGoInPounds();
    this.calculateHourlyPoundsSoldTotal();
    this.renderLocation();
    this.renderData();
  }
};
var seaPubLib = {
  locationName: 'Seattle Public Library',
  minHourlyTraffic: 49,
  maxHourlyTraffic: 75,
  cupsPerCust: 2.6,
  poundsPerCust: 0.2,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  hourlyTraffic: [],
  hourlyCupsInCups: [],
  hourlyCupsInPounds: [],
  hourlyToGoInPounds: [],
  hourlyPoundsSoldTotal: [],
  calculateHourlyTraffic: function() {
   for (var i = 0; i < this.hoursOpen.length; i++) {
     this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
    }
  },
  calculateHourlyCups: function() {
    for(var i = 0; i < this.hoursOpen.length; i++){
      this.hourlyCupsInCups.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust));
      this.hourlyCupsInPounds.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05));
    }
  },
  calculateHourlyToGoInPounds: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyToGoInPounds.push(Math.round(this.hourlyTraffic[i] * this.poundsPerCust));
    }
  },
  calculateHourlyPoundsSoldTotal: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyPoundsSoldTotal.push(Math.round(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05) + Math.round(this.hourlyTraffic[i] * this.poundsPerCust)));
    }
  },
  renderLocation: function() {
    var locationEl = document.createElement('h2');
    locationEl.textContent = this.locationName;
    document.body.appendChild(locationEl);
  },
  renderData: function () {
    var listContainer = document.createElement('ul');
    document.body.appendChild(listContainer);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var dataOutput = document.createElement('li');
      dataOutput.textContent = this.hoursOpen[i] + ': ' + this.hourlyPoundsSoldTotal[i] + ' lbs [' + this.hourlyTraffic[i] + '  customers, ' + this.hourlyCupsInCups[i] + ' cups (' + this.hourlyCupsInPounds[i] + ' lbs), ' + this.hourlyToGoInPounds[i] + ' lbs to-go]';
      listContainer.appendChild(dataOutput);
    }
  },
  calculateAndRender: function () {
    this.calculateHourlyTraffic();
    this.calculateHourlyCups();
    this.calculateHourlyToGoInPounds();
    this.calculateHourlyPoundsSoldTotal();
    this.renderLocation();
    this.renderData();
  }
};
var southLakeUnion = {
  locationName: 'South Lake Union',
  minHourlyTraffic: 35,
  maxHourlyTraffic: 88,
  cupsPerCust: 1.3,
  poundsPerCust: 3.7,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  hourlyTraffic: [],
  hourlyCupsInCups: [],
  hourlyCupsInPounds: [],
  hourlyToGoInPounds: [],
  hourlyPoundsSoldTotal: [],
  calculateHourlyTraffic: function() {
   for (var i = 0; i < this.hoursOpen.length; i++) {
     this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
    }
  },
  calculateHourlyCups: function() {
    for(var i = 0; i < this.hoursOpen.length; i++){
      this.hourlyCupsInCups.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust));
      this.hourlyCupsInPounds.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05));
    }
  },
  calculateHourlyToGoInPounds: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyToGoInPounds.push(Math.round(this.hourlyTraffic[i] * this.poundsPerCust));
    }
  },
  calculateHourlyPoundsSoldTotal: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyPoundsSoldTotal.push(Math.round(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05) + Math.round(this.hourlyTraffic[i] * this.poundsPerCust)));
    }
  },
  renderLocation: function() {
    var locationEl = document.createElement('h2');
    locationEl.textContent = this.locationName;
    document.body.appendChild(locationEl);
  },
  renderData: function () {
    var listContainer = document.createElement('ul');
    document.body.appendChild(listContainer);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var dataOutput = document.createElement('li');
      dataOutput.textContent = this.hoursOpen[i] + ': ' + this.hourlyPoundsSoldTotal[i] + ' lbs [' + this.hourlyTraffic[i] + '  customers, ' + this.hourlyCupsInCups[i] + ' cups (' + this.hourlyCupsInPounds[i] + ' lbs), ' + this.hourlyToGoInPounds[i] + ' lbs to-go]';
      listContainer.appendChild(dataOutput);
    }
  },
  calculateAndRender: function () {
    this.calculateHourlyTraffic();
    this.calculateHourlyCups();
    this.calculateHourlyToGoInPounds();
    this.calculateHourlyPoundsSoldTotal();
    this.renderLocation();
    this.renderData();
  }
};
var seaTacAirport = {
  locationName: 'Sea-Tac Airport',
  minHourlyTraffic: 68,
  maxHourlyTraffic: 124,
  cupsPerCust: 1.1,
  poundsPerCust: 2.7,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  hourlyTraffic: [],
  hourlyCupsInCups: [],
  hourlyCupsInPounds: [],
  hourlyToGoInPounds: [],
  hourlyPoundsSoldTotal: [],
  calculateHourlyTraffic: function() {
   for (var i = 0; i < this.hoursOpen.length; i++) {
     this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
    }
  },
  calculateHourlyCups: function() {
    for(var i = 0; i < this.hoursOpen.length; i++){
      this.hourlyCupsInCups.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust));
      this.hourlyCupsInPounds.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05));
    }
  },
  calculateHourlyToGoInPounds: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyToGoInPounds.push(Math.round(this.hourlyTraffic[i] * this.poundsPerCust));
    }
  },
  calculateHourlyPoundsSoldTotal: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyPoundsSoldTotal.push(Math.round(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05) + Math.round(this.hourlyTraffic[i] * this.poundsPerCust)));
    }
  },
  renderLocation: function() {
    var locationEl = document.createElement('h2');
    locationEl.textContent = this.locationName;
    document.body.appendChild(locationEl);
  },
  renderData: function () {
    var listContainer = document.createElement('ul');
    document.body.appendChild(listContainer);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var dataOutput = document.createElement('li');
      dataOutput.textContent = this.hoursOpen[i] + ': ' + this.hourlyPoundsSoldTotal[i] + ' lbs [' + this.hourlyTraffic[i] + '  customers, ' + this.hourlyCupsInCups[i] + ' cups (' + this.hourlyCupsInPounds[i] + ' lbs), ' + this.hourlyToGoInPounds[i] + ' lbs to-go]';
      listContainer.appendChild(dataOutput);
    }
  },
  calculateAndRender: function () {
    this.calculateHourlyTraffic();
    this.calculateHourlyCups();
    this.calculateHourlyToGoInPounds();
    this.calculateHourlyPoundsSoldTotal();
    this.renderLocation();
    this.renderData();
  }
};
var websiteSales = {
  locationName: 'Website Sales',
  minHourlyTraffic: 3,
  maxHourlyTraffic: 6,
  cupsPerCust: 0,
  poundsPerCust: 6.7,
  hoursOpen: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  hourlyTraffic: [],
  hourlyCupsInCups: [],
  hourlyCupsInPounds: [],
  hourlyToGoInPounds: [],
  hourlyPoundsSoldTotal: [],
  calculateHourlyTraffic: function() {
   for (var i = 0; i < this.hoursOpen.length; i++) {
     this.hourlyTraffic.push(Math.floor(Math.random() * (this.maxHourlyTraffic - this.minHourlyTraffic + 1)) + this.minHourlyTraffic);
    }
  },
  calculateHourlyCups: function() {
    for(var i = 0; i < this.hoursOpen.length; i++){
      this.hourlyCupsInCups.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust));
      this.hourlyCupsInPounds.push(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05));
    }
  },
  calculateHourlyToGoInPounds: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyToGoInPounds.push(Math.round(this.hourlyTraffic[i] * this.poundsPerCust));
    }
  },
  calculateHourlyPoundsSoldTotal: function() {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyPoundsSoldTotal.push(Math.round(Math.round(this.hourlyTraffic[i] * this.cupsPerCust * 0.05) + Math.round(this.hourlyTraffic[i] * this.poundsPerCust)));
    }
  },
  renderLocation: function() {
    var locationEl = document.createElement('h2');
    locationEl.textContent = this.locationName;
    document.body.appendChild(locationEl);
  },
  renderData: function () {
    var listContainer = document.createElement('ul');
    document.body.appendChild(listContainer);
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var dataOutput = document.createElement('li');
      dataOutput.textContent = this.hoursOpen[i] + ': ' + this.hourlyPoundsSoldTotal[i] + ' lbs [' + this.hourlyTraffic[i] + '  customers, ' + this.hourlyCupsInCups[i] + ' cups (' + this.hourlyCupsInPounds[i] + ' lbs), ' + this.hourlyToGoInPounds[i] + ' lbs to-go]';
      listContainer.appendChild(dataOutput);
    }
  },
  calculateAndRender: function () {
    this.calculateHourlyTraffic();
    this.calculateHourlyCups();
    this.calculateHourlyToGoInPounds();
    this.calculateHourlyPoundsSoldTotal();
    this.renderLocation();
    this.renderData();
  }
};

pike.calculateAndRender();
capHill.calculateAndRender();
seaPubLib.calculateAndRender();
southLakeUnion.calculateAndRender();
seaTacAirport.calculateAndRender();
websiteSales.calculateAndRender();
