/**
 * Created by JENN on 9/17/2016.
 */
//declare variables
var game = ["OCICAT", "SIAMESE", "PERSIAN", "RAGDOLL", "MAINE COON", "SHORTHAIR", "BENGAL", "SPHYNX", "BURMESE", "BIRMAN", "RUSSIAN BLUE", "SCOTTISH FOLD", "SIBERIAN", "HIMALAYAN", "AMERICAN BOBTAIL"]
var choice = Math.floor(Math.random() * 15);
//array entered in reverse since called from attempts left- and when I put it in the other way, it hung him and removed body parts!
var images = ["img10.png", "img09.png", "img08.png", "img07.png", "img06.png", "img05.png", "img04.png", "img03.png", "img02.png", "img01.png", "img00.png"]
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft = 10;
var output = "";
var userLetter = "";

var setup = function()
{
    for (var i = 0; i < answer.length; i++ )
    {
        display[i] = "_ ";
        output = output + display[i];
        }
    
    document.getElementById("game").innerHTML = output;
    output = "";
}


var submit = function ()
{
    output = "";
    userLetter = document.getElementById("letter").value;
    document.getElementById("letter").value = "";
//boolean flag to test letter found in loop
    var found = false;

    for (var c = 0; c < answer.length; c++)
    {
        if (userLetter.toUpperCase() == letters[c])
        {
        display[c] = userLetter.toUpperCase();
        win--;
            //letter was found, flag is true
            found = true;
        }

          output = output + display[c] + "";
    }

document.getElementById("game").innerHTML = output;
output = "";
    //boolean that says if not found, minus 1 from attempts
    if(!found) {
        attemptsLeft--;
    }

if (win < 1)
{
    document.getElementById("guess").innerHTML = "YOU WIN!";
}
else if (attemptsLeft < 1)
{
    document.getElementById("guess").innerHTML = "YOU LOSE!";
}
else
{
      document.getElementById("guess").innerHTML = "You have " + attemptsLeft + " guesses left.";
}
    //outside of else statement so that images will load correctly on losing
    document.getElementById("image").src = "images/" +images[attemptsLeft];

}

//Calling functions
window.onload = function () {
    setup();
    document.getElementById("submit").onclick = submit;
}



