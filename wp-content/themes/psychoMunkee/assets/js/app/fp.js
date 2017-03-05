
jQuery(document).ready(function($) {
var elementExists = document.getElementById("pm_pile1");

if (elementExists){
    $.fn.initialise();
}


});


(function( $ ) {
 

$.fn.initialise = function() {
     // create event here that needs re-initialising
             $('#pm_pile1').pagepiling({
                sectionSelector: '.site-wrapper',
                menu: null,
                direction: 'horizontal',
                verticalCentered: true,
                sectionsColor: [],
                anchors: [],
                scrollingSpeed: 700,
                easing: 'swing',
                loopBottom: false,
                loopTop: false,
                css3: true,
                navigation: false,
                normalScrollElements: '#sampleDetail, body.mobile .pmServiceContainer',
                afterRender: function(){
                            //playing the video
                            $('video').get(0).play();
                }
            });
};

 
}( jQuery ));

