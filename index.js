var numberOfDrumButtons = document.querySelectorAll(".drum_button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum_button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var perc = new Audio("sounds/newperc.mp3");
      perc.play();

      break;

    case "a":
      var shake = new Audio("sounds/newshake.mp3");
      shake.play();

      break;

    case "s":
      var hho = new Audio("sounds/newhho.mp3");
      hho.play();

      break;

    case "d":
      var hh = new Audio("sounds/newhh.mp3");
      hh.play();

      break;

    case "j":
      var snare = new Audio("sounds/newsnare.mp3");
      snare.play();

      break;

    case "k":
      var crash = new Audio("sounds/newcrash.mp3");
      crash.play();

      break;

    case "l":
      var kick = new Audio("sounds/newkick.mp3");
      kick.play();

      break;

    case "v":
      var melody1 = new Audio("sounds/melody1.mp3");
      melody1.play();

      break;

    case "b":
      var melody2 = new Audio("sounds/melody2.mp3");
      melody2.play();

      break;
  }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100)

}
