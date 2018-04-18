$(function() {
    $('.programma-and-tickets .buy-ticket').on('click', function(e) {
        e.preventDefault();
        //Redirecting to another page
        window.location.replace('cart.html');
    });
});
