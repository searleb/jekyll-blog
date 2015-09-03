$(document).ready(function() {

    $('body').addClass('no-scroll');

    function loadPage() {
        $('#welcome').fadeOut();
        $('body').removeClass('no-scroll');
    }

    function checkInput(argument) {
        var val = $('#true-or-false').val();
        if (val === 'true') {
            loadPage();
        } else {
            console.log("Hi, there! If you're reading this you probably already know how to get my little site to load BUT if you don't, just make the statement true by typing in 'true' :) ");
        }
    }

    setInterval(function () {
        checkInput();
    }, 800);

    // if (true) {
    //     loadPage();
    // } else {
    //     console.log(hint);
    // }


});
