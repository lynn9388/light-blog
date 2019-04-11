// Return to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.return-to-top').fadeIn(200);
    } else {
        $('.return-to-top').fadeOut(200);
    }
});

$(function () {
    $(".return-to-top").click(function () {
        $("html,body").animate({
            scrollTop: $("head").offset().top
        }, "500");
    })
})
