$(document).ready(function () {
    window.onscroll = function() {
        stickNavbar()
    };
    function stickNavbar() {
        let navbar = $('#nav');
        if ($(window).scrollTop() >= $('#title').height()) {
            navbar.addClass("sticky")
        } else {
            navbar.removeClass("sticky");
        }
    }

    $('.nav-link').click(function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })
});