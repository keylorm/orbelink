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
	
	jQuery(".views-row").attr('data-ix','box-post');


	
/*var container = document.querySelector('.view-id-view_blog .view-content');
var msnry = new Masonry( container, {
  // options
  columnWidth: 200,
  itemSelector: '.views-row'
});	*/

});