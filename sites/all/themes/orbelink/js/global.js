jQuery.noConflict(); 
jQuery(document).ready(function(){

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
				document.getElementById("resultado-seo").innerHTML = "<div id=\"resultado-espera\"><h2>Por favor, espere mientras consultamos ...</h2><img class='loader' src=\"/sites/all/themes/orbelink/images/loading.gif\"/></div>"; 

				jQuery.post( "/orbelink/consulta-seo", { miweb: var_miweb, bot: var_bot, idioma: var_idioma, q: var_q })
				  .done(function( data ) {
				    //alert( "Data Loaded: " + data );
				    var obj = jQuery.parseJSON(data);
				    var pagina = 0;
				    var icono = "";

				    if(obj.estatus == '0'){
			
						document.getElementById("resultado-seo").innerHTML = "<div id=\"resultado-error\"><img src=\"/sites/all/themes/orbelink/images/cara-triste.png\"/><p class='mensaje-principal'><span class='posicion-seo'>¡Lo sentimos!</span><br /><span class='pagina-seo'> Su sitio no ha sido encontrado en las primeras 3 páginas de los resultados de Google</span></p><p class='leyenda-italica'>Nosotros le ayudamos a llegar a una mejor posición.</p></div>"; 		    	
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
			
/*zoom: 0.9;
-moz-transform: scale(0.8);
-moz-transform-origin: 0 0;
-o-transform: scale(0.8);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.7);
-webkit-transform-origin: 0 0;*/	
			
			jQuery("#iframe-movil").css({
				"-moz-transform": "scale(0.7)",
				"-webkit-transform": "scale(0.7)",
				"-o-transform": "scale(0.7)",
				"-ms-transform": "scale(0.7)",
				"-moz-transform-origin": "0 0",
				"-webkit-transform-origin": "0 0",
				"-o-transform-origin": "0 0",
				"-ms-transform-origin": "0 0",				
				"zoom":'0.9'});
			jQuery.post( "/orbelink/consulta-calc", { miweb: var_miweb_calc })
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

				if(c <= 100){
					bg = "/sites/all/themes/orbelink/images/cara-feliz-diseno-web.png";
				}
				if(c <= 75){
					bg = "/sites/all/themes/orbelink/images/cara-dudosa-diseno-web.png";
				}				
				if(c <= 50){
					bg = "/sites/all/themes/orbelink/images/cara-panico-diseno-web.png";
				}				
				if(c <= 25){
					bg = "/sites/all/themes/orbelink/images/cara-triste-diseno-web.png";
				}											
				//alert(c);
				//inyectar codigo html para crear la barra vertical
						
document.getElementById("reporte_grafico").innerHTML = '\
<table width="480" border="0" class="reporte_d">\
  <tr>\
    <td colspan="3">\
		<img src="/orbelink'+bg+'" />\
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
		<img src="/orbelink/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
	</div>\
	</td>\
    <td>'+obj.impactoSizeContentToViewport+'%</td>\
  </tr>\
  <tr>\
    <td align="left">Velocidad de carga:</td>\
    <td>\
	<div class="bg-gris">\
		<div class="bg-vc" style="width: '+obj.impactoVelocidad+'%;"></div>\
		<img src="/orbelink/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
	</div>\
	</td>\
    <td>'+obj.impactoVelocidad+'%</td>\
  </tr>\
  <tr>\
    <td align="left">Tamaño de fuente:</td>\
    <td>\
	<div class="bg-gris">\
		<div class="bg-vc" style="width: '+obj.impactoUseLegibleFontSizes+'%;"></div>\
		<img src="/orbelink/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
	</div>\
	</td>\
    <td>'+obj.impactoUseLegibleFontSizes+'%</td>\
  </tr>\
  <tr>\
    <td align="left">Usabilidad táctil:</td>\
    <td>\
	<div class="bg-gris">\
		<div class="bg-vc" style="width: '+obj.SizeTapTargetsAppropriately+'%;"></div>\
		<img src="/orbelink/sites/all/themes/orbelink/images/barra-calculo-mascara-horizontal.png" />\
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
		jQuery(".casilla").show().animate({"transform": "scale(0,0)"});
		/*jQuery("#tablero-consulta div").each(function(index, element) { console.log(element.id);
            var id = generateRange(12, 1, 12);
			jQuery(this).removeClass('cp1 cp2 cp3 cp4 cp5 cp6 cp7 cp8 cp9 cp10 cp11 cp12').addClass('cp'+id);
        });*/
		var div = jQuery("."+jQuery(this).attr('id'));
		jQuery(".box_tablero").removeClass('box_activo');
		div.parent().addClass('box_activo');
		div.animate({"transform": "scale(1,1)"});
	});
	
	jQuery(".box_tablero").hover(function() {
		if(jQuery(this).hasClass( "box_activo" ) == false){
			return false;
		}
		var casilla = jQuery(this).find( ".casilla" );
		casilla.show().animate({"transform": "scale(0,0)"});
		var id = casilla.attr('id');
		var info = jQuery("#roll-over-"+id);
		info.delay(100).show().animate({"transform": "scale(1,1)"});
	}, function(){
		if(jQuery(this).hasClass( "box_activo" ) == false){
			return false;
		}
		var casilla = jQuery(this).find( ".casilla" );
		casilla.delay(100).show().animate({"transform": "scale(1,1)"});
		var id = casilla.attr('id');
		var info = jQuery("#roll-over-"+id);	
		info.show().animate({"transform": "scale(0,0)"});
	});

    /*** FUNCIONALIDAD SOBRE NOSOTROS *******/
	jQuery(".bloque").hover(function() {
		var caption = jQuery(this).find( ".caption" );
		var rollover = jQuery(this).find( ".rollover_about" );
		
		caption.show().animate({"transform": "scale(0,0)"});
		rollover.delay(100).show().animate({"transform": "scale(1,1)"});
	}, function(){
		var caption = jQuery(this).find( ".caption" );
		var rollover = jQuery(this).find( ".rollover_about" );
		
		caption.show().animate({"transform": "scale(1,1)"});
		rollover.delay(100).show().animate({"transform": "scale(0,0)"});
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

	    	cambiarObjetivo();
		
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

	var cuadros_portfolio_g=0;
	jQuery('.view-display-id-block_resumen_portafolio_grande .views-row').each(function(indice, elemento) {
		cuadros_portfolio_g=cuadros_portfolio_g+1;
		jQuery(this).attr('id','views-row-portfolio-'+cuadros_portfolio_g);


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
	
	
	//poner como default el primer presupuesto y realizar el calculo de clics e impresiones
	cambiarObjetivo();

	jQuery("input[name='presupuesto']").change(function(){
		cambiarObjetivo();		
	});

	//realizamos el ajuste de calculo cuando el usuario cambia los tabs de branding y conversion
	//jQuery("#block-block-8 .tab-header-and-content a").click(function(){ cambiarObjetivo(); })

});

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


