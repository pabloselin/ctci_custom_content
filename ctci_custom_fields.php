<?php

// CTCI Registered custom fields for wp data module


function ctci_register_meta() {
	
	$text_fields = array(
		'_ctci_doc_file_info',
		'_ctci_doc_author',
		'_ctci_doc_extension'
	);

	foreach($text_fields as $text_field) {
		register_meta('post', $text_field, array(
			'show_in_rest' 		=> true,
			'type'		   		=> 'string',
			'single'	   		=> true,
			'sanitize_callback'	=> 'sanitize_text_field',
			'auth_callback'		=> function() {
				return current_user_can('edit_posts');
			}
		));	
	}
	
}

add_action( 'init', 'ctci_register_meta' );


// CTCI Custom fields
add_action( 'cmb2_init', 'ctci_cmb2_add_metabox' );

function ctci_cmb2_add_metabox() {

	$prefix = '_ctci_';

	$cmb = new_cmb2_box( array(
		'id'           => $prefix . 'ctcidoc',
		'title'        => __( 'Información del documento', 'ctci' ),
		'object_types' => array( 'ctci_doc' ),
		'context'      => 'normal',
		'priority'     => 'high',
	) );

	$cmb->add_field( array(
		'name' => __( 'Archivo', 'ctci' ),
		'id' => $prefix . 'archivo',
		'type' => 'file',
	) );

	$cmb->add_field( array(
		'name' => __( 'Contenido en markdown', 'ctci' ),
		'id' => $prefix . 'archivo_md',
		'type' => 'file',
	) );

	$cmb->add_field( array(
		'name' => __( '¿En qué formato está el contenido?', 'ctci' ),
		'id' => $prefix . 'archivo_status',
		'type' => 'select',
		'show_option_none' => true,
		//'default'	=> 'none',
		'options' => array(
			'md' 	=> __( 'Markdown', 'ctci' ),
			'txt' 	=> __( 'Texto plano', 'ctci' ),
			//'none'	=> __( 'Escoger tipo', 'ctci')
		),
	) );

	$cmb->add_field( array(
		'name' => __( '[DEBUG] Contenido procesado', 'ctci' ),
		'id' => $prefix . 'archivo_content',
		'type' => 'textarea_code',
	) );
}

add_action('updated_post_meta', 'ctci_process_text', 10, 4);
add_action('added_post_meta', 'ctci_process_text', 10, 4);

function ctci_process_text($meta_id, $object_id, $meta_key = '', $meta_value = '') {
	
	if($meta_key != '_ctci_archivo_md') {
		return false;
	}

	update_post_meta( $object_id, '_ctci_archivo_content', $meta_value );

}