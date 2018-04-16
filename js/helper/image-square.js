$(function() {
    var imageSquareResizer = (selector) => {
        selector.height(selector.width());
    }

    if($('.programma-and-tickets').length) {
        imageSquareResizer($('.ticket > figure > img'));
    }
});
