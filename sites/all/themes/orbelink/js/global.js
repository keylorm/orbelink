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
	
	/*jQuery('#blog-list-content .views-row').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 90    
	   });*/
	   
	jQuery('.subtitle-comentario a').smoothScroll();

	jQuery("#blog-list-content .views-row").addClass("hidden").viewportChecker({
	    	classToAdd: 'visible animated bounceInUp',
	    	offset: 90    
	   });	

	/*jQuery("#blog-list-content .views-row").addClass("hidden");
	var ordenid = 1;
	var cantv = 3;
	jQuery(".icon_more_post").click(function(){
	var c = ordenid + cantv;
	for(i=ordenid;i<=c;i++){
		var div = jQuery(".views-row-"+i);
		
		var a = div.outerHeight(true);
		var l = div.position();
		var li = 0;
		var ld = 0;
		if(l=='0'){
			li = l.left + a;
		}else{
			ld = l.left + a;
		}
		alert(li);
		
		if(li>ld){
			jQuery("#blog-list-content").css({'height':(li+100)+'px'});	//alert((li+100)+'px');
		}else{
			jQuery("#blog-list-content").css({'height':(ld+100)+'px'});//	alert((ld+100)+'px');
		}
		
		
		jQuery("#blog-list-content .views-row-"+i).viewportChecker({
	    	classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
	    	offset: 90    
	   });		
	   ordenid = ordenid + 1;
	}
	
	});*/
	
	/*setTimeout(function(){
		jQuery("#blog-list-content").css({'height':'100px'});	
	}, 3000);*/
	

});