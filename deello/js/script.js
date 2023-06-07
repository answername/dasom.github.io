$(function() {

    // bar
    // 스크롤내리면 보이고, 젤 위로 올라가면 안보이게 하는 거
    var navBar = document.getElementById('bar');

    window.addEventListener('scroll', function() {
        var third = $("#event").offset().top;

        if($(window).scrollTop() > third) {
            navBar.style.display = 'block';
        }else {
            navBar.style.display = 'none';
        }
    })


    // rolling
    // 무한롤링배너
    let roller = document.querySelector('.roller');
    roller.id = 'roller1';

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('#rolling').appendChild(clone);

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.roller').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');

    let rollerWidth = document.querySelector('.roller').offsetWidth;
    let betweenDistance = 1;
    originalID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller1'));
    cloneID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller2'));


    function betweenRollCallback(d, roller) {
        let left = parseInt(roller.style.left);
        roller.style.left = (left - d) + 'px';

        if(rollerWidth + (left - d) <= 0) {
            roller.style.left = rollerWidth + 'px';
        }
    }

    // content 보이기
    window.addEventListener('scroll', reveal);
    window.addEventListener('scroll', revealed);

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
    function revealed() {
        var reveals = document.querySelectorAll('.revealed');

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
    

    

    // best-item
    // 다음 이미지로 넘어가는 거
    var $slides = $("#alls"),
        $next = $("#next"),
        $prev = $("#prev");

    $next.on("click", function() {
        $slides.animate({left : "-=330px"}, function() {
            $slides.removeAttr("style")
                   .children(":first").appendTo(this);
        });
    });
    $prev.on("click", function() {
        $slides.animate({left : "+=330px"}, function() {
            $slides.removeAttr("style")
                   .children(":last").prependTo(this);
        });
    });


    // showroom
    // 다음 이미지로 넘어가는 거
    var $slide = $("#stores");

    $("#after").on("click", function() {
        $slide.animate({left : "-100%"});
    });
    $("#before").on("click", function() {
        $slide.animate({left : "0"});
    });


    // top
    // 위로 올라가는 효과
    $(window).scroll(function() {
        if($(this).scrollTop() >= 700) {
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