$(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0) {
            $('.stickyheader').addClass('inverse');
            $('.logo').addClass('inverse');
            $('li > a.focus').addClass('inverse');
            $('header nav').addClass('inverse');
            $('svg#logo').addClass('inverse');
            $('.st0, .st1').css('fill', 'white');
        } else {
            $('.stickyheader').removeClass('inverse');
            $('.logo').removeClass('inverse');
            $('li > a.focus').removeClass('inverse');
            $('header nav').removeClass('inverse');
            $('svg#logo').removeClass('inverse');
            $('.st1').css('fill', '#DE134C');
        }
    });
});
