$(document).ready(function(){

    $('.img-block__img').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
      });
      $('.img-block__father').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
      });
      $('.menu__burger').click(function(e){
        $('.menu__burger').toggleClass('active');
        $('.menu-block').toggleClass('active');
      })
})
