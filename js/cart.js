$(function() {
    //Making sure this function won't trigger in other routes
    if(getRoute() === CART) {
        $('.cart button.button').on('click', function(e) {
            e.preventDefault();
            //Redirectin to another page instead of using a-tag. This is choosing on purpose becuase we need to send data to next page.
            window.location.replace('account.html');
        });
    }
});
