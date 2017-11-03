'use strict';

jQuery(document).ready(function () {
    var menu = jQuery('#nav_menu');
    var content = jQuery('#container');
    // Add and remove classes that make fixed menu when scrolling down
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 128) {
            menu.addClass("fixed_menu");
            content.addClass("toppadding");
        } else {
            menu.removeClass("fixed_menu");
            content.removeClass("toppadding");
        }
    });
});
jQuery(document).ready(function () {
    // Show back-to-top button when scrolling down
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 400) {
            jQuery('#back-to-top').fadeIn();
        } else {
            jQuery('#back-to-top').fadeOut();
        }
    });
    // Scroll body to 0px on click
    jQuery('#back-to-top').click(function () {
        jQuery('#back-to-top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});
//# sourceMappingURL=script.js.map
