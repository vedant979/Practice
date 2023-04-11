var level =1;
var buttonColours = ["red", "blue", "green", "yellow"];
var gameSequence = [];
var userClicked = [];

var started = false;
$(document).keypress(function(){ 
    if(!started){
        $(".head-1").text(`Level ${level}`);
        nextSequence();
    }
    started=true;
});

$(".btn").click(function(){

    var name = $(this).attr("id");
    userClicked.push(name);  
    playSound(name);  
    checkAnswer(userClicked.length-1);
});

function checkAnswer(curIndex){

    if(userClicked[curIndex]===gameSequence[curIndex]){
        console.log("success");
        if(userClicked.length===gameSequence.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        playSound("wrong");
        $(".head-1").text("Game Over, Press Any Key to Restart");
        bgColor();
        setTimeout(function(){
            $(document.body).css("backgroundColor","#011F3F");
        },200);

        userClicked.length = 0;
        gameSequence.length = 0;
        started = false;
        level =1;
    }
};
function bgColor(){
    console.log("here");
    $(document.body).css("backgroundColor","red");
}

function nextSequence(){
    userClicked.length=0;
    $(".head-1").text(`Level ${level}`);
    level++;
    var randomNum = Math.floor(Math.random()*4);
    var color = buttonColours[randomNum];
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
    gameSequence.push(color);
    playSound(color);
};


function playSound(name){
    var audio  = new Audio("sounds/"+name+".mp3");
    audio.play();
};









