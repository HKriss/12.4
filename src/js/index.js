$('header').on('click', 'span', function() {
    $(this).addClass('active').siblings().removeClass('active');
})