$(function() {
    if($('.gallery').length) {
        $('.exhibition').each(function() {
            //Getting all the photo's and hiding the rest excep the first eight;
            let photos = $(this).find('.photo-holder');
            let restPhotos = photos.slice(8, this.length).hide();

            $(this).children('.show-more').on('click', function() {
                //Switch between show more and show less
                if($(this).children("p:contains('Show more')").length) {
                    photos.slideDown();
                    $(this).children('p').text('Show less');
                    //Rotating the arrow to point up
                    $(this).children('i').css('transform', 'rotate(180deg)');
                } else {
                    restPhotos.slideUp();
                    $(this).children('p').text('Show more');
                    $(this).children('i').css('transform', 'rotate(0deg)');
                }
            });
        });
    }
});
