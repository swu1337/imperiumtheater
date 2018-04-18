$(function() {
    //This function makes it possible to square images by getting the width of the given image and replace its with the height
    var imageSquareResizer = (selector) => {
        selector.height(selector.width());
    }

    if($('.programma-and-tickets').length || $('.cart').length) {
        imageSquareResizer($('.ticket > figure img'));
        imageSquareResizer($('.ticket > header > figure img'));
    }
});
