jQuery.noConflict(); 
jQuery(document).ready(function(){

	//detectar la cantidad de elementos views-row tiene el contenedor del bloque: view-display-id-block_resumen_portafolio_grande

	var cantidad_portafolio = jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").children().length;
	jQuery(".view-display-id-block_resumen_portafolio_grande .view-content").css({
		"height":(Math.ceil(cantidad_portafolio/3)*273)+"px",
	})

	//consumir un rss feed de los elementos casos de exito
	jQuery.ajax({
	  url: "casos-exito-rss",
	}).done(function(data) {
	  console.log(data);
	});

});