//the $ selection the html tag

//when i click on function, run the diamond
var rotate =false;
$('#diamond').click(function(){
    
   
    
    if(rotate===true){
        $('#diamond').css('transform','rotate(0deg)')
        rotate=false;
    
    }
    else{
        $('#diamond').css('transform','rotate(45deg)')
        rotate=true;
    }
})


//randomly postion left to right

//$('#square').click(function(){
    
//   $('#square').css('margin-left','50px')
//})

setInterval(function(){
            
    console.log()
    $('#square').css('margin-left',Math.random()*50+"px")
},1000)

