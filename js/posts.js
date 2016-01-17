$(document).ready(function() {
   function isPostPage() {
      if ($('.post').length > 0) {
         return true;
      } else {
         return false;
      }
   }

   if (isPostPage) {
      $('.img-slider').slick({
         'fade': true,
         'autoplay': true,
         'autoplaySpeed': 5000,
         'dots': true,
      });
   }


});
