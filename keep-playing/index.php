<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./dist/styles/styles.css">
</head>
<body>
  <header>
    <nav class="nav">
      <div>
        <a href="#">
          <img src="./assets/images/AF_KeepOnPlaying 1.png" alt="Keep On Playing Logo">
        </a>
      </div>

      <div class="nav__icons">
        <div class="email-icon">
          <a href="javascript:document.getElementById('name').focus()">
            <img src="./assets/icons/email.png" alt="Email Keep on Playing">
          </a>
        </div>

        <div class="whats-icon">
          <a href="">
            <img src="./assets/icons/whatsapp.png" alt="Whatsapp Keep on Playing">
          </a>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="bg-hero">
      <div class="left">
        <div class="wrapper-content">
          <img src="./assets/icons/video 1.png" alt="Escola Virtual">
          <p>Sua Escola Virtual</p>
          <h1>Crie sua Escola Online de Música</h1>
          <button class="button__large">Saiba Mais</button>
          <button class="button__mobile"><img src="./assets/icons/whatsapp.png" alt=""> Fale Conosco</button>
        </div>
      </div>
      <div class="right-form">
        <div class="form__wrap">
          <div class="form__title">
            <img src="./assets/images/adriano-foto.jpg" alt="Fale com Adriano da Keep On Playing">
            <h3>Peça Mais Informações Ao Adriano</h3>
          </div>
          <form method="post" action="enviar-email.php" >
            <input type="text" id="name" name="name" placeholder="Nome*">
            <input type="text" id="endname" name="endname" placeholder="Sobrenome*">
            <input type="text" id="phone" name="phone" placeholder="(DD) 99999-9999*">
            <input type="email" id="email" name="email" placeholder="E-mail*">
            <button type="submit" id="btn-form">Enviar</button>
            <span id="span-check" class="d-none">Erro ao enviar! Tente novamente!</span>
            <span id="resultado"></span>
          </form>
        </div>
      </div>
    </div>
    <div class="wrapper-content">
      <p class="main__text">A nossa plataforma <strong>Keep On Playing Escolas</strong> foi desenvolvida para trazer a dinâmica da sua escola de música para o ambiente virtual, preservando a sua identidade visual e a experiência dos seus alunos com a sua marca.</p>
    </div>
  </main>

  <section class="create">
    <div class="wrapper-content">
      <h2>É Simples, Fácil E Rápido Criar Sua Escola Virtual De Música Com A Keep On Playing</h2>
      <p>A nossa ferramenta possibilita criar um ambiente como se alunos e professores estivessem presencial- mente na sala de aula.</p>
      <p>O espaço virtual do aluno é acessado no próprio website da sua escola, através do ícone “escola online de música" no menu da página.</p>
      <p>A ferramenta é customizada com a sua logomarca e com as cores predominantes da sua identidade visual, a fim de manter ou criar a experiência da sua escola entre alunos e professores de música no ambiente digital.</p>
      <div class="create__images">
        <img src="./assets/images/create-1.jpg" alt="">
        <img src="./assets/images/create-2.jpg" alt="">
        <img src="./assets/images/create-3.jpg" alt="">
      </div>
    </div>
  </section>

  <section class="beneficios">
    <div class="wrapper-content">
      <div class="beneficio1">
        <h3>Benefícios Para A Sua Escola</h3>
        <ul>
          <li>Mantenha o vínculo institucional com o seu aluno;</li>
          <li>Tenha uma ferramenta simples, fácil e customizada para as suas necessidades;</li>
          <li>Expanda seus cursos em qualquer região do país ou até mesmo em outros países;</li>
          <li>Aumente seu quadro de professores. Busque talentos em todo o mundo.</li>
        </ul>
      </div>

      <div class="beneficio2">
        <h3>Benefícios Para Os Seus Alunos</h3>
        <ul>
          <li>Aulas online de forma integral ou parcial;</li>
          <li>Acesso a um ambiente virtual com todas as ferramentas para um melhor rendimento escolar;</li>
          <li>Acesso a diversos conteúdos didáticos complementares.</li>
        </ul>
      </div>

      <div class="beneficio3">
        <h3>Benefícios Para Os Seus Professores</h3>
        <ul>
          <li>Acesso a uma biblioteca de partituras, todas customizadas com a marca da escola, divididas por curso e módulo; </li>
          <li>Acesso a diversos treinamentos, capacitações e ao material didático do curso; </li>
          <li>Possibilidade de dar aulas de onde estiver.</li>
        </ul>
      </div>
    </div>

  </section>

  <section class="bg-down">
    <div class="left">
      <div class="wrapper-content">
        <h3>Sua Escola Digital De Música Simples, Fácil e Rápida</h3>
        <p>Você não precisa saber como criar plataformas de Educação À Distância. Fale com a gente e fazemos isso para você.</p>
      </div>
    </div>
  </section>

  <section class="form-mobile">
    <div class="form__wrap">
      <div class="form__title">
        <img src="./assets/images/adriano-foto.jpg" alt="Fale com Adriano da Keep On Playing">
        <h3>Peça Mais Informações Ao Adriano</h3>
      </div>
      <form method="post" action="enviar-email.php" >
        <input type="text" id="name-mobile" name="name" placeholder="Nome*">
        <input type="text" id="endname-mobile" name="endname" placeholder="Sobrenome*">
        <input type="text" id="phone-mobile" name="phone" placeholder="(DD) 99999-9999*">
        <input type="email" id="email-mobile" name="email" placeholder="E-mail*">
        <button type="submit" id="btn-form-mobile">Enviar</button>
        <span id="span-check-mobile" class="d-none">Erro ao enviar! Tente novamente!</span>
      </form>
    </div>
  </section>

  <footer>
    <div class="wrapper-content">
      <img src="./assets/images/logo-white.png" alt="">
      <p class="footer__phone">(11) 98262-1250</p>
      <p>info@keeponplaying.com</p>
      <div class="sociais">
        <div>
          <a href="#">
            <img src="./assets/icons/instagram.png" alt="">
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./assets/icons/facebook.png" alt="">
          </a>
        </div>
      </div>
      <p><small>Av. Brigadeiro Luís Antônio, 388, sala 92 – Bela Vista, São Paulo/SP© 2020 <br>
        KEEP ON PLAYING, todos os direitos reservados</small></p>
      <p class="footer__creater">Criado por always.on</p>
    </div>

  </footer>

  <!-- <script src="./dist/main.js"></script> -->
  <script>
    <?php
      if(isset($_GET['status'])):
        if($_GET['status'] == 'sucesso'):
          echo "<script>alert('ok')</script>";
        else:
          echo "<script>
            const span = document.getElementById('span-check');
            span.classList.remove('d-none')
          </script>";
        endif;
      endif;
    ?>
  </script>
</body>
</html>