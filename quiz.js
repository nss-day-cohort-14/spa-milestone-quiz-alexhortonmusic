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
		var carStatus = carsJSON.cars[i].purchased;
		if (carStatus === false) {
			carStatus = "For Sale"
		} else {
			carStatus = "Sold"
		}

		var carCard = `
			<div class="col-md-4">
				<div class="carCard ${carsJSON.cars[i].color}" id="car-${counter}">
					<h2 class="car-title">${carsJSON.cars[i].make} ${carsJSON.cars[i].model}</h2>
					<h3>Only $${carsJSON.cars[i].price}!</h3>
					<h4>Year: ${carsJSON.cars[i].year}</h4>
					<h4>Color: ${carsJSON.cars[i].color}</h4>
					<h4>Availability: ${carStatus}</h4>
					<p>Details: </p>
					<p>${carsJSON.cars[i].description}</p>
				</div>
			</div>
		`;

		var newDiv = document.createElement('article');
		newDiv.innerHTML = carCard;
		var newAttr = document.createAttribute("id");
		newAttr.value = `carCard--${counter}`;
		console.log("newAttr", newAttr.value);
		newDiv.setAttributeNode(newAttr);
		topRow.appendChild(newDiv);

		newDiv.addEventListener('click', function () {
			var removeHighlight = document.getElementsByClassName("carCard");
			for (var i = 0; i < removeHighlight.length; i ++) {
				removeHighlight[i].classList.remove('borderThick');
			}
			
			var clickedCard = event.currentTarget.id.split("--")[1];
			console.log("clickedCard", clickedCard);
			var cardToBorder = document.getElementById(`car-${clickedCard}`)
			console.log("cardToBorder", cardToBorder);
			cardToBorder.classList.add('borderThick');
		});
		counter++;
	}
};

// 
var carRequest = new XMLHttpRequest();

carRequest.addEventListener('load', executeCodeWhenCarsLoad);
carRequest.addEventListener('error', executeIfFileFailsToLoad);

carRequest.open('GET', 'inventory.json');

carRequest.send();

