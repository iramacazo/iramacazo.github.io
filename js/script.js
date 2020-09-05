$(document).ready(function () {
    window.onscroll = function () {
        stickNavbar();
        $('.navbar-collapse').collapse('hide');
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
        );
        $('.navbar-collapse').collapse('hide');
    });

    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('#projects-button').click(function () {
        $('html,body').animate({
            scrollTop: $('#projects').offset().top - 60,
        }, 500, 'linear');
    });


    $('#projectModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget); // Button that triggered the modal
        let data = button.data('whatever'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        let modal = $(this);
        if (data === 'missuniverse') {
            modal.find('.modal-title').text('Miss Universe Singapore');
            modal.find('.modal-text').text('A website for the Miss Universe Singapore Pageant to give updates on the pageant and take in applications for models. ');
            modal.find('.view-site').hide();
            modal.find('#image1').attr('src', 'css/images/mu1.png');
            modal.find('#image2').attr('src', 'css/images/mu2.png');
            modal.find('#image3').attr('src', 'css/images/mu3.png');
        } else if (data === 'crossroad') {
            modal.find('.modal-title').text('Project: Crossroad');
            modal.find('.modal-text').text('A Management Information System for the Laguna Bel-Air Transport Service Cooperative. ' +
                'The system includes an asset management module, an attendance module, and a module to create reports for managerial decisions. ' +
                'This was done in fulfillment of the thesis requirement of my degree.');
            modal.find('#image1').attr('src', 'css/images/crossroad1.png');
            modal.find('#image2').attr('src', 'css/images/crossroad2.png');
            modal.find('#image3').attr('src', 'css/images/crossroad3.png');
            modal.find('.view-site').hide();
        } else if (data === 'meritxell') {
            modal.find('.modal-title').text("Meritxell Children's Foundation");
            modal.find('.modal-text').text("A website for the Meritxell Children's World Foundation.");
            modal.find('.view-site').show();
            modal.find('.view-site').attr('href', 'http://www.meritxellchildrensfoundation.org');
            modal.find('#image1').attr('src', 'css/images/meritxell1.png');
            modal.find('#image2').attr('src', 'css/images/meritxell2.png');
            modal.find('#image3').attr('src', 'css/images/meritxell3.png');
        } else if (data === 'bormaheco') {
            modal.find('.modal-title').text('Bormaheco Equipment Management System');
            modal.find('.modal-text').text('An Equipment Asset Management System for Bormaheco Inc. This system is mainly an asset management system which allows the ' +
                'company to track the equipment currently being leased and the equipment which are available for lease, as well as the status of equipment maintenance. ' +
                'In addition to that, there is also a customer side of the application which shows the equipment Bormaheco owns for them to inquire on the availability and costs.');
            modal.find('.view-site').hide();
            modal.find('#image1').attr('src', 'css/images/bormaheco.png');
            modal.find('#image2').attr('src', 'css/images/bormaheco2.png');
            modal.find('#image3').attr('src', 'css/images/bormaheco3.png');
        }
    })
});
