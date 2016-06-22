var carLot = (function (carStuff) {
  //removes highlight from previously clicked card
  function removeHighlight() {
    var removeHighlight = document.getElementsByClassName("carCard");
    for (var i = 0; i < removeHighlight.length; i ++) {
      removeHighlight[i].classList.remove('borderThick');
    }
  };

    // adds background color and border to clicked card
  function addBackgroundAndBorder (domEL, color) {
    var clickedCard = event.currentTarget.id.split("--")[1];
    var cardToBorder = document.getElementById(`car-${clickedCard}`);
    cardToBorder.classList.add('borderThick');
  };
  return carStuff;
})(carLot || {});
