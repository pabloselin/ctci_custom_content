<?php

// Register Custom Post Type
function ctci_docs_post_type() {

	$labels = array(
		'name'                  => _x( 'Documentos', 'Post Type General Name', 'ctci' ),
		'singular_name'         => _x( 'Documento', 'Post Type Singular Name', 'ctci' ),
		'menu_name'             => __( 'Documentos', 'ctci' ),
		'name_admin_bar'        => __( 'Documentos', 'ctci' ),
		'archives'              => __( 'Archivo de Documentos', 'ctci' ),
		'attributes'            => __( 'Características del Documento', 'ctci' ),
		'parent_item_colon'     => __( 'Parent Item:', 'ctci' ),
		'all_items'             => __( 'Todos los Documentos', 'ctci' ),
		'add_new_item'          => __( 'Añadir nuevo Documento', 'ctci' ),
		'add_new'               => __( 'Añadir nuevo', 'ctci' ),
		'new_item'              => __( 'Nuevo Documento', 'ctci' ),
		'edit_item'             => __( 'Editar Documento', 'ctci' ),
		'update_item'           => __( 'Actualizar Documento', 'ctci' ),
		'view_item'             => __( 'Ver Documento', 'ctci' ),
		'view_items'            => __( 'Ver Documentos', 'ctci' ),
		'search_items'          => __( 'Buscar Documento', 'ctci' ),
		'not_found'             => __( 'No encontrado', 'ctci' ),
		'not_found_in_trash'    => __( 'No encontrado en papelera', 'ctci' ),
		'featured_image'        => __( 'Portada o imagen del Documento', 'ctci' ),
		'set_featured_image'    => __( 'Asignar imagen', 'ctci' ),
		'remove_featured_image' => __( 'Quitar imagen', 'ctci' ),
		'use_featured_image'    => __( 'Usar como portada o imagen del Documento', 'ctci' ),
		'insert_into_item'      => __( 'Insertar en Documento', 'ctci' ),
		'uploaded_to_this_item' => __( 'Subido a este Documento', 'ctci' ),
		'items_list'            => __( 'Lista de Documentos', 'ctci' ),
		'items_list_navigation' => __( 'Navegación de Documentos', 'ctci' ),
		'filter_items_list'     => __( 'Filtrar lista de Documentos', 'ctci' ),
	);
	$rewrite = array(
		'slug'                  => 'documento',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => __( 'Documento', 'ctci' ),
		'description'           => __( 'Recurso de la plataforma documental', 'ctci' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions', 'custom-fields', 'excerpt' ),
		'taxonomies'            => array( 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-media-document',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
	);
	register_post_type( 'ctci_doc', $args );

}
add_action( 'init', 'ctci_docs_post_type', 0 );