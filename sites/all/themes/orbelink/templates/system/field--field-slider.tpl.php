<?php
	$imagen =""; 
	$url = "";
?>
	<!-- Place somewhere in the <body> of your page -->
<?php for ($i=0; $i < count($items); $i++) { 

	if (isset($items[$i]['field_enlace_banner']['#items'][0]['url'])){
		$url = $items[$i]['field_enlace_banner']['#items'][0]['url'];
	}

	$imagen .= "<li>
	     		 <a href=\"".$url."\"><img src=\"/sites/default/files/imagenes_banner/".$items[$i]['field_imagen_banner']['#items'][0]['filename']."\" /></a>
	 		   </li>";
} ?>
<div class="<?php print $classes; ?>">
	<div class="flexslider">
	  <ul class="slides">
	    <?php print $imagen ?>
	  </ul>
	</div>
</div>