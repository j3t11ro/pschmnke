jQuery(document).ready(function($) {
	
    // var cover = $('.sampleCover');
    // var details = $('#sampleDetail');
    // var closeDetails = $('#sampleClose');
    var tilt;
    var sm = 576,
        md = 768 - 1,
        lg = 992,
        xl = 1200;



    $.fn.resetTilt = function() {
        tilt.tilt.call(tilt);
    };

    $.fn.addTilt = function() {
        var mql = [window.matchMedia("(max-width: "+md+"px)")];
        if (!mql[0].matches){
            tilt = $('.pmSample').each(function (){
            var self = $(this);
            self.tilt();
         })
        }
    };


     $.fn.addTilt();

    $('#front-page').on('click', '.sampleCover',  function(e){
        e.stopPropagation();
        $('#sampleDetail').toggleClass('open');
       // tilt.tilt.destroy.call(tilt);

        var mql = [window.matchMedia("(max-width: "+md+"px)")];
        if (mql[0].matches){
            $('body').addClass('overflow-content');
        }
        else {
            $('body').removeClass('overflow-content');
        }	

    });

    $('#front-page').on('click', '#sampleClose', function(e){
       e.stopPropagation();
       $('body').removeClass('overflow-content');
       $('#sampleDetail').toggleClass('open');
      // $.fn.resetTilt();
    });


	



});