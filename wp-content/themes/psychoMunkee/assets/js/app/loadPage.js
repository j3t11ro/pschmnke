(function($) {

  var isAnimating = false,
      newLocation = '',
      firstLoad = false,
      frontPage = $("#front-page");

	$(document).on( 'click', '.menu-item a.nav-link', function( event ) {
		event.preventDefault();
        var self = $(this);
        var newPage = self.attr('href');
		var page = parseInt(self.parent().attr('data-page-id'));

      

        $('.nav-link').parent().removeClass('active');
        self.parent().addClass('active');

        $( "button.mobile" ).trigger( "click" );
		
         if(self.text().toLowerCase() == "contact"){
             $('body').addClass('overflow-content');
         } else {
             $('body').removeClass('overflow-content');
         }

         if( !isAnimating ) changePage(newPage, page, true);
         firstLoad = true;  


	});



	function changePage(url, page, bool) {
        isAnimating = true;
        // trigger page animation
        $('body').addClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            loadNewContent(url, page, bool);
             newLocation = url;
            $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
        //if browser doesn't support CSS transitions
        if( !transitionsSupported() ) {
        loadNewContent(url, page, bool);
        newLocation = url;
        }
	}

	function loadNewContent(url, page, bool) {
        $.ajax({
            // xhr: function() {
            // var xhr = new window.XMLHttpRequest();

            // // Upload progress
            // xhr.upload.addEventListener("progress", function(evt){
            //     if (evt.lengthComputable) {
            //         var percentComplete = evt.loaded / evt.total;
            //         //Do something with upload progress
            //         console.log(percentComplete);
            //         }
            //     }, false);

            // // Download progress
            // xhr.addEventListener("progress", function(evt){
            //     if (evt.lengthComputable) {
            //     var percentComplete = evt.loaded / evt.total;
            //     // Do something with download progress
            //     console.log(percentComplete);
            //     }
            // }, false);

            // return xhr;
            // },
			url: ajaxloadpage.ajaxurl,
			type: 'post',
			data: {
				action: 'load_page',
                page: page
			},
            beforeSend: function() {

            },
			success: function( result ) {
                //Populate replace html
              	frontPage.html(result);
                //destroy any instances of PP lib
                $.fn.pagepiling.destroy('all');


                var delay = ( transitionsSupported() ) ? 1200 : 0;
                var PP = document.getElementById("pm_pile1");
                var tilt = document.querySelector(".pmSample");
                var design = document.getElementById('design');
          

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
			
               
                if (PP){
                    $.fn.initialise();
                }
                if (tilt){
                     $.fn.addTilt();
                     $.fn.scrollToTop();
                }
                if (design){
                    $.fn.initTextRotate();
                }


			},
           complete: function() {

            },
		});
  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }



})(jQuery);