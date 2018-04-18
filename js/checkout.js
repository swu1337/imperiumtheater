$(function() {
    $('.check-pay-method').on('click', function() {
        //Check if user checked an radio
        if($('input[name="pay-method"]:checked').val()) {
            $('.pay-method').text($('input[name="pay-method"]:checked').val());
            $('.checkout .pay-info .error').hide();
            //Hide the radiobuttons and show literal data
            $('.pay-info form').hide();
            $('.pay-method-info').show();
            $('.check-pay-method').text('Wijzig');
            $('.check-pay-method').removeClass('check-pay-method').addClass('edit-paymethod');
            $('.checkout .amount-holder').css('display', 'flex');
            //Scroll to bottom of the page, preventing cutoff content
            window.scrollTo(0, document.body.scrollHeight);
        } else {
            $('.checkout .pay-info .error').text(ERROR_PAYMETHOD);
        }
    });
});
