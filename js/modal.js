$(function() {
    if($('.modal-bg').length) {
        //Selecting needed elements;
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

                //Check if the user is not logged in, if not show the modal
                if(!getStorage('active-user')) {
                    modal.slideDown();
                }
            });
        }
        //Making sure that when clicking on the X or the gray-out background it closes the modal
        modal.on('click', function(e) {
            if($(e.target).hasClass('close') || $(e.target).hasClass('modal-bg')) {
                modal.slideUp();
            }
        });
        //Attaching click function on the success message modal.
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
