let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(typeof secretNum, secretNum);
let userInput;
let scores = 20;
let highScore = 0;

document.getElementById("clicking").addEventListener("click", function () {
  document.getElementById("numberid").value = "";
  scores = 20;
  document.getElementsByClassName("target")[0].textContent = scores;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
  document.body.style.backgroundColor = "";
});
function onNum() {
  userInput = Number(document.getElementById("numberid").value);
  if (userInput < 1 || userInput > 20) {
    alert("Not a correct noumber. Please select in between 1 and 20");
  }
}

function onChecking() {
  if (userInput === undefined || userInput === null) {
    alert(" Please enter number between 1 and 20");
  } else if (userInput === secretNum) {
    document.getElementsByClassName("para")[0].textContent =
      "Well Done You have found it 😎";
    document.body.style.backgroundColor = "Purple";

    onHighScores();
    document.getElementById("valueId").textContent = highScore;
  } else if (userInput > secretNum) {
    document.getElementsByClassName("para")[0].textContent = "Going High";
    scores--;
    if (scores === 0) {
      onTargetClick();
      document.getElementById("clicking").click();
    } else {
      document.getElementsByClassName("target")[0].textContent = scores;
    }
  } else if (userInput < secretNum) {
    document.getElementsByClassName("para")[0].innerHTML = "Going low";
    scores--;
    if (scores === 0) {
      onTargetClick();
      document.getElementById("clicking").click();
    } else {
      document.getElementsByClassName("target")[0].textContent = scores;
    }
  }
}
function onTargetClick() {
  alert("You are failed. Please try again😭");
}
function onHighScores() {
  if (highScore < scores) {
    highScore = scores;
  }
}
