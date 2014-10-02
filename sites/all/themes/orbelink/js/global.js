jQuery.noConflict(); 
jQuery(document).ready(function(){
	jQuery('#boton-menu').click(function(){
		jQuery('.menu-desplegable').slideDown();

	});

	jQuery('#boton-cerrar-menu').click(function(){
		jQuery('.menu-desplegable').slideUp();
	});
	
	var $container = jQuery('.view-id-view_blog .view-content');
	$container.masonry({
		itemSelector: '.views-row'
	});	
	//columnWidth: 200,
	//jQuery(".views-row").attr('data-ix','box-post');

});