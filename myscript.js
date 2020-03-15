// cartaz

$(document).ready(function() {
    $('.botaocart').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 2);
           
            $('.pag').hide();
            $('#pag' + id).fadeIn('fast');
            $('.botaocart').removeClass('selected01 selected02 selected03 selected04');
            $(this).addClass('selected' + id);
        }
    });
    
//gastronomia
    
    
    $('.botao').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 2);
            $('.pag').hide();
            $('#pag' + id).fadeIn('normal');
            $('.botao').removeClass('selected');
           
            $(this).addClass('selected');
        }
    });


   $('.ancora').click(function () {
       var windowHeight = $(window).height();
       
       $('html, body').animate({scrollTop:600}, 1400);
   });
    
    });



