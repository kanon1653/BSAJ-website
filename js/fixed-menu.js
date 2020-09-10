$(window).on('scroll', function() {
    $('#menu').toggleClass('fixed', $(this).scrollTop() > 0);
});

$(window).on('scroll', function() {
    $('#hamburgmenu').toggleClass('fixed', $(this).scrollTop() > 0);
});