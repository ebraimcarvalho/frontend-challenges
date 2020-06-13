<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GBTEL - Internet</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./src/styles/index.css">
</head>
<body>

  <div class="container__hero">
    <header id="header" class="">
      <nav class="nav">
        <div class="menu">
          <h1 class="logo">
            <a href="index.php">
              <img id="logo-branca" class="logo__img icon-show" src="./src/assets/images/logo_branca.png" alt="Logo GBTEL">
              <img id="logo-laranja" class="logo__img logo2 icon-hidden" src="./src/assets/images/logo_color.png" alt="Logo GBTEL">
            </a>
          </h1>
          <ul id="list__itens" class="menu__itens">
            <li class="list__item"><a class="" href="index.php#company">Empresa</a></li>
            <li class="list__item"><a class="" href="index.php#services">Serviços</a></li>
            <li class="list__item"><a class="" href="index.php#contact">Contato</a></li>
          </ul>
        </div>
        <div class="social">
          <div class="icon-social">
            <a href="index.php#contact">
              <img id="face-branco" class="social-icon-item social-1 icon-show" src="./src/assets/icons/icon_face.png" alt="GBTEL facebook">
              <img id="face-laranja" class="social-icon-item social-1 icon-hidden" src="./src/assets/icons/icon_face_laranja.png" alt="GBTEL facebook">
            </a>
          </div>
          <div class="icon-social">
            <a href="index.php#contact">
              <img id="insta-branco" class="social-icon-item icon-show" src="./src/assets/icons/icon_insta.png" alt="GBTEL Instagram">
              <img id="insta-laranja" class="social-icon-item icon-hidden" src="./src/assets/icons/icon_insta_laranja.png" alt="GBTEL Instagram">
            </a>
          </div>
        </div>
      </nav>
    </header>

    <div class="hero">
      <div class="hero__text">
        <h2 class="hero__title">SOLUÇÕES CORPORATIVAS.</h2>
        <p class="hero__description">Temos soluções empresariais, que cabem no seu orçamento. Fale com um consultor agora mesmo.</p>
        <button class="hero__button"><a href="https://wa.me/558140404080" target="_blank">Falar com um consultor</a></button>
      </div>
      <div class="hero__image">
        <img class="img" src="./src/assets/images/HOMEM.png" alt="">
      </div>
    </div>
  </div>
  <main>
    <div id="company" class="company">
      <div class="company__text container">
        <h3 class="company__title">A EMPRESA</h3>
        <p class="company__description">A Global Telemática, é uma empresa com mais de 10 anos de história, trabalhamos focados em serviços de telecomunicações e informática, criando conectividade entre pessoas e negócios.</p>
      </div>
      <div class="company__grid container">
        <div class="company__grid-item">
          <div class="grid-item__icon adjust-icon">
            <img src="./src/assets/icons/pencil-writing-on-a-paper-sheet_icon-icons.com_70422.svg" alt="GBTEL Missão">
          </div>
          <div class="grid-item__text">
            <h3 class="grid-item__title">MISSÃO</h3>
            <p class="grid-item__description">Gerar oportunidades e entregar um serviço de conectividade com referência na experiência ao usuário.</p>
          </div>
        </div>

        <div class="company__grid-item">
          <div class="grid-item__icon adjust-icon">
            <img src="./src/assets/icons/XMLID_174_.svg" alt="GBTEL Visão">
          </div>
          <div class="grid-item__text">
            <h3 class="grid-item__title">VISÃO</h3>
            <p class="grid-item__description">Com estratégia e inteligência, ser uma empresa líder em tecnologia, conectando 30 mil usuários diretos e indiretos até 2025. Garantindo lucro constante e sustentabilidade do negócio.</p>
          </div>
        </div>

        <div class="company__grid-item">
          <div class="grid-item__icon">
            <img src="./src/assets/icons/star_icon-icons.com_73394.svg" alt="GBTEL Missão">
          </div>
          <div class="grid-item__text">
            <h3 class="grid-item__title">VALORES</h3>
            <p class="grid-item__description">Ética, Coragem, Paixão e Respeito.</p>
          </div>
        </div>
      </div>

      <div class="company__10years">
        <div class="container__img">
          <img class="company__10years-img" src="./src/assets/images/10.png" alt="GBTEL 10 anos">
        </div>
      </div>
    </div>

    <div id="services" class="services">
      <div class="services__text container">
        <h3 class="services__title">NOSSOS PRODUTOS</h3>
      </div>

      <div class="services__grid container">
        <div class="services__grid-item">
          <div class="services__top">
            <div class="services-item__icon">
              <img src="./src/assets/icons/25694.svg" alt="GBTEL Internet Residencial">
            </div>
            <div class="services-item__text">
              <h3 class="services-item__title">INTERNET RESIDENCIAL</h3>
              <p class="services-item__description">Temos planos de internet residencial em fibra óptica com velocidades de 50mb a 400mb.</p>
            </div>
          </div>
          <div class="services__bottom">
            <button class="services__button"><a href="https://wa.me/558140404080" target="_blank">Saiba mais...</a></button>
          </div>
        </div>

        <div class="services__grid-item">
          <div class="services__top">
            <div class="services-item__icon">
              <img src="./src/assets/icons/icon_tv.png" alt="GBTEL TV por assinatura">
            </div>
            <div class="services-item__text">
              <h3 class="services-item__title">TV POR ASSINATURA</h3>
              <p class="services-item__description">Entretenimento na palma da sua mão ou na sua Sala com o melhor da programação de TV do Brasil e do Mundo. PREVISÃO 2020.2</p>
            </div>
          </div>
          <div class="services__b0ttom">
            <button class="services__button"><a href="https://wa.me/558140404080" target="_blank">Saiba mais...</a></button>
          </div>
        </div>

        <div class="services__grid-item">
          <div class="services__top">
            <div class="services-item__icon">
              <img src="./src/assets/icons/icon_dedicado.png" alt="GBTEL Link Dedicado">
            </div>
            <div class="services-item__text">
              <h3 class="services-item__title">LINK DEDICADO</h3>
              <p class="services-item__description">A conexão que sua empresa precisa, de internet estável e alta velocidade com o suporte 24/7, conseguimos desenvolver a solução ideal para seu negócio não parar.</p>
            </div>
          </div>
          <div class="services__bottom">
            <button class="services__button"><a href="https://wa.me/558140404080" target="_blank">Saiba mais...</a></button>
          </div>
        </div>

        <div class="services__grid-item">
          <div class="services__top">
            <div class="services-item__icon">
              <img src="./src/assets/icons/icon_eventos.png" alt="GBTEL Internet para Eventos">
            </div>
            <div class="services-item__text">
              <h3 class="services-item__title">INTERNET PARA EVENTOS</h3>
              <p class="services-item__description">Seu Evento precisa de uma solução de conectividade com internet, uma rede wi-fi, uma intranet para a produção, podemos juntos desenvolver esse projeto.</p>
            </div>
          </div>
          <div class="services__bottom">
            <button class="services__button"><a href="https://wa.me/558140404080" target="_blank">Saiba mais...</a></button>
          </div>
        </div>

        <div class="services__grid-item">
          <div class="services__top">
            <div class="services-item__icon adjust-condominio">
              <img src="./src/assets/icons/icon_condom.png" alt="GBTEL Conexão Condominal">
            </div>
            <div class="services-item__text">
              <h3 class="services-item__title">CONEXÃO CONDOMINIAL</h3>
              <p class="description-condominio">Para condomínios temos soluções de conectividade a internet individual ou compartilhada, com projetos em fibra para toda a estrutura, soluções de conectividades para áreas comuns com possíveis integrações o sistema fechado de segurança.</p>
            </div>
          </div>
          <div class="services__bottom">
            <button class="services__button"><a href="https://wa.me/558140404080" target="_blank">Saiba mais...</a></button>
          </div>
        </div>

        <div class="services__grid-item">
          <div class="services__top">
            <div class="services-item__icon">
              <img src="./src/assets/icons/icon_fibra.png" alt="GBTEL Rede Ótica">
            </div>
            <div class="services-item__text">
              <h3 class="services-item__title">REDE ÓPTICA</h3>
              <p class="services-item__description">Construímos toda estrutura de redes ópticas para uso interna e/ou externa, com lançamento de cabos e implementação de equipamentos de transmissão.</p>
            </div>
          </div>
          <div class="services__bottom">
            <button class="services__button"><a href="https://wa.me/558140404080" target="_blank">Saiba mais...</a></button>
          </div>
        </div>

       
      </div>
    </div>

    <div id="contact" class="contact">
      <div class="contact__grid container">
        <div class="contact__logo contact__grid-item">
          <img src="./src/assets/images/logo-gray.png" alt="GBTEL Contato">
        </div>
        <div class="contact__form contact__grid-item">
          <h3 class="form__title">Fale Conosco</h3>
          <form action="./mail_send.php" method="POST">
            <input id="name" name="name" type="text" placeholder="Nome/Empresa" required>
            <input id="cpf" name="cpf" type="text" placeholder="CPF/CNPJ">
            <input id="phone" name="phone" type="text" placeholder="Telefone" required>
            <input id="email" name="email" type="text" placeholder="Email" required>
            <button class="form__button" type="submit">Enviar</button>
            <p class="form__msg">Falha no envio! Nos manda um <a href="https://wa.me/558140404080" target="_blank">whatsapp! </a></p>
            
          </form>
        </div>
        <div class="contact__info contact__grid-item">
          <h3 class="contact__info-title">Contato</h3>
          <p class="contact__info-phone"><a href="https://wa.me/558140404080" target="_blank">(81) 4040-4080 <img class="contact__info-icon" src="./src/assets/icons/icone_whats.png" alt="GBTEL whatsapp"></a></p>
          <p class="contact__info-email">contato@gbtel.com.br</p>
          <p class="contact__info-description">Atendimento de 08hs as 17hs fale conosco agora mesmo.</p>
          <button class="contact__info-button">Falar com um consultor</button>
        </div>
      </div>

    </div>
  </main>
  <footer>
    <div class="footer container">
      <p>© 2018 GBTEL Desenvolvido por</p>
      <img class="footer__logo-rd" src="./src/assets/images/logo_rd.png" alt="Logo RD">
    </div>
  </footer>
  
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="./src/index.js"></script>
</body>
</html>