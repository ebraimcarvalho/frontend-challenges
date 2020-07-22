<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="<?php bloginfo('name') ?> <?php wp_title('-'); ?> | Clínica de Dermatologia Dr. Aldo Toschi" />
  <!-- <link rel="icon" href="./assets/icons/unnamed 1.png" type="image/x-icon" sizes="16x16"> -->
  <script src=’https://www.google.com/recaptcha/api.js’></script>
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/dist/styles/owl.carousel.min.css">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/dist/styles/owl.theme.default.min.css">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/node_modules/bootstrap/dist/css/bootstrap.css">

  <title><?php bloginfo('name') ?> <?php wp_title('-'); ?> </title>

  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/dist/styles/styles.css">

  <?php wp_head(); ?>
</head>

<body>
  <header class="sticky-top p-0 m-0">
    <div class="d-flex justify-content-center justify-content-lg-between bg-white border-bottom">
      <div class="d-flex align-items-center py-2 pl-0 pl-lg-3 color-blue fs-14">
        <p class="m-0 text-center text-lg-left"><img class="mr-1" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/cil_location-pin.svg" alt="Icone mapa"> R. Bento de Andrade, 428 - Jardim Paulista, São Paulo</p>
        <p class="d-none d-lg-flex m-0 ml-3 pl-3 border-left"><img class="mr-2" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector.svg" alt="Icone Telefone">(11) 3887-9530 <span class="pl-2">(11) 99616-9978</span></p>
      </div>
      <div class="d-none d-lg-block pr-3 py-2">
        <div class="d-flex flex-row justify-content-between">
          <a class="nav-item nav-link color-text fs-14" href="/sobre">Sobre nós</a>
          <a class="nav-item nav-link mx-3 color-text fs-14" href="/blog">Blog</a>
          <button type="button" class="btn shadow-none px-4 button-blue" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand pl-lg-4" href="/"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo ALDO toal  para inserção 1.svg" alt="Aldo Dermatologia" /></a>
      <button class="navbar-toggler shadow-none btn-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav w-100 d-flex justify-content-between fs-14 ml-lg-3 px-1 px-lg-4">
          <a class="nav-item nav-link color-text fs-14" href="/pele">Pele, Unhas e Cabelo<span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link color-text fs-14" href="/oncologica">Dermatologia Oncológica</a>
          <a class="nav-item nav-link color-text fs-14" href="/esteticos">Procedimentos Estéticos</a>
          <a class="nav-item nav-link color-text fs-14" href="/teleatendimento">Teleatendimento</a>
          <a class="nav-item nav-link d-lg-none color-text fs-14" href="/sobre">Sobre Nós</a>
          <a class="nav-item nav-link d-lg-none color-text fs-14" href="/blog">Blog</a>
          <div class="d-lg-none">
            <button type="button" class="btn shadow-none py-2 px-3 my-2 button-blue  btn-collapse fs-14" data-toggle="modal" data-target="#exampleModal">Agende uma Consulta</button>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Modal -->
  <div class="modal fade pr-0" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex justify-content-between align-items-center w-100">
            <h4 class="modal-title" id="exampleModalLabel">Agende a sua Consulta</h4>
            <div class="d-none d-lg-flex flex-column fone-mail">
              <p class="fs-14 m-0 font-weight-bold">(11) 99616-9978 | (11) 3887-9530</p>
              <p class="fs-14 m-0 font-weight-bold">Entre em contato</p>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-end x-close">
            <button type="button" class="close close__modal" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          
          <form action="<?php echo get_template_directory_uri(); ?>/enviar.php" method="post" name="form" class="formphpp">
            <div class="form-row">
              <div class="col-lg-6 mb-3">
                <label class="d-block" for="validationDefault01">Tipo de Atendimento</label>
                <div class="">
                  <ul class="donate-now m-0 d-flex justify-content-between justify-content-lg-start">
                    <li class="w-50">
                        <input type="radio" id="presencial" name="presencial" />
                        <label class="d-flex justify-content-center align-items-center m-0" for="presencial">Consulta Presencial</label>
                    </li>
                    <li class="w-50">
                        <input type="radio" id="teleatendimento" name="teleatendimento" />
                        <label class="d-flex justify-content-center align-items-center m-0" for="teleatendimento">Teleatendimento</label>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="col-lg-6 mb-lg-3 d-flex">
                <div class="col-lg-4 p-0 pr-2">
                  <label class="d-block" for="validationDefault01">Dia:</label>
                  <div class="d-flex justify-content-center justify-content-lg-start">
                    <div class="form-group">
                      <select class="form-control form-select shadow-none" id="select-day" name="select-day">
                        <option value="" selected disabled></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="14">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 p-0 pr-2">
                  <label class="d-block" for="validationDefault01">Mês:</label>
                  <div class="d-flex justify-content-center justify-content-lg-start">
                    <div class="form-group">
                      <select class="form-control form-select shadow-none" id="select-month" name="select-month">
                        <option value="" selected disabled></option>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 p-0 pr-2">
                  <label class="d-block" for="validationDefault01">Horário:</label>
                  <div class="d-flex justify-content-center justify-content-lg-start">
                    <div class="form-group">
                      <select class="form-control form-select shadow-none" id="select-hour" name="select-hour">
                        <option value="" selected disabled></option>
                        <option value="8">08h</option>
                        <option value="9">09h</option>
                        <option value="10">10h</option>
                        <option value="11">11h</option>
                        <option value="12">12h</option>
                        <option value="13">13h</option>
                        <option value="14">14h</option>
                        <option value="15">15h</option>
                        <option value="16">16h</option>
                        <option value="17">17h</option>
                        <option value="18">18h</option>
                        <option value="19">19h</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div class="form-row">
              <div class="col-lg-6 mb-3">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control form-input" id="nome" name="nome" required>
              </div>
              <div class="col-lg-6 mb-3">
                <label for="sobrenome">Sobrenome:</label>
                <input type="text" class="form-control form-input" id="sobrenome" name="sobrenome" required>
              </div>
            </div>
            <div class="form-row">
              <div class="col-lg-6 mb-3">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control form-input" id="email" name="email" required>
              </div>
              <div class="col-lg-6 mb-3">
                <label for="telefone">Telefone:</label>
                <input type="phone" class="form-control form-input" id="telefone" name="telefone" required>
              </div>
            </div>
            <div class="form-row">
              <div class="col-12 mb-3">
                <label for="mensagem">Comentário:</label>
                <textarea class="form-control form-textarea" id="mensagem" name="mensagem" required></textarea>
              </div>
            </div>
            <div class=”g-recaptcha” data-sitekey=”6LeLsqsZAAAAANW8LU78xF3i4w2c40lHY6rWWn2H“></div>
            <div class="w-100 text-center">
              <button class="mb-2 btn shadow-none py-3 px-5 button-blue fs-14" type="submit">Enviar</button>
            </div>
          </form>

          <span class="d-block d-lg-none text-center font-weight-bold my-4">Ou entre em contato</span>
          <div class="d-flex d-lg-none justify-content-center align-items-center">
            <a href="https://wa.me/5511996169978" target="_blank">
              <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 7.svg" alt="Whatsapp Aldo Dermato" class="img-fluid mr-5">
            </a>
            <p class="m-0 font-weight-bold color-text">(11) 3887-9530</p>
          </div>
        </div>
        <div style="background-color: #43AFDA;" class="modal-footer mt-5 d-lg-none">
          <div class="d-flex w-100 h-100 flex-column align-items-center justify-content-center py-4 mx-0">
            <p class="text-center font-weight-bold mb-4">Siga-nos</p>
            <div class="redes__sociais text-center">
              <div>
                <a href="https://www.instagram.com/aldotoschidermatologista/" target="_blank">
                  <img class="img-fluid mr-2" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Group 6.svg" alt="Instagram Aldo Dermato">
                </a>
                <a href="https://www.facebook.com/draldotoschi/" target="_blank">          
                  <img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/icons/Vector(copy).svg" alt="Facebook Aldo Dermato">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Fim Modal -->