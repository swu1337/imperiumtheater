$(function() {
    if($('.gallery').length) {
        $('.exhibition').each( function() {
            var photos = $(this).find('.photo-holder');
            var restPhotos = photos.slice(8, this.length).hide();

            $(this).children('.show-more').on('click', function() {
                if($(this).children("p:contains('Show more')").length) {
                    photos.slideDown();
                    $(this).children("p").text('Show less');
                    $(this).children("i").css('transform', 'rotate(180deg)');
                } else {
                    restPhotos.slideUp();
                    $(this).children("p").text('Show more');
                    $(this).children("i").css('transform', 'rotate(0deg)');
                }
            });
        });
    }
});
