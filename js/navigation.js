$(function() {
    if($('.landingpage').length) {
        $(window).on('scroll', function() {
            let scrollTop = $(window).scrollTop();
            if(scrollTop > 0) {
                $('.header-nav').addClass('inverse');
                $('.logo').addClass('inverse');
                $('li > a.focus').addClass('inverse');
                $('header nav').addClass('inverse');
                $('svg#logo').addClass('inverse');
                $('.st0, .st1').css('fill', 'white');
            } else {
                $('.header-nav').removeClass('inverse');
                $('.logo').removeClass('inverse');
                $('li > a.focus').removeClass('inverse');
                $('header nav').removeClass('inverse');
                $('svg#logo').removeClass('inverse');
                $('.st1').css('fill', '#DE134C');
            }
        });
    } else {
        $('.header-nav').addClass('inverse');
        $('.logo').addClass('inverse');
        $('li > a.focus').addClass('inverse');
        $('header nav').addClass('inverse');
        $('svg#logo').addClass('inverse');
        $('.st0, .st1').css('fill', 'white');
    }
});
