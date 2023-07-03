'use strict';

(function ($) {

  // slick slider on 'our-locations' section

  if(document.querySelector('.our-locations')){
    $('.locations-detail-wrap').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      // responsive: [
      //   {
      //     breakpoint: 1023,
      //     settings: {
      //       slidesToShow: 4,
      //       slidesToScroll: 1,
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //     }
      //   }
      // ]
    });
  }

})(jQuery);

// sidebar menu toggle

const menuIcon = document.querySelector('.hamburger-menu-icon');
const sidebarMenu = document.querySelector('.sidebar-menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('is-open');
  sidebarMenu.classList.toggle('is-open');
});

// accordion content toggle on 'contact' page

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains('open')) {
        otherItem.classList.remove('open');
      }
    });
  });
});

// tab-content on 'category' section of 'media-center' page

const itemLinks = document.querySelectorAll('.category-item');
const itemDetails = document.querySelectorAll('.item-detail');

itemLinks.forEach((link, index) => {

  link.addEventListener('click', (e) => {

    e.preventDefault();

    itemLinks.forEach(link => {
      link.classList.remove('active');
      itemLinks[index].classList.add('active');
    });

    itemDetails.forEach(itemDetail => {
      itemDetail.classList.remove('active');
      itemDetails[index].classList.add('active');
    });
    
  });

});