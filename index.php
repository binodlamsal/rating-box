<?php

function rating_box_rating_plugin_block_init() {
	register_block_type( __DIR__ , array(
		//'render_callback' => 'rating_box_rating_plugin_render_author_content'
	) );
}
add_action( 'init', 'rating_box_rating_plugin_block_init' );


function rating_box_rating_plugin_render_author_content() {
	return 'Hello World!';
}