(function($) {
  
    var sm = 576,
        md = 768 - 1,
        lg = 992,
        xl = 1200;

    var mql = [window.matchMedia("(max-width: "+md+"px)")];
    for (var i=0; i<mql.length; i++){
        widthChange(mql[i]) // call action function explicitly at run time
        mql[i].addListener(widthChange); // call action function whenever each media query is triggered
    }
    
    function widthChange(mq){
        if (mql[0].matches){
            $('body').addClass('mobile');
        }
        else {
            $('body').removeClass('mobile');
        }		
    }

    })( jQuery );