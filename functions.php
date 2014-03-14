<?php
function child_theme_enqueue_styles_and_scripts() {
	wp_enqueue_style( 'concept', get_stylesheet_directory_uri() . '/stylesheets/sculpt.css' );
}
add_action( 'wp_enqueue_scripts', 'child_theme_enqueue_styles_and_scripts', 11 );
