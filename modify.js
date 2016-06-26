var carLot = (function (carStuff) {
  //removes highlight from previously clicked card
  carStuff.removeHighlight = function () {
    var removeHighlight = document.getElementsByClassName("carCard");
    for (var i = 0; i < removeHighlight.length; i ++) {
      removeHighlight[i].style.backgroundColor = "white";
      removeHighlight[i].style.borderWidth = "1.5px";
    }
  };

    // adds background color and border to clicked card
  carStuff.addBackgroundAndBorder = function (domEL, color) {
    var clickedCard = domEL;
    var cardToBorder = document.getElementById(`car-${clickedCard}`);
    cardToBorder.style.borderWidth = "3px";
    cardToBorder.style.backgroundColor = "lightblue";
  };
  return carStuff;
})(carLot || {});
