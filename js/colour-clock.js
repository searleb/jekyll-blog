$(document).ready(function() {
    function colorClock () {
    	// get time
    	var newDate = new Date();
    	var hours = newDate.getHours().toString();
    	var minutes = newDate.getMinutes().toString();
    	var seconds = newDate.getSeconds().toString();

    	// format time to HHMMSS
    	if (hours < 10) { hours = "0" + hours };
    	if (minutes < 10) { minutes = "0" + minutes };
    	if (seconds < 10) { seconds = "0" + seconds };
    	var time = hours +":"+ minutes +":"+ seconds;

    	// create dark (1-1) # color code
    	var darkColors = hours + minutes + seconds;

    	// replace dark # numbers with lighter characters
    	var lightColors = darkColors.replace(/0/g, 'a');
    	lightColors = lightColors.replace(/1/g, 'b');
    	lightColors = lightColors.replace(/2/g, 'c');

    	// update the time on the page
    	$("#time").html(time + ' / #' + lightColors );
    	// $("#hex").html('#' + lightColors);

    	// fade the background color
    	Velocity( $(".hex-colour"), { backgroundColor: '#' + lightColors }, 1000);

        $('a').hover(function() {
            /* Stuff to do when the mouse enters the element */
            $(this).css('color', '#'+lightColors);
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            $(this).css('color', '#000000');
        });
    }

    setInterval(function(){
    	colorClock();
    },1000);

    colorClock();
});
