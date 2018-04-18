$(function() {
    if($('.modal-bg').length) {
        let modal = $('.modal-bg');
        let loginModal = $('.login-modal');
        let registerModal = $('.register-modal');
        let successModal = $('.success-modal');
        let successHomeButton = $('.success .home');
        let successLoginButton = $('.success .login');

        if($('.inloggen').length) {
            $('.inloggen').on('click', function(e) {
                registerModal.hide();
                successModal.hide();
                loginModal.show();

                if(!getStorage('active-user')) {
                    modal.slideDown();
                }
            });
        } else{
            console.log(222);
        }

        modal.on('click', function(e) {
            if($(e.target).hasClass('close') || $(e.target).hasClass('modal-bg')) {
                modal.slideUp();
            }
        });

        successHomeButton.on('click', function() {
            modal.slideUp();
        });

        successLoginButton.on('click', function() {
            successModal.slideUp();
            loginModal.slideDown();
        });


        $('.registeren').on('click', function(e) {
            e.preventDefault();
            loginModal.slideUp();
            registerModal.slideDown();
        });

        $('.a-point').on('click', function(e) {
            e.preventDefault();
            registerModal.slideUp();
            loginModal.slideDown();
        });
    }
});
