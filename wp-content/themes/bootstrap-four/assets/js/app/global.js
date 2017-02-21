
jQuery(document).ready(function($) {

    // ===== Scroll to Top ==== 
    $('#sampleDetail').scroll(function() {
        if ($(this).scrollTop() >= 50) {   
            $('.toTop').addClass('show')   
        } else {
            $('.toTop').removeClass('show')
        }
    });
    $('.toTop').click(function() {     
        $('#sampleDetail').animate({
            scrollTop : 0                     
        }, 500);
    });

});