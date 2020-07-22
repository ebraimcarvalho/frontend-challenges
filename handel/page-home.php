<?php
  // Template Name: Home
  get_header(); 
?>

<pre>
<?php
$products_slide = wc_get_products([
  'limit' => 6,
  'tag' => ['slide'],
]);

$products_new = wc_get_products([
  'limit' => 9,
  'orderby' => 'date',
  'order' => 'DESC'
]);

$products_sales = wc_get_products([
  'limit' => 9,
  'meta_key' => 'total_sales',
  'orderby' => 'meta_value_num',
  'order' => 'DESC'
]);

$data = [];
$data['slide'] = format_products($products_slide, 'slide');
$data['lancamentos'] = format_products($products_new, 'medium');
$data['vendas'] = format_products($products_sales, 'medium');

$home_id = get_the_ID();
$categoria_esquerda = get_post_meta($home_id, 'categoria_esquerda', true);
$categoria_direita = get_post_meta($home_id, 'categoria_direita', true);

function get_product_category_data($category) {
  $cat = get_term_by('slug', $category, 'product_cat');
  $cat_id = $cat->term_id;
  $img_id = get_term_meta($cat_id, 'thumbnail_id', true);
  return [
    'name' => $cat->name,
    'id' => $cat_id,
    'link' => get_term_link($cat_id, 'product_cat'),
    'img' => wp_get_attachment_image_src($img_id, 'slide')[0]
  ];
}

$data['categorias'][$categoria_esquerda] = get_product_category_data($categoria_esquerda);
$data['categorias'][$categoria_direita] = get_product_category_data($categoria_direita);

print_r($categoria_direita);

?>
</pre>

<?php if(have_posts()) : while(have_posts()) : the_post(); ?>
  
  <ul class="vantagens">
    <li>Frete Grátis</li>
    <li>Troca Fácil</li>
    <li>Até 12x</li>
  </ul>

  <section class="slide-wrapper">
    <ul class="slide">
      <?php foreach($data['slide'] as $item) { ?>
        <li class="slide-item">
          <img src="<?= $item['img']; ?>" alt="<?= $item['name']; ?>">
          <div class="slide-info">
            <span class="slide-preco"><?= $item['price']; ?></span>
            <h2 class="slide-nome"><?= $item['name']; ?></h2>
            <a class="btn-link" href="<?= $item['link']; ?>">Ver Produto</a>
          </div>
        </li>
      <?php } ?>
    </ul>
  </section>

  <section class="container">
    <h1 class="subtitulo">Lançamentos</h1>
    <?php handel_product_list($data['lancamentos']); ?>
  </section>

  <section class="container">
    <h1 class="subtitulo">Mais Vendidos</h1>
    <?php handel_product_list($data['vendas']); ?>
  </section>

<?php endwhile; endif; ?>


<?php get_footer(); ?>