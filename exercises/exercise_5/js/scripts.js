console.log('hello world');

//var name = document.getElementById("name");

function fontFunction(){
    const name= document.getElementById("name");
    var fonts = document.getElementById("myFonts").value;

    name.style.fontFamily=fonts;
}

function bkgrdFunction(){
    const box = document.getElementById("box");
    const color = document.getElementById("myBckgrd").value;
    box.style.backgroundColor = color;
     
}

function colorFunction(){
    const name = document.getElementById("name");
    
    name.style.color = "#"+Math.round(Math.random()*1000000);
}

function boldFunction(){
     const name = document.getElementById("name");
    var checkBox = document.getElementById("boldCheck");
    if(checkBox.checked == true){
        name.style.fontWeight = 'bold';    
    }
    else{
        name.style.fontWeight = 'normal';
    }
}

function italicFunction(){
     const name = document.getElementById("name");
    var checkBox = document.getElementById("italicCheck");
    if(checkBox.checked == true){
        name.style.fontStyle = 'italic';    
    }
    else{
        name.style.fontStyle = 'normal';
    }
}

function sizeFunction(){
     const name = document.getElementById("name");
    const box = document.getElementById("box");
    var checkSize = document.getElementById("size").value;
    name.style.fontSize = checkSize + "px";
    box.style.width =checkSize*3 +"px";
    box.style.height =checkSize*2 +"px";
    
}

function main(){
    fontFunction();
    bkgrdFunction();
    colorFunction();
    boldFunction();
    italicFunction();
    sizeFunction();
}

window.onload=main;