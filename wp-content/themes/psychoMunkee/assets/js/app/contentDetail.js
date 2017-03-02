(function($) {
	
    var cover = $('.sampleCover');
    var details = $('#sampleDetail');
    var closeDetails = $('#sampleClose');


    var tilt = $('.pmSample').each(function (){
            var self = $(this);
            self.tilt();
    })

    cover.on('click', function(e){
        details.toggleClass('open');
        tilt.tilt.destroy.call(tilt);
    });

   closeDetails.on('click', function(e){
       details.toggleClass('open');
       resetTilt();
    });

    function resetTilt(){
       tilt.tilt.call(tilt);
    }

    



})( jQuery );