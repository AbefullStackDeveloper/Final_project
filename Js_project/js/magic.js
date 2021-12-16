const input = document.getElementById("input");

function shake() {
  var ball = document.getElementById("ball");
  var messageText = document.getElementById("message");

  //remove previous message if it exists
  if (messageText != null) {
    messageText.parentNode.removeChild(messageText);
  }

  //Make the ball shake by adding the css class
  ball.classList.add("shake");

  //Remove the shake class after it stops shaking
  setTimeout(function () {
    ball.classList.remove("shake");
  }, 1000);

  //call the Answer function to get your Answer only after 1sec
  setTimeout(function () {
    GenerateAnswer();
   
  }, 1000);
  input.value = "";
}

//generate the Answers for the ball
function GenerateAnswer() {
  //array of Answers
  var answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes -- definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, Signs point to yes",
    "Reply hazy",
    "try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Dont count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];


  //get a random Answer message message
  var answers = answers[Math.floor(Math.random() * answers.length)];

  //display the Answer on the page
  var parent = document.getElementById("answer");
  var newMessage = document.createElement("div");
  newMessage.setAttribute("id", "message");
  newMessage.innerHTML = '"' + answers + '"';
  parent.appendChild(newMessage);

}




