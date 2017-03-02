(function($){

$('.mobileNav button').on('click', function(){
    var self = $(this);
    
    if (self.attr('id') == 'navNext'){
       $.fn.pagepiling.moveSectionDown();
    }else{
       $.fn.pagepiling.moveSectionUp();
    }


});



})(jQuery);