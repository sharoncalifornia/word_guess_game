//alert("test");
//Global Variables
//-----------------------------------------------------------------
// Arrays and Variables for holding data
var wordOptions = ["sacramento", "fresno", "oakland", "redding", "anaheim", "riverside", "monterey", "irvine", "modesto", "pasadena", "fremont", "malibu", "temecula", "davis", "carlsbad", "sausalito", "bakersfield"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = []

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Function ()
//------------------------------------------------------------------

function startGame () {

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //populate sucesses and blanks
    for (var i=0; i<numBlanks; i++)
        {
            blanksAndSuccesses.push("-");
        }

    //change HTML to reflect round conditions
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("win-counter").innerHTML = winCount;
    document.getElementById("loss-counter").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter){
    //alert(letter);
    var isLetterInWord = false;
    //check if letter found in word at all
    for (var i=0; i<numBlanks; i++)
    {
        if(selectedWord[i]==letter){
            isLetterInWord = true;
            //alert("letter found");
        }
   
      /*  else{

            isLetterInWord = false;
            alert("letter not found");
        }
      */     
    }

    console.log("before "+blanksAndSuccesses);
    //check where is the letter in word and populate a new array
    if (isLetterInWord){
        for (var i=0; i<numBlanks; i++)
        {   
            if(selectedWord[i]==letter){
                blanksAndSuccesses[i]= letter;
            }
        }

        document.getElementById("word-blanks").innerHTML = blanksAndSuccesses;
    }
    else{
        wrongLetters.push(letter);
        guessesLeft--;
        document.getElementById("wrong-guesses").innerHTML = wrongLetters;
        document.getElementById("guesses-left").innerHTML = guessesLeft;

    }    


    console.log("after  "+blanksAndSuccesses);
    roundComplete();
 //   if (guessesLeft === 0)
  //  {
  //      roundComplete();

  //  }
}

function roundComplete(){

    console.log("Win Count:" + winCount + "| Loss Count: "+ lossCount + "| Guesses left: "+guessesLeft);
   // alert("lettersinWord:   "+lettersinWord);
   // alert("banksAndSuccesses:  "+blanksAndSuccesses);


    if (guessesLeft != 0) {
        //alert("inside the first if statement");
        if (lettersinWord.toString() === blanksAndSuccesses.toString() )
        {
            //alert("inside the 2nd if statement");
            winCount ++;
            alert("you win!");
            console.log("you win!");
            document.getElementById("win-counter").innerHTML = winCount;
            wrongLetters =[];
            document.getElementById("wrong-guesses").innerHTML = wrongLetters;
            startGame();
        }    
    }
    else if (guessesLeft === 0)
    {
        lossCount ++;
        alert("You lost!");
        console.log("you lost");

        document.getElementById("loss-counter").innerHTML = lossCount;
        startGame();

    }

}

//Main Process

//------------------------------------------------------------------

// initiate the code for the first time
startGame();
document.onkeyup = function(event){

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    //roundComplete();
    //console.log(letterGuessed);
}

//register key clicks
