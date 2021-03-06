jQuery.noConflict(); 
jQuery(document).ready(function(){

	ajustarAltoContenedorCasosExitoInicial();
	// Listen for orientation changes
	window.addEventListener("orientationchange", function() {
	  // Announce the new orientation number
	  ajustarAltoContenedorCasosExitoInicial();
	  ajustarAnchoCasosExitoRelacionado();
	}, false);



	//consumir un rss feed de los elementos casos de exito
	jQuery(".view-display-id-block_resumen_portafolio_grande #views_infinite_scroll_button a").click(function(){
		jQuery.ajax({
		  url: "casos-exito-rss",
		}).done(function(data) {
		  total_elements = jQuery(data).find( "item" ).length;
		  current_elements = jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").children().length;
		  show_elements = total_elements - current_elements;
		  alto_actual = jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").css("height");
		  alto_actual = parseInt(alto_actual.replace("px",""));
		  
		  if(show_elements <= 9 ){
		  	//la variable elementos varia dependiendo de si la resolucion del dispositivo supera los 427px de ancho, esto significa que se encuetra en un dispositivo movil, por lo tanto el alto se calcula diferente
			var elementos = 3;
			var alto_elemento = 273;

			if(window.screen.width <= 480 ) {
				elementos = 1;
				alto_elemento = 200;
			}

		  	jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").css({
				"height":(Math.ceil((show_elements/elementos))*alto_elemento)+alto_actual+"px",
			});
		  }else{
		  	jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").css({
				"height":819+alto_actual+"px",
			});
		  }

		});
	});

	//detiene la accion de ajax para obtener el resto del contenido, despues prosigue agregando el efecto de scroll.
	jQuery(document).ajaxStop(function() {
        	jQuery('.resumen-portafolio').hover(

				function() {

					var div_roll = jQuery(this).find('.roll-over-portfolio');

					//jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "-272"}, 600,function() {});
					jQuery(div_roll).animate({top: "0"}, 600,function() {});


				},function() {

					var div_roll = jQuery(this).find('.roll-over-portfolio');

					//jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "0"}, 600,function() {});
					jQuery(div_roll).animate({top: "273"}, 600,function() {});

			});
    });  


	//agregar una clase cada tres elementos para eliminar el margen der y hacerlo compatible con IE
	jQuery('#group-islas-especialidad-detalle .field-name-field-caracteristicas:nth-child(3n+3)').addClass('nth-child-3th');

	if(jQuery("#block-system-main-menu ul.menu li.expanded.active-trail").children().length == 0){
		jQuery(".menu-desplegable").css({
			"background-image":"none",
		});	
	}


	var IE = '';
	if(jQuery.browser.msie == true){
		if(jQuery.browser.version == '8.0' || jQuery.browser.version == '7.0'){
			IE = true;
		}
		
	}
	// Cambia los logos y icon de menú en IE 8 y IE 7 a formato PNG
	if(IE == true){
		jQuery(".box-logo-estatico").find('img').attr("src", "/sites/all/themes/orbelink/images/logo_p.png");
		jQuery("#boton-menu").find('img').attr("src", "/sites/all/themes/orbelink/images/icon_menu.png");
		jQuery("#logo").find('img').attr("src", "/sites/default/files/logo_s_0.png"); 
	}
	
	var main = jQuery('.page-blog .main');
	var sidebar = jQuery('.page-blog #sidebar-second');
	if(sidebar.length>0){ 
		//sidebar.css({'height':main.height()+"px"});
	}

	jQuery('.view-bloque-trabaje-con-nosotros .views-field-php a[href*=#]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    if(target != ''){
		    arget = jQuery(target);

		    jQuery('html, body').stop().animate({
		        'scrollTop': arget.offset().top - 100
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		}else{
			return true;
		}
	});	
	
	
	//configurar la libreria twentytwenty para la aplicacion de la seccion de analitica y usabilidad
	jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#facebook").css("background-image","url('/sites/all/themes/orbelink/images/facebook-active-tab.png')");

	jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#linkedin").click(function(){
		jQuery(this).css("background-image","url('/sites/all/themes/orbelink/images/linkedin-active-tab.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#instagram").css("background-image","url('/sites/all/themes/orbelink/images/instagram-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#twitter").css("background-image","url('/sites/all/themes/orbelink/images/twitter-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#facebook").css("background-image","url('/sites/all/themes/orbelink/images/facebook-inactive.png')");
	})

	jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#twitter").click(function(){
		jQuery(this).css("background-image","url('/sites/all/themes/orbelink/images/twitter-active-tab.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#instagram").css("background-image","url('/sites/all/themes/orbelink/images/instagram-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#linkedin").css("background-image","url('/sites/all/themes/orbelink/images/linkedin-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#facebook").css("background-image","url('/sites/all/themes/orbelink/images/facebook-inactive.png')");
	})

	jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#facebook").click(function(){
		jQuery(this).css("background-image","url('/sites/all/themes/orbelink/images/facebook-active-tab.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#instagram").css("background-image","url('/sites/all/themes/orbelink/images/instagram-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#twitter").css("background-image","url('/sites/all/themes/orbelink/images/twitter-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#linkedin").css("background-image","url('/sites/all/themes/orbelink/images/linkedin-inactive.png')");
	})

	jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#instagram").click(function(){
		jQuery(this).css("background-image","url('/sites/all/themes/orbelink/images/instagram-active-tab.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#linkedin").css("background-image","url('/sites/all/themes/orbelink/images/linkedin-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#twitter").css("background-image","url('/sites/all/themes/orbelink/images/twitter-inactive.png')");
		jQuery(".app-redes-sociales-contenido ul.accordion-tabs-minimal li#facebook").css("background-image","url('/sites/all/themes/orbelink/images/facebook-inactive.png')");
	})

	jQuery('.flexslider').flexslider({
		 manualControls: ".flex-control-nav li",
		 directionNav: false, 
	});
	jQuery('input, textarea').placeholder();

	jQuery( "#formulario-seo" ).submit(function( event ) {

		//detememos el submition del formulario
		event.preventDefault();

		var var_miweb =jQuery("#miweb").val();	 
		var var_bot = jQuery("input[name='bot']").val();
		var var_idioma = jQuery("input[name='idioma']").val();
		var var_q = jQuery("input#q").val();

		if ( var_miweb  == "" ){
			alert("Debe Insertar Una Ruta de un sitio web para realizar la búsqueda en Google y obtener el Resultado de su posición.");
			return false;
		}
		else if(var_q == ""){
				alert("Debe Insertar una Palabra clave para hacer la búsqueda en Google y obtener el Resultado de su posición.");
				return false;
		}else{
				document.getElementById("resultado-seo").innerHTML = "<div id=\"resultado-espera\"><h2>¿Sabía qué...?</h2><div class=\"flexslider-seo\"><ul class=\"slides\"><li><p id=\"p1\">41% de los cibernautas que no encuentra lo que busca en la primera página de Google ¡no revisa la segunda!</p></li><li><p id=\"p2\">A diario, en Google se efectúan más de 3.500.000.000 búsquedas.</p></li><li><p id=\"p3\">El porcentaje de usuarios que hace clic en el primer resultado de las búsquedas de Google es del 62%.</p></li><li><p id=\"p4\">Para ubicar a un sitio en una buena posición, Google también toma en cuenta que este no haya copiado contenidos de otras páginas y que no tenga errores ortográficos.</p></li><li><p id=\"p5\">Google ha realizado, en los últimos tres años, más de 150 actualizaciones al algoritmo de su motor de búsquedas.</p></li></ul><img class='loader' src=\"/sites/all/themes/orbelink/images/loading.gif\"/></div>"; 

				  jQuery('.flexslider-seo').flexslider({
				    animation: "fade",
				    animationSpeed: 600, 
				    controlNav: false,
				    directionNav: false,
				  });

				jQuery.post( "/consulta-seo", { miweb: var_miweb, bot: var_bot, idioma: var_idioma, q: var_q })
				  .done(function( data ) {
				    //alert( "Data Loaded: " + data );
				    var obj = jQuery.parseJSON(data);
				    var pagina = 0;
				    var icono = "";

				    if(obj.estatus == '0'){
			
						document.getElementById("resultado-seo").innerHTML = "<div id=\"resultado-error\"><img src=\"/sites/all/themes/orbelink/images/cara-triste.png\"/><p class='mensaje-principal'><span class='posicion-seo'>¡Lo sentimos!</span><br /><span class='pagina-seo'> Su sitio no ha sido encontrado en las primeras 2 páginas de los resultados de Google</span></p><p class='leyenda-italica'>Nosotros le ayudamos a llegar a una mejor posición.</p></div>"; 		    	
				    } else {

					   	if(obj.posicion <= 10 ){
					    	pagina = 1;
					    	icono = "cara-feliz.png";
					    } else if(obj.posicion <= 20 ){
					    	pagina = 2;
					    	icono = "cara-seria.png";
					    } else if(obj.posicion <= 30 ){
					    	pagina = 3;
					    	icono = "cara-decepcion.png";
					    }

				    	document.getElementById("resultado-seo").innerHTML = "<div id=\"resultado-error\"><img src=\"/sites/all/themes/orbelink/images/"+icono+"\"/><p class='mensaje-principal'><span class='posicion-seo'>Esta en la posición #<span class='numero-posicion-seo'>"+ obj.posicion +"</span></span><br /> <span class='pagina-seo'>de la página " + pagina + " de Google <br />para el término</span> <span class='terminio-resultado-seo'>" + obj.termino + "</span></p><p class='leyenda-italica'>Nosotros le ayudamos a llegar a una mejor posición.</p></div>"; 		    	
				    }

				});

			
			

		}
		

	});


	

	jQuery("#hover-palabra-clave").hover(function(){
		jQuery(".mensaje-palabra-clave").show( "fade", 400)}
		,function(){
		jQuery(".mensaje-palabra-clave").hide( "fade", 400);
	});

	/*jquery("#block-app-seo-calc-application input#miweb").keypress(function(e) {
    	if(e.which == 13) {
    		jQuery( "#formulario-calc a#consulta-calc" ).click();
	    }
	});*/
	jQuery( "#formulario-calc" ).submit(function( event ) {

			//detenemos el submition del formulario
			event.preventDefault();

			jQuery("#formulario-calc input#consulta-calc").css({
				"background-image": "url(http://nuevo.orbelink.com/sites/all/themes/orbelink/images/responsive-loading.gif)",
				"background-position": "center center"
			});

			var var_miweb_calc = jQuery("#miweb").val();
			
			
			jQuery.post( "/consulta-calc", { miweb: var_miweb_calc })
			  .done(function( data ) {

			  	jQuery("#formulario-calc input#consulta-calc").css({
					"background-image": "url(http://nuevo.orbelink.com/sites/all/themes/orbelink/images/boton-formulario-diseno-web-movil.png)",
					"background-position": "6px 6px"
				});

			    var obj = jQuery.parseJSON(data);
				//console.log(obj);

			    jQuery('#resultado-calc').show();
				var w = '370';
				var h = '540';
				if(jQuery.browser.msie){
					var w = '260';
					var h = '395';					
				}
				if(jQuery.browser.mozilla){
					var w = '340';
					var h = '510';					
				}				
				
			    
			    //inyectar codigo html para mostrar una barra vertical
			    document.getElementById("encabezado-calc").innerHTML = '<ul><li id="li-tablet" class="activo"><div class="img" id="icono-tablet"/></li><li id="li-phone"><div class="img" id="icono-movil"/><li></ul>';
			    
			    //inyectar el codigo html para los displays tablet y movil
			    document.getElementById("contenedor-iframe-calc").innerHTML = '<div id="iframe-tablet-contenedor" class="iframe-contenedor activo"><iframe id="iframe-tablet" width="351" height="427" src="'+ obj.url +'"></iframe></div><div id="iframe-phone-contenedor" class="iframe-contenedor" ><iframe id="iframe-movil" width="'+w+'" height="'+h+'" src="'+ obj.url +'"></iframe></div>';
		
			    //funcionalidad tab para los displays
			    jQuery("#encabezado-calc ul li #icono-tablet").click(function(){
			    	jQuery("#li-tablet").addClass("activo");
			    	jQuery("#li-phone").removeClass("activo");

			    	jQuery("#iframe-tablet-contenedor").addClass("activo");
    				jQuery("#iframe-phone-contenedor").removeClass("activo");
			    });

			     jQuery("#encabezado-calc ul li #icono-movil").click(function(){
			    	jQuery("#li-phone").addClass("activo");
			    	jQuery("#li-tablet").removeClass("activo");

			    	jQuery("#iframe-phone-contenedor").addClass("activo");
    				jQuery("#iframe-tablet-contenedor").removeClass("activo");
			    });
				var c = obj.TotalPorcentajeGrupal;
				
				var bg = '';
				var msn = '';

				if(c <= 100){
					bg = "/sites/all/themes/orbelink/images/cara-feliz-diseno-web.png";
					msn = "El sitio web ofrece óptimas condiciones para navegar  desde cualquier dispositivo móvil.";
				}
				if(c <= 75){
					bg = "/sites/all/themes/orbelink/images/cara-dudosa-diseno-web.png";
					msn = "El sitio web no reúne las condiciones óptimas para navegar  desde dispositivos móviles, tiene una lista importante de aspectos por mejorar.";
				}				
				if(c <= 50){
					bg = "/sites/all/themes/orbelink/images/cara-panico-diseno-web.png";
					msn = "El sitio web no facilita la  navegación desde dispositivos móviles.";
				}				
				if(c <= 25){
					bg = "/sites/all/themes/orbelink/images/cara-triste-diseno-web.png";
					msn = "El sitio web no es apto para navegar  desde dispositivos móviles.";
				}											
				//alert(c);
				//inyectar codigo html para crear la barra vertical
						
document.getElementById("reporte_grafico").innerHTML = '\
<table width="480" border="0" class="reporte_d">\
  <tr>\
    <td colspan="3">\
		<img src="'+bg+'" />\
		<p class="mensaje-respuesta">'+msn+'</p>\
	</td>\
  </tr>\
  <tr>\
    <td>&nbsp;</td>\
    <td>&nbsp;</td>\
    <td>&nbsp;</td>\
  </tr>\
  <tr>\
    <td align="left">Ventana gráfica:</td>\
    <td>\
	<div class="bg-gris">\
		<div class="bg-vc" style="width: '+obj.impactoSizeContentToViewport+'%;"></div>\
		<img src="/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
	</div>\
	</td>\
    <td>'+obj.impactoSizeContentToViewport+'%</td>\
  </tr>\
  <tr>\
    <td align="left">Velocidad de carga:</td>\
    <td>\
	<div class="bg-gris">\
		<div class="bg-vc" style="width: '+obj.impactoVelocidad+'%;"></div>\
		<img src="/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
	</div>\
	</td>\
    <td>'+obj.impactoVelocidad+'%</td>\
  </tr>\
  <tr>\
    <td align="left">Tamaño de fuente:</td>\
    <td>\
	<div class="bg-gris">\
		<div class="bg-vc" style="width: '+obj.impactoUseLegibleFontSizes+'%;"></div>\
		<img src="/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
	</div>\
	</td>\
    <td>'+obj.impactoUseLegibleFontSizes+'%</td>\
  </tr>\
  <tr>\
    <td align="left">Usabilidad táctil:</td>\
    <td>\
	<div class="bg-gris">\
		<div class="bg-vc" style="width: '+obj.SizeTapTargetsAppropriately+'%;"></div>\
		<img src="/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
	</div>\
	</td>\
    <td>'+obj.SizeTapTargetsAppropriately+'%</td>\
  </tr>\
</table>';
			
			});

		});

	jQuery("#container1").twentytwenty();

	//agregar funcionalidad para la seciccion de estrategia
	jQuery(".casilla").css({display:'none'});
	jQuery("#tablero-consulta .roll-over").css({display:'none'});
	setTimeout(function(){ jQuery("#formulario-consulta-sueno li#estrategia1").click(); }, 1000);

	jQuery("#formulario-consulta-sueno li").click(function(){
		jQuery("#formulario-consulta-sueno li").removeClass('activo');
		jQuery(this).addClass('activo');
		if(IE != ''){
			jQuery(".casilla").hide();
		}else{
			jQuery(".casilla").show().animate({"transform": "scale(0,0)"});
		}
		/*jQuery("#tablero-consulta div").each(function(index, element) { console.log(element.id);
            var id = generateRange(12, 1, 12);
			jQuery(this).removeClass('cp1 cp2 cp3 cp4 cp5 cp6 cp7 cp8 cp9 cp10 cp11 cp12').addClass('cp'+id);
        });*/
		var div = jQuery("."+jQuery(this).attr('id'));
		jQuery(".box_tablero").removeClass('box_activo');
		div.parent().addClass('box_activo');
		
		if(IE != ''){
			div.show();
		}else{
			div.animate({"transform": "scale(1,1)"});
		}
	});
	
	jQuery(".box_tablero").hover(function() {
		if(jQuery(this).hasClass( "box_activo" ) == false){
			return false;
		}
		var casilla = jQuery(this).find( ".casilla" );
		if(IE != ''){
			casilla.hide();
		}else{
			casilla.show().animate({"transform": "scale(0,0)"});
		}
		
		var id = casilla.attr('id');
		var info = jQuery("#roll-over-"+id);
		if(IE != ''){
			info.delay(100).show();
		}else{
			info.delay(100).show().animate({"transform": "scale(1,1)"});
		}
		
	}, function(){
		if(jQuery(this).hasClass( "box_activo" ) == false){
			return false;
		}
		var casilla = jQuery(this).find( ".casilla" );
		if(IE != ''){
			casilla.delay(100).show();
		}else{
			casilla.delay(100).show().animate({"transform": "scale(1,1)"});
		}
		
		var id = casilla.attr('id');
		var info = jQuery("#roll-over-"+id);
		if(IE != ''){
			info.hide();
		}else{
			info.show().animate({"transform": "scale(0,0)"});
		}
		
	});
	
	/*** FUNCIONALIDAD NUESTRO EQUIPO CARRUSEL *******/
	jQuery(".rolloverpersonal").css({"opacity": 0, "top": "50px"});
	
	jQuery(".bloque-personal").hover(function() { 
		var rollp = jQuery(this).find( ".rolloverpersonal" );
		rollp.animate({"opacity": 1, "top": "0px"});

	}, function(){
		var rollp = jQuery(this).find( ".rolloverpersonal" );
		rollp.animate({"opacity": 0, "top": "50px"});
				
	});
	
	
    /*** FUNCIONALIDAD SOBRE NOSOTROS *******/
	
	jQuery(".bloque").hover(function() { 
		var caption = jQuery(this).find( ".caption" );
		var rollover = jQuery(this).find( ".rollover_about" );
		if(IE != ''){
			caption.hide();
			rollover.delay(100).show();			
		}else{
			caption.show().animate({"transform": "scale(0,0)"});
			rollover.delay(100).show().animate({"transform": "scale(1,1)"});
		}
	}, function(){
		var caption = jQuery(this).find( ".caption" );
		var rollover = jQuery(this).find( ".rollover_about" );
		if(IE != ''){
			caption.show();
			rollover.delay(100).hide();			
		}else{
			caption.show().animate({"transform": "scale(1,1)"});
			rollover.delay(100).show().animate({"transform": "scale(0,0)"});			
		}
				
	});
    /*** FUNCIONALIDAD SOBRE NOSOTROS PERSONAL *******/
	/*jQuery(".bloque-personal").hover(function() {
		//var caption = jQuery(this).find( ".caption" );
		var rollover = jQuery(this).find( ".rolloverpersonal" );
		
		//caption.show().animate({"transform": "scale(0,0)"});
		rollover.delay(100).show().animate({"transform": "scale(1,1)"});
	}, function(){
		//var caption = jQuery(this).find( ".caption" );
		var rollover = jQuery(this).find( ".rolloverpersonal" );
		
		//caption.show().animate({"transform": "scale(1,1)"});
		rollover.delay(100).show().animate({"transform": "scale(0,0)"});
	});		*/
		

	//agregar funcionalidad para desplegar el resultado del objetivo
	var valor_conversion = jQuery( "#conversion-opciones option:selected" ).val();
	jQuery( "#busqueda-resultado-"+valor_conversion ).removeClass("resultado");

	jQuery( "#conversion-opciones" ).change(function(){
		jQuery( "#busqueda-resultado img").hide("slow");
		var valor_conversion = jQuery( "#conversion-opciones option:selected" ).val();
		jQuery( "#busqueda-resultado-"+valor_conversion ).show("slow");
	});

	//agregar funcionalidad de tabs para la aplicacion de cual es su objetivo?
	  jQuery('.accordion-tabs-minimal').each(function(index) {
	    jQuery(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
	  });

	  jQuery('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
	  	var height_acordion = 0;
	  	switch(jQuery(this).attr("id")){
	  		case 'red-display':
	  			height_acordion = 2000;
	  		break;
	  		case 'google-adwords':
	  			height_acordion = 900;
	  		break;
	  		case 'facebook-ads':
	  			height_acordion = 900;
	  		break;
	  		case 'mobile':
	  			height_acordion = 930;
	  		break;
	  	}

	  	jQuery('#block-block-8 ul').css({
	  		"height":height_acordion
	  	});

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

	    	//cambiarObjetivo();
		
		if(jQuery(this).attr('id') == 'branding'){
			jQuery("#facebook").click();
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
	var height = jQuery('.view-slider-home li img').height() / 2;
	var result = height - ((cantidad_li - 1) * 11);
	jQuery('.view-slider-home .flex-control-nav').css({'top':result});


	/*Para efecto de anuncions -aplicacion de publicidad digital*/

jQuery('a#link-facebook-ad-1').click(function() {


	jQuery('#facebook-ad-1-mensaje').fadeOut(500,function(){
		jQuery('#facebook-ad-1-anuncio').fadeIn(500);
	});
  	
});

jQuery('a#link-facebook-ad-2').click(function() {


	jQuery('#facebook-ad-2-mensaje').fadeOut(500,function(){
		jQuery('#facebook-ad-2-anuncio').fadeIn(500);
	});
  	
});

jQuery('a#link-google-ad-1').click(function() {


	jQuery('#google-ad-1-mensaje').fadeOut(500,function(){
		jQuery('#google-ad-1-anuncio').fadeIn(500);
	});
  	
});

jQuery('a#link-google-ad-2').click(function() {


	jQuery('#google-ad-2-mensaje').fadeOut(500,function(){
		jQuery('#google-ad-2-anuncio').fadeIn(500);
	});
  	
});

jQuery('a#link-google-ad-3').click(function() {


	jQuery('#google-ad-3-mensaje').fadeOut(500,function(){
		jQuery('#google-ad-3-anuncio').fadeIn(500);
	});
  	
});

jQuery('a#link-google-ad-4').click(function() {


	jQuery('#google-ad-4-mensaje').fadeOut(500,function(){
		jQuery('#google-ad-4-anuncio').fadeIn(500);
	});
  	
});




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

	/*Hacer Efecto Roll Over en portfolio del home */
	var cuadros_portfolio=0;
	jQuery('.view-display-id-bloque_casos_exito_relacionados .views-row').each(function(indice, elemento) {
		cuadros_portfolio=cuadros_portfolio+1;
		jQuery(this).attr('id','views-row-portfolio-'+cuadros_portfolio);


		var id= jQuery(this).attr('id');
		jQuery('#'+id+' .resumen-portafolio').hover(


		function() {
			jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "-272"}, 600,function() {});
			jQuery('#'+id+ ' .resumen-portafolio .roll-over-portfolio').animate({top: "0"}, 600,function() {});


		},function() {

			jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "0"}, 600,function() {});
			jQuery('#'+id+ ' .resumen-portafolio .roll-over-portfolio').animate({top: "273"}, 600,function() {});

		});

	});

	/*Hacer Efecto Roll Over en portfolio del home */
	var cuadros_portfolio=0;
	jQuery('.view-display-id-block_resumen_portafolio_pequeno .views-row').each(function(indice, elemento) {
		cuadros_portfolio=cuadros_portfolio+1;
		jQuery(this).attr('id','views-row-portfolio-'+cuadros_portfolio);


		var id= jQuery(this).attr('id');
		jQuery('#'+id+' .resumen-portafolio').hover(


		function() {
			jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "-272"}, 600,function() {});
			jQuery('#'+id+ ' .resumen-portafolio .roll-over-portfolio').animate({top: "0"}, 600,function() {});


		},function() {

			jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "0"}, 600,function() {});
			jQuery('#'+id+ ' .resumen-portafolio .roll-over-portfolio').animate({top: "273"}, 600,function() {});

		});

	});

	/*var cuadros_portfolio_g=0;
	jQuery('.view-display-id-block_resumen_portafolio_grande .views-row').each(function(indice, elemento) {
		cuadros_portfolio_g=cuadros_portfolio_g+1;
		jQuery(this).attr('id','views-row-portfolio-'+cuadros_portfolio_g);


		var id= jQuery(this).attr('id');


	});*/

		jQuery('.resumen-portafolio').hover(

		

		function() {

			var div_roll = jQuery(this).find('.roll-over-portfolio');

			//jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "-272"}, 600,function() {});
			jQuery(div_roll).animate({top: "0"}, 600,function() {});


		},function() {

			var div_roll = jQuery(this).find('.roll-over-portfolio');

			//jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "0"}, 600,function() {});
			jQuery(div_roll).animate({top: "273"}, 600,function() {});

		});


	/*Hacer Efecto Roll Over en portfolio del detalle de especialidades */
	var cuadros_portfolio_deta_especia=0;
	jQuery('.view-display-id-block_resumen_portafolio_pequeno_sin_encabezado .views-row').each(function(indice, elemento) {
		cuadros_portfolio_deta_especia=cuadros_portfolio_deta_especia+1;
		jQuery(this).attr('id','views-row-portfolio-'+cuadros_portfolio_deta_especia);


		var id= jQuery(this).attr('id');
		jQuery('#'+id+' .resumen-portafolio').hover(


		function() {
			jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "-272"}, 600,function() {});
			jQuery('#'+id+ ' .resumen-portafolio .roll-over-portfolio').animate({top: "0"}, 600,function() {});


		},function() {

			jQuery('#'+id+ ' .resumen-portafolio .hover-titulo').animate({top: "0"}, 600,function() {});
			jQuery('#'+id+ ' .resumen-portafolio .roll-over-portfolio').animate({top: "273"}, 600,function() {});

		});

	});

	/* Añadir Id a islas de detalle de especialidad */
	var numero_islas=0;
	jQuery('.node-type-especialidad .node-especialidad .group-islas-especialidad .vocabulary-caracteristicas').each(function(indice, elemento) {
		numero_islas=numero_islas+1;
		jQuery(this).addClass('isla-caracteristica-'+numero_islas);
		

	});



	


/* Radio customs en aplicacion de SEO*/
	jQuery(".input-radio-eng .input-radio-idioma-wrapper").click(function(){
		if(jQuery(".input-radio-eng .input-radio-idioma-wrapper").hasClass("radio-activado")){
			if(jQuery(".input-radio-espa .input-radio-idioma-wrapper").hasClass("radio-desactivado")){
				return false;
			}else{
				jQuery(".input-radio-espa .input-radio-idioma-wrapper").addClass("radio-desactivado");
			}

		}else{
			jQuery(".input-radio-eng .input-radio-idioma-wrapper").addClass("radio-activado");
			jQuery(".input-radio-eng .input-radio-idioma-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-espa .input-radio-idioma-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-espa .input-radio-idioma-wrapper").addClass("radio-desactivado");
		}
		
	});

	jQuery(".input-radio-espa .input-radio-idioma-wrapper").click(function(){
		if(jQuery(".input-radio-espa .input-radio-idioma-wrapper").hasClass("radio-activado")){
			if(jQuery(".input-radio-eng .input-radio-idioma-wrapper").hasClass("radio-desactivado")){
				return false;
			}else{
				jQuery(".input-radio-eng .input-radio-idioma-wrapper").addClass("radio-desactivado");
			}

		}else{
			jQuery(".input-radio-espa .input-radio-idioma-wrapper").addClass("radio-activado");
			jQuery(".input-radio-espa .input-radio-idioma-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-eng .input-radio-idioma-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-eng .input-radio-idioma-wrapper").addClass("radio-desactivado");
		}
		
	});

	jQuery(".input-radio-cr .input-radio-google-wrapper").click(function(){
		if(jQuery(".input-radio-cr .input-radio-google-wrapper").hasClass("radio-activado")){
			if(jQuery(".input-radio-global .input-radio-google-wrapper").hasClass("radio-desactivado")){
				return false;
			}else{
				jQuery(".input-radio-global .input-radio-google-wrapper").addClass("radio-desactivado");
			}

		}else{
			jQuery(".input-radio-cr .input-radio-google-wrapper").addClass("radio-activado");
			jQuery(".input-radio-cr .input-radio-google-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-global .input-radio-google-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-global .input-radio-google-wrapper").addClass("radio-desactivado");
		}
		
	});

	jQuery(".input-radio-global .input-radio-google-wrapper").click(function(){
		if(jQuery(".input-radio-global .input-radio-google-wrapper").hasClass("radio-activado")){
			if(jQuery(".input-global-cr .input-radio-google-wrapper").hasClass("radio-desactivado")){
				return false;
			}else{
				jQuery(".input-radio-cr .input-radio-google-wrapper").addClass("radio-desactivado");
			}

		}else{
			jQuery(".input-radio-global .input-radio-google-wrapper").addClass("radio-activado");
			jQuery(".input-radio-global .input-radio-google-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-cr .input-radio-google-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-cr .input-radio-google-wrapper").addClass("radio-desactivado");
		}
		
	});



	/* Radio customs en aplicacion de Cotización de clicks */
	jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").click(function(){
		if(jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").hasClass("radio-activado")){

				if (!jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				
			

		}else{
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-activado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
		}
		
	});

	jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").click(function(){
		if(jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").hasClass("radio-activado")){

				if (!jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				
			

		}else{
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-activado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
		}
		
	});

	jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").click(function(){
		if(jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").hasClass("radio-activado")){

				if (!jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				
			

		}else{
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-activado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
		}
		
	});

	jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").click(function(){
		if(jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").hasClass("radio-activado")){

				if (!jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				
			

		}else{
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-activado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-desactivado");
		}
		
	});

	jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").click(function(){
		if(jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").hasClass("radio-activado")){

				if (!jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				if (!jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").hasClass("radio-desactivado")){
					jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
				}
				
			

		}else{
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").addClass("radio-activado");
			jQuery(".input-radio-rango-5 .input-radio-rango-wrapper").removeClass("radio-desactivado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-1 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-2 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-4 .input-radio-rango-wrapper").addClass("radio-desactivado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").removeClass("radio-activado");
			jQuery(".input-radio-rango-3 .input-radio-rango-wrapper").addClass("radio-desactivado");
		}
		
	});

	/* Código para mostrar u ocultar items en portfolio de Nuestro Trabajo por Tags - Keylor*/

	jQuery(".tags-nuestro-trabajo .portfolio-tag").click(function() {

		if(window.screen.width <= 480){
			arget = jQuery("#block-views-0d18fbb04b11503b59464ec311b3de5e");
		    jQuery('html, body').stop().animate({
		        'scrollTop': arget.offset().top + 50
		    }, 900, 'swing', function () {
		        window.location.hash = "#block-views-0d18fbb04b11503b59464ec311b3de5e";
		    });
		}

		if (jQuery(this).hasClass("portfolio-tag-todo")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				var cantidad_resultados = jQuery(".view.view-portafolio .view-content").children(".views-row").length;	
				var height = (Math.ceil((cantidad_resultados/3))*273);

					jQuery(".view.view-portafolio .view-content").css({
						"height":height+"px"
					});

				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"block"});
			}); 
			
			jQuery(".view.view-portafolio .view-content").fadeIn(400,"linear");

			

		}else if (jQuery(this).hasClass("portfolio-tag-estrategia")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(73);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-73").css({"display":"block"});
			}); 
			jQuery(".view .view-content").fadeIn(400,"linear");


			
		}else if (jQuery(this).hasClass("portfolio-tag-publicidad-digital")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(76);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-76").css({"display":"block"});
			}); 
			jQuery(".view .view-content").fadeIn(400,"linear");


			
		}else if (jQuery(this).hasClass("portfolio-tag-gestion-redes-sociales")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(97);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-97").css({"display":"block"});
			}); 
			jQuery(".view .view-content").fadeIn(400,"linear");


			
		}else if (jQuery(this).hasClass("portfolio-tag-seo")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(98);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-98").css({"display":"block"});
			}); 
			jQuery(".view .view-content").fadeIn(400,"linear");


			
		}else if (jQuery(this).hasClass("portfolio-deseno-movil")){
			jQuery(".view.view-portafolio .view-content").fadeOut(400,"linear",function(){
				calcularAltoCasosExito(99);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-99").css({"display":"block"});
			}); 
			jQuery(".view .view-content").fadeIn(400,"linear");


			
		}else if (jQuery(this).hasClass("portfolio-tag-publicidad")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(74);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-74").css({"display":"block"});
			}); 
			jQuery(".view.view-portafolio .view-content").fadeIn(400,"linear");

			
		}else if (jQuery(this).hasClass("portfolio-tag-analitica")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(75);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-75").css({"display":"block"});
			}); 
			jQuery(".view.view-portafolio .view-content").fadeIn(400,"linear");

			
		}else if (jQuery(this).hasClass("portfolio-tag-produ-digital")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(76);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-76").css({"display":"block"});
			}); 
			jQuery(".view.view-portafolio .view-content").fadeIn(400,"linear");

			
		}else if (jQuery(this).hasClass("portfolio-tag-produ-contenidos")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(77);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-77").css({"display":"block"});
			}); 
			jQuery(".view.view-portafolio .view-content").fadeIn(400,"linear");

			
		}else if (jQuery(this).hasClass("portfolio-tag-gestion-redes")){

			jQuery(".view.view-portafolio .view-content").fadeOut(600,"linear",function(){
				calcularAltoCasosExito(78);
				jQuery(".view.view-portafolio .view-content .views-row").css({"display":"none"});
				jQuery(".view.view-portafolio .view-content .views-row.categoria-78").css({"display":"block"});
			}); 
			jQuery(".view.view-portafolio .view-content").fadeIn(400,"linear");

			
		}
	});


	

	
	if (jQuery("#bloque-resultados-objetivo").length>0){
		//poner como default el primer presupuesto y realizar el calculo de clics e impresiones
		//cambiarObjetivo();

		jQuery("input[name='presupuesto']").change(function(){
			//cambiarObjetivo();		
		});

		//realizamos el ajuste de calculo cuando el usuario cambia los tabs de branding y conversion
		//jQuery("#block-block-8 .tab-header-and-content a").click(function(){ cambiarObjetivo(); })
	}
	

/*evento Scroll para formulario*/


//contar el numero de elementos
var count = jQuery(".field-name-field-solucion").length;
if (count == 1){
	jQuery(".field-name-field-solucion").css("width","100%");
}

var count_reto = jQuery(".field-name-field-reto").length;
if (count_reto == 1){
	jQuery(".field-name-field-reto").css("width","100%");
}
	

var cantidad_resultados = jQuery(".group-resultados .fieldset-wrapper").children().length;	
	if (cantidad_resultados <= 5){
		if(window.screen.width < 768){
			jQuery(".group-resultados .fieldset-wrapper").css({
				"width":"100%",
				"margin":"0 auto"
			});
		}else{
			jQuery(".group-resultados .fieldset-wrapper").css({
					"width":cantidad_resultados*193+"px",
					"margin":"0 auto"
			});
		}
	}

ajustarAnchoCasosExitoRelacionado(".view-display-id-bloque_casos_exito_relacionados");
ajustarAnchoCasosExitoRelacionado(".view-display-id-block_resumen_portafolio_pequeno_sin_encabezado");

var cantidad_parrafos = jQuery(".field-name-body .contenido").children().length;	
if (cantidad_parrafos == 1){
	jQuery(".field-name-body .contenido .parrafo").css({
		"width":"100%"
	});
} else {
	var ancho = "48%";
	if(window.screen.width < 480){
		ancho = "100%";
	}

	jQuery(".field-name-body .contenido .parrafo").css({
			"width": ancho,
			"float":"left"
		});

}
	
});

function scrollFormContacto(){
	
		//e.preventDefault();

		var target = "#main-content";
		$target = jQuery(target);

		jQuery('html, body').stop().animate({
		'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
		window.location.hash = target;
		});
	
}



function obtenerCalculoClicsImpresiones(presupuesto, conversion, branding)
{
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
	}}

function cambiarObjetivo()
{
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

function popupflash970()
{ 
	jQuery("#flash970").click();
}

function calcularAltoCasosExito(cod_categoria){
	var cantidad_resultados = jQuery(".view.view-portafolio .view-content").children(".categoria-"+cod_categoria).length;	
	//la variable elementos varia dependiendo de si la resolucion del dispositivo supera los 427px de ancho, esto significa que se encuetra en un dispositivo movil, por lo tanto el alto se calcula diferente
	var elementos = 3;
	var alto_elemento = 273;

	if(window.screen.width <= 480 ) {
		elementos = 1;
		alto_elemento = 200;
	}

	var height = (Math.ceil((cantidad_resultados/elementos))*alto_elemento);

		jQuery(".view.view-portafolio .view-content").css({
			"height":height+"px"
		});
}


function ajustarAnchoCasosExitoRelacionado(contenedor){
	var cantidad_resultados = jQuery(contenedor + " .view-content").children().length;	
	var ancho = 0;
	var ancho_ventana = window.screen.width;
	if (cantidad_resultados <= 3){
		if(ancho_ventana < 480){
			ancho = 310;
			cantidad_resultados = 1;
		}else if (ancho_ventana < 768){
			ancho = 423;
			cantidad_resultados = 1;
		}else if ((ancho_ventana >= 768) && (ancho_ventana <= 1024)){
			ancho = 423;
			cantidad_resultados = 1;
		} else if ((ancho_ventana > 1024) && (ancho_ventana < 1280)){
			ancho = 341;
		}else{
			ancho = 423;
		}
		jQuery(contenedor + " .view-content").css({
				"width":cantidad_resultados*ancho+"px",
				"margin":"0 auto"
		});
	}
}

function ajustarAltoContenedorCasosExitoInicial(){
		//detectar la cantidad de elementos views-row tiene el contenedor del bloque: view-display-id-block_resumen_portafolio_grande

	var cantidad_portafolio = jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").children().length;
	
	//la variable elementos varia dependiendo de si la resolucion del dispositivo supera los 427px de ancho, esto significa que se encuetra en un dispositivo movil, por lo tanto el alto se calcula diferente
			var elementos = 1;
			var alto_elemento = 273;

			if(window.screen.width <= 480 ) {
				alto_elemento = 200;
			} else if(window.screen.width <= 1024 ) {
				alto_elemento = 273;
			} else {
				elementos = 3;
			}

	jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").css({
		"height":(Math.ceil(cantidad_portafolio/elementos)*alto_elemento)+"px",
	});
}