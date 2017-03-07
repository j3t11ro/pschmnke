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
        var self = $(this).next(),
         sampleTitle = self.attr('data-title'),
         sampleDesc = self.attr('data-description'),
         sampleServices = self.attr('data-services').split(','),
         sampleImages = self.attr('data-images').split(','),
         samplePalettes = self.attr('data-palettes').split(','),
         sampleWebsite = self.attr('data-site');
         sampleCover = self.attr('data-cover');

        sampleServices = sampleServices.filter(function(entry) { return /\S/.test(entry); });
        sampleImages = sampleImages.filter(function(entry) { return /\S/.test(entry); });
        samplePalettes = samplePalettes.filter(function(entry) { return /\S/.test(entry); });

       var detailTitle = $('.sampleIntro > h1'),
            detailDesc =  $('.sampleIntro > p'),
            detailBg = $('.sampleBg1'),
            detailImg = $('.sampleImage'),
            detailServices = $('.services'),
            detailPalettes = $('.samplePalette .palette'),
            detailThumbnails = $('.exampleThumbnails li'),
            detailSpotLight = $('.exampleCanvas');
            detailSite = $('.sampleImage + a');


            if(sampleWebsite == 'none'){ detailSite.hide() }else{  detailSite.attr('href', sampleWebsite)}
            detailTitle.text(sampleTitle);
            detailDesc.text(sampleDesc);
            detailImg.css({'background-image': "url('./wp-content/themes/psychoMunkee/assets/images/"+sampleCover+".png')"});

            detailServices.empty();
            $.each(sampleServices, function( index, value ) {
                detailServices.append("<li>"+value.trim()+"</li>");
            });

            detailBg.css({'background-color': samplePalettes[1].trim()});
            detailPalettes.each(function(index) {
                var self = $(this);
                self.css({'background-color': samplePalettes[index].trim()});
            });
        
            detailSpotLight.css({'background-image': "url('./wp-content/themes/psychoMunkee/assets/images/"+sampleImages[0].trim()+".png')"});
            detailThumbnails.each(function(index) {
                var self = $(this);
                self.css({'background-image': "url('./wp-content/themes/psychoMunkee/assets/images/"+sampleImages[index].trim()+".png')"});
            });


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

     $('#front-page').on('click', '.exampleThumbnails li', function(e){
        e.stopPropagation();
        var self = $(this);
        var bg = self.css('background-image');

        $('.exampleCanvas').css('background-image', bg);

     })

    $('#front-page').on('click', '#sampleClose', function(e){
       e.stopPropagation();
       $('body').removeClass('overflow-content');
       $('#sampleDetail').toggleClass('open');
      // $.fn.resetTilt();
    });


	



});