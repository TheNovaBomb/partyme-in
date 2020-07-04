$(document).ready(function() {
  changeLinkColor(window.location.pathname);
});

const swup = new Swup();

$(".nav-ul a").on("click", function(e){
  removeActiveClass();
  let page = "";

  setTimeout(function() {
    page = window.location.pathname;
    changeLinkColor(page);
  }, 10);



  $(this).addClass("active");
});

$(".logo a").on("click", function(e) {
  removeActiveClass();

  $("#home-").addClass("active");
})

$("#swup a").on("click", function(e) {
  removeActiveClass();

  $("#about-").addClass("active");
})

function removeActiveClass() {
  $("#home-").removeClass("active");
  $("#about-").removeClass("active");
  $("#contact-").removeClass("active");
}

function changeLinkColor(page) {
  console.log(page);

  if (page == "/index") {
    $("header ul li a").css("color", "rgba(255, 247, 0, .95)");
    setTimeout(function(){
      $(".active").css("color", "#000");
    }, 10);
  } else {
    $("header ul li a").css("color", "rgba(0, 193, 251, 0.8)");
    setTimeout(function(){
      $(".active").css("color", "#000");
    }, 10);
  }
}
