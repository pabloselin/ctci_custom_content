<?php 

// Register Custom Taxonomy
function ctci_doctype() {

	$labels = array(
		'name'                       => _x( 'Tipos de información', 'Taxonomy General Name', 'ctci' ),
		'singular_name'              => _x( 'Tipo de información', 'Taxonomy Singular Name', 'ctci' ),
		'menu_name'                  => __( 'Tipos de Información', 'ctci' ),
		'all_items'                  => __( 'Todos los tipos', 'ctci' ),
		'parent_item'                => __( 'Tipo superior', 'ctci' ),
		'parent_item_colon'          => __( 'Tipo superior:', 'ctci' ),
		'new_item_name'              => __( 'Nuevo tipo', 'ctci' ),
		'add_new_item'               => __( 'Añadir nuevo tipo', 'ctci' ),
		'edit_item'                  => __( 'Editar tipo', 'ctci' ),
		'update_item'                => __( 'Actualizar tipo', 'ctci' ),
		'view_item'                  => __( 'Ver tipo', 'ctci' ),
		'separate_items_with_commas' => __( 'Separar con coma', 'ctci' ),
		'add_or_remove_items'        => __( 'Añadir o quitar tipos', 'ctci' ),
		'choose_from_most_used'      => __( 'Escoger entre los más usados', 'ctci' ),
		'popular_items'              => __( 'Más usados', 'ctci' ),
		'search_items'               => __( 'Buscar tipos', 'ctci' ),
		'not_found'                  => __( 'No encontrado', 'ctci' ),
		'no_terms'                   => __( 'No hay tipos', 'ctci' ),
		'items_list'                 => __( 'Lista de tipos', 'ctci' ),
		'items_list_navigation'      => __( 'Navegación de lista de tipos', 'ctci' ),
	);
	$rewrite = array(
		'slug'                       => 'tipo',
		'with_front'                 => true,
		'hierarchical'               => false,
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'rewrite'                    => $rewrite,
		'show_in_rest'               => true,
	);
	register_taxonomy( 'doctype', array( 'ctci_doc' ), $args );

}
add_action( 'init', 'ctci_doctype', 0 );

// Register Custom Taxonomy
function ctci_docauthor() {

	$labels = array(
		'name'                       => _x( 'Autores', 'Taxonomy General Name', 'ctci' ),
		'singular_name'              => _x( 'Autor', 'Taxonomy Singular Name', 'ctci' ),
		'menu_name'                  => __( 'Autores', 'ctci' ),
		'all_items'                  => __( 'Todos los autores', 'ctci' ),
		'parent_item'                => __( 'Autor principal', 'ctci' ),
		'parent_item_colon'          => __( 'Autor principal:', 'ctci' ),
		'new_item_name'              => __( 'Nuevo autor', 'ctci' ),
		'add_new_item'               => __( 'Añadir nuevo autor', 'ctci' ),
		'edit_item'                  => __( 'Editar autor', 'ctci' ),
		'update_item'                => __( 'Actualizar autor', 'ctci' ),
		'view_item'                  => __( 'Ver autor', 'ctci' ),
		'separate_items_with_commas' => __( 'Separar con coma', 'ctci' ),
		'add_or_remove_items'        => __( 'Añadir o quitar autores', 'ctci' ),
		'choose_from_most_used'      => __( 'Escoger entre los más usados', 'ctci' ),
		'popular_items'              => __( 'Más usados', 'ctci' ),
		'search_items'               => __( 'Buscar autores', 'ctci' ),
		'not_found'                  => __( 'No encontrado', 'ctci' ),
		'no_terms'                   => __( 'No hay autores', 'ctci' ),
		'items_list'                 => __( 'Lista de autores', 'ctci' ),
		'items_list_navigation'      => __( 'Navegación por lista de autores', 'ctci' ),
	);
	$rewrite = array(
		'slug'                       => 'autor',
		'with_front'                 => true,
		'hierarchical'               => false,
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'rewrite'                    => $rewrite,
		'show_in_rest'               => true,
	);
	register_taxonomy( 'docauthor', array( 'ctci_doc' ), $args );

}
add_action( 'init', 'ctci_docauthor', 0 );