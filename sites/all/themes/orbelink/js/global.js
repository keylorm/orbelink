jQuery.noConflict(); 
jQuery(document).ready(function(){
	jQuery('#boton-menu').click(function(){
		jQuery('.menu-desplegable').slideDown();

	});

	jQuery('#boton-cerrar-menu').click(function(){
		jQuery('.menu-desplegable').slideUp();
	});
	
	var $container = jQuery('#blog-list-content');
	$container.masonry({
		itemSelector: '.views-row'
	});	
	jQuery('.views-row').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 90    
	   }); 	
	//columnWidth: 200,
	//jQuery(".views-row").attr('data-ix','box-post');

});