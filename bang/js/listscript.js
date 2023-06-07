$(function() {

    // nav 고정
    var nav = document.getElementById('bar');

    window.addEventListener('scroll', function() {
        var contents = $("#contents").offset().top;

        if($(window).scrollTop() > contents) {
            nav.style.display = 'block';
        }else {
            nav.style.display = 'none';
        }
    })

    // alone 보이게하기
    $(window).scroll(function() {
        if($(this).scrollTop() >= 700) {
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


    // 보이기
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