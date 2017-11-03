$(document).ready(function () {
    var hide = $('.hidden-block');
    var push = $('#push-btn');
    push.click(function () {
        hide.slideToggle(600);
        hide.toggleClass('active');
    });
});
