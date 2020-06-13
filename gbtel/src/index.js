$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $("#header").addClass("scroll");
    $("#list__itens").addClass("color-itens")
    $("#logo-branca, #face-branco, #insta-branco").addClass("icon-hidden")
    $("#logo-laranja, #face-laranja, #insta-laranja").removeClass("icon-hidden")

  } else {
    $("#header").removeClass("scroll");
    $("#list__itens").removeClass("color-itens")
    $("#logo-branca, #face-branco, #insta-branco").removeClass("icon-hidden")
    $("#logo-laranja, #face-laranja, #insta-laranja").addClass("icon-hidden")
  }
});

var root = document.documentElement;
root.className += ' js';

// Cria a função boxTop responsável por definir a distância entre o topo to elemento e a página
function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

// Verifica se o documento está pronto
$(document).ready(function() {
	
			// target define os elementos que serão animados. Neste 	caso todos os que possuirem a classe .anime	
	var $target = $('.anime'),
			
			// animationClass define a classe que será injetada no elemento durante o scroll. É nessa classe que	definimos como a animação irá ocorrer
			animationClass = 'anime-init',
			
			// windowHeight pega a altura total da janela do browser
			windowHeight = $(window).height(),
			
			// offset é definido a partir da altura da janela, menos um quarto dessa atlura. Isso vai garantir que o browser não fique com um espaço grande em branco
			offset = windowHeight - (windowHeight / 4);

	// animeScroll é a função responsável por adicionar a classe animationClass ao elemento da página.
	function animeScroll() {
		
		// documentTop vai definir a distância entre o topo da página e o scroll. O valor é atualizado sempre a função animeScroll é ativada.
		var documentTop = $(document).scrollTop();
		
		// target.each serve para adicionarmos a função a cada elemento que tiver a classe do target. Assim garantimos que elementos com distâncias diferentes do topo da página, animem no momento correto
		$target.each(function() {
			
			// o if verifica se a distância entre o topo da página e o scroll é maior que a distância do elemento - o valor fo offset
			if (documentTop > boxTop(this) - offset) {
				
				// caso seja verdadeiro, ele vai adicionar a classe que está em animationClass ao elemento
				$(this).addClass(animationClass);
			} else {
				
				// caso seja falso ele vai remover a classe do elemento. Se você não quiser que a animação ocorra mais de uma vez, ou seja, quando o cliente voltar o scroll para cima os elementos continuem fixos, basta remover este else
				$(this).removeClass(animationClass);
			}
		});
	}
	
	// dispara a função animeScroll, nesse primeiro momento ele dispara para verificar se já não existe nenhum elemento na página que esteja no campo de visão do usuário
	animeScroll();
	
	// com o document.scroll vamos verificar sempre que um evento de scroll ocorrer na página
	$(document).scroll(function() {
		
		// quando o evento de scroll ocorre disparamos novamente a função animeScroll. Com um setTimeout para evetira que ela seja disparada diversas vezes
		setTimeout(function() {
			animeScroll()
		}, 150);
	});
});