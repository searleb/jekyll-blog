
function showWork(argument) {
    var $element = $('.animate-me');
    var time = 100;

    $element.each(function(index, el) {
        $(this)
        .delay(index * 90)
        .velocity({
            opacity: 1
        }, {
            duration: time
        });
        time  = time + 100;
    });
}

$(window).scroll(function(event) {
    if ($('.projects h1').visible()) {
        showWork();
    }
});
