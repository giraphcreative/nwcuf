

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	// select some things we'll use to make things responsive
	var menu = $( 'header nav' ),
		menu_toggle = menu.find( 'button.menu-toggle' ),
		menu_ul = menu.find( '.nav-menu' ),
		fluid_images = $( '.content-area img, .site-content img, .content-wide img' );


	// remove height and width from images inside
	fluid_images.removeAttr( 'width' ).removeAttr( 'height' );


	// show/hide menus when they click the toggler
	menu_toggle.click(function(){

		if ( menu_ul.is( ':visible' ) ) {
			menu_ul.hide();
		} else {
			menu_ul.show();
		}

		// when user clicks a link, open submenu if it exists.
		menu_ul.find( 'a' ).click(function(){
			var parent_li = $( this ).parent( 'li' );
			var submenu = $( this ).next( 'ul' );
			if ( !submenu.is( ':visible' ) && parent_li.hasClass( 'menu-item-has-children' ) ) {
				event.preventDefault();
				parent_li.addClass( 'open' );
				submenu.show();
			}
		});

	});

	// accordion box bindings
	$( '.accordion-box-title' ).click(function(){
		$( this ).parent( '.accordion-box' ).children( '.accordion-box-content' ).slideToggle( 600 );
	});


	// link buttons that have a 'data-url' parameter
	$( 'button[data-url]' ).click(function(){
		window.location.href = $( this ).attr( 'data-url' );
	});


	// let's add a 'scrolled' indicator
	$(window).on('scroll', function() {
	    scrollPosition = $(this).scrollTop();
	    if (scrollPosition >= 250) {
	    	// if scrolled past threshold, add 'scrolled' class
	        $('header').addClass('scrolled');
	    } else {
	    	// otherwise, remove the class
	    	$('header').removeClass('scrolled');
	    }
	});

	// make sure the column contents are the same height so the buttons align with each other on large screens.
	var set_column_content_heights = function() {
		// set heights to auto so we can measure them
		$('.our-work .third .col-content').height( 'auto' );

		// var to hold the tallest height so we know what to set them as.
		var tallest_height = 0;

		// do this on tablet portait and higher, otherwise keep it auto.
		if ( $(window).width() > 768 ) {

			// find and loop through all the columns in the .our-work section
			$('.our-work').find('.third').each(function(){
				
				// if it's larger than our variable, store the new largest height
				if ( $(this).find('.col-content').height() > tallest_height ) {
					tallest_height = $(this).find('.col-content').height();
				}

			});

			// finally, set heights of all col content divs to the tallest, so the buttons line up.
			$('.our-work .third .col-content').height( tallest_height );

		} else {

			// set all heights to auto if they switch to smaller screen orientation
			$('.our-work .third .col-content').height( 'auto' );

		}
	}

	// set column heights on load
	setTimeout( set_column_content_heights, 200 );

	// set column heights on resize
	$(window).resize( set_column_content_heights );

});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-47451257-1', 'auto');
ga('send', 'pageview');

