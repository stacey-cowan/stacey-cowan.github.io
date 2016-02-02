/*
          $(function() {
                $('ul.nav a').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    *//*
                    event.preventDefault();
                });
            });
*/





;(function ($) {
    'use strict';
    var $body = $('html, body'),
        $main = $('#main'),
        options = {
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 250,
                render: function (url, $container) {
                    $body.animate({
                        scrollTop: 0
                    });
                    $main.addClass('is-exiting');
                    smoothState.restartCSSAnimations();
                }
            },
            onEnd: {
                duration: 250,
                render: function (url, $container, $content) {
                    $main.removeClass('is-exiting');
                    $main.html($content);
                    $body.css('cursor', 'auto');
                    $body.find('a').css('cursor', 'auto');
                }
            }
        },
        smoothState = $main.smoothState(options).data('smoothState');
    window.smoothstate = smoothState;
})(jQuery);

