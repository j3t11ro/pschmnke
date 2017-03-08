(function($){

$("#front-page").on('click', '.mobileNav button', function(){
    var self = $(this);
    
    if (self.attr('id') == 'navNext'){
       $.fn.pagepiling.moveSectionDown();
    }else{
       $.fn.pagepiling.moveSectionUp();
    }


});



})(jQuery);