
<div id="comments" class="<?php print $classes; ?>"<?php print $attributes; ?>>
<?php if ($content['comment_form']): ?>
<?php if ($content['comments']): ?>
<div id="ancla-formulario-comentario"></div>
<?php endif; ?>
<h2 class="title comment-form"><?php print t('Add new comment'); ?></h2>
<?php print render($content['comment_form']); ?>
<?php endif; ?>
	
<?php if ($content['comments'] && $node->type != 'forum'): ?>
<?php print render($title_prefix); ?>
<h2 id="titulo-comentarios"  class="title"><?php print $node->comment_count.' '.t('Comments'); ?><em class="subtitle-comentario"><a href="#ancla-formulario-comentario"><?php print " agrege el suyo"; ?></a></em></h2>
<?php print render($title_suffix); ?>
<?php endif; ?>
<?php print render($content['comments']); ?>

</div> 