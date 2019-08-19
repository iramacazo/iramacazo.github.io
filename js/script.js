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
                scrollTop: $($(this).attr('href')).offset().top + -60,
            },
            500,
            'linear'
        )
    });

    $('#projects-button').click(function(){
        $('html,body').animate({
            scrollTop: $('#projects').offset().top - 60,
        }, 500, 'linear');
        console.log('why no work')
    });

    $('#projectModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget); // Button that triggered the modal
        let data = button.data('whatever'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        let modal = $(this);
        if(data === 'missuniverse'){
            modal.find('.modal-title').text('Miss Universe Singapore');
            modal.find('.modal-text').text('Miss universe chibog');
        } else if (data === 'crossroad'){
            modal.find('.modal-title').text('Project: Crossroad');
            modal.find('.modal-text').text('Project: Crossroad chibog');
        } else if (data === 'meritxell'){
            modal.find('.modal-title').text("Meritxell Children's Foundation");
            modal.find('.modal-text').text('Meritxell Chibog');
        } else if (data === 'bormaheco'){
            modal.find('.modal-title').text('Bormaheco Equipment Management System');
            modal.find('.modal-text').text('Bormaheco Chibog');
        }
    })
});