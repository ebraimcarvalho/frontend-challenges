<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<?php 
$produtos = [
  [
    'nome' => 'Camiseta Preta',
    'preco' => 'R$ 49'
  ],
  [
    'nome' => 'Bermuda Cinza',
    'preco' => 'R$ 99'
  ],
  [
    'nome' => 'Casaco Branco',
    'preco' => 'R$ 199'
  ]
];

$test = true;
if($test) {
  echo('Liberar');
} else {
  echo 'Compre o curso!';
}
?>

<?php foreach($produtos as $key => $value) : ?>
  <h1><?= $value['nome'] ?></h1>
  <p><?= 'Valor: ' . $value['preco'] ?></p>
<?php endforeach; ?>

<pre>
<?php
$vitalicio = 'verdade';

if($vitalicio && $vitalicio == 'verdade') {
  echo 'Vitalicio';
} elseif($vitalicio == 'teste') {
  echo 'teste';
} else {
  echo 'Compre acesso!';
}
?>

<?php if($vitalicio) { ?>
  <p>Hi</p>
<?php } ?>

<?php 
$lista = ['café'];
if(!empty($lista)) {
  echo 'Contém Itens na lista';
} else {
  echo 'Lista Vazia!';
}

?>
</pre>

<?php if(!$vitalicio) : ?>
  <p>Tem acesso vitalício!</p>
<?php else : ?>
  <p>Não tem acesso vitalício</p>
<?php endif; ?>

<?php 
$preco = 99;
$mensagem = $preco < 100 ? 'Barato' : 'Caro';
echo $mensagem;
?>

<?php function form_contact() { ?>
  <form>
    <input type="text" name="name" placeholder="Nome">
    <input type="button" value="Enviar">
  </form>
<?php } ?>

<?php form_contact(); ?>

<?php
$args = [
  'echo' => true, 
  'aria_label' => 'My Form'
];

get_search_form($args); 

?>

<?php 
  class Produto {
    public $preco = 14900;
    public function nome() {
      return 'Camisa Preta';
    }
    public function preco_final() {
      return 'R$ ' . $this->preco / 100;
    }
  }

  $camisa = new Produto();
  echo $camisa->nome();
  echo '<br>';
  echo $camisa->preco_final();
  echo '<br>';
  echo $camisa->preco;
  echo '<br>';

  print_r(get_class_vars('Produto'));
  echo '<br>';
  print_r(get_class_methods('Produto'));
?>

<pre>
<?php 
$query = new WP_Query([
  'post_type' => 'product',
]);

print_r($query->posts);
?>
</pre>

<?php foreach($query->posts as $post) { ?>
  <h1><?= $post->post_title ?></h1>
<?php } ?>

<pre>
<?php
$camisa = wc_get_product(10);
// print_r($camisa);

echo($camisa->get_price());
echo'<br>';
echo $camisa->get_name();
echo'<br>';
echo $camisa->get_type();

?>
</pre>

<?php echo(have_posts()); ?>
<?php if(have_posts()) { while (have_posts()) { the_post(); ?>
  Bem vindo à página!
  <h1><?php the_title(); ?></h1>
<?php } } else { ?>
  <p>Página não encontrada!</p>
<?php } ?>


<?php
$wp_query_ = [
  [
    'titulo' => 'Primeiro Post wp query_',
  ],
  [
    'titulo' => 'Segundo Post wp query_',
  ]
  ];

  function have_posts_() {
    global $wp_query_;
    return !empty($wp_query_);
  }

  function the_post_() {
    global $wp_query_;
    array_shift($wp_query_);
  }

  function the_title_() {
    global $wp_query_;
    echo $wp_query_[0]['titulo'];
  }

  if(have_posts_()) : while(have_posts_()) : ?>
    <p><?= the_title_(); ?></p>
  <?php the_post_(); endwhile; endif;
?>

<?= soma(1,2) ?>

<h3><?php do_action('dentro_da_home') ?></h3>

<?php echo apply_filters('titulo_home', 'Esse é um título'); ?>

<pre>
<?php 
$product = wc_get_product(10);
$product->set_sale_price('70');
// $product->save();
echo '<p>' . $product->get_price_html();
echo '<p>' . $product->get_price();

?>
</pre>

<pre>
<?php 
$customer = new WC_Customer(1);
$user = new WP_User(1);
print_r($user->data->user_login);
echo '<br>';
$woo = WC();
print_r($woo->cart->get_cart_contents_count());
echo '<br>';
print_r($woo->cart->get_cart()['d3d9446802a44259755d38e6d163e820']['data']->get_title());
echo '<br>';
print_r($woo);

?>
</pre>
</body>
</html>