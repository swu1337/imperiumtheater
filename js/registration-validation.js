$(function() {
        if($('.modal-bg').length) {
            $('.register .action').on('click', function(e) {
                e.preventDefault();
                let input = [$('#vn').val(), $('#an').val(), $('#remail').val(), $('#tn').val(), $('#rpassword').val(), $('#hrpassword').val()];
                console.log(input);
                if(checkInput(input)) {
                    if(!emailExist($('#remail').val())) {
                        if($('#rpassword').val() === $('#hrpassword').val()) {
                            $('.register > .error').hide();
                            let users = getStorage('users');
                            input.splice(1, 0, $('#tv').val());
                            users.users.push(objectFormatter(input));
                            setStorage('users', users);
                            $('.register-modal').slideUp();
                            $('.success-modal').slideDown();
                            $('.success .register-email').text($('#remail').val());
                            [$('#vn'), $('#an'), $('#remail'), $('#tn'), $('#rpassword'), $('#hrpassword')];
                        } else {
                            $('.register > .error').text('Wachtwoorden komen niet overeen!').show();
                        }
                    } else {
                        $('.register > .error').text('Email is al in gebruik!').show();
                    }
                } else {
                    $('.register > .error').text('Vul alle invoervelden in!').show();
                }
            });
        }
});
