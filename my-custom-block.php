<?php

/**
 * Plugin Name:       My Custom Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-custom-block
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_my_custom_block_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_my_custom_block_block_init');


// function custom_slider_block_assets()
// {
// 	// Enqueue Swiper JS
// 	wp_enqueue_script(
// 		'swiper-js',
// 		'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js',
// 		array(),
// 		'10.0.0',
// 		true
// 	);

// 	// Enqueue Swiper CSS
// 	wp_enqueue_style(
// 		'swiper-css',
// 		'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
// 		array(),
// 		'10.0.0'
// 	);
// }

// add_action('enqueue_block_assets', 'custom_slider_block_assets');
