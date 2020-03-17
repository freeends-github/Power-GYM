// slider classes


// let ourPricing = document.querySelector("#header");
// var sliderImage = ["url(./imgs/headerBg2x.png)", "url(./imgs/hamburger-and-fries-beside-mug-with-beer-3356408.jpg)", "url(./imgs/corona-background.jpg)"];
// const filterArrowLeft = document.querySelector("#filter_arrow-left");
// const filterArrowRight = document.querySelector("#filter_arrow-right");
// const classesSlider = document.querySelector("#filter-slider");
// const menFilter = document.querySelector("#showmen");
// const womenFilter = document.querySelector("#showwomen");

// let current = 0;
// let item;
// function removeChild(x){
//   classesSlider.removeChild(classesSlider.childNodes[x])
// }
// function removeLastChild(){
//   classesSlider.removeChild(classesSlider.lastChild)
// }
// if(current === 0){
//   filterArrowLeft.addEventListener('click', function(){
//     classesSlider.style.transform = 'translateX(-10px)'
//     classesSlider.style.transition = 'all ease-in-out 0.25s'
//   })
// }

// filterArrowRight.addEventListener('click', function(){
//   removeChild(current);
// })
// filterArrowLeft.addEventListener('click', function(){
  
// })

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
    var $category = $this.attr('data-category');
    
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    if( $category == 'man'){
        $boxes.removeClass('is-animated')
          .fadeOut().finish().promise().done(function() {
            $boxes.filter('[data-category = "' + $category + '"]').each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
       });
    }
    // else if($category == 'woman'){
    //   $boxes.removeClass('is-animated')
    //       .fadeOut().finish().promise().done(function() {
    //         $boxes.filter('[data-category = "' + $category + '"]').each(function(i) {
    //         $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
    //       });
    // })
  });
//comming back

})(jQuery);


