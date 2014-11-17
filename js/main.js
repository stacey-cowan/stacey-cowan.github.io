var $win = $(window);
var $introSection = $('.intro-section')

$win.on('scroll', function () {
    var scrollPos = $win.scrollTop();
    
    $introSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});



