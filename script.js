let $target = $('.anime'),
    $target2 = $('.anime2'),
    $target3 = $('.anime3'),
    animationClass = 'anime-start',
    animationClass2 = 'anime2-start',
    animationClass3 = 'anime3-start',
    offset = $(window).height() * 4 / 5;

function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target2.each(function() {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass2)
        } else {
            $(this).removeClass(animationClass2)
        }
    })

    $target3.each(function() {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass3)
        } else {
            $(this).removeClass(animationClass3)
        }
    })

    $target.each(function() {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
            $(this).addClass(animationClass)
        } else {
            $(this).removeClass(animationClass)
        }
    })
}

animeScroll()

$(document).scroll(function() {
    animeScroll()
})