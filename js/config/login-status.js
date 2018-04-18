$(function() {
    //Make sure user's first name is displaying instead of inloggen when user are logged in for example when refreshing the page//
    if(getStorage('active-user')) {
        $('.header-nav .inloggen').text(getStorage('active-user').vn);
    }
});
