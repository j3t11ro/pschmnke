
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


    $('#beliefNav li').on('click', function(){
        var self = $(this);
        var navItem =  $('#beliefNav li');

        navItem.removeClass('active');
        self.addClass('active');

    });

});