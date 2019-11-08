//both of these doe the same thing , first is js second is jqeury
var clock = document.getElementById("clock");
//var clock = $('#clock');

function getDate(){
var d = new Date();
var t = d.toLocaleTimeString();
clock.innerHTML = t;
}

getDate();

setInterval(function(){
    getDate();
},1000);


function fontFunction(){
//    .value allows js to show the font family
    var fontVariable = document.getElementById("myFonts").value;
//    these two equal each other so the font that is used is the font that is selected  
    clock.style.fontFamily = fontVariable;

}

function boldFunction(){
    var checkBox = document.getElementById("boldCheck");
    if(checkBox.checked == true){
        clock.style.fontWeight = 'bold';    
    }
    else{
        clock.style.fontWeight = 'normal';
    }
}

function italicFunction(){
    var checkBox = document.getElementById("italicCheck");
    if(checkBox.checked == true){
        clock.style.fontStyle = 'italic';    
    }
    else{
        clock.style.fontStyle = 'normal';
    }
}

function sizeFunction(){
    var checkSize = document.getElementById("size").value;
    clock.style.fontSize = checkSize + "px";
}
