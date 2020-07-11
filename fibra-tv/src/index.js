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
		$erro.text('Enviando dados...');
		$erro.css("color", "green")

		// var myHeaders = new Headers();
		// myHeaders.append("Authorization-Token", "38511563c31b4420a9c237f242b1eead");

		// var formdata = new FormData();
		// formdata.append("nome", $name);
		// formdata.append("telefone", $phone);
		// formdata.append("email", $email);
		// formdata.append("empresa", "TBNet(Lideri");
		// formdata.append("mensagem", "Mensagem de Teste");

		// var requestOptions = {
		// 	method: 'POST',
		// 	headers: myHeaders,
		// 	body: formdata,
		// 	redirect: 'follow'
		// };

		// fetch("http://synsuite.lideri.com.br/api/api/events/new_suspect", requestOptions)
		// 	.then(response => response.text())
		// 	.then(result => console.log(result))
		// 	.catch(error => console.log('error', error));

		// Postman
		var form = new FormData();
		form.append("nome", $name);
		// form.append("telefone", $phone);
		form.append("email", $email);
		form.append("empresa", $phone);
		form.append("mensagem", $city);

		var settings = {
				"url": "https://synsuite.lideri.com.br/api/api/events/new_suspect",
				"type": "POST",
				"timeout": 0,
				"headers": {
					"Authorization-Token": "38511563c31b4420a9c237f242b1eead",
					"X-Requested-With": "XMLHttpRequest",
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				"Access-Control-Allow-Origin": "*",
				"processData": false,
				"mimeType": "multipart/form-data",
				"dataType": "json",
				// "contentType": "multipart/form-data",
				// "Content-Length": "<calculated when request is sent>",
				"data": form,
			// "Authorization-Token": "38511563c31b4420a9c237f242b1eead",
			// "url": "http://synsuite.lideri.com.br/",
			// "method": "POST",
			// "crossDomain": true,
			// "dataType": "jsonp",
			// "timeout": 0,
			// "headers": {
			// 	"Authorization-Token": "38511563c31b4420a9c237f242b1eead"
			// },
			// "processData": false,
			// "mimeType": "text/html",
			// "contentType": false,
			// "data": form
		};

		// setTimeout(console.log('name: ', $name, settings), 2000)

		// $.ajax(settings).done(function (response) {
		// 	console.log(response, 'entrou');
		// 	$erro.text('Retornaremos o contato em breve!')
		// 	$erro.css("color", "green");
		// 	$erro.show();
		// })

		// $.ajax(settings).then(result => console.log(result));

		$.ajax(settings)
			.done(function( msg ) {
				$erro.text('Retornaremos o contato em breve!')
				$erro.css("color", "green");
				$erro.show();
				for (var data of form) {
					console.log(data);
				}
				// alert( "Data Saved: " + msg );
			})
			.fail(function (jqXHR, textStatus) {
				// $erro.text("Request failed: " + textStatus)
				$erro.text('Erro na conexão! Entre em contato direto (81) 98212-2660')
				$erro.css("color", "rgb(255, 68, 68)")
				$erro.show()
				for (var data of form) {
					console.log(data);
				}
				// alert("Request failed: " + textStatus)
			})
	});
});

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}