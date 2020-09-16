<?php
/**
 * Plugin Name: CTCI custom content
 * Description: Funciones para el contenido especifico de la plataforma 
 * Plugin URI: https://apie.cl
 * Author: A Pie
 * Author URI: https://apie.cl
 * Version: 0.3
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cnid
 */

defined( 'ABSPATH' ) || exit;
define('CTCI_ADMIN_VERSION', '0.3');
// Custom Taxonomies

// Custom posts

include( plugin_dir_path( __FILE__ ) . '/ctci_custom_posts.php' );

// Custom fields

include( plugin_dir_path( __FILE__ ) . '/ctci_custom_fields.php' );

// Custom taxonomies

include( plugin_dir_path( __FILE__ ) . '/ctci_custom_taxonomies.php' );

// Gutenberg stuff

function ctci_enqueue_assets() {
	wp_enqueue_script(
		'ctci-gutenberg-sidebar', 
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-components', 'wp-data', 'wp-media-utils', 'wp-compose' )
	, CTCI_ADMIN_VERSION);
}

add_action( 'enqueue_block_editor_assets', 'ctci_enqueue_assets' );

add_filter( 'upload_mimes', 'ctci_myme_types', 1, 1 );

function ctci_myme_types( $mime_types ) {
  $mime_types['md'] = 'text/plain';     // Adding .svg extension
  $mime_types['txt'] = 'text/plain'; // Adding .json extension
  
  return $mime_types;
}

// add_action('imagick_load_after_read', function (object $image, string $filename, string $file_extension, string $mime_type) {
//     if ('pdf' === $file_extension) {
//         if ($image->getImageAlphaChannel()) {
//             $image->setImageAlphaChannel(Imagick::ALPHACHANNEL_REMOVE);
//             $image->setImageBackgroundColor('#ffffff');
//         }
//     }
// }, 10, 4);