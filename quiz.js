var carLot = (function (carStuff) {
	//---------Elements to grab-----//
	var topRow = document.getElementById('top-row');
	var inputBox = document.getElementById('inputBox');
	var submitBtn = document.getElementById('submitBtn');

	var carInventory = [];
	//loads inventory	
	carStuff.loadInventory = function (callback) {
    var carRequest = new XMLHttpRequest();
    carRequest.open('GET', 'inventory.json');
    carRequest.send();
    carRequest.addEventListener('load', function executeCodeWhenCarsLoad () {
        carInventory = JSON.parse(event.target.responseText);
        callback(carInventory);
    });
  };

  // getter for carInventory
	carStuff.getInventory = function () {
		return carInventory;
	};

	function carsToDOM (carsJSON) {
		var counter = 0;
		for (var i = 0; i < carsJSON.cars.length; i++) {
			var carStatus = carsJSON.cars[i].purchased;
			if (carStatus === false) {
				carStatus = "For Sale"
			} else {
				carStatus = "Sold"
			}
			// builds string to add 3 cards in each row
			var carCard = `
				<div class="col-md-4 cards">
					<div class="carCard ${carsJSON.cars[i].color}" id="car-${counter}">
						<h2 class="car-title">${carsJSON.cars[i].make} ${carsJSON.cars[i].model}</h2>
						<h3>Only $${carsJSON.cars[i].price}!</h3>
						<h4>Year: ${carsJSON.cars[i].year}</h4>
						<h4>Color: ${carsJSON.cars[i].color}</h4>
						<h4>Availability: ${carStatus}</h4>
						<p>Details: </p>
						<div id="info-${counter}">${carsJSON.cars[i].description}</div>
					</div>
				</div>
			`;
			// wrapper for each card
			// appends each new card to the DOM
			var newDiv = document.createElement('article');
			newDiv.innerHTML = carCard;
			var newAttr = document.createAttribute("id");
			newAttr.value = `carCard--${counter}`;
			newDiv.setAttributeNode(newAttr);
			topRow.appendChild(newDiv);

			newDiv.addEventListener('click', carStuff.beginEvents)
			
			counter++;
		}
	};

	carStuff.loadInventory(carsToDOM);

	return carStuff;

})(carLot || {});
