$(function() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('active');
        $('.img-nav').addClass('active');
      } else {
        $('.navbar').removeClass('active');
        $('.img-nav').addClass('active');
      }
    });
});