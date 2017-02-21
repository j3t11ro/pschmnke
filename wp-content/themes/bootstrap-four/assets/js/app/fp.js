
jQuery(document).ready(function($) {

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
        normalScrollElements: '#sampleDetail',
        afterRender: function(){
					//playing the video
					$('video').get(0).play();
        }

    });
});