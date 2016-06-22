var carLot = (function (carStuff) {
//calls all functions when box is clicked
  carStuff.beginEvents = function (event) {
    removeHighlight();
    editDescription();
    addBackgroundAndBorder();
  };

  //removes highlight from previously clicked card
  function removeHighlight() {
    var removeHighlight = document.getElementsByClassName("carCard");
    for (var i = 0; i < removeHighlight.length; i ++) {
      removeHighlight[i].classList.remove('borderThick');
    }
  };

  // clears input/puts cursor to inputBox
  function editDescription () {
    inputBox.value = "";
    inputBox.focus();
    var info = event.currentTarget.id.split("--")[1];
    var infoId = document.getElementById(`info-${info}`);
    inputBox.addEventListener('keyup', function handleInputEvent() {
      infoId.innerHTML = inputBox.value;
    });
  };

  // adds background color and border to clicked card
  function addBackgroundAndBorder () {
    var clickedCard = event.currentTarget.id.split("--")[1];
    var cardToBorder = document.getElementById(`car-${clickedCard}`);
    cardToBorder.classList.add('borderThick');
  };
  return carStuff;

})(carLot || {});
