$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});

;(function($) {
    'use strict';
    var $body = $('html, faq'),
    content = $('#main').smoothState({
    
    // Sobreescribimos el método onStart
    onStart: {
    duration: 2500, // Duración de la animación
    render: function (url, $container) {
    
    // toggleAnimationClass() es una clase pública
    // para reiniciar la transición CSS con una clase
    // y aplicar el efecto inverso al salir de la página
    content.toggleAnimationClass('is-exiting');
    
    // Hacemos scroll al principio de la página
    $body.animate({
    scrollTop: 0
    });
    }
    }
    }).data('smoothState');

//.data('smoothState') es para habilitar los métodos públicos
})(jQuery);