$(function() {
    //Making sure this function won't trigger in other routes
    if(getRoute() === ACCOUNT) {
        if(getStorage('active-user')) {
            //redirecting to another page
            window.location.replace('checkout.html');
        } else {
            $('.account .action').on('click', function(e) {
                e.preventDefault();
                if($(e.target).parent().find('input').length > 1 ) {
                    //Getting user data
                    let email = $(e.target).parent().find('input[type=email]').val();
                    let ww = $(e.target).parent().find('input[type=password]').val();
                    let error = $(e.target).parent().siblings('p.error');

                    if(email && ww) {
                        let user = checkLogin(email, ww);
                        if(user) {
                            //Setting the active user and replacing login in the  navigation to the name of user
                            $('.header-nav .inloggen').text(user.vn);
                            setStorage('active-user', user);
                            window.location.replace('checkout.html');
                        } else {
                            error.text(ERROR_EMPTY);
                        }
                    } else {
                        error.text(ERROR_EMPTY);
                    }
                } else {
                    if(email) {
                        if(!emailExist(email)) {
                            //Redirecting to another page. page is not made yet. This is where the user fill in his personal information
                            window.location.replace('no-account.html');
                        } else {
                            error.text(ERROR_EMAIL);
                        }
                    } else {
                        error.text(ERROR_EMPTY);
                    }
                }
            });
        }
    }
});
