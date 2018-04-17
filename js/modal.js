$(function() {
    if($('.modal-bg').length) {
        let modal = $('.modal-bg');
        let loginModal = $('.login-modal');
        let registerModal = $('.register-modal');

        if($('.inloggen').length) {
            $('.inloggen').on('click', function(e) {
                registerModal.hide();
                loginModal.show();
                
                if(!getStorage('active-user')) {
                    modal.slideDown();
                }
            });
        }

        if($('.modal-bg').length) {
            $('.modal-bg').on('click', function(e) {
                if($(e.target).hasClass('close') || $(e.target).hasClass('modal-bg')) {
                    modal.slideUp();
                }
            });
        }

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
