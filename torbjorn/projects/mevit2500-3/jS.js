

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){

    // laying out grid
    var width = 10;
    var height = 10;
    var htmlwidth = 100 * width;
    var htmlheight = 100 * height;
    var sectorwidth = 100/width;
    var sectorheight = 100/height;

    $("html").css("width", htmlwidth + "%");
    $("html").css("height", htmlheight + "%");

    for(var h = 0; h < height; h++){
        for(var w = 0; w < width; w++){
            $divsector = $(document.createElement("div"))
            .addClass('sector')
            .attr("id","tbox_"+w+"-"+h)
            .css('width', sectorwidth + "%")
            .css('height', sectorheight + "%");
            $("body").append($divsector);
        }
        $newrow = $(document.createElement("div"))
        .addClass('newrow');
        $("body").append($newrow);
    }

    addTexts();
    positionTexts();

    $(document).scrollTo($("#tbox_1-1").offset(), 1000);
    sizeDivs();
 

    $(window).resize(function() {
        sizeDivs();
    });

    $(".cat").click(function () {
        if($(this).html() == "LYD") $("#lydsjekk").html("true");
        if($(this).html() == "VIDEO") $("#videosjekk").html("true");
        if($(this).html() == "INSTALLASJON") $("#installasjonsjekk").html("true");

        if($("#lydsjekk").html() == "true"
            && $("#videosjekk").html() == "true"
            && $("#installasjonsjekk").html() == "true"
            ){
            $("#t21").css("display","block");
        }      
    });
    
   
    $(".textbox").click(function () {

        if($(this).hasClass('fade')){
            $(this).fadeOut();
            $("#t1").click();
            return;
        }

        if($(this).attr("id") == "t21") {
            $(this).fadeOut();
            $("#t10").click();
            return;
        }

        var windowWidth = getWidth();
        var windowHeight = getHeight();
        var boxWidth = $(this).width()
        + parseInt($(this).css("padding-left"))
        + parseInt($(this).css("padding-right"));
        var boxHeight = $(this).height()
        + parseInt($(this).css("padding-top"))
        + parseInt($(this).css("padding-bottom"));
        var offset = $(this).offset();
        var x = offset.left - windowWidth/2 + boxWidth/2;
        var y = offset.top -  windowHeight/2 + boxHeight/2;
        position = {
            left: x,
            top: y
        };
        $(document).scrollTo(position, 700 );
     
    }); 
});

