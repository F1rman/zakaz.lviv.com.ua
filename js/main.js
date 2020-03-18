window.mainSwiper = new Swiper ('.main', {
  shortSwipes:false,
    // Optional parameters
    direction: 'vertical',
    // If we need pagination
    pagination: {
         el: '.swiper-pagination',
         clickable: true,
         renderBullet: function (index, className) {
           return '<span class="' + className + '">' + (index + 1) + '</span>';
         },
       },

    // Navigation arrows
    mousewheel: true,
   hashNavigation: true,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

window.mainTextSwiper = new Swiper('.mainTextSwiper', {
       slidesPerView: 'auto',
       centeredSlides: true,
       autoplay: {
   delay: 3000,
 },
 loop:true,
     });

window.iphone_swiper = new Swiper('.iphone .swiper-container', {
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          autoplay: {
      delay: 2000,
    },
        });

        var map;
             function initMap() {
               map = new google.maps.Map(document.getElementById('map'), {
                 center: {lat: -34.397, lng: 150.644},
                 zoom: 8
               });
             }
