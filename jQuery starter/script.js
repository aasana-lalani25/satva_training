console.log("Welcome to The Ultimate jQuery Course!🚀");
// $("p").hide();

// $(".second").hide();

// $("#third").hide();


$(document).ready(function(){
//     $("#btn_hide").click(function(){                  //mouse event
//     $(".second").hide(2000);
// });

$("#btn_hide").click(function(){                  //mouse event
    $(".second").toggle(2000);
});


$("body").keydown(function(event){
    if(event.which==72){
        $(".second").hide();
    }

    if(event.which==83){
        $(".second").show();
    }
    
});

 $("#btn_hide").click(function(){                  //animation 
    $(".box").animate({
        width:"+=200px",
        height:"200px",
        fontSize:"20px"

    },"slow");
});

})
