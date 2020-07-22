<?php
// Template Name: Pele
?>

<?php get_header(); ?>

  <main>
    <div class="container-fluid m-0 p-0">
      <div class="row m-0">
        <div style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 197.svg'); background-size: cover; height: 461px;" class="col-lg-6 p-0">
          
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
              <p>#PeleBonitaéPeleSadia</p>
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
            <h1 class="text-white mt-4">Pele, Unhas e Cabelo</h1>
            <p class="mt-4 pr-4">A nossa clínica é especialista no cuidado clínico da sua pele, unhas e cabelo. Nossos profissionais estão preparados para lhe oferecer o melhor diagnóstico e o tratamento mais adequado para você.</p>
            <div class="mt-5 mb-3">
              <button style="background-color: white; color: #43AFDA;" type="button" class="btn shadow-none px-sm-5 px-lg-3 py-3 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Consulta Presencial</button>
              <button style="background-color: white; color: #43AFDA;" type="button" class="btn shadow-none ml-3 px-sm-5 px-lg-3 py-3 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Teleatendimento</button>
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

  <section class="container-fluid m-0 p-0 text-lg-center mt-5">
    <div class="w-100 border-bottom">
      <h2 class="mb-5 w-75 mx-auto">Conheça as Nossas Principais Especialidades em Doenças
        que Atingem a Pele, Unhas e Cabelos </h2>
    </div>
    <!-- <div class="container text-center">
      <img src="./assets/icons/search 1.svg" alt="Busca dermatológica">
      <input type="text" class="w-75" placeholder="Buscar assunto...">
    </div> -->

    <div class="container mt-5">
      <div class="row p-0 m-0">
        <div class="col-lg-4">
          <a class="btn w-100 dropdown-toggle color-title color-title" data-toggle="collapse" href="#item1" role="button" aria-expanded="false" aria-controls="item1">Acne</a>
          <div class="collapse multi-collapse" id="item1">
            <div class="card card-body text-left text-left">
              Condição de pele que ocorre quando os folículos capilares são obstruídos por óleo e células mortas da pele.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item2" aria-expanded="false" aria-controls="item2">Dermatite Atópica</button>
          <div class="collapse multi-collapse" id="item2">
            <div class="card card-body text-left">
              É uma doença genética, crônica e que apresenta pele seca, erupções que coçam e crostas.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item3" aria-expanded="false" aria-controls="item3">Dermatite Seborreica</button>
          <div class="collapse multi-collapse" id="item3">
            <div class="card card-body text-left">
              Inflamação na pele que causa principalmente descamação e vermelhidão em algumas áreas da face, como sobrancelhas e cantos do nariz, couro cabeludo e orelhas.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row p-0 m-0">
        <div class="col-lg-4 text-center">
          <a class="btn w-100 dropdown-toggle color-title" data-toggle="collapse" href="#item4" role="button" aria-expanded="false" aria-controls="item4">Eczema</a>
          <div class="collapse multi-collapse" id="item4">
            <div class="card card-body text-left">
              Eczema é um tipo de dermatose que se caracteriza por apresentar vários tipos de lesões.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item5" aria-expanded="false" aria-controls="item5">Escabiose (ou Sarna)</button>
          <div class="collapse multi-collapse" id="item5">
            <div class="card card-body text-left">
              Sarna ou escabiose é uma parasitose humana causada pelo ácaro Sarcoptes scabiei variedade hominis.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item6" aria-expanded="false" aria-controls="item6">Estrias</button>
          <div class="collapse multi-collapse" id="item6">
            <div class="card card-body text-left">
              Estria é uma atrofia tegumentar adquirida que surge quando as fibras elásticas e colágenas (responsáveis pela firmeza da pele) se rompem e formam “cicatrizes”.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row p-0 m-0">
        <div class="col-lg-4 text-center">
          <a class="btn w-100 dropdown-toggle color-title" data-toggle="collapse" href="#item7" role="button" aria-expanded="false" aria-controls="item7">Foliculite</a>
          <div class="collapse multi-collapse" id="item7">
            <div class="card card-body text-left">
              É uma infecção de pele que se inicia nos folículos pilosos.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item8" aria-expanded="false" aria-controls="item8">Fotossensibilidade</button>
          <div class="collapse multi-collapse" id="item8">
            <div class="card card-body text-left">
              É uma reação incomum de sensibilidade extrema da pele quando exposta à luz do Sol ou a fontes luminosas artificiais, induzidas por substâncias químicas.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item9" aria-expanded="false" aria-controls="item9">Furúnculo</button>
          <div class="collapse multi-collapse" id="item9">
            <div class="card card-body text-left">
              O furúnculo é uma forma de foliculite profunda, acometendo não só o folículo piloso em sua profundidade, mas também a glândula sebácea anexa.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row p-0 m-0">
        <div class="col-lg-4 text-center">
          <a class="btn w-100 dropdown-toggle color-title" data-toggle="collapse" href="#item10" role="button" aria-expanded="false" aria-controls="item10">Hanseníase</a>
          <div class="collapse multi-collapse" id="item10">
            <div class="card card-body text-left">
              A hanseníase, antigamente conhecida como lepra, é uma doença infecciosa causada por uma bactéria chamada Mycobacterium leprae ou bacilo de Hansen.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item11" aria-expanded="false" aria-controls="item11">Herpes Simples</button>
          <div class="collapse multi-collapse" id="item11">
            <div class="card card-body text-left">
              Herpes é uma doença causada por dois tipos de vírus: o Vírus Varicela-Zóster (VVZ), que causa catapora (varicela) e também o popularmente conhecido cobreiro (herpes zóster) e os herpesvírus tipo 1 e tipo 2, que causam o chamado herpes simplex.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item12" aria-expanded="false" aria-controls="item12">Herpes Zoster</button>
          <div class="collapse multi-collapse" id="item12">
            <div class="card card-body text-left">
              Herpes é uma doença causada por dois tipos de vírus: o Vírus Varicela-Zóster (VVZ), que causa catapora (varicela) e também o popularmente conhecido cobreiro (herpes zóster) e os herpesvírus tipo 1 e tipo 2, que causam o chamado herpes simplex.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row p-0 m-0">
        <div class="col-lg-4 text-center">
          <a class="btn w-100 dropdown-toggle color-title" data-toggle="collapse" href="#item13" role="button" aria-expanded="false" aria-controls="item13">Linfoma Cutâneo</a>
          <div class="collapse multi-collapse" id="item13">
            <div class="card card-body text-left">
              Trata-se de um tipo de linfoma não-Hodgkin, um câncer que se origina nos linfócitos (tipo de glóbulos brancos).
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item14" aria-expanded="false" aria-controls="item14">Lipoma</button>
          <div class="collapse multi-collapse" id="item14">
            <div class="card card-body text-left">
              São tumores cutâneos benignos compostos por células de gordura maduras.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item15" aria-expanded="false" aria-controls="item15">Lúpus</button>
          <div class="collapse multi-collapse" id="item15">
            <div class="card card-body text-left">
              É uma doença rara autoimune, ou seja, na qual o sistema imunológico reage contra as células da própria pessoa, causando danos que podem ser nos órgãos internos (rim, pulmão, coração, cérebro e articulações) ou somente na pele.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row p-0 m-0">
        <div class="col-lg-4 text-center">
          <a class="btn w-100 dropdown-toggle color-title" data-toggle="collapse" href="#item16" role="button" aria-expanded="false" aria-controls="item16">Melasma</a>
          <div class="collapse multi-collapse" id="item16">
            <div class="card card-body text-left">
              É uma condição que se caracteriza pelo surgimento de manchas escuras na pele, mais comumente na face, mas também pode ser de ocorrência extrafacial, com acometimento dos braços, pescoço e colo.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item17" aria-expanded="false" aria-controls="item17">Micose</button>
          <div class="collapse multi-collapse" id="item17">
            <div class="card card-body text-left">
              Micoses são infecções causadas por fungos que atingem a pele, as unhas e os cabelos.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item18" aria-expanded="false" aria-controls="item18">Psoríase</button>
          <div class="collapse multi-collapse" id="item18">
            <div class="card card-body text-left">
              Doença da pele relativamente comum, crônica e não contagiosa. É cíclica, ou seja, apresenta sintomas que desaparecem e reaparecem periodicamente.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row p-0 m-0">
        <div class="col-lg-4 text-center">
          <a class="btn w-100 dropdown-toggle color-title" data-toggle="collapse" href="#item19" role="button" aria-expanded="false" aria-controls="item19">Queloide</a>
          <div class="collapse multi-collapse" id="item19">
            <div class="card card-body text-left">
              Queloide é um crescimento anormal de tecido cicatricial que se forma no local de um traumatismo, corte ou cirurgia de pele.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item20" aria-expanded="false" aria-controls="item20">Queda de cabelos</button>
          <div class="collapse multi-collapse" id="item20">
            <div class="card card-body text-left">
              Queloide é um crescimento anormal de tecido cicatricial que se forma no local de um traumatismo, corte ou cirurgia de pele.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item21" aria-expanded="false" aria-controls="item21">Rosácea</button>
          <div class="collapse multi-collapse" id="item21">
            <div class="card card-body text-left">
              É uma doença vascular inflamatória crônica, com remissões e exarcebações, também chamada erroneamente de “acne rosácea”, pois a acne é uma doença da glândula sebácea
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row p-0 m-0">
        <div class="col-lg-4 text-center">
          <a class="btn w-100 dropdown-toggle color-title" data-toggle="collapse" href="#item22" role="button" aria-expanded="false" aria-controls="item22">Urticária</a>
          <div class="collapse multi-collapse" id="item22">
            <div class="card card-body text-left">
              Irritação cutânea caracterizada por lesões avermelhadas e levemente inchadas, como vergões, que aparecem na pele e coçam muito.
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item23" aria-expanded="false" aria-controls="item23">Verrugas</button>
          <div class="collapse multi-collapse" id="item23">
            <div class="card card-body text-left">
              Verrugas são proliferações benignas da pele causadas pelo papilomavírus humano (HPV).
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn w-100 dropdown-toggle color-title" type="button" data-toggle="collapse" data-target="#item24" aria-expanded="false" aria-controls="item24">Vitiligo</button>
          <div class="collapse multi-collapse" id="item24">
            <div class="card card-body text-left">
              O vitiligo é uma doença caracterizada pela perda da coloração da pele.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center w-100 my-5">
      <a href="#">
        <button type="button" class="btn shadow-none px-5 px-lg-4 py-3 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
      </a>
    </div>

  </section>

  <section class="container procedimentos p-0">
    <div class="row mx-0">
      <div class="col-lg-5 pl-4 pl-lg-0 order-2 order-lg-1">
        <h2 class="py-4">Procedimentos Cirúrgicos</h2>
        <ul class="pl-3">
          <li>Biópsias;</li>    
          <li>Remoção de pintas, de cistos, lipomas, e tumores;</li>
          <li>Correção de cicatrizes;</li>
          <li>Realização de procedimentos com peelings e Dermoabrasão;</li>
          <li>Transplante de cabelo;</li>
          <li>Cirurgia de unhas;</li>
          <li>Procedimentos a laser;</li>
          <li>Tratamento do câncer da pele com retalhos;</li>
          <li>Tratamento de enxertos para reconstrução;</li>
          <li>Cirurgia oncológica micrográfica ou cirurgia de MOHS.</li>
        </ul>
      </div>
      <div class="col-lg-7 px-0 order-1 order-lg-2">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 213.svg" alt="Procedimentos Cirúrgicos Aldo Dermato" class="img-fluid">
      </div>      
    </div>
    <div class="text-center w-100 my-5">
      <a href="#">
        <button type="button" class="btn shadow-none px-5 px-lg-4 py-3 button-blue fs-14" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
      </a>
    </div>
  </section>

  <section class="call__actions px-0 pt-1 pt-lg-5 container-fluid pb-4">
    <div class="row m-0 p-0 justify-content-between mt-5 mx-lg-5 text-center">
      <div class="col-lg-5 p-0">
        <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Copy of 303 x 315 1.svg" alt="Dermatologia Oncológica Aldo Dermato">
          <h4 class="my-5">Dermatologia Oncológica</h4>
          <a href="/oncologica">
            <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" >Saiba Mais</button>
          </a>
      </div>
      <div class="col-lg-5 p-0">
        <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Rectangle 189.svg" alt="Procedimentos Estéticos Aldo Dermato">
        <h4 class="my-5">Procedimentos Estéticos</h4>
        <a href="esteticos">
          <button class="mb-5 btn shadow-none py-2 px-5 button-blue fs-14" >Saiba Mais</button>
        </a>
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
          <a href="pele">
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