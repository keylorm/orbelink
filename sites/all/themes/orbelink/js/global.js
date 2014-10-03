jQuery.noConflict(); 
jQuery(document).ready(function(){
	
	jQuery('#boton-menu').click(function(){
		jQuery('.menu-desplegable').slideDown();

	});

	jQuery('#boton-cerrar-menu').click(function(){
		jQuery('.menu-desplegable').slideUp();
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
	alert(jQuery(".main #blog-list-content").css('height'));
	
	//jQuery("#blog-list-content .views-row").css({'display':'none'});
	var ordenId = 1;
	jQuery(".icon_more_post").click(function(){
	
	for(i=ordenId;i<=(ordenId+3);i++){
		jQuery(".views-row-"+i).css({'display':'block'});
		ordenId = ordenId + 1;
	}
	
	});
});