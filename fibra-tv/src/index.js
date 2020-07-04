// // $(window).scroll(function() {    
// //   var scroll = $(window).scrollTop();
// //   if (scroll >= 20) {
// //     $("#header").addClass("scroll");
// //     $("#list__itens").addClass("color-itens")
// //     $("#logo-branca, #face-branco, #insta-branco").addClass("icon-hidden")
// //     $("#logo-laranja, #face-laranja, #insta-laranja").removeClass("icon-hidden")

// //   } else {
// //     $("#header").removeClass("scroll");
// //     $("#list__itens").removeClass("color-itens")
// //     $("#logo-branca, #face-branco, #insta-branco").removeClass("icon-hidden")
// //     $("#logo-laranja, #face-laranja, #insta-laranja").addClass("icon-hidden")
// //   }
// // });

// console.log('hi')

// var root = document.documentElement;
// root.className += ' js';

// // Cria a função boxTop responsável por definir a distância entre o topo to elemento e a página
// function boxTop(idBox) {
// 	var boxOffset = $(idBox).offset().top;
// 	return boxOffset;
// }

// // Verifica se o documento está pronto
// $(document).ready(function() {

// 			// target define os elementos que serão animados. Neste 	caso todos os que possuirem a classe .anime	
// 	var $target = $('.anime'),

// 			// animationClass define a classe que será injetada no elemento durante o scroll. É nessa classe que	definimos como a animação irá ocorrer
// 			animationClass = 'anime-init',

// 			// windowHeight pega a altura total da janela do browser
// 			windowHeight = $(window).height(),

// 			// offset é definido a partir da altura da janela, menos um quarto dessa atlura. Isso vai garantir que o browser não fique com um espaço grande em branco
// 			offset = windowHeight - (windowHeight / 4);

// 	// animeScroll é a função responsável por adicionar a classe animationClass ao elemento da página.
// 	function animeScroll() {

// 		// documentTop vai definir a distância entre o topo da página e o scroll. O valor é atualizado sempre a função animeScroll é ativada.
// 		var documentTop = $(document).scrollTop();

// 		// target.each serve para adicionarmos a função a cada elemento que tiver a classe do target. Assim garantimos que elementos com distâncias diferentes do topo da página, animem no momento correto
// 		$target.each(function() {

// 			// o if verifica se a distância entre o topo da página e o scroll é maior que a distância do elemento - o valor fo offset
// 			if (documentTop > boxTop(this) - offset) {

// 				// caso seja verdadeiro, ele vai adicionar a classe que está em animationClass ao elemento
// 				$(this).addClass(animationClass);
// 			} else {

// 				// caso seja falso ele vai remover a classe do elemento. Se você não quiser que a animação ocorra mais de uma vez, ou seja, quando o cliente voltar o scroll para cima os elementos continuem fixos, basta remover este else
// 				$(this).removeClass(animationClass);
// 			}
// 		});
// 	}

// 	// dispara a função animeScroll, nesse primeiro momento ele dispara para verificar se já não existe nenhum elemento na página que esteja no campo de visão do usuário
// 	animeScroll();

// 	// com o document.scroll vamos verificar sempre que um evento de scroll ocorrer na página
// 	$(document).scroll(function() {

// 		// quando o evento de scroll ocorre disparamos novamente a função animeScroll. Com um setTimeout para evetira que ela seja disparada diversas vezes
// 		setTimeout(function() {
// 			animeScroll()
// 		}, 150);
// 	});
// });

$(document).ready(function () {
	$("#btn-enviar").click(function (e) {
		e.preventDefault();
		$name = $('#name').val();
		$phone = $('#phone').val();
		$city = $('#city').val();
		$email = $('#email').val();
		$phone = $phone.replace(/\D/g, '');
		$erro = $('#erro');
		var res = $phone.length >= 8 && $phone.length <= 11;
		if ($name == '') {
			$erro.text("Inserir nome!")
			$erro.show();
			return
		}
		if (!res) {
			$erro.text('Telefone errado!')
			$erro.show();
			return
		} else if (res) {
			$erro.text('Telefone correto!')
			$erro.css("color", "green");
			$erro.show();
		}
		if (!validateEmail($email)) {
			$erro.text('Email inválido!')
			$erro.css("color", "rgb(255, 68, 68)");
			$erro.show();
			return
		}
		$erro.hide();

		// Postman
		var form = new FormData();
		form.append("nome", $name);
		form.append("telefone", $phone);
		form.append("email", $email);
		form.append("cidade", $city);

		var settings = {
			"url": "http://synsuite.lideri.com.br/",
			"type": "POST",
			"crossDomain": true,
			// "dataType": "jsonp",
			"timeout": 0,
			"headers": {
				"Authorization-Token": "38511563c31b4420a9c237f242b1eead"
			},
			"processData": false,
			"mimeType": "multipart/form-data",
			"contentType": false,
			"data": form
		};

		setTimeout(console.log('name: ', $name, settings), 2000)

		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	});
});

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
