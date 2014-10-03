
<div id="comments" class="<?php print $classes; ?>"<?php print $attributes; ?>>
<?php if ($content['comments'] && $node->type != 'forum'): ?>
<?php print render($title_prefix); ?>
<h2 id="titulo-comentarios"  class="title"><?php print $node->comment_count.' '.t('Comments'); ?></h2>
<?php print render($title_suffix); ?>
<?php endif; ?>
<?php print render($content['comments']); ?>
<?php if ($content['comment_form']): ?>
<div id="ancla-formulario-comentario"></div>
<h2 class="title comment-form"><?php print t('Add new comment'); ?></h2>
<?php print render($content['comment_form']); ?>
<?php endif; ?>
</div> 