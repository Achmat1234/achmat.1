$(window).scroll(function () {
    var hT = $('#skill-bar-wrapper').offset().top,
        hH = $('#skill-bar-wrapper').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - 1.4 * wH)) {
        jQuery(document).ready(function () {
            jQuery('.skillbar-container').each(function () {
                jQuery(this).find('.skills').animate({
                    width: jQuery(this).attr('data-percent')
                }, 5000); // 5 seconds
            });
        });
    }
});