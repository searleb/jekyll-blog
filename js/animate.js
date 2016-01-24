$(document).ready(function() {

    var $elements = $('.animate-me'),
    duration = 1000, // animation duration
    delay = 35; // delay multiplier

    function showWork(opacity) {
        $elements.each(function(index, el) {
            $(this)
            .delay(index * delay)
            .velocity({
                opacity: 1
            }, {
                duration: duration
            });
        });
    }
    setTimeout(showWork, 500);

    function hideWork(url) {
        $( $elements.get().reverse() )
        .each(function(index, el) {
            $(this)
            .delay(index * delay)
            .velocity({
                opacity: 0
            }, {
                duration: duration,
                complete: function(){
                    window.location = url;
                },
                progress: function(elements, complete, remaining, start, tweenValue) {
                    console.log((complete * 100) + "%");
                    console.log(remaining + "ms remaining!");
                    console.log("The current tween value is " + tweenValue);
                }
            });
        });
    }

    // var $links = $('.projects a');
    // $links.click(function(event) {
    //     event.preventDefault();
    //     var url = $(this).attr('href');
    //     hideWork(url);
    // });

});
