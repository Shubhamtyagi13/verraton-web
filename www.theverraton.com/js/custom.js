

$(document).ready(function () {
  AOS.init({
      disable: 'mobile'
  });
});

$(document).ready(function () {
  // Transition effect for navbar 
  $(window).scroll(function () {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if ($(this).scrollTop() > 250) {
          $('.pro-navigation').addClass('solidnav');
      } else {
          $('.pro-navigation').removeClass('solidnav');
      }
  });
});




