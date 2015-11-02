$(document).ready(function() {
    function colorClock () {
    	// get time
    	var newDate = new Date();
    	var hours = newDate.getHours().toString();

        // add night-time class to body as early as possible
        // if (hours >= 20 || hours <= 5) {
        //     $('body').addClass('night-time');
        //     var aColor = '#aaaaaa';
        // } else {
        //     $('body').removeClass('night-time');
        //     var aColor = '#000000';
        // }

    	var minutes = newDate.getMinutes().toString();
    	var seconds = newDate.getSeconds().toString();

    	// format time to HHMMSS
    	if (hours < 10) { hours = "0" + hours };
    	if (minutes < 10) { minutes = "0" + minutes }
    	if (seconds < 10) { seconds = "0" + seconds }
    	var time = hours +":"+ minutes +":"+ seconds

    	// create dark (1-1) # color code
    	var darkColors = hours + minutes + seconds;

    	// replace dark # numbers with lighter characters
    	var lightColors = darkColors.replace(/0/g, 'a');
    	lightColors = lightColors.replace(/1/g, 'b');
    	lightColors = lightColors.replace(/2/g, 'c');

    	// update the time on the page
    	$("#time, .hex-clock > h1 > small").html(time + ' / #' + lightColors );

    	// fade the background color
        $('.hex-colour').velocity({
            backgroundColor: '#' + lightColors
        }, {
            duration: 1000
        });
        $('.btn').velocity({
            borderColor: '#' + lightColors,
            color: '#' + lightColors
        }, {
            duration: 1000
        });

        // change the hover colour for any links to match time hex
        var aColor = '#000000';
        $('a').hover(function() {
            $(this).css('color', '#'+lightColors);
        }, function() {
            $(this).css('color', aColor);
        });
    }

    setInterval(function(){
    	colorClock();
    },1000);

    colorClock();
});
