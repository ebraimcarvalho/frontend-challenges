<footer class="container">
    <div class="row mt-5">
      <div class="col-lg-6 order-2 order-lg-1">
        <div class="row">
          <div class="col-7 col-lg-6">
            <a class="d-block color-text fs-14" href="/pele">Pele, Unhas e Cabelo</a>
            <a class="d-block color-text fs-14 my-3" href="/oncologica">Dermatologia Oncológica</a>
            <a class="d-block color-text fs-14" href="/esteticos">Procedimentos Estéticos</a>
            
          </div>
          <div class="col-5 col-lg-6">
            <a class="d-block color-text fs-14" href="/teleatendimento">Teleatendimento</a>
            <a class="d-block color-text fs-14 my-3" href="/sobre">Sobre Nós</a>
            <a class="d-block color-text fs-14" href="/blog">Blog</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 text-center text-lg-right order-1 order-lg-2 mb-4 mb-lg-0">
        <p><strong>(11) 3887-9530 ou (11) 99616-9978 </strong></p>
        <p class="my-3"><strong>Entre em contato</strong></p>
        <div class="redes__sociais d-none d-lg-block">
          <div>
            <a href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
              <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 5.svg" alt="Instagram Aldo Dermato">
            </a>
            <a href="https://www.facebook.com/draldotoschi/" target="_blank">          
              <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy 2).svg" alt="Facebook Aldo Dermato">
            </a>
          </div>
        </div>
      </div>
    </div>

    <p class="footer__info"><strong>CRIADO POR ALWAYS.ON</strong></p>
    <p class="mt-3"><small>INFORMAÇÃO AO USUÁRIO: Este site segue os princípios da Resolução do CFM 1974/2011 e do Código de conduta Web de Medicina e Saúde. As informações contidas neste site tem o propósito de educação e informação e não são necessariamente técnicas praticadas na Clínica de Dermatologia Dr Aldo Toschi, e não substitui opinião médica em atendimento formal. Se você tem qualquer problema de saúde, contacte seu médico ou profissional de saúde. O objetivo do ato médico, como em toda a prática médica, constitui-se da obrigação de meio e não de fim ou resultado. Todas as informações e textos são produções de responsabilidade da Clínica de Dermatologia Dr Aldo Toschi. Fotos e imagens são meramente ilustrativas. Todos os direitos reservados. A publicação e redistribuição de qualquer conteúdo é proibida sem prévio consentimento por escrito. Site de acordo com as regulamentações do CODAME - CFM. Copyright ©2020.</small></p>
  </footer>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/node_modules/jquery/dist/jquery.slim.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/node_modules/popper.js/dist/umd/popper.min.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/dist/owl.carousel.min.js"></script>
  <script>

    <?php if( is_page('sobre') ) : ?>
      // Teleatendimento
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          500:{
            items:1
          },
          1000:{
            items:2
          }
        }
      })

      <?php elseif ( is_page('teleatendimento') ) : ?>
      // Teleatendimento
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          500:{
            items:2
          },
          1000:{
            items:4
          }
        }
      })
    <?php endif; ?>
  </script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/dist/main.js"></script>

  <?php wp_footer(); ?>
  
</body>

</html>