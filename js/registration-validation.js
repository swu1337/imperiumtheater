$(function() {
        if($('.modal-bg').length) {
            $('.register .action').on('click', function(e) {
                e.preventDefault();
                let input = [$('#vn').val(), $('#an').val(), $('#remail').val(), $('#tn').val(), $('#rpassword').val(), $('#hrpassword').val()];
                if(checkInput(input)) {
                    
                } else {
                    console.log(222);
                    $('.register > .error').text('Vul alle invoervelden in!').show();
                }
            });
        }
});
