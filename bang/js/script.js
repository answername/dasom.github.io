$(function() {

    // banner 슬라이드
    var imgSlide = $("#container");
    var delay = 4000;
    var duration = 600;
    var photoIndex = 0;

    var $bullets = $("<ul></ul>")
                    .attr("id", "bullets")
                    .appendTo("#b-container");

    imgSlide.children().each(function() {
        $("<li></li>")
            .append("<a href = '#'><span></span></a>")
            .appendTo($bullets);
    });

    var $bulletsList = $bullets.find("a");
    $bulletsList.eq(photoIndex).addClass("on");

    function bannerSlide() {
        photoIndex++;
        photoIndex %= $bulletsList.length;
        $bulletsList.removeClass("on")
                    .eq(photoIndex).addClass("on");

        imgSlide.animate({left : "-100%"}, duration, function() {
            imgSlide.removeAttr("style")
                    .children(":first").appendTo(imgSlide);
        });
    };

    window.setInterval(bannerSlide, delay);

    $bulletsList.on("click", function(event) {
        event.preventDefault();

        var clickedIndex = $bulletsList.index(this);
        var step = clickedIndex - photoIndex;
        if(!step) return; // 차이가 없으면 핸들러를 즉시 종료
        
        // 현재 인덱스를 클릭한 요소의 인덱스로 설정
        photoIndex = clickedIndex;

        $bulletsList.removeClass("on")
                    .eq(photoIndex).addClass("on");

        if(step > 0) {
            imgSlide.animate({left : step * (-100) + "%"}, duration, function() {
                imgSlide.removeAttr("style")
                      .children(":lt(" + step + ")").appendTo(imgSlide);
            });
        }
        else {
            imgSlide.children(":gt(" + (step-1) + ")").prependTo(imgSlide);
            imgSlide.css({left : step * 100 + "%"}).animate({left : 0}, duration);
        }

    })


    // nav 고정
    var nav = document.getElementById('bar');

    window.addEventListener('scroll', function() {
        var content = $("#content").offset().top;

        if($(window).scrollTop() > content) {
            nav.style.display = 'block';
        }else {
            nav.style.display = 'none';
        }
    })


  
    // content 스크롤 애니메이션
    function parallax(st, a) {
        if(st >= (a.offset().top - $(window).outerHeight() * 1.5)) {
            a.addClass("move");
            a.removeClass("reset");
        }
        else {
            a.removeClass("move");
            a.addClass("reset");
        }
    }
    function mParallax(st, a) {
        if(st >= (a.offset().top - $(window).outerHeight() * 1.8)) {
            a.addClass("move");
            a.removeClass("reset");
        }
        else {
            a.removeClass("move");
            a.addClass("reset");
        }
    }
    function iParallax(st, a) {
        if(st >= (a.offset().top - $(window).outerHeight() * 1.0)) {
            a.addClass("move");
            a.removeClass("reset");
        }
        else {
            a.removeClass("move");
            a.addClass("reset");
        }
    }

    $(window).scroll(function(x) {
        x.preventDefault();
        var scrollTop = $(this).scrollTop();

        parallax(scrollTop, $("#content > .medium > p"));
        mParallax(scrollTop, $(".song2 > img"));
        parallax(scrollTop, $(".song3 > img"));
        iParallax(scrollTop, $(".middle > img"));
        iParallax(scrollTop, $(".sound:nth-child(2) > a > img"));
        iParallax(scrollTop, $(".sound:nth-child(3) > a > img"));
        iParallax(scrollTop, $(".sound:nth-child(4) > a > img"));
        iParallax(scrollTop, $(".sound:last-child > a > img"));
    })





    
    // best-products 롤링효과
    var bestSlide = $("#rolling");
    var $next = $("#next");
    var $prev = $("#prev");

    $next.on("click", function() {
        bestSlide.animate({left : "-=280px"}, function() {
            bestSlide.removeAttr("style")
                     .children(":first").appendTo(this);
        });
    });
    $prev.on("click", function() {
        bestSlide.animate({left : "+=280px"}, function() {
            bestSlide.removeAttr("style")
                     .children(":last").prependTo(this);
        });
    });

    
    //collabo 롤링효과
    var $slide = $("#collabo-container");
    var delay = 2500;
    var timerId = 0;
    
    function collaboSlide() {
        $slide.animate({left : "-=310px"}, function() {
            $slide.removeAttr("style")
                  .children(":first").appendTo(this);
        });
    }
    timerId = window.setInterval(collaboSlide, delay);

    $("#collabo-container").hover(
        function() {
            window.clearInterval(timerId);
        },
        function() {
            timerId = window.setInterval(collaboSlide, delay);
        }
    );

    
    // top
    // 위로 올라가는 효과
    $(window).scroll(function() {
        if($(this).scrollTop() >= 1000) {
            $(".top").fadeIn();
        }
        else {
            $(".top").fadeOut();
        }
    });
    $(".top").click(function(x) {
        x.preventDefault();
        $("html, body").stop().animate({scrollTop : 0}, 400)
    });

     
});