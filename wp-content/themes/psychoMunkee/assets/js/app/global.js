
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
        var anchor = self.attr('data-anchor');
        var destination = $("#"+anchor+"").offset().top

        navItem.removeClass('active');
        self.addClass('active');

        var sm = 576,
            md = 768 - 1,
            lg = 992,
            xl = 1200;

       var mql = [window.matchMedia("(max-width: "+md+"px)")];
        if (mql[0].matches){
               $('.pmBeliefCanvas').animate({
            scrollTop: parseInt($(".pmBeliefCanvas").scrollTop()+destination-155)
        }, 500);

        }
        else {
                $('.pmBeliefCanvas').animate({
            scrollTop: parseInt($(".pmBeliefCanvas").scrollTop()+destination-50)
        }, 500);

        }	
  


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