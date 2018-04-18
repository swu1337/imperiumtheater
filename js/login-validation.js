$(function() {
        if($('.modal-bg').length) {
            $('.login .action').on('click', function(e) {
                e.preventDefault();
                //Getting input from user
                let email = $('#email').val();
                let ww = $('#password').val();

                if(email && ww) {
                    //Checking for login
                    let user = checkLogin(email, ww);

                    if(user) {
                        //Hide the modal, and setting up the active user
                        $('.modal-bg').slideUp();
                        $('.header-nav .inloggen').text(user.vn);
                        setStorage('active-user', user);
                    } else {
                        //Using global const to show error messages
                        $('.login > .error').text(ERROR_LOGIN).show();
                    }
                } else {
                    $('.login > .error').text(ERROR_EMPTY).show();
                }
            });
        }
});
