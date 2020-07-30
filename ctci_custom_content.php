<?php
/**
 * Plugin Name: CTCI custom content
 * Description: Funciones para el contenido especifico de la plataforma 
 * Plugin URI: https://apie.cl
 * Author: A Pie
 * Author URI: https://apie.cl
 * Version: 0.1
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cnid
 */

defined( 'ABSPATH' ) || exit;

// Custom Taxonomies

// Custom posts

include( plugin_dir_path( __FILE__ ) . '/ctci_custom_posts.php' );

// Custom fields

include( plugin_dir_path( __FILE__ ) . '/ctci_custom_fields.php' );

// Gutenberg stuff

function ctci_enqueue_assets() {
	wp_enqueue_script(
		'ctci-gutenberg-sidebar', 
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-components', 'wp-data', 'wp-media-utils', 'wp-compose' )
	);
}

add_action( 'enqueue_block_editor_assets', 'ctci_enqueue_assets' );