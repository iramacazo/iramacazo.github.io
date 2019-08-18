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
});