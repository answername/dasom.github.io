$(function() {
    
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


    // alone 보이게하기
    $(window).scroll(function() {
        if($(this).scrollTop() >= 1500) {
            $("#alone").fadeIn();
        }
        else {
            $("#alone").fadeOut();
        }
    })
    // alone 위로 가기
    $(".go-top").click(function(b) {
        b.preventDefault();
        $("html, body").stop().animate({scrollTop: 0}, 400)
    });
    // alone 아래로 가기
    $(".go-bottom").click(function(c) {
        c.preventDefault();
        $("html, body").stop().animate({scrollTop: $(document).height()}, 400);
        return false;
    });

    // content
    // $(window).scroll(function() {
    //     var scrollTop = $(this).scrollTop();

    //     $(".s-content:nth-child(1)")
    // })

    // main 누르면 색깔 바꾸기
    $('.m-black').click(function() {
        var atyle = $("#m-black");
        var other = $("#m-brown, #m-beige, #m-yellowbeige, #m-wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.m-brown').click(function() {
        var atyle = $("#m-brown");
        var other = $("#m-black, #m-beige, #m-yellowbeige, #m-wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.m-beige').click(function() {
        var atyle = $("#m-beige");
        var other = $("#m-black, #m-brown, #m-yellowbeige, #m-wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.m-yellowbeige').click(function() {
        var atyle = $("#m-yellowbeige");
        var other = $("#m-black, #m-brown, #m-beige, #m-wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.m-wine').click(function() {
        var atyle = $("#m-wine");
        var other = $("#m-black, #m-brown, #m-beige, #m-yellowbeige");
        atyle.addClass("recent");
        other.removeClass("recent");
    })


    // anc 스크롤하면 올라오고, 올라가기
    function parallax(a,b) {
        if(a >= (b.offset().top - $(window).outerHeight() * 1.6)) {
            b.addClass("move");
        }
    }
    function tparallax(a,b) {
        if(a >= (b.offset().top - $(window).outerHeight() * 0.8)) {
            b.addClass("move");
        }
    }

    $(window).scroll(function(x) {
        x.preventDefault();
        var scrollTop = $(this).scrollTop();

        parallax(scrollTop, $("#anc-container .anc-main > img"));
        tparallax(scrollTop, $("#cover-img > img"));
        tparallax(scrollTop, $(".s-content:nth-child(1) > div:last-child"));
        tparallax(scrollTop, $(".s-content:nth-child(2) > div:last-child"));
        tparallax(scrollTop, $(".s-content:nth-child(3) > div:last-child"));
        tparallax(scrollTop, $(".no-img > img"));

    })


    // light 스크롤하면 숫자변동    
    var progressWrap = document.querySelector('#gram');
    var progressRate = progressWrap.querySelector('span');
    var initialRate = 0;
    var numAnimation = null;
    var targetRate = parseInt(progressWrap.getAttribute('data-num'));

    $(window).scroll(function() {
        var gram = $("#light").offset().top * 0.6;

        if($(window).scrollTop() > gram) {
            startNumberAnimation();
        }
    });

    function startNumberAnimation() {
        if(numAnimation == null) {
            numAnimation = setInterval(function() {
                initialRate++;
                if(initialRate == targetRate) {
                    clearInterval(numAnimation);
                }
                progressRate.innerText = initialRate;
            }, 10);
        }
    }



    // style 누르면 색깔 바꾸기
    $('.c-black').click(function() {
        var atyle = $("#black");
        var other = $("#brown, #beige, #yellowbeige, #wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.c-brown').click(function() {
        var atyle = $("#brown");
        var other = $("#black, #beige, #yellowbeige, #wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.c-beige').click(function() {
        var atyle = $("#beige");
        var other = $("#black, #brown, #yellowbeige, #wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.c-yellowbeige').click(function() {
        var atyle = $("#yellowbeige");
        var other = $("#black, #brown, #beige, #wine");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    $('.c-wine').click(function() {
        var atyle = $("#wine");
        var other = $("#black, #brown, #beige, #yellowbeige");
        atyle.addClass("recent");
        other.removeClass("recent");
    })
    

    // features, associate 보이기
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++) {
            var windowheight =  window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if(revealTop < windowheight - revealPoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
    


})