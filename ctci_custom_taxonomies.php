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
//add_action( 'init', 'ctci_doctype', 0 );

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
//add_action( 'init', 'ctci_docauthor', 0 );

// Register Custom Taxonomy
function ctci_docarea() {

	$labels = array(
		'name'                       => _x( 'Áreas de Trabajo', 'Áreas de Trabajo', 'ctci' ),
		'singular_name'              => _x( 'Área', 'Taxonomy Singular Name', 'ctci' ),
		'menu_name'                  => __( 'Áreas de Trabajo', 'ctci' ),
		'all_items'                  => __( 'Todas las Áreas', 'ctci' ),
		'parent_item'                => __( 'Área principal', 'ctci' ),
		'parent_item_colon'          => __( 'Área principal:', 'ctci' ),
		'new_item_name'              => __( 'Nueva Área', 'ctci' ),
		'add_new_item'               => __( 'Añadir nueva Área de Trabajo', 'ctci' ),
		'edit_item'                  => __( 'Editar Área', 'ctci' ),
		'update_item'                => __( 'Actualizar Área', 'ctci' ),
		'view_item'                  => __( 'Ver Área', 'ctci' ),
		'separate_items_with_commas' => __( 'Separar con coma', 'ctci' ),
		'add_or_remove_items'        => __( 'Añadir o quitar Área', 'ctci' ),
		'choose_from_most_used'      => __( 'Escoger entre las más usados', 'ctci' ),
		'popular_items'              => __( 'Más usados', 'ctci' ),
		'search_items'               => __( 'Buscar Área', 'ctci' ),
		'not_found'                  => __( 'No encontrado', 'ctci' ),
		'no_terms'                   => __( 'No hay Área', 'ctci' ),
		'items_list'                 => __( 'Lista de Áreas de Trabajo', 'ctci' ),
		'items_list_navigation'      => __( 'Navegación por lista de Área', 'ctci' ),
	);
	$rewrite = array(
		'slug'                       => 'areas-de-trabajo',
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
	register_taxonomy( 'docarea', array( 'ctci_doc' ), $args );
}

// Register Custom Taxonomy
function ctci_doctemas() {

	$labels = array(
		'name'                       => _x( 'Temas', 'Temas', 'ctci' ),
		'singular_name'              => _x( 'Tema', 'Taxonomy Singular Name', 'ctci' ),
		'menu_name'                  => __( 'Temas', 'ctci' ),
		'all_items'                  => __( 'Todos las Temas', 'ctci' ),
		'parent_item'                => __( 'Tema principal', 'ctci' ),
		'parent_item_colon'          => __( 'Tema principal:', 'ctci' ),
		'new_item_name'              => __( 'Nuevo Tema', 'ctci' ),
		'add_new_item'               => __( 'Añadir nuevo Tema', 'ctci' ),
		'edit_item'                  => __( 'Editar Tema', 'ctci' ),
		'update_item'                => __( 'Actualizar Tema', 'ctci' ),
		'view_item'                  => __( 'Ver Tema', 'ctci' ),
		'separate_items_with_commas' => __( 'Separar con coma', 'ctci' ),
		'add_or_remove_items'        => __( 'Añadir o quitar Tema', 'ctci' ),
		'choose_from_most_used'      => __( 'Escoger entre los más usados', 'ctci' ),
		'popular_items'              => __( 'Más usados', 'ctci' ),
		'search_items'               => __( 'Buscar Tema', 'ctci' ),
		'not_found'                  => __( 'No encontrado', 'ctci' ),
		'no_terms'                   => __( 'No hay Tema', 'ctci' ),
		'items_list'                 => __( 'Lista de Temas de Trabajo', 'ctci' ),
		'items_list_navigation'      => __( 'Navegación por lista de Tema', 'ctci' ),
	);
	$rewrite = array(
		'slug'                       => 'temas',
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
	register_taxonomy( 'doctema', array( 'ctci_doc' ), $args );
}


// Register Custom Taxonomy
function ctci_docpilares() {

	$labels = array(
		'name'                       => _x( 'Pilares estratégicos', 'Pilares', 'ctci' ),
		'singular_name'              => _x( 'Pilar', 'Taxonomy Singular Name', 'ctci' ),
		'menu_name'                  => __( 'Pilares Estratégicos', 'ctci' ),
		'all_items'                  => __( 'Todos los Pilares', 'ctci' ),
		'parent_item'                => __( 'Pilar principal', 'ctci' ),
		'parent_item_colon'          => __( 'Pilar principal:', 'ctci' ),
		'new_item_name'              => __( 'Nuevo Pilar', 'ctci' ),
		'add_new_item'               => __( 'Añadir nuevo Pilar Estratégico', 'ctci' ),
		'edit_item'                  => __( 'Editar Pilar', 'ctci' ),
		'update_item'                => __( 'Actualizar Pilar', 'ctci' ),
		'view_item'                  => __( 'Ver Pilar', 'ctci' ),
		'separate_items_with_commas' => __( 'Separar con coma', 'ctci' ),
		'add_or_remove_items'        => __( 'Añadir o quitar Pilar', 'ctci' ),
		'choose_from_most_used'      => __( 'Escoger entre los más usados', 'ctci' ),
		'popular_items'              => __( 'Más usados', 'ctci' ),
		'search_items'               => __( 'Buscar Pilar', 'ctci' ),
		'not_found'                  => __( 'No encontrado', 'ctci' ),
		'no_terms'                   => __( 'No hay Pilar', 'ctci' ),
		'items_list'                 => __( 'Lista de Pilares estratégicos', 'ctci' ),
		'items_list_navigation'      => __( 'Navegación por lista de Pilar', 'ctci' ),
	);
	$rewrite = array(
		'slug'                       => 'pilares-estrategicos',
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
	register_taxonomy( 'docpilar', array( 'ctci_doc' ), $args );
}

add_action( 'init', 'ctci_doctemas', 0 );
add_action( 'init', 'ctci_docarea', 0 );
add_action( 'init', 'ctci_docpilares', 0 );