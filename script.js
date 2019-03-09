const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
// var start = document.querySelector("#reset");

var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var mistake = document.getElementById("nomistake");
var wordsPerMin = document.getElementById("wpm");


// Run a standard minute/second/hundredths timer:


testArea.addEventListener("keyup",timer);
resetButton.addEventListener("click",resetFunction);                             
var timerShouldRun = true;


// Start the timer:
function timer(){
    if(timerShouldRun){
        myTimer =setInterval(setTimer,1000);
        timerShouldRun=false;
        
    }
    // Match the text entered with the provided text on the page:
var original = originText.split(" ");
uText = testArea.value.split(" ");

//var userText = testArea.value.split(" ");


mistake.innerHTML = 0;
var count= 0;
    for(var i=0; i<uText.length-1;i++){
    if(uText[i] != original[i]){
        count++;
        mistake.innerHTML = count;

    }
   else if(uText.length == original.length){
        clearInterval(myTimer);
   }
}

}


var secondsCount = 0;
var minutesCount = 0;

function setTimer(){
    
    clock(seconds);
    if(lessThan59(seconds)){
        clock(minutes);
        seconds.innerHTML = 0;
    }
    
    if(lessThan59(minutes)){
        clock(hours);
        minutes.innerHTML = 0;
    }
    wordsPerMin.innerHTML = wordsPerMinute(uText);                          // wordsPerMinute() should be called here to change WPM every second.
}

// Add leading zero to numbers 9 or below (purely for aesthetics):

function clock(instance){
   if(parseInt(instance.innerHTML)<9){
       console.log('I am running!!');
       instance.innerHTML = "0" + (parseInt(instance.innerHTML) + 1);
   }
   else{
       instance.innerHTML = parseInt(instance.innerHTML) + 1;
   }
}

function lessThan59(instance){
    if(instance.innerHTML>59){
        return parseInt(instance.innerHTML);
    }
}

// Reset everything:
function resetFunction(){
    // clearInterval(myTimer);
    seconds.innerHTML = "00";
    minutes.innerHTML = "00:";
    hours.innerHTML = "00:";
    testArea.value = "";
}

function wordsPerMinute(arr){
    console.log(arr)
    var minToSec = parseInt(minutes.innerHTML)*60;
    var hourToSec = parseInt(hours.innerHTML)*3600;
    var sec = parseInt(seconds.innerHTML);
    var totalSec = minToSec + hourToSec + sec;
    var result = arr.length/totalSec
    var answer = result*60;
    console.log(minToSec,hourToSec,sec,totalSec,result,answer);
    return answer.toFixed(2);
}
// Event listeners for keyboard input and the reset button:

