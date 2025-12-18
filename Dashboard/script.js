$(document).ready(function () {
  $("toggleSidebar").click(function () {
    $("sidebar").toggle(500);
  });

  $("#emform").submit(function (e) {
    e.preventDefault();

    $(".successmesg").fadeIn(1000).delay(2000).fadeOut(1000);
    $(this)[0].reset();
  });

  $("input, textarea").focus(function () {
    $(this).css("background-color", "#e3f2fd");
  });

  $("input, textarea").blur(function () {
    $(this).css("background-color", "white");
  });

  $("#darkModeBtn").click(function (e) {
    e.preventDefault(); // stop page jump
    $("body").toggleClass("dark-mode");
  });
});
