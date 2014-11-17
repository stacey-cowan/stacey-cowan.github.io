var $win = $(window);
var $introSection = $('.intro-section')
var $portfolioSection = $('.portfolio-section')

$win.on('scroll', function () {
    var scrollPos = $win.scrollTop();
    
    $introSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});



