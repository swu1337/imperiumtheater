$(function() {
        let checkLogin = (email, password) => {
            let users = getStorage('users').users;

            // for(let user of users) {
            //     if(email == user.email && password == user.ww) {
            //         return user;
            //     }
            // }
            return users.find((user) => {
                return email === user.email && password === user.ww;
            });
            //return false;
         };

        if($('.modal-bg').length) {
            $('.login .action').on('click', function(e) {
                e.preventDefault();
                let email = $('#email').val();
                let ww = $('#password').val();

                if(email && ww) {
                    let user = checkLogin(email, ww);

                    if(user) {
                        $('.modal-bg').slideUp();
                        $('.header-nav .inloggen').text(user.vn);
                        setStorage('active-user', user);
                    } else {
                        $('.login > .error').text('Uw account of wachtwoord is onjuist. Als u uw wachtwoord niet meer weet, kunt u het opnieuw instellen').show();
                    }
                } else {
                    $('.login > .error').text('Vul alle invoervelden in!').show();
                }
            });
        }
});
