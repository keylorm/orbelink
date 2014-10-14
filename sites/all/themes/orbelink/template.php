<?php
/**
 * @file
 * HTML template functions.
 */

/**
 * Implements hook_preprocess_html().
 * Meta tags https://drupal.org/node/1468582#comment-5698732
 */

function taxonomy_node_get_terms($node, $key = 'tid') {
    if(arg(0)=='node' && is_numeric(arg(1))) {
        static $terms;
        if (!isset($terms[$node->vid][$key])) {
            $query = db_select('taxonomy_index', 'r');
            $t_alias = $query->join('taxonomy_term_data', 't', 'r.tid = t.tid');
            $v_alias = $query->join('taxonomy_vocabulary', 'v', 't.vid = v.vid');
            $query->fields( $t_alias );
            $query->condition("r.nid", $node->nid);
            $query->condition("v.vid",'1','<>');
            $result = $query->execute();
            $terms[$node->vid][$key] = array();
            foreach ($result as $term) {
                $terms[$node->vid][$key][$term->$key] = $term;
            }
        }
        return $terms[$node->vid][$key];
    }
}


function replace_specials_characters($s) {
    //$s = mb_convert_encoding($s, 'UTF-8','');
    $s = preg_replace("/á|à|â|ã|ª/","a",$s);
    $s = preg_replace("/Á|À|Â|Ã/","A",$s);
    $s = preg_replace("/é|è|ê/","e",$s);
    $s = preg_replace("/É|È|Ê/","E",$s);
    $s = preg_replace("/í|ì|î/","i",$s);
    $s = preg_replace("/Í|Ì|Î/","I",$s);
    $s = preg_replace("/ó|ò|ô|õ|º/","o",$s);
    $s = preg_replace("/Ó|Ò|Ô|Õ/","O",$s);
    $s = preg_replace("/ú|ù|û/","u",$s);
    $s = preg_replace("/Ú|Ù|Û/","U",$s);
    $s = str_replace(" ","_",$s);
    $s = str_replace("ñ","n",$s);
    $s = str_replace("Ñ","N",$s);

    $s = preg_replace('/[^a-zA-Z0-9_\.-]/', '', $s);
    return $s;
  }


function orbelink_preprocess_html(&$variables) {
  $meta_charset = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'charset' => 'utf-8',
    ),
  );
  drupal_add_html_head($meta_charset, 'meta_charset');

  $meta_x_ua_compatible = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'X-UA-Compatible',
      'content' => 'ie=edge, chrome=1',
    ),
  );
  drupal_add_html_head($meta_x_ua_compatible, 'meta_x_ua_compatible');

  $meta_mobile_optimized = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'MobileOptimized',
      'content' => 'width',
    ),
  );
  drupal_add_html_head($meta_mobile_optimized, 'meta_mobile_optimized');

  $meta_handheld_friendly = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'HandheldFriendly',
      'content' => 'true',
    ),
  );
  drupal_add_html_head($meta_handheld_friendly, 'meta_handheld_friendly');

  $meta_viewport = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      //'content' => 'width=device-width, initial-scale=1, maximum-scale=1',
      'content' => 'width=1024',
    ),
  );
  drupal_add_html_head($meta_viewport, 'meta_viewport');

  $meta_cleartype = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'cleartype',
      'content' => 'on',
    ),
  );
  drupal_add_html_head($meta_cleartype, 'meta_cleartype');

   // Use html5shiv.
  if (theme_get_setting('html5shim')) {
    $element = array(
      'element' => array(
        '#tag' => 'script',
        '#value' => '',
        '#attributes' => array(
          'type' => 'text/javascript',
          'src' => file_create_url(drupal_get_path('theme', 'sonambulo') . '/js/html5shiv-printshiv.js'),
        ),
      ),
    );
    $html5shim = array(
      '#type' => 'markup',
      '#markup' => "<!--[if lt IE 9]>\n" . theme('html_tag', $element) . "<![endif]-->\n",
    );
    drupal_add_html_head($html5shim, 'sonambulo_html5shim');
  }

  // Use Respond.js.
  if (theme_get_setting('respond_js')) {
    drupal_add_js(drupal_get_path('theme', 'sonambulo') . '/js/respond.min.js', array('group' => JS_LIBRARY, 'weight' => -100));
  }

  // Use normalize.css
  if (theme_get_setting('normalize_css')) {
    drupal_add_css(drupal_get_path('theme', 'sonambulo') . '/css/normalize.css', array('group' => CSS_SYSTEM, 'weight' => -100));
  }

    $node = node_load(arg(1));
    $results = taxonomy_node_get_terms($node);
    if(is_array($results)) {
        foreach ($results as $item) {
           $variables['classes_array'][] = "taxonomy-".replace_specials_characters(strtolower(drupal_clean_css_identifier($item->name)));
        }
    }

    if (arg(0) == 'taxonomy' && arg(1) == 'term') {
    $term = taxonomy_term_load(arg(2));
    $variables['classes_array'][] = 'vocabulary-' . strtolower($term->vocabulary_machine_name);
  }
}

/**
 * Implements hook_html_head_alter().
 */
function orbelink_html_head_alter(&$head_elements) {

  // Remove system content type meta tag.
  unset($head_elements['system_meta_content_type']);
}

/**
 * Implements hook_page_alter().
 * https://gist.github.com/jacine/1378246
 */
function orbelink_page_alter(&$page) {
  // Remove all the region wrappers.
  foreach (element_children($page) as $key => $region) {
    if (!empty($page[$region]['#theme_wrappers'])) {
      $page[$region]['#theme_wrappers'] = array_diff($page[$region]['#theme_wrappers'], array('region'));
    }
  }
  // Remove the wrapper from the main content block.
  if (!empty($page['content']['system_main'])) {
    $page['content']['system_main']['#theme_wrappers'] = array_diff($page['content']['system_main']['#theme_wrappers'], array('block'));
  }
}

function orbelink_preprocess_node(&$vars) {
  // Add a striping class.
  $vars['classes_array'][] = 'node-' . $vars['zebra'];
}

function orbelink_preprocess_block(&$vars, $hook) {
  // Add a striping class.
  $vars['classes_array'][] = 'block-' . $vars['zebra'];
}


/**
* theme_menu_link()
*/
function orbelink_menu_link(array $variables) {
//add class for li
   $variables['element']['#attributes']['class'][] = 'menu-' . $variables['element']['#original_link']['mlid'];
//add class for a
   $variables['element']['#localized_options']['attributes']['class'][] = 'menu-' . $variables['element']['#original_link']['mlid'];
//dvm($variables['element']);
  return theme_menu_link($variables);
}

function orbelink_preprocess_page(&$variables) {
  if (isset($variables['node']->type)) {
    // If the content type's machine name is "my_machine_name" the file
    // name will be "page--my-machine-name.tpl.php".
    $variables['theme_hook_suggestions'][] = 'page__' . $variables['node']->type;
  }

  if (arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
    $term = taxonomy_term_load(arg(2));
    $variables['theme_hook_suggestions'][] = 'page__vocabulary__' . $term->vocabulary_machine_name;
  }
  
}



