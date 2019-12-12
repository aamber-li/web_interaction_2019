let page = 0
   
// $(document).click(function(){
//     $(".light").css('animation-play-state','running');
// })

$("#start").click(function(){
    $(this).fadeOut(1000, function(){ $(this).hide();})
    $("#title").delay(1000).fadeIn(5000)
    $("#text").delay(1000).fadeIn(5000)
    $("#next").delay(5000).fadeIn(1000)
   
})

// $("#prev").click(function(){
//     page -= 1
//     buttonActivate()
//     litPage(page)
   
// })

$("#next").click(function(){
    buttonActivate()
    page += 1
    
    $("#next").hide();
    $("#title").hide();
    $("#text").hide();
    
    $("#title").delay(1000).fadeIn(5000)
    $("#text").delay(1000).fadeIn(5000)

    litPage(page)
    
})

const buttonActivate = () => {
    // let previous = (page !== 0) ? true : false
    let next = (page !== 4) ? true : false

    // if (previous){
    //     $("#prev").delay(1000).fadeIn(1000)
    // }
    // else{
    //     $("#prev").fadeOut(1000, function(){ $(this).hide();})
    // }
    if (next){
        $("#next").delay(5000).fadeIn(1000)
    }
    else{
        $("#next").fadeOut(1000, function(){ $(this).remove();})
    }
}

const turnOff = () => {
    //animation initial turns everything back to the original state b
    $(".light").css('animation','initial');
    $(".light2").css('animation','initial');
    $(".light3").css('animation','initial');
    $(".light4").css('animation','initial');
    $("#text").css('animation','initial');
    $('#title').css('animation','initial');
}

const litPage = (pageNum) => {
    turnOff()
    switch (pageNum) {
        case 0:
            $(".light").delay(1000).fadeIn(5000)
            $(".light").css('animation','flicker1 1s linear infinite');
            break
        case 1:
            $(".light2").delay(1000).fadeIn(5000)
            $(".light2").css('animation','flicker2 1s linear infinite');
            break
        case 2:
            $(".light3").delay(1000).fadeIn(5000)
            $(".light3").css('animation','flicker3 1s linear infinite');
            break
        case 3:
            $(".light4").delay(1000).fadeIn(5000)
            $(".light4").css('animation','flicker4 1s linear infinite');
            break
        case 4:
            $('#body').hide()
            $('#body').delay(1000).fadeIn(5000)
            $("#text").css('animation','flicker5 1s linear infinite');
            $('#title').css('animation','flicker4 1s linear infinite');
            // $(".light").css('animation','flicker1 1s linear infinite');
            // $(".light2").css('animation','flicker2 1s linear infinite');
            // $(".light3").css('animation','flicker3 1s linear infinite');
            // $(".light4").css('animation','flicker4 1s linear infinite');
            page = -1
            break
    }
}

$(document).ready(function(){
    litPage(page)
    $("#next").hide();
    buttonActivate()
    // $(".light").hide();
    $("#title").hide();
    $("#text").hide();
})
