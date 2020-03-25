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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
             });
  });


//   $('.our-classes-content').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//          });



         $(".toggler").on("click", function() {
            $(this).toggleClass("open");
            $("body").toggleClass("navbar-open");
        });
        $(".nav-links a").on("click", function() {
            if($("body").hasClass("navbar-open")) {
              $(".toggler").removeClass("open");
              $("body").removeClass("navbar-open");
            }
        });

        
        $(".toggler").on("click", function() {
            $(this).toggleClass("open");
            $("body").toggleClass("navbar-open");
        });
        $(".nav-links a").on("click", function() {
            if($("body").hasClass("navbar-open")) {
              $(".toggler").removeClass("open");
              $("body").removeClass("navbar-open");
            }
        });