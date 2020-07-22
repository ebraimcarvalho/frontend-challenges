<?php

  function handel_add_woocommerce_support() {
    add_theme_support('woocommerce');
  }
  add_action('after_setup_theme', 'handel_add_woocommerce_support');

  function handel_css() {
    wp_register_style('handel-style', get_template_directory_uri() . '/style.css', [], '1.0.0', false);
    wp_enqueue_style('handel-style');
  }
  add_action('wp_enqueue_scripts', 'handel_css');

  function handel_custom_images() {
    add_image_size('slide', 1000, 800, ['center', 'top']);
    update_option('medium_crop', 1);
  }
  add_action('after_setup_theme', 'handel_custom_images');

  function handel_loop_shop_per_page() {
    return 8;
  }
  add_filter('loop_shop_per_page', 'handel_loop_shop_per_page');

  add_filter('loop_shop_columns', 'loop_columns', 999);
  if (!function_exists('loop_columns')) {
    function loop_columns() {
      return 4; // 4 products per row
    }
  }

  function format_products($products, $img_size = 'medium') {
    $products_final = [];
    foreach($products as $product) {
      $products_final[] = [
        'name' => $product->get_name(),
        'price' => $product->get_price_html(),
        'link' => $product->get_permalink(),
        'img' => wp_get_attachment_image_src($product->get_image_id(), $img_size)[0],
      ];
    }
    return $products_final;
  }

  function remove_some_body_class($classes) {
    $woo_class = array_search('woocommerce', $classes);
    $woopage_class = array_search('woocommerce-page', $classes);
    $search = in_array('product-template-default', $classes) || in_array('archive', $classes);
    if($woo_class && $woopage_class && $search) {
      unset($classes[$woo_class]);
      unset($classes[$woopage_class]);
    }
    return $classes;
  }
  add_filter('body_class', 'remove_some_body_class');

  function handel_product_list($products) {?>
    <ul class="products-list">
      <?php foreach($products as $product) { ?>
        <li class="product-item">
          <a href="<?= $product['link']; ?>">
            <div class="product-info">
              <img src="<?= $product['img']; ?>" alt="<?= $product['name']; ?>">
              <h2><?= $product['name']; ?> - <span><?= $product['price']; ?></span></h2>
            </div>
            <div class="product-overlay">
              <span class="btn-link">Ver Mais</span>
            </div>
          </a>
        </li>
      <?php } ?>
    </ul>
  <?php } //Fecha a função handel

add_filter('woocommerce_enable_order_notes_field', '__return_false');
?>

