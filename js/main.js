$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay:true,
        autoplaySpeed: 1000
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome!'
        },
        submitHandler: function(form) {
            console.log('form')
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos invalidos`)
            }
        }
    })

    $('.lista-carros button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('.menu-hamburguer').click(function(e) {
        e.stopPropagation();
        $('nav').toggle();
    })

    $('body').on("click", function() {
        $('nav').hide();
    })
})