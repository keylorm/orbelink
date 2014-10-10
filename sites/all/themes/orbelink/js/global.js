jQuery.noConflict(); 
jQuery(document).ready(function(){

	//ajustar funcionalidad del menu principal
	var menu = jQuery(".menu-desplegable");
	jQuery("#boton-menu").bind('click', function(){
		menu.toggleClass("abierto");
		return false;
	});

	jQuery("#boton-cerrar-menu").bind('click', function(){
		menu.toggleClass("abierto");
		return false;
	});
	
	var cantidad_li = 0;
	jQuery('.flex-control-nav li').each(function(indice, elemento) {
		cantidad_li = cantidad_li + 1;
	});
	
	var result = 196 - ((cantidad_li - 1) * 11);
	jQuery('.flex-control-nav').css({'top':result});

	jQuery("#blog-list-content .views-row").addClass("hidden").css({'display':'none'});
	
	var ordenid = 1;
	var cantv = 3;	
	var ordenId = 1;
	var li = 0;
	var ld = 0;
	
	jQuery(".icon_more_post").click(function(){
	var c = ordenid + cantv;
	
	for(i=ordenid;i<=c;i++){
		
		var div = jQuery(".views-row-"+i);
		div.css({'display':'block'});
		
		var a = div.outerHeight(true);
		var l = div.position();

	   //cambiar el enlace de la paginacion a vert todos al verificar que la cantidad de elementos a mostrar totalizan 16
	   if (i == 17){
	   		 //cambio de enlace
	   	 jQuery(".page-blog .more_post a.w-inline-block.icon_more_post").attr("href","blog-todos");
	   }

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
		
		jQuery("#blog-list-content .views-row-"+i).css({'display':'block'}).viewportChecker({
	    	classToAdd: 'visible animated bounceInUp',
	    	offset: 300    
	   });		
	   ordenid = ordenid + 1;
	}
	
	});

	jQuery("#blog-todos-list-content .views-row").addClass('hidden').viewportChecker({
	    	classToAdd: 'visible animated bounceInUp',
	    	offset: 300    
	});
	
	//setTimeout(function(){ jQuery(".icon_more_post").click(); }, 1000);
	
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
		//funcionalidad para el totop, extrae la posicion del scroll
	  jQuery(window).scroll(function(){
	  	if(jQuery(this).scrollTop() > 100) {
	  		jQuery('#scroll_navigation').fadeIn();	  		
	  	} else {
	  		jQuery('#scroll_navigation').fadeOut();
	  	}
	  });

	//ancla to top all pages
	  jQuery('#scroll_navigation ul li a').click(function(){
          jQuery('html, body').animate({scrollTop: 0}, 600);
     }); 


	jQuery('em.subtitle-comentario a[href*=#]').click(function() {

	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {

	             var target = jQuery(this.hash);
	             target = target.length && target || jQuery('[name=' + this.hash.slice(1) +']');

	             if (target.length) {

	                 var targetOffset = target.offset().top;
	                 //targetOffset = targetOffset-90;
	                 console.log(targetOffset);
	                 jQuery('html,body').animate({scrollTop: targetOffset-90 }, 1000);

	                 return false;

	            }

	       }

	   });

});