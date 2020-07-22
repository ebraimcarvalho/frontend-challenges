<?php
// Template Name: Teleatendimento
?>

<?php get_header(); ?>

  <main>
    <div class="container-fluid m-0 p-0">
      <div class="row m-0">
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/notebook.svg'); background-size: cover; height: 461px;" class="col-lg-6 p-0">
          
          <div class="d-flex flex-column justify-content-center h-100">
            <div class="hashtag-type2">
              <div class="d-flex d-lg-none row flex-column align-items-end m-0 socials__small">
                <a class="mb-4" href="https://www.facebook.com/draldotoschi/" target="_blank">
                  <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy).svg" alt="Facebook Aldo Dermato">
                </a>
                <a href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
                  <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 6.svg" alt="Instagram Aldo Dermato">
                </a>
              </div>
              <p class="d-none">#PeleBonitaéPeleBemCuidada</p>
              <div class="d-none d-lg-flex row justify-content-end align-items-center w-100 m-0 socials__large">
                <a href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
                  <img class="img-fluid mr-3" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 6.svg" alt="Instagram Aldo Dermato">
                </a>
                <a href="https://www.facebook.com/draldotoschi/" target="_blank">
                  <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy).svg" alt="Facebook Aldo Dermato">
                </a>
              </div>
            </div>            
          </div>
          
        </div>
        <div style="background-color: #43AFDA; position: relative;" class="col-lg-6 p-0 pb-4">
          <div class="text-white ml-3 pt-5 pl-4 pl-lg-5 pr-lg-5">
            <h1 class="text-white mt-4">Teleatendimento</h1>
            <p class="mt-4 pr-4">Quer tirar dúvidas ou receber um diagnóstico pelo computador, tablet ou celular?  Fale com nossos especialistas de onde você estiver, na comodidade da sua casa ou trabalho, com privacidade e segurança garantidas.</p>
            <div class="mt-5 mb-3">
              <button style="background-color: white; color: #43AFDA;" type="button" class="btn shadow-none px-sm-5 px-lg-4 py-3 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
            </div>
            <div class="whats d-flex justify-content-end">
              <a href="https://wa.me/5511996169978" target="_blank">
                <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 7.svg" alt="Whatsapp Aldo Dermato">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="container text-center cta-fixed d-lg-none">
    <a href="#">
      <button class="btn shadow-none py-3 px-4 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
    </a>
  </div>

  <section class="container-fluid px-0 text-center pt-4 mb-4">
    <h2 class="my-4 mt-5 pr-3">Faça sua Consulta de Onde Você Quiser </h2>
    <p class="fs-14 mb-5 px-2 pr-3">O nosso atendimento online será feito com base em determinação do CFM e deverá ser realizado nessas situações:</p>
    <div class="d-flex mx-0 flex-wrap justify-content-center">
      <div class="tele-card mb-5 px-4 d-flex justify-content-center align-items-center">
        <p>Preferencialmente para casos urgentes em que não se possa aguardar consulta presencial.</p>
      </div>
      <div class="tele-card mb-5 px-4 mx-lg-5 d-flex justify-content-center align-items-center">
        <p>Preferencialmente para pacientes já cadastrados em nossa base de dados que necessitem de atendimento para seguimento de problemas crônicos.</p>
      </div>
      <div class="tele-card mb-5 px-4 d-flex justify-content-center align-items-center">
        <p>Para casos urgentes de pacientes novos que possam ter problemas de ordem oncológica e que não estejam conseguindo acesso a atendimento médico.</p>
      </div>
    </div>
  </section>

  <section class="container-fluid">
    <h2 class="my-5 text-lg-center pb-4 pl-1">Como Funciona?</h2>
    <div class="row pl-1 pl-lg-5 justify-content-center">
      <div class="col-lg-4 mb-5">
        <h3>01. Teletriagem:</h3>
        <p class="mt-4 pr-4">Envie anexos de fotos bem claras e nítidas, assim como resultados de exames de sangue / imagem. <br>
          <br>
          Isso poderá ser feito através do app <strong>DocMed (gratuito)</strong> ou via email para <strong>clinica@aldotoschi.com.br</strong></p>
      </div>
      <div class="col-lg-4 mb-5">
        <h3>02. Avaliação Online:</h3>
        <p class="mt-4 pr-4">Nós avaliaremos seu problema e caso possível daremos continuidade a consulta
          virtual (com hora marcada), ou presencialmente.</p>
      </div>
      <div class="col-lg-4 mb-5">
        <h3>03. Atendimento:</h3>
        <p class="mt-4 pr-4">Se necessário, atendimento presencial igualmente agendado.</p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <a class="mb-4" href="#">
        <button class="mb-5 btn shadow-none py-3 px-5 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Agende um horário</button>
      </a>
    </div>
  </section>

  <section class="container-fluid">
    <div class="row pl-3 pl-lg-4 mb-4">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/unnamed 1.png" alt="DocMed">
    </div>
    <div class="row px-1 mx-0">
      <div class="owl-carousel owl-theme">
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 223.svg');" class="item tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
          <h4 class="align-items-end d-flex tele-card__number">1</h4>
          <p style="height: 160px;" class="text-center">Baixe o APP acessível nas lojas Appstore ou Google Play.</p>
        </div>
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 224.svg');" class="item tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
          <h4 class="align-items-end d-flex">2</h4>
          <p style="height: 160px;" class="text-center">Faça seu cadastro mais completamente possível.</p>
        </div>
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 223.svg');" class="item tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
          <h4 class="align-items-end d-flex">3</h4>
          <p style="height: 160px;" class="text-center">Entre em meu perfil e complete os campos de Meu Histórico Médico e Meus Antecedentes
            Familiares.</p>
        </div>
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 224.svg');" class="item tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
          <h4 class="align-items-end d-flex">4</h4>
          <p style="height: 160px;" class="text-center">Vá na página de contatos, clique em “+” e na busca digite o número do CRM do Dr Aldo Toschi, 55967, e pronto você já entrou em conato conosco.</p>
        </div>
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 223.svg');" class="item tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
          <h4 class="align-items-end d-flex">5</h4>
          <p style="height: 160px;" class="text-center">Nós te adicionaremos como usuário(a) e nosso(a) paciente.</p>
        </div>
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 224.svg');" class="item tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
          <h4 class="align-items-end d-flex">6</h4>
          <p style="height: 160px;" class="text-center">Enquanto isso vá em Linha do tempo e clique “+”. Aparecerá uma tela com a escolha de "Evento".</p>
        </div>
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 223.svg');" class="item tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
          <h4 class="align-items-end d-flex">7</h4>
          <p style="height: 160px;" class="text-center">Selecione o "Evento Consulta". Preencha com a data preferida, crie um nome e inclua nos comentários o seu problema principal e há quanto tempo apresenta os sintomas.</p>
        </div>
        <div class="item">
          <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 224.svg');" class="tele-card mb-5 px-4 d-flex justify-content-center flex-column align-items-center">
            <h4 class="align-items-end d-flex">8</h4>
            <p style="height: 160px;" class="text-center">Inclua uma nova foto, PDFs de exames, Fotografias de partes de seu corpo, mostrando a região afetada e salvar.</p>
          </div>
          <small><strong>Observação:</strong> Apesar de todos os protocolos de segurança e sigilo sempre é bom evitar a exposição de áreas íntimas</small>
        </div>
      </div>
    </div>
  </section>

  <section class="call__actions container mt-n5 px-0">
    <h2 class="text-lg-center mb-5 pl-3 pl-lg-1">Conheça nossos serviços</h2>
    <div class="row mx-0 text-center">
      <div class="col-lg-6 px-0 px-lg-3">
        <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 175.svg" alt="Pele, Unha e Cabelo Aldo Dermato">
        <h4 class="my-4">Pele, Unhas e Cabelo</h4>
        <a href="/pele">
          <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" >Saiba Mais</button>
        </a>
      </div>
      <div class="col-lg-6 px-0 px-lg-3">
        <div>
          <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Copy of 303 x 315 1.svg" alt="Dermatologia Oncológica Aldo Dermato">
          <h4 class="my-4">Dermatologia Oncológica</h4>
          <a href="/oncologica">
            <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" >Saiba Mais</button>
          </a>
        </div>
        <div>
          <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 189.svg" alt="Procedimentos Estéticos Aldo Dermato">
          <h4 class="my-4">Procedimentos Estéticos</h4>
          <a href="/esteticos">
            <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" >Saiba Mais</button>
          </a>
        </div>
      </div>
    </div>
  </section>

  <article class="container px-0 mt-3 mt-lg-5">
    <div class="row mx-0 justify-content-center">
      <div class="col-lg-5 px-0">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Copy of Copy of 303 x 315 1.svg" alt="Saúde Aldo Dermato" class="img-fluid w-100">
      </div>
      <div class="col-lg-7 pt-5 pl-lg-5">
        <h2>Pele Bonita é Pele Sadia</h2>
        <p class="fs-14 mt-4">Há mais de 30 anos cuidamos de todos os tipos de pele e oferecemos para cada paciente meios para obtenção de saúde, bem estar, jovialidade e beleza. Para nós, pele bonita é pele sadia. Afinal, pele é tudo de bom. Ela nos conecta com o mundo e é através dela que podemos expressar as emoções mais verdadeiras por meio de cada toque e abraço apertado.</p>
        <div class="w-100 text-right mt-5">
          <a href="/pele">
            <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" >Saiba Mais</button>
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