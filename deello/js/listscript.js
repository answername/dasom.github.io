$(function() {

    // #module
    // 슬라이드
    var $imgSlide = $("#menus > ul"),
        $next = $("#right"),
        $prev = $("#left"),
        $menu = $("#menus > ul > li").length;

    $next.on("click", function() {
        $imgSlide.animate({left : "-=250px"}, function() {
            $imgSlide.removeAttr("style")
                     .children(":first").appendTo(this);
        });
        
    });
    $prev.on("click", function() {
        $imgSlide.animate({left : "+=250px"}, function() {
            $imgSlide.removeAttr("style")
                     .children(":last").prependTo(this);
        })
    })

    // #module
    // 누르면 .dot추가
    $(".one").click(function() {
        var module = $(".one");
        var other = $(".two, .three, .four, .five, .six, .seven");
        module.addClass("dot");
        other.removeClass("dot");
    })
    $(".two").click(function() {
        var module = $(".two");
        var other = $(".one, .three, .four, .five, .six, .seven");
        module.addClass("dot");
        other.removeClass("dot");
    })
    $(".three").click(function() {
        var module = $(".three");
        var other = $(".one, .two, .four, .five, .six, .seven");
        module.addClass("dot");
        other.removeClass("dot");
    })
    $(".four").click(function() {
        var module = $(".four");
        var other = $(".one, .two, .three, .five, .six, .seven");
        module.addClass("dot");
        other.removeClass("dot");
    })
    $(".five").click(function() {
        var module = $(".five");
        var other = $(".one, .two, .three, .four, .six, .seven");
        module.addClass("dot");
        other.removeClass("dot");
    })
    $(".six").click(function() {
        var module = $(".six");
        var other = $(".one, .two, .three, .four, .five, .seven");
        module.addClass("dot");
        other.removeClass("dot");
    })
    $(".seven").click(function() {
        var module = $(".seven");
        var other = $(".one, .two, .three, .four, .five, .six");
        module.addClass("dot");
        other.removeClass("dot");
    })
    



})