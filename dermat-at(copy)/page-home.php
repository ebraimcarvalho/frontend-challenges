<?php
// Template Name: Home
?>

<?php get_header(); ?>
  <main>
    <div class="container-fluid m-0 p-0">
      <div style="position: relative;" class="row m-0 home__main">
        <div class="col-12 p-0 home__img-hero">
          <div class="d-flex d-md-none flex-column align-items-end mr-4 mt-4 home__redes-sociais--mobile">
            <a href="https://www.facebook.com/draldotoschi/" target="_blank">
              <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy 1).svg" alt="Facebook Aldo Dermato">
            </a>
            <a class="mt-4" href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
              <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 4.svg" alt="Instagram Aldo Dermato">
            </a>
          </div>
        </div>
        
        <div class="hashtag w-100 d-flex justify-content-between align-items-center">
          <div>
            <div class="home__redes-sociais d-none d-md-flex">
              <a href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
                <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 6.svg" alt="Instagram Aldo Dermato">
              </a>
              <a href="https://www.facebook.com/draldotoschi/" target="_blank">
                <img class="img-fluid ml-2" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy).svg" alt="Facebook Aldo Dermato">
              </a>
            </div>
          </div>
          <div class="d-flex flex-column align-items-end">
            <p class="hashtag__text">#PeleBonitaéPeleSadia</p>
            <div class="home__whats">
              <a href="https://wa.me/5511996169978" target="_blank">
                <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 7.svg" alt="Whatsapp Aldo Dermato">
              </a>
            </div>
          </div>
        </div>        
      </div>
      <div class="container text-center mb-4">
        <h2 class="my-4">Cuidamos da Saúde da sua Pele</h2>
        <p class="fs-14 mb-5">A Clínica de Dermatologia Aldo Toschi é especialista em todos os tipos de pele. Trazemos as mais modernas e avançadas tecnologias em procedimentos estéticos, clínicos e cirúrgicos para um cuidado completo e eficaz para a saúde da sua pele.</p>
        <a href="#">
          <button class="mb-5 btn shadow-none py-3 px-4 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
        </a>
      </div>
    </div>
  </main>

  <div class="container text-center cta-fixed d-lg-none">
    <a href="#">
      <button class="btn shadow-none py-3 px-4 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
    </a>
  </div>

  <section class="call__actions container mt-n5 px-0">
    <h2 class="text-lg-center mb-5 pl-3 pl-lg-1">Conheça nossos serviços</h2>
    <div class="row mx-0 text-center">
      <div class="col-lg-6 px-0 px-lg-3">
        <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 175.svg" alt="Pele, Unha e Cabelo Aldo Dermato">
        <h4 class="my-4">Pele, Unhas e Cabelo</h4>
        <a href="/pele">
          <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Saiba Mais</button>
        </a>
      </div>
      <div class="col-lg-6 px-0 px-lg-3">
        <div>
          <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Copy of 303 x 315 1.svg" alt="Dermatologia Oncológica Aldo Dermato">
          <h4 class="my-4">Dermatologia Oncológica</h4>
          <a href="/oncologica">
            <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Saiba Mais</button>
          </a>
        </div>
        <div>
          <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 189.svg" alt="Procedimentos Estéticos Aldo Dermato">
          <h4 class="my-4">Procedimentos Estéticos</h4>
          <a href="/esteticos">
            <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Saiba Mais</button>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- <div class="container caldera-beleza">
  <?php echo apply_shortcodes("[caldera_form id='CF5efa5333dccd6']"); ?>
  
  </div> -->

  <article class="container px-0 mt-3 mt-lg-5">
    <div class="row mx-0 justify-content-center">
      <div class="col-lg-5 px-0">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Copy of Copy of 303 x 315 1.svg" alt="Saúde Aldo Dermato" class="img-fluid w-100">
      </div>
      <div class="col-lg-7 pt-5 pl-lg-5">
        <h2>Pele Bonita é Pele Sadia</h2>
        <p class="fs-14 mt-4">Há mais de 30 anos cuidamos de todos os tipos de pele e oferecemos para cada paciente meios para obtenção de saúde, bem estar, jovialidade e beleza. Para nós, pele bonita é pele sadia. Afinal, pele é tudo de bom. Ela nos conecta com o mundo e é através dela que podemos expressar as emoções mais verdadeiras por meio de cada toque e abraço apertado.</p>
        <div class="w-100 text-right mt-5">
          <a href="#">
            <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Saiba Mais</button>
          </a>
        </div>
      </div>
    </div>
  </article>

  <article class="container px-0 mt-3 mt-lg-5">
    <div class="row mx-0 justify-content-center">
      <div class="col-lg-7 order-2 order-lg-1 pl-lg-0 pt-5 pr-lg-5">
        <h2>#CompartilheConhecimento</h2>
        <p class="fs-14 mt-4 pr-3">O conhecimento é capaz de transformar a vida das pessoas contribui significativamente para a construção de um mundo melhor. Trata-se de um processamento complexo e subjetivo da informação por um indíviduo. A gente ama saber mais e mais. A nossa busca pelo saber nos move e nos possibilita levar o melhor diagnóstico e tratamento para você. <strong>Siga a gente e nos ajude a compartilhar conhecimento:</strong></p>
        <div class="mt-4 d-flex justify-content-center justify-content-lg-start">
          <a href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
            <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 4.svg" alt="Instagram Aldo Dermato">
          </a>
          <a href="https://www.facebook.com/draldotoschi/" target="_blank">
            <img class="img-fluid ml-3" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy 1).svg" alt="Facebook Aldo Dermato">
          </a>
        </div>
      </div>
      <div class="col-lg-5 px-0 order-1 order-lg-2">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Copy of Copy of 303 x 315 (1) 1.svg" alt="Saúde Aldo Dermato" class="img-fluid w-100">
      </div>
    </div>
  </article>

  <section style="background-color: #f3f3f3;">
    <div class="container-fluid pb-4">
      <h2 class="text-lg-center mt-5 pt-5">Teleatendimento</h2>
      <div class="row justify-content-between mt-5 mx-lg-5">
        <div class="col-lg-5">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 186.svg" alt="" class="img-fluid w-100">
          <p class="fs-14 mt-5"><strong>DocMed</strong> é um aplicativo que oferece a você melhor organização do seu histórico médico, possibilitando o upload de exames, a criação de eventos e de consulta e o diagnóstico do seu médico. Desfrute também de um chat direto com seu médico ou enfermeira para esclarecimento de dúvidas, ou com a recepção para marcar consultas.</p>
          <div class="d-flex justify-content-between align-items-end mt-4 mb-5">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/unnamed 1.png" alt="DocMed" class="img-fluid">
            <a href="#">
              <button class="btn shadow-none py-2 px-5 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Saiba Mais</button>
            </a>
          </div>
        </div>

        <div class="col-lg-5 d-flex flex-column justify-content-between">
          <div>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Copy of Copy of Copy of Copy of 303 x 315 1.svg" alt="" class="img-fluid w-100">
            <p class="fs-14 mt-5"><strong>Quer tirar dúvidas ou receber um diagnóstico pelo computador, tablet ou celular?</strong> Fale com nossos especialistas de onde você estiver, 
              na comodidade da sua casa ou trabalho, com privacidade e segurança garantidas.</p>
          </div>
          <a class="text-right" href="#">
            <button class="btn shadow-none py-2 px-5 button-blue fs-14 mt-4 mb-5" data-toggle="modal" data-target="#exampleModal">Saiba Mais</button>
          </a>
        </div>
      </div>
    </div>
  </section>

  <?php include(TEMPLATEPATH . '/inc/blog-section.php'); ?>

  <section style="background-color: #AEDFE9;" class="newsletter py-5">
    <div>
      <!-- <div class="row mx-0 flex-column align-items-center justify-content-center text-center mt-3">
        <div class="col-lg-3 mb-4 mb">
          <p class="font-weight-bold">Inscreva-se na nossa newsletter</p>
        </div>
        <div class="col-11 col-lg-6">
          <div class="">
            <?php echo apply_shortcodes("[caldera_form id='CF5efa5f9c16bb8']"); ?>
          </div>
        </div>
      </div> -->
      <form action="<?php echo get_template_directory_uri(); ?>/enviar.php" method="post" name="form" class="formphp">
        <div class="row mx-0 align-items-center justify-content-center text-center mt-3">
          <div class="col-lg-3 mb-4 mb-lg-0">
            <p class="font-weight-bold">Inscreva-se na nossa newsletter</p>
          </div>

          <div class="col-11 col-lg-6">
            <div class="input-group">            
              <input id="email" name="email" type="email" class="form-control shadow-none home__input" placeholder="e-mail" aria-label="Recipient's username" aria-describedby="button-addon2" required>
              <div class="input-group-append">
                <button class="btn shadow-none px-5 button-blue fs-14" type="submit" id="button-addon2">Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <p class="text-center font-weight-bold mt-4">Siga-nos</p>
    <div class="redes__sociais text-center mt-4 mb-2">
      <div>
        <a href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
          <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 6.svg" alt="Instagram Aldo Dermato">
        </a>
        <a href="https://www.facebook.com/draldotoschi/" target="_blank">          
          <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy).svg" alt="Facebook Aldo Dermato">
        </a>
      </div>
    </div>
  </section>

<?php get_footer(); ?>