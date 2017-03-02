
jQuery(document).ready(function($) {

    $(".rotate").textrotator({
        animation: "spin", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 1000 // How many milliseconds until the next word show.  
    });

    $('.canvasItem .emphasis.design').each(function(){
        var self = $(this);
        var style = ['dissolve', 'fade', 'flip', 'flipUp', 'flipCube', 'flipCubeUp', 'spin'];
        var randStyle = style[Math.floor(Math.random() * style.length)];
        self.textrotator({
            animation: 'flipCube', // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 3000 // How many milliseconds until the next word show.  
        });

    });

});