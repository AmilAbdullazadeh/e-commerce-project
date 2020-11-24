$(window).scroll(function () {
  if ($(this).scrollTop() >= 50 && $(this).scrollTop() <= 2144) {
    $(".scrolltop").css("backgroundColor", "#000");
    $(".scrooltop,i").css("color", "#fff");
    $(".scrolltop:hidden").stop(true, true).fadeIn();
  } else if ($(this).scrollTop() >= 2145) {
    $(".scrolltop").css("backgroundColor", "#fff");
    $(".scrooltop,i").css("color", "#000");
  } else {
    $(".scrolltop").stop(true, true).fadeOut();
  }
});

$(function () {
  $(".scroll").click(function () {
    $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
    return false;
  });
});
