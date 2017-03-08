
jQuery(document).ready(function($) {

$.fn.initTextRotate();

});

(function($){

$.fn.initTextRotate = function(){

    $('.canvasItem .emphasis.design').each(function(){
        var self = $(this);
        var style = ['dissolve', 'fade', 'flip', 'flipUp', 'flipCube', 'flipCubeUp', 'spin'];
        var randStyle = style[Math.floor(Math.random() * style.length)];
        var aniStyle;
        if($.fn.detectIE()){
            aniStyle="dissolve"
         }else{
            aniStyle="flipCube"
         }


        self.textrotator({
            animation: aniStyle, // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 2500 // How many milliseconds until the next word show.  
        });

    });

}

})(jQuery)