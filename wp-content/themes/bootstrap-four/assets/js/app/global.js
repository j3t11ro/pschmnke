
jQuery(document).ready(function($) {

    var details = $('#sampleDetail');
    var about =  $('#beliefNav li');
    var service = $('.pmServiceWrapper');
    var scrollTop = $('.toTop');

    // ===== Scroll to Top ==== 
    details.scroll(function() {
        if ($(this).scrollTop() >= 50) {   
            $('.toTop').addClass('show')   
        } else {
            $('.toTop').removeClass('show')
        }
    });
    
    scrollTop.click(function() {     
        $('#sampleDetail').animate({
            scrollTop : 0                     
        }, 500);
    });

    about.on('click', function(){
        var self = $(this);
        var navItem =  $('#beliefNav li');

        navItem.removeClass('active');
        self.addClass('active');

    });

    service.on('click', function(){
        var self = $(this);
        var type = self.attr("data-type");
        var bgColor = self.attr("data-rgba");
        var canvasItem = $('.canvasItem');
        var canvasBg = $('.pmServiceCanvas');

        service.removeClass('active');
        self.addClass('active');
        canvasItem.hide();
        $("#"+type+".canvasItem").css({'display': 'flex'});

        canvasBg.css({'background-image': "linear-gradient(rgba("+bgColor+"), rgba(0,0,0,0.9)),url(./wp-content/themes/bootstrap-four/assets/images/patternBg1.png)"})

    });

});