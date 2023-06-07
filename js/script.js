$(function() {

    // 마우스 휠 한 번에 넘어가는 거
    var $html = $("html");
    var $window = $(window);

    window.addEventListener("wheel", function(event) {
        event.preventDefault();

        if($html.is(":animated")) return;

        // 휠 굴린 방향
        var delta = event.deltaY;

        var currentScrollTop = $window.scrollTop();
        var pageHeight = $window.height();
        var move = 0;

        if(delta > 0) { // 마우스 휠을 위로 굴린 경우
            var over = currentScrollTop % pageHeight;
            move = currentScrollTop + pageHeight - over;
        }
        else { // 마우스 휠을 아래로 굴린 경우
            var over = currentScrollTop % pageHeight;

            if(over == 0) move = currentScrollTop - pageHeight;
            else          move = currentScrollTop - over;
        }
        $html.animate({scrollTop : move});

    }, {passive : false});



    // 메뉴 누르면 해당페이지로 이동
    var $menu = $('#menu > ul > li');
    var $right = $('#right > li'); // 첫페이지만 해당됨
    var $contents = $(".page");

    $menu.click(function(event) {
        event.preventDefault();

        var idx = $(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;
        
        $('html').stop().animate({scrollTop:sectionDistance});
    
    });



    // 첫페이지만 해당
    $right.click(function(x) {
        x.preventDefault();

        var idx = $(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;
        
        $('html').stop().animate({scrollTop:sectionDistance});
    })


    // 위에서 내려오게 하는 효과
    setTimeout(function() {
        $("#content > h1").slideDown(1000);
    }, 5300);

    // comma보이게 하는 효과
    setTimeout(function() {
        $('.line > img').animate({opacity : "100%"});
    }, 2500);

    // about페이지
    var $slide1 = $("#about_container > div");

    $("#after").on("click", function() {
        $slide1.animate({left : "-100%"});
    });
    $("#before").on("click", function() {
        $slide1.animate({left : "0"});
    });



    

    // 그래프 늘리는 거
    $(window).scroll(function(event) {
        event.preventDefault();
        var third = $("#third_page").offset().top;
        var grapic = $('#third_page > .kcc');

        if($(window).scrollTop() == third) {
            var bar = document.querySelectorAll('.skill');

            if(!grapic.hasClass('active')) {
                bar.forEach(function(item,index) {
                    numAnimation(index);
                });
    
                function numAnimation(idx) {
                    var initialRate = 0;
                    var targetRate = bar[idx].getAttribute('data-num');
                    var skillBar = bar[idx].querySelector('.ruler');
                    var rate = bar[idx].querySelector('span');
                    
                    var numAni = setInterval(function() {
                        initialRate++;
                        if(initialRate == targetRate){
                            clearInterval(numAni);
                        }
                        skillBar.style.width = initialRate + '%';
                        rate.innerText = initialRate + '%';
                    }, 30);
                }
                console.log(numAnimation);
            }
            grapic.addClass('active');
        }
    });



    // fourth_page 다음 이미지로 넘어가는 거
    var $slide = $(".web_img");
    var $text = $('.web_info');
    var $etc = $('#etc_box');
    var duration = 600;
    
    function nextSlide() {
        $slide.animate({left : "-100%"}, duration, function() {
            $slide.removeAttr("style")
                  .children(":first").appendTo(this);
        });
        $text.animate({left : "-100%"}, duration, function() {
            $text.removeAttr("style")
                  .children(":first").appendTo(this);
        });
    }
    function prevSlide() {
        $slide.prepend($slide.children(":last"))
              .css("left", "-100%")
              .animate({left : 0}, duration);
        
        $text.prepend($text.children(":last"))
              .css("left", "-100%")
              .animate({left : 0}, duration);
    }

    $("#next").on("click", nextSlide);
    $("#prev").on("click", prevSlide);


    function nextBanner() {
        $etc.animate({left : "-100%"}, duration, function() {
            $etc.removeAttr("style")
                .children(":first").appendTo(this);
        });
    }
    function prevBanner() {
        $etc.prepend($etc.children(":last"))
            .css("left", "-100%")
            .animate({left : 0}, duration);
    }

    $("#next2").on("click", nextBanner);
    $("#prev2").on("click", prevBanner);


    
    // fourth_page 메뉴 누르면 web/etc 보이기
    $("#select > p:last-child").click(function() {
       $("#web").addClass('blind');
       $("#etc").removeClass('blind');

       $("#select > p:last-child").addClass('big');
       $("#select > p:first-child").removeClass('big');
    })
    $("#select > p:first-child").click(function() {
        $("#web").removeClass('blind');
        $("#etc").addClass('blind');

        $("#select > p:first-child").addClass('big');
        $("#select > p:last-child").removeClass('big');
     })




    // last_page 콤마 보이는 거
    $(window).scroll(function() {
        var four = $("#last_page").offset().top;

        if($(window).scrollTop() == four) {
            setTimeout(function() {
                $("#thanks > h2").animate({opacity : "100%"});
            }, 1000);    
        }

    });



    // 젤 위로 올라오게 하는 거
    $("#top").click(function() {
        $("html, body").animate({scrollTop : 0}, duration);
    });


});
