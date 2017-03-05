
jQuery(document).ready(function($) {

    var about =  $('#beliefNav li'); 
    var scrollTop = $('.toTop');

    // ===== Scroll to Top ==== 
    $.fn.scrollToTop();
    
   $('#front-page').on('click', '.toTop', function(e) {   
       e.stopPropagation();
        $('#sampleDetail').animate({
            scrollTop : 0                     
        }, 500);
    });

   $('#front-page').on('click', '#beliefNav li', function(e) {
       e.stopPropagation();
        var self = $(this);
        var navItem =  $('#beliefNav li');

        navItem.removeClass('active');
        self.addClass('active');

    });

  $('#front-page').on('click', '.pmServiceWrapper', function(e) {
      e.stopPropagation();
        var self = $(this);
        var type = self.attr("data-type");
        var bgColor = self.attr("data-rgba");
        var canvasItem = $('.canvasItem');
        var canvasBg = $('.pmServiceCanvas');
        var service = $('.pmServiceWrapper');

        service.removeClass('active');
        self.addClass('active');
        canvasItem.hide();
        $("#"+type+".canvasItem").css({'display': 'flex'});

        canvasBg.css({'background-image': "linear-gradient(rgba("+bgColor+"), rgba(0,0,0,0.9)),url(./wp-content/themes/psychoMunkee/assets/images/patternBg1.png)"})

    });

});

(function( $ ) {

$.fn.scrollToTop = function() {

    $('#sampleDetail').on('scroll', function(e) {
        if ($(this).scrollTop() >= 50) {   
            $('.toTop').addClass('show')   
        } else {
            $('.toTop').removeClass('show')
        }
    });

}

}( jQuery ));