/// <reference path="jquery-3.1.1.min.js" />

$(function () {
    width = window.innerWidth;
    height = window.innerHeight;

    var i = 1;
    $(".pic").eq(0).siblings().hide();
    setInterval(function () {
        if (i == 3) { i = 0; }
        $(".pic").siblings().hide().eq(i++).fadeIn(600);
    }, 5000);

    $(".center").css("width", "0px");
    $(".div_bgB").css("width", "0px");
    $(".center").eq(0).css("width", "60%");

    var now_index = 1;
    $(".block").click(function () {
        
        
        $(this).find(".div_bgA").css("width", "0px");

        $(this).find(".div_bg11").css("width", "185px");
        $(this).find(".div_bg22").css("width", "220px");
        $(this).find(".div_bg33").css("width", "259px");
        $(this).find(".div_bg44").css("width", "150px");
        $(this).find(".div_bg55").css("width", "191px");
        $(this).find(".div_bg66").css("width", "153px");
        $(this).find(".div_bg77").css("width", "229px");
        $(this).find(".div_bg88").css("width", "267px");

        $(this).find(".div_bg1").stop(true, true).animate({ width: "185px" }, 500);
        $(this).find(".div_bg2").stop(true, true).animate({ width: "220px" }, 500);
        $(this).find(".div_bg3").stop(true, true).animate({ width: "259px" }, 500);
        $(this).find(".div_bg4").stop(true, true).animate({ width: "150px" }, 500);
        $(this).find(".div_bg5").stop(true, true).animate({ width: "191px" }, 500);
        $(this).find(".div_bg6").stop(true, true).animate({ width: "153px" }, 500);
        $(this).find(".div_bg7").stop(true, true).animate({ width: "229px" }, 500);
        $(this).find(".div_bg8").stop(true, true).animate({ width: "267px" }, 500);

        $(this).find(".div_bgB").stop(true, true).animate({ width: "0px" }, 500, function () {
            var x = $(".center").eq($(this).parent().parent().index() * 4 + $(this).parent().index());
            var t = $(this).parent().parent().index() * 4 + $(this).parent().index();
            $(".center").stop(true).animate({ width: "0px" }, 100);
            $(".center").removeClass("add_boder1");
            $(".center").removeClass("add_boder2");
            if ($(this).parent().parent().index() == 0) {
                if ($(this).parent().index() % 2 == 0) {
                    x.stop(true).animate({ width: "60%" }, 500, function () {
                        x.removeClass("add_boder3");
                    });
                    if (now_index != t) x.addClass("add_boder3");
                }
                else {
                    x.stop(true).animate({ width: "60%" }, 500, function () {
                        x.removeClass("add_boder1");
                    });
                    if (now_index != t) x.addClass("add_boder1");
                }
            }
            else {
                if ($(this).parent().index() % 2 == 0) {
                    x.stop(true).animate({ width: "60%" }, 500, function () {
                        x.removeClass("add_boder2");
                    });
                    if (now_index != t) x.addClass("add_boder2");
                }
                else {
                    x.stop(true).animate({ width: "60%" }, 500, function () {
                        x.removeClass("add_boder4");
                    });
                    if (now_index != t) x.addClass("add_boder4");
                }
            }
            now_index = t;
        });
        

        
    });

    
});