$(function() {
    
    // content
    // 스크롤내릴때마다 발생되는 효과
    const boxes = document.querySelectorAll('.safe');
    window.addEventListener('scroll', safeBoxes)
        safeBoxes()

        function safeBoxes() {
            const triggerBottom = window.innerHeight / 1.5
            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top
                if(boxTop < triggerBottom) {
                    box.classList.add('show')
                } else {
                    box.classList.remove('show')
                }
            });
        };
  
    
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

})