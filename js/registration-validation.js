$(function() {
        if($('.modal-bg').length) {
            $('.register .action').on('click', function(e) {
                e.preventDefault();
                //Setting input in an array for easy validation
                let input = [$('#vn').val(), $('#an').val(), $('#remail').val(), $('#tn').val(), $('#rpassword').val(), $('#hrpassword').val()];
                if(checkInput(input)) {
                    if(!emailExist($('#remail').val())) {
                        //Checking for same password
                        if($('#rpassword').val() === $('#hrpassword').val()) {
                            $('.register > .error').hide();
                            //Getting users data, to push new data into it. localStorage is set and get only.
                            let users = getStorage('users');
                            input.splice(1, 0, $('#tv').val());
                            users.users.push(objectFormatter(input));
                            setStorage('users', users);
                            $('.register-modal').slideUp();
                            $('.success-modal').slideDown();
                            $('.success .register-email').text($('#remail').val());
                            [$('#vn'), $('#tv'), $('#an'), $('#remail'), $('#tn'), $('#rpassword'), $('#hrpassword')].forEach((e) => {
                                $(e).val('');
                            });
                        } else {
                            //Showing error message using global constants
                            $('.register > .error').text(ERROR_PASSWORD).show();
                        }
                    } else {
                        $('.register > .error').text(ERROR_EMAIL).show();
                    }
                } else {
                    $('.register > .error').text(ERROR_EMPTY).show();
                }
            });
        }
});
