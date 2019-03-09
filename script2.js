var testWrapper = document.querySelector(".test-wrapper");
var testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");
var mistak = document.querySelector("#mistakes span");
var words = document.querySelector("#words span");
var start = document.querySelector("#reset");

var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var mistake = document.getElementById("mistake");

var hasRun=false;
mistake.innerHTML=0;
var timer;

testArea.addEventListener("keyup",myFunction)
start.addEventListener("click",startfunction)

function myFunction()
{
    if(!hasRun){
        timer = setInterval(changeTime,1000);
        hasRun=true;
        words.innerHTML=getTime(array);
    }

    var testsplit=originText.split(" ");
    var array = testArea.value.split(" ");
    
    var count=0;

    for (var i = 0; i <array.length-1; i++){
        
        if(array[i] != testsplit[i]){
            count++;
            mistak.innerHTML=count;
        }
    }

   
    }

    


function changeTime(){

    // DRY - DONT REPEAT YOURSELF

    // change the seconds 
    cleanTime(seconds);
    
    if(less59(seconds)){

        cleanTime(minutes);
        seconds.innerHTML = 0; 
        
    }

    if(less59(minutes)){

        cleanTime(hours);
        minutes.innerHTML = 0;
    }
}

function cleanTime(targetSpan){

    if(parseInt(targetSpan.innerHTML)<9){

        targetSpan.innerHTML = "0"+ (parseInt(targetSpan.innerHTML) + 1);


    }
    else{
        targetSpan.innerHTML =parseInt(targetSpan.innerHTML) + 1;
    }




}

function less59(targetSpan){
    return parseInt(targetSpan.innerHTML)>59;
}


function getTime(arr){

    var minInSeconds=parseInt(minutes.innerHTML)*60;
    var t_seconds=parseInt(seconds.innerHTML);
    var t_hours=parseInt(hours.innerHTML)*3600;
    var totalSeconds=minInSeconds+t_seconds+t_hours;
    var inOneSecond=arr.length/totalSeconds;
    var WPM= inOneSecond*60;
    return WPM.toPrecision(4);
    
}

function startfunction(){
    clearInterval(timer);
    mistak.innerHTML=0;
    testArea.value="";
    words.innerHTML=0;
}
