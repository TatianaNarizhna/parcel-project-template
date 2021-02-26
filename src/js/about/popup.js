$('.js-button-campaign').click(function () {
    $('main').css('filter', 'blur(5px)');
    $('js-overlay-campaign').fadeIn();
    $('js-overlay-campaign');
});
$(document).mouseup(function (e) {
    var popup = $('js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('js-overlay-campaign').fadeOut();
        $('main').css('filter', 'none');
    }
    
});