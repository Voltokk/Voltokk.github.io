$(document).ready(function () {
    /*$('.left-menu > li').hoverIntent(function () {
        $(this).find('~ ul').stop().slideToggle(400);
    });
    $(".left-menu > li").hoverIntent( function(){
        $('submenu', this).stop().slideDown(400);
    }, function(){
        $('submenu', this).slideUp(400);
    });*/
})

;$(document).ready(function () {
    $('.click').click(function () {
        $(this).find('~ ul').slideToggle(400);
        $(this).toggleClass('click')
        $(this).toggleClass('after');
        event.preventDefault();
    });
});

