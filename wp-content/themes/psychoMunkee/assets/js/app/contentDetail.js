jQuery(document).ready(function($) {
	
    // var cover = $('.sampleCover');
    // var details = $('#sampleDetail');
    // var closeDetails = $('#sampleClose');
    var tilt;



    $.fn.resetTilt = function() {
        tilt.tilt.call(tilt);
    };

    $.fn.addTilt = function() {
            tilt = $('.pmSample').each(function (){
            var self = $(this);
            self.tilt();
         })
    };


     $.fn.addTilt();

    $('#front-page').on('click', '.sampleCover',  function(e){
        e.stopPropagation();
        $('#sampleDetail').toggleClass('open');
        tilt.tilt.destroy.call(tilt);
    });

    $('#front-page').on('click', '#sampleClose', function(e){
       e.stopPropagation();
       $('#sampleDetail').toggleClass('open');
       $.fn.resetTilt();
    });


});