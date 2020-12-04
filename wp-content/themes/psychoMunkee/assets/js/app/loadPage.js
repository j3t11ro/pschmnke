(function($) {

  var isAnimating = false,
      newLocation = '',
      firstLoad = false,
      frontPage = $("#front-page"),
      prevPage =  frontPage.attr('data-page-id'),
      queuePage;

	$(document).on( 'click', '.menu-item a.nav-link, .page-load, .masthead-brand', function( event ) {

        event.stopPropagation();
		event.preventDefault();
        var self = $(this);
        var newPage = self.attr('href');
		var page = self.parent().attr('data-page-id') ? parseInt(self.parent().attr('data-page-id')) : parseInt(self.attr('data-page-id'));

        if(prevPage){
            queuePage = getCookie('page_id');
            frontPage.attr('data-page-id', queuePage);
        }else{
            prevPage = 2;
            frontPage.attr('data-page-id', queuePage);
        }

        $('.nav-link').parent().removeClass('active');
       // self.parent().addClass('active');
        $(".nav-item[data-page-id="+page+"]").addClass('active');
      
        var notMenuItem = '.page-load, .masthead-brand';
        if (!self.is(notMenuItem) && document.body.classList.contains('mobile')){
         $( "button.mobile" ).trigger( "click" );
        }
         if(self.text().toLowerCase() == "contact"){
             $('body').addClass('overflow-content');
         } else {
             $('body').removeClass('overflow-content');
         }

         if( !isAnimating ) changePage(newPage, page, true);
         firstLoad = true;  

	});

      //detect the 'popstate' event - e.g. user clicking the back button
        $(window).on('popstate', function() {
            if( firstLoad ) {
                
            /*
            Safari emits a popstate event on page load - check if firstLoad is true before animating
            if it's false - the page has just been loaded 
            */
            prevPage = frontPage.attr('data-page-id');
            queuePage = getCookie('page_id');
            frontPage.attr('data-page-id', queuePage);
      //      prevPage = prevPage ? 2 : prevPage;

            $('.nav-item').removeClass('active');
            $(".nav-item[data-page-id="+prevPage+"]").addClass('active');
        
            var newPageArray = location.pathname.split('/'),
                //this is the url of the page to be loaded 
                newPage = newPageArray[newPageArray.length - 1];

            if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, prevPage, false);
            } else{
                console.log('popstate false, not loading new page')
            }
            firstLoad = true;
            });



	function changePage(theUrl, page, bool) {
        isAnimating = true;
        // trigger page animation
        $('body').addClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            loadNewContent(theUrl, page, bool);
             newLocation = theUrl;
            $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
        //if browser doesn't support CSS transitions
        if( !transitionsSupported() ) {
        loadNewContent(theUrl, page, bool);
        newLocation = theUrl;
        }
	}

	function loadNewContent(theUrl, page, bool) {
        $.ajax({
			url: ajaxloadpage.ajaxurl,
			type: 'post',
			data: {
				action: 'load_page',
                page: page
			},
            beforeSend: function() {
                
            },
			success: function( result ) {
                theUrl = ('' == theUrl) ? '/' : theUrl;
                //Populate replace html
              	frontPage.html(result);
              


                var delay = ( transitionsSupported() ) ? 1200 : 0;
                var PP = document.getElementById("pm_pile1");
                var tilt = document.querySelector(".pmSample");
                var design = document.getElementById('design');
                var contact = document.querySelector(".pmContact");

                //destroy any instances of PP lib
                 if (typeof  $.fn.pagepiling.destroy === "function") { 
                        // safe to use the function
                        $.fn.pagepiling.destroy('all');
                    }
                //if browser doesn't support CSS transitions - dont wait for the end of transitions
                  setTimeout(function(){
                    //wait for the end of the transition on the loading bar before revealing the new content
                    $('body').removeClass('page-is-changing');
                    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                        isAnimating = false;
                        $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
                    });

                    if( !transitionsSupported() ) isAnimating = false;
                 }, delay);
			
               $('body').removeClass('overflow-content');

                if (PP){
                    $.fn.initialise();
                }
                if (tilt){
                     $.fn.addTilt();
                     $.fn.scrollToTop();
                     $('body').addClass('overflow-content');
                }
                if (design){
                    $.fn.initTextRotate();
                }
                if (contact){
                    $('body').addClass('overflow-content');
                }

                 if(theUrl!=window.location && bool){
                    //add the new page to the window.history
                    //if the new page was triggered by a 'popstate' event, don't add it
                    window.history.pushState({path: theUrl},'',theUrl);
                }


			},
           complete: function() {

            },
		});
  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

})(jQuery);