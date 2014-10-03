jQuery.noConflict(); 
jQuery(document).ready(function(){
	jQuery('#boton-menu').click(function(){
		jQuery('.menu-desplegable').slideDown();

	});

	jQuery('#boton-cerrar-menu').click(function(){
		jQuery('.menu-desplegable').slideUp();
	});
	
	/*var $container = jQuery('#blog-list-content');
	$container.masonry({
		itemSelector: '.views-row',
		columnWidth: 300,
		gutter: 30
		
	});*/
	
	jQuery('#blog-list-content .views-row').each(function(indice, elemento) {
		//var alto = jQuery(this).css('height');
		//var marginBottom = jQuery(this).css('margin-bottom');
		//var paddingBottom = jQuery(this).css('padding-bottom');
		//jQuery(this).css({'height':alto, 'margin-bottom':marginBottom, 'padding-bottom':paddingBottom});
		//alert(left);
		
	  //console.log('El elemento con el índice '+indice+' contiene '+jQuery(elemento).text());
	});	
	
	
	var cantidad_li = 0;
	jQuery('.flex-control-nav li').each(function(indice, elemento) {
		cantidad_li = cantidad_li + 1;
	});
	var result = 196 - ((cantidad_li - 1) * 11);
	jQuery('.flex-control-nav').css({'top':result});
	
	jQuery('#blog-list-content .views-row').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 90    
	   }); 	
	//columnWidth: 200,
	//jQuery(".views-row").attr('data-ix','box-post');

});