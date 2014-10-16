jQuery.noConflict(); 
jQuery(document).ready(function(){

	//configurar la libreria twentytwenty para la aplicacion de la seccion de analitica y usabilidad

	 jQuery("#container1").twentytwenty();

	//agregar funcionalidad para la seciccion de estrategia
	jQuery(".casilla").hide();
	jQuery("#tablero-consulta .roll-over").hide();
	cambiarCasillasTablero();

	jQuery("input[name='consulta']").change(function(){
		jQuery(".casilla").hide();
		cambiarCasillasTablero();		
	});

	//agregar funcionalidad para desplegar el resultado del objetivo
	var valor_conversion = jQuery( "#conversion-opciones option:selected" ).val();
	jQuery( "#busqueda-resultado-"+valor_conversion ).removeClass("resultado");

	jQuery( "#conversion-opciones" ).change(function(){
		jQuery( "#busqueda-resultado img").hide("slow");
		var valor_conversion = jQuery( "#conversion-opciones option:selected" ).val();
		jQuery( "#busqueda-resultado-"+valor_conversion ).show("slow");
	});

	//poner como default el primer presupuesto y realizar el calculo de clics e impresiones
	cambiarObjetivo();

	jQuery("input[name='presupuesto']").change(function(){
		cambiarObjetivo();		
	});

	//agregar funcionalidad de tabs para la aplicacion de cual es su objetivo?
	  jQuery('.accordion-tabs-minimal').each(function(index) {
	    jQuery(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
	    cambiarObjetivo();
	  });

	  jQuery('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
	    if (!jQuery(this).hasClass('is-active')) {
	      event.preventDefault();
	      var accordionTabs = jQuery(this).closest('.accordion-tabs-minimal')
	      accordionTabs.find('.is-open').removeClass('is-open').hide();

	      jQuery(this).next().toggleClass('is-open').toggle();
	      accordionTabs.find('.is-active').removeClass('is-active');
	      jQuery(this).addClass('is-active');
	    } else {
	      event.preventDefault();
	    }
	  });


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


/* Para hacer el paginador vertical en el slider del home */
	var cantidad_li = 0;
	jQuery('.view-slider-home .flex-control-nav li').each(function(indice, elemento) {
		cantidad_li = cantidad_li + 1;
	});
	
	var result = 237 - ((cantidad_li - 1) * 11);
	jQuery('.view-slider-home .flex-control-nav').css({'top':result});



	/*Infinite scroll*/

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
	
	jQuery("#block-views-view-blog-block-nuestro-blog .view-display-id-block_nuestro_blog .views-row").addClass('hidden').viewportChecker({
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

function obtenerCalculoClicsImpresiones(presupuesto, conversion, branding){
	switch(presupuesto){
		case "100-200":
			if(conversion){
				return "1,750-50";
			}else if (branding == "facebook"){
				return "30,000-100";
			}else{
				return "4,000-50";
			}
		break;
		case "300-600":
			if(conversion){
				return "3,500-100";
			}else if (branding == "facebook"){
				return "600,000-250";
			}else{
				return "8,000-100";
			}
		break;
		case "700-1000":
			if(conversion){
				return "4,750-150";
			}else if (branding == "facebook"){
				return "1,000,000-450";
			}else{
				return "12,000-175";
			}
		break;
		case "1100-1500":
			if(conversion){
				return "6,500-225";
			}else if (branding == "facebook"){
				return "1,300,000-575";
			}else{
				return "16,000-225";
			}
		break;
		case "1500-2000":
			if(conversion){
				return "8,700-330";
			}else if (branding == "facebook"){
				return "2,000,000-750";
			}else{
				return "20,000-300";
			}
		break;
	}
}

function cambiarCasillasTablero(){
	var valor_consulta = jQuery("input[name='consulta']:checked").val();
	jQuery("."+valor_consulta).show("slow");
}

function cambiarObjetivo(){
	var presupuesto = jQuery("input[name='presupuesto']:checked").val();
	var conversion = false;
	var branding = "";
	var calculo = "";

	if(jQuery("a#conversion").hasClass("is-active")){
		conversion = true;
	} else if(jQuery("a#facebook").hasClass("is-active")) {
		branding = "facebook";
	} else if(jQuery("a#google").hasClass("is-active")){
		branding = "google";
	}

	calculo = obtenerCalculoClicsImpresiones(presupuesto, conversion, branding);
	calculo = calculo.split("-");
	
	jQuery("#cantidad-clics").text(calculo[0]);
	jQuery("#cantidad-impresiones").text(calculo[1]);
}