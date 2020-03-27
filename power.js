// function myFunction() {
//   console.log("aaa");
//     var x = document.querySelector("#monthly");
//     var y = document.getElementById("annual");
//     var z = document.getElementById("slider");
//     console.log(x);
//     if (x.style.display === "none")
//      {
//       console.log("x - none")
//       x.style.display= "flex";
//       y.style.display="none";
//       z.style.float="right";
//     } 
//     else{
//       x.style.display = "none";
//       y.style.display="flex";
//       z.style.float="left";
//     }
//   }



  $(document).ready(function(){
    $(".toggler").on("click", function() {
      if($(".nav-links").css("display") == "none") {
        $(".nav-links").css("display", "block");
      }
      else{
        $(".nav-links").css("display", "none");
      }
    });

    $(".onclick-btn").on("click", function() {
      if($("#monthly").css("display") == "none") {
        $("#monthly").css("display", "flex");
        $("#annual").css("display", "none");
        $("#slider").css("float", "right");
      } 
      else {
        $("#monthly").css("display", "none");
        $("#annual").css("display", "flex");
        $("#slider").css("float", "left");
      }
    });

    $('.our-classes-content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
                  slidesToShow: 4
              }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
                  slidesToShow: 3
              }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToScroll: 1,
              autoplaySpeed: 2000,
              prevArrow: $('.prev'),
              nextArrow: $('.next'),
                slidesToShow: 2
            }
        }
      ]
             });    
             
       $('.testimonials').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1500,
              arrows:false,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows:false,
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 568,
              settings: {
                slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1500,
              arrows:false,
                  slidesToShow: 1
              }
          }
        ]
                   });
});
// $(".toggler").on("click", function() {
//   $(this).toggleClass("open");
//   $("body").toggleClass("navbar-open");
// });
// $(".nav-links a").on("click", function() {
//   if($("body").hasClass("navbar-open")) {
//     $(".toggler").removeClass("open");
//     $("body").removeClass("navbar-open");
//   }
// });
