<?php


// include the main.js script in the header on the front-end.
function p_scripts() {
	wp_enqueue_script( 'p-main-js', get_stylesheet_directory_uri().'/js/main.js?v=2', array( 'jquery' ), '9', true );
}
add_action( 'wp_enqueue_scripts', 'p_scripts' );


