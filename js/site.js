$(document).ready(function() {
    $('.block-menu').click(function(e) {
        e.preventDefault();
        $('.block-menu-navigation').toggleClass('active');
        $(this).closest('.box-header').find('.block-menu').toggleClass("active");
    })
});
$('.block-slider-main').slick({
    autoplay: false,
    arrows: false,
    dots: true,
});