<section class="container-fluid py-5">
    <h2 class="text-lg-center">Blog do Dr. Aldo</h2>
    <div class="row mt-5 mx-lg-5">
    <?php 
      // Define our WP Query Parameters
      $the_query = new WP_Query( 'posts_per_page=3' ) ;    
      // Start our WP Query
      while ($the_query -> have_posts()) : $the_query -> the_post(); 
    ?>
      
    <div class="col-lg-4 mt-5">
      <a class="d-flex justify-content-center" href="<?php the_permalink(); ?>">
        <div style="width: 100%; background-image: url('<?php the_field('post_background'); ?>'); height: 320px; max-height: 320px; background-size: cover; width: 100%; background-position: center; background-repeat: no-repeat;)"></div>
        <div style="background: #C4C4C4;" class="pt-4 px-4 mb-4 mx-auto">
          <p style="color: black"><strong><?php the_title(); ?></strong></p>
          <div class="d-flex justify-content-between mt-2 pb-2 mt-lg-4">
            <span style="color: black"><small>Leitura: <?php echo reading_time(); ?></small></span>
            <a class="mb-4 d-none d-lg-flex" href="<?php the_permalink(); ?>">
              <button class="btn shadow-none py-2 px-5 button-blue fs-14" >Ler mais</button>
            </a>
          </div>
        </div>
      </a>
    </div>      
    
     
    
    <?php 
    // Repeat the process and reset once it hits the limit
    endwhile;
    wp_reset_postdata();
    ?>

    </div>
    <div class="text-center">
      <a class="home__link" href="/blog">Ver mais</a>
    </div>

      <!-- <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <div class="col-lg-4 mt-5">
          <a class="d-flex justify-content-center" href="<?php the_permalink(); ?>">
            <div style="width: 100%; background-image: url('<?php the_field('post_background'); ?>'); height: 320px; max-height: 320px; background-size: cover; width: 100%; background-position: center; background-repeat: no-repeat;)"></div>
            <div style="background: #C4C4C4;" class="pt-4 px-4 mb-4 mx-auto">
              <p style="color: black"><strong><?php the_title(); ?></strong></p>
              <div class="d-flex justify-content-between mt-2 pb-2 mt-lg-4">
                <span style="color: black"><small>Leitura: <?php echo reading_time(); ?></small></span>
                <a class="mb-4 d-none d-lg-flex" href="<?php the_permalink(); ?>">
                  <button class="btn shadow-none py-2 px-5 button-blue fs-14" >Ler mais</button>
                </a>
              </div>
            </div>
          </a>
        </div>
        <?php endwhile; ?>
      </div>
      <div class="text-center mb-5">
        <?php next_posts_link('< Posts Antigos'); ?>
        <?php previous_posts_link('Posts Recentes >'); ?>
      </div>
        
      <?php else: endif; ?> -->

      <!-- <div class="col-lg-4 text-center">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 190.svg" alt="" class="img-fluid">
        <p class="text-center font-weight-bold pt-4">Veja nossas postagens!</p>
        <a href="/blog">
          <button class="btn shadow-none py-2 px-5 button-blue fs-14 mt-4 mb-5" >Ler Mais</button>
        </a>
      </div>

      <div class="col-lg-4 text-center">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 190.svg" alt="" class="img-fluid">
        <p class="text-center font-weight-bold pt-4">Acesse nosso blog de informações!</p>
        <a href="/blog">
          <button class="btn shadow-none py-2 px-5 button-blue fs-14 mt-4 mb-5" >Ler Mais</button>
        </a>
      </div>

      <div class="col-lg-4 text-center">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 190.svg" alt="" class="img-fluid">
        <p class="text-center font-weight-bold pt-4">Conteúdo atualizado</p>
        <a href="/blog">
          <button class="btn shadow-none py-2 px-5 button-blue fs-14 mt-4 mb-5" >Ler Mais</button>
        </a>
      </div>
    </div>
    <div class="text-center">
      <a class="home__link" href="/blog">Ver mais</a>
    </div> -->
  </section>