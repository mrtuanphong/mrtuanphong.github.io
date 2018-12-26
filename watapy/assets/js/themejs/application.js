/* -------------------------------------------------------------------------------- /
	
	Magentech jQuery
	Created by Magentech
	v1.0 - 20.9.2016
	All rights reserved.

	+----------------------------------------------------+
		TABLE OF CONTENTS
	+----------------------------------------------------+
	
	[1]		Language and Currency Dropdowns
	[2]		Header Top link
	[3]		Resonsive Header Top
	[4]		Accordion to Bonus page
	[5]		Magnific Popup
	[6]		Quick View
	[7]		Quantity minus and plus
	[8]		Owl carousel - Slider
	[9]		Listing Tabs - Slider
	[10]	Other Query
	[11]	Page Quickview
	[12]	Page About Us
	[13]	Page Category
	[14]	Page Detail
/ -------------------------------------------------------------------------------- */


$(document).ready(function () {
  $(".js-carouselHero").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
  });

  $('.js-carouselCategory').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      767: {
        items: 3,
        nav: true
      },
      991: {
        items: 6,
        nav: true,
        loop: true
      }
    }
  })
})


/* ---------------------------------------------------
	Page About Us
-------------------------------------------------- */

/* ---------------------------------------------------
	Page Category
-------------------------------------------------- */