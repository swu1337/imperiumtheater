$(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0) {
            $('.stickyheader').addClass('inverse');
            $('li > a.focus').addClass('inverse');
            $('ul > li > a').addClass('inverse');
        } else {
            $('.stickyheader').removeClass('inverse');
            $('li > a.focus').removeClass('inverse');
            $('ul > li > a').removeClass('inverse');
        }

    });
});
