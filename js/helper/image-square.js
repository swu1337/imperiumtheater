$(function() {
    var imageSquareResizer = (selector) => {
        selector.height(selector.width());
    }

    if($('.programma-and-tickets').length || $('.cart').length) {
        imageSquareResizer($('.ticket > figure img'));
        imageSquareResizer($('.ticket > header > figure img'));
    }
});
