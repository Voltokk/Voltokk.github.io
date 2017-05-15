$(document).ready(function () {
    var hide = $('.hidden-block');
    var push = $('#push-btn');
    push.click(function () {
        hide.slideToggle(600);
        hide.addClass('active');
    });
    $(window).resize(function () {
        if ($(window).width > 767) {
            hide.removeClass('active');
            push.prop('checked') === false;
        }
    })
});