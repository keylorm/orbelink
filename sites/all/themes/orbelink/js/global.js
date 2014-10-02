jQuery.noConflict(); 
jQuery(document).ready(function(){
	jQuery('#boton-menu').click(function(){
		jQuery('.menu-desplegable').slideDown();

	});

	jQuery('#boton-cerrar-menu').click(function(){
		jQuery('.menu-desplegable').slideUp();
	});
	

	jQuery('#blog-list-content .views-row').each(function(indice, elemento) {
		var left = jQuery(this).css('left');
		var alto = jQuery(this).css('height');
		var marginBottom = jQuery(this).css('margin-bottom');
		var paddingBottom = jQuery(this).css('padding-bottom');
		//jQuery(this).css({'height':alto, 'margin-bottom':marginBottom, 'padding-bottom':paddingBottom});
		if(left != '0px'){
			jQuery(this).css({'left':'330px'});
		}
	  //console.log('El elemento con el índice '+indice+' contiene '+jQuery(elemento).text());
	});	
	
	var $container = jQuery('#blog-list-content');
	$container.masonry({
		columnWidth: 315,
		itemSelector: '.views-row'
	});
	
	
	jQuery('#blog-list-content .views-row').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 90    
	   }); 	
	//columnWidth: 200,
	//jQuery(".views-row").attr('data-ix','box-post');

});