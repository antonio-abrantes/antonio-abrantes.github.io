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

});