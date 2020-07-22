<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php bloginfo('name') ?><?php wp_title('|'); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php
$cart_count = WC()->cart->get_cart_contents_count();
$img_url = get_stylesheet_directory_uri() . '/img';
?>

<header class="header container">
  <a href="/">
    <img src="<?= $img_url ?>/handel.svg" alt="Handel Logo">
  </a>
  <div class="busca">
    <form action="<?php bloginfo('url') ?>/loja/" method="get">
      <input type="text" name="s" id="s" placeholder="Buscar" value="<?php the_search_query(); ?>">
      <input type="text" name="post_type" value="product" class="hidden">
      <input type="submit" id="searchButton" value="Buscar">
    </form>
  </div>

  <nav class="conta">
    <a class="minha-conta" href="/minha-conta">Minha Conta</a>
    <a class="carrinho" href="/carrinho">Carrinho
      <?php if($cart_count) { ?>
        <span class="carrinho-count"><?php echo $cart_count ?></span>
      <?php } ?>
    </a>
  </nav>
</header>

<?php
wp_nav_menu([
  'menu' => 'categoria',
  'container' => 'nav',
  'container_class' => 'menu-categorias'
]);

?>