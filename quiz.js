//---------Elements to grab-----//
var topRow = document.getElementById('top-row');

// iife object
var carLot = {};

function executeCodeWhenCarsLoad () {
  var carInventory = JSON.parse(event.target.responseText);
  console.log("carInventory", carInventory)
  carsToDOM(carInventory);
};

function executeIfFileFailsToLoad () {
	topRow.innerHTML = "ERROR";
}

function carsToDOM (carsJSON) {
	var counter = 0;
	for (var i = 0; i < carsJSON.cars.length; i++) {
		counter++;
		var currentCar = carsJSON.cars[i];
		var carMake = currentCar.make;
		var carModel = currentCar.model;
		var carYear = currentCar.year;
		var carPrice = currentCar.price;
		var carColor = currentCar.color;
		var carStatus = currentCar.purchased;
		var carInfo = currentCar.description;

		if (carStatus === false) {
			carStatus = "For Sale";
		} else {
			carStatus = "Sold";
		}

		topRow.innerHTML += `
			<div class="col-md-4">
				<div class="carCard ${carColor}">
					<h2 class="car-title">${carMake} ${carModel}</h2>
					<h3>Only $${carPrice}!</h3>
					<h4>Year: ${carYear}</h4>
					<h4>Color: ${carColor}</h4>
					<h4>Availability: ${carStatus}</h4>
					<p>Details: </p>
					<p>${carInfo}</p>
				</div>
			</div>
		`;

		// var wrapper = document.createElement('article');
		// wrapper.innerHTML = carCard;
		// var newAttr = document.createAttribute("id");
		// newAttr.value = `carCard--${counter}`;
		// wrapper.setAttributeNode(newAttr);
		// topRow.appendChild(wrapper);

		// wrapper.addEventListener('click', addClickBorder);
	};

	// function addClickBorder (event) {
	// 	var clickedCard = event.currentTarget.id.split("-")[1];
	// 	console.log("clickedCard", clickedCard);
	// 	var cardToBorder = document.getElementById(`car-${clickedCard}`)
	// 	console.log("cardToBorder", cardToBorder);
	// 	cardToBorder.classList.toggle('borderThick');
};


var carRequest = new XMLHttpRequest();

carRequest.addEventListener('load', executeCodeWhenCarsLoad);
carRequest.addEventListener('error', executeIfFileFailsToLoad);

carRequest.open('GET', 'inventory.json');

carRequest.send();

