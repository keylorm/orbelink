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
	   
	jQuery('.subtitle-comentario a').smoothScroll();

	jQuery("#blog-list-content .views-row").addClass("hidden");
	
	var ordenid = 1;
	var cantv = 3;	
	var ordenId = 1;
	var li = 0;
	var ld = 0;
	
	jQuery(".icon_more_post").click(function(){
	var c = ordenid + cantv;
	
	for(i=ordenid;i<=c;i++){
		var div = jQuery(".views-row-"+i);
		
		var a = div.outerHeight(true);
		var l = div.position();

		if(l.left=='0'){
			li = li + a;
		}else{
			ld = ld + a;
		}
		
		if(li>ld){
			jQuery("#blog-list-content").animate({'height':(li)+'px'});	
		}else{
			jQuery("#blog-list-content").animate({'height':(ld)+'px'});
		}
		
		jQuery("#blog-list-content .views-row-"+i).viewportChecker({
	    	classToAdd: 'visible animated bounceInUp',
	    	offset: 300    
	   });		
	   ordenid = ordenid + 1;
	}
	
	});
	
	setTimeout(function(){ jQuery(".icon_more_post").click(); }, 1000);
	
	<!--Valida el formulario de comentarios-->
	jQuery('#comment-form').on('submit', function(e){
        e.preventDefault();
		var v = 1;
		jQuery(this).find(':input,textarea').each(function() {
			var valor = this.value;
			var req = jQuery("#"+this.id).hasClass("required");
			if(req == true && (valor) == "" || (valor) == null) {
				alert('Campos obligatorios estan vacios');
				jQuery("#"+this.id).focus();
				v = 0;return false;
			}					
			if((this.id)=='edit-field-comment-email-und-0-value'){
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (!regex.test(valor)) {
					alert('Por favor digite un E-mail válido');
					jQuery("#"+this.id).focus();
					v = 0;return false;
				}
			}
		});	
		if(v == 1){
			this.submit();
		}
			
    });	

});