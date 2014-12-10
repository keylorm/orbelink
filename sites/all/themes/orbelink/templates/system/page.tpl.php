<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 */

global $base_url;

?>
<header class="header" role="banner">

  <!-- Div para mostrar menu desplegable -->
  <div class="menu-desplegable">
    <div class="container-nivel1">
      <div class="container-nivel2">
            <div class="box-logo-cerrar">
              <div class="box-logo-menu">
                <?php if ($logo): ?>
                  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
                    <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                  </a>
                <?php endif; ?>
              </div>
              <div class="box-boton-cerrar">
                <a id="boton-cerrar-menu" href="javascript:void(0);"><img src="<?php print $base_url; ?>/sites/all/themes/orbelink/images/close_menu.png" alt="Cerrar"/></a>
              </div>
              <?php if ($site_name || $site_slogan): ?>

                  <?php if ($site_name): ?>
                    <?php if ($title): ?>

                      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>

                    <?php else: /* Use h1 when the content title is empty */ ?>
                      <h1 id="site-name">
                        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
                      </h1>
                    <?php endif; ?>
                  <?php endif; ?>

                  <?php if ($site_slogan): ?>
                    <?php print $site_slogan; ?>
                  <?php endif; ?>

              <?php endif; ?>
            </div>
            <?php print render($page['header']); ?>

      </div>
    </div>
  </div>
  <div class="header-estatico">
    <div class="container-nivel1">
      <div class="container-nivel2">
        <div class="box-logo-estatico">
          <a  href="<?php print $front_page; ?>"><img src="<?php print $base_url; ?>/sites/all/themes/orbelink/images/logo.svg" alt="Orbelink"/></a>
        </div>
        
        <div class="menu-toggle">
          <a id="boton-menu" href="javascript:void(0);"><img src="<?php print $base_url; ?>/sites/all/themes/orbelink/images/icon_menu.svg" alt="Orbelink"/></a>
        </div>
      </div>
    </div>
  </div>

  <div class="grid">
  <?php if ($page['utility_bar']): ?>
    <div class="utility-bar">
      <?php print render($page['utility_bar']); ?>
    </div><!-- end utility bar -->
  <?php endif; ?>


  
</div>
</header>

<?php if ($page['above_content']): ?>
  <section class="above-content">
    <?php print render($page['above_content']); ?>
  </section>
<?php endif; // end Above Content ?>

<div class="main-content">
  <?php if ($breadcrumb): ?>
    <?php print $breadcrumb; ?>
  <?php endif; ?>

  <?php if ($page['highlighted']): ?>
    <?php print render($page['highlighted']); ?>
  <?php endif; ?>

  <?php if ($messages): ?>
  <div class="messages-wrapper">
    <div class="messages-content">
      <?php print $messages; ?>
    </div>
    <!--<a href="#" id="messages-toggle"><?php print t('Close');?></a>-->
  </div>
  <?php endif; ?>
    <a id="main-content"></a>
    <div class="main" role="main">
      <?php print render($title_prefix); ?>
      <?php if (isset($node) && $node->type == 'portafolio'): ?>
        <?php if ($title): ?><h1 class="title" id="page-title">Caso de éxito <span><?php print $title; ?></span></h1><?php endif; ?>
      <?php else: ?>
      <?php if (isset($node) && $node->type == 'personal'): ?>
        <?php if ($title): ?><h1 class="title" id="page-title">Nuestros <em> Colaboradores</em></h1><?php endif; ?>
      <?php else: ?>
        <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
      <?php endif; ?>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($tabs): ?>
        <?php print render($tabs); ?>

      <?php endif; ?>

      <?php print render($page['help']); ?>

      <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>

      <?php print render($page['content']); ?>

    </div>

  <?php if ($page['sidebar_first']): ?>
    <div id="sidebar-first" class="gu-1-3">
      <?php print render($page['sidebar_first']); ?>
    </div> <!-- /.section, /#sidebar-first -->
  <?php endif; ?>

  <?php if ($page['sidebar_second']): ?>
    <div id="sidebar-second" class="gu-1-3">
      <?php print render($page['sidebar_second']); ?>
    </div> <!-- /.section, /#sidebar-second -->
  <?php endif; ?>
</div>

<?php if ($page['below_content']): ?>
  <section class="below-content">
    <?php print render($page['below_content']); ?>
  </section>
<?php endif; // end Below Content ?>

<footer class="footer" role="contentinfo">
  <div class="container-nivel1">
      <div class="container-nivel2">
        <div class="footer-box">
          <?php print render($page['footer']); ?>
        </div>
      </div>
  </div>
</footer>


<aside class="closure">
  <?php if ($page['closure']): ?>
    <?php print render($page['closure']); ?>
  <?php endif; // end closure ?>
  
</aside>



