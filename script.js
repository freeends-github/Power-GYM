(function($) {

  'use strict';

  var $filters = $('.filter-bar [data-filter]'),
    $boxes = $('.classes [data-category]');
  

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    } else if($filterColor == 'men'){
       $boxes.removeClass('is-animated')
         .fadeOut().finish().promise().done(function() {
           $boxes.filter('[data-category = "' + $filterColor + '"]').each(function(i) {
             $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
           });
        });
    }
  });
  //coming back

})(jQuery);


