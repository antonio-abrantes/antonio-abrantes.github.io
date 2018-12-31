//Funções dos botões de midias sociais

$(function(){

    AJAX_REQ_DIV_DETALHES();

    function AJAX_REQ_DIV_DETALHES() {
        $.ajax({
            url: 'provas.html',
            type: "GET",
            success: function (retorno) {
                $("#provas").html(retorno).fadeIn(1000);
            }
        });
    }


	$("#bt-facebook, .facebook").on("click", function(event){
		window.open('https://www.facebook.com/antonio.abrantess');
	});

	$("#bt-github, .github").on("click", function(event){
		window.open('https://github.com/antonio-abrantes');
	});

	$("#bt-twitter, .twitter").on("click", function(event){
		window.open('https://twitter.com/Toin_Abrantes');
	});

	$("#bt-linkedin").on("click", function(event){
		window.open('https://www.linkedin.com/in/antonio-abrantes');
	});

	$("#bt-instagram").on("click", function(event){
		window.open('https://www.instagram.com/antonio.abrantes/');
	});

});