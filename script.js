
//Modal (get started buttons)
var getStartedButtons = document.querySelectorAll('.choose-plan');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var noButton = document.querySelector('.modal_action--negative');
for(var i = 0; i < getStartedButtons.length; i++){
  getStartedButtons[i].addEventListener('click', function(){
    backdrop.style.display = "block";
    modal.style.display = "block";
  })
}
function closeModal(){
  backdrop.style.display = "none";
  modal.style.display = "none";
}
backdrop.addEventListener('click', closeModal);
noButton.addEventListener('click', closeModal);

// filter (all,men,women)
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


