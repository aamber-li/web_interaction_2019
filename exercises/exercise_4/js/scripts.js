
var today = new Date();
var hour = today.getHours()%12;
var min = today.getMinutes();
var sec = today.getSeconds();

let sec_position = (sec *6);
let min_position = (min*6);
let hour_position = (hour*30);

setInterval(function(){
    

$('.second-hand').css('transform','rotate('+ sec_position.toString()+'deg)');

$('.min-hand').css('transform','rotate('+ min_position.toString()+'deg)');

$('.hour-hand').css('transform','rotate('+ hour_position.toString()+'deg)');

 },1000);
let second = 0;

function moveHands(){
    // currentSecondPosition += 6;
    // console.log(currentSecondPosition);
    // currentMinPosition += 0.1;
    // currentHourPosition += 0.008;
    // $('.second-hand').css('transform', 'rotate(' + currentSecondPosition.toString() + 'deg)');
    // $('.min-hand').css('transform', 'rotate(' + currentMinPosition.toString() + 'deg)');
    // $('.hour-hand').css('transform', 'rotate(' + currentHourPosition.toString() + 'deg)');

    setInterval(moveHands, 1000);
    //setTimeout(moveHands, 1000);
}

window.onload = moveHands;

//setInterval(function(){
//
//    second += 360;
//    $('.second-hand').css('transform','rotate(' + second + 'deg)')
//},1000);
//
let white =false;

//setInterval(function(){
//    $('html').click(function(){
//    
//    if(white===true){
//        $('html').css('background-color','white')
//        white=false;
//    
//    }
//    
//    else{
//        $('html').css('background-color','black')
//        white=true;
//    }
//})},10);





 $('html').click(function(){
    
    if(white===false){
        $('html').css('background-color','black')
           $('.quarter-marker').css('background','red')
        $('.marker').css('background','red')
        $('.second-hand').css('background','aquamarine')
        $('.hour-hand').css('background','aquamarine')
        $('.min-hand').css('background','aquamarine')
        $('.circle').css('background','black')
       
        
        white=true;
        
    
    
    }
    
    else{
        $('html').css('background-color','white')
         $('.quarter-marker').css('background','pink')
        $('.marker').css('background','pink')
        $('.second-hand').css('background','lightblue')
        $('.hour-hand').css('background','lightblue')
        $('.min-hand').css('background','lightblue')
        $('.circle').css('background','white')
        white=false;
    }
 })
