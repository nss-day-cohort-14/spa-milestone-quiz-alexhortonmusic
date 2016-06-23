var carLot = (function (carStuff) {

  carStuff.activateEvents = function (event) {
    var allCars = document.getElementsByClassName('wrapper');
    for (var i = 0; i < allCars.length; i++) {
      allCars[i].addEventListener('click', clickHandler);
    }
    inputBox.addEventListener('keyup', editDescription);
  };

  function clickHandler(event){
      var currentCar = event.currentTarget.id.split("--")[1];
      var colorEl = event.currentTarget;
      inputBox.value = "";
      inputBox.focus();
      carStuff.removeHighlight();
      editDescription(currentCar);
      carStuff.addBackgroundAndBorder(currentCar, colorEl);
    };

  // clears input/puts cursor to inputBox
  function editDescription (carThing) {
    var info = carThing;
    var infoId = document.getElementById(`info-${info}`);
    inputBox.addEventListener('keydown', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        infoId.innerHTML = inputBox.value;
      }
    });
  };
  return carStuff;

})(carLot || {});


//calls all functions when box is clicked
  // carStuff.activateEvents = function (event) {
  //   var currentCar = event.currentTarget.id.split("--")[1];
  //   var colorEl = event.currentTarget;
  //   console.log("colorEl", colorEl);
  //   carStuff.removeHighlight();
  //   carStuff.addBackgroundAndBorder(currentCar, colorEl);
  // };
