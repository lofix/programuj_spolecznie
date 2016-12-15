$(document).ready(function (){

  // Hamburger Menu

  var hamburger_menu = $("#hamb_menu");
  var hamburger_menu_big = $("#hamb_menu_big");
  var closing_btn = $(".closing_btn");

  hamburger_menu.on("click", function(){
    $(this).addClass("invisible");
    // hamburger_menu_big.removeClass("invisible");
    hamburger_menu_big.addClass("visible");
    $(this).removeClass("visible");
  })
  closing_btn.on("click", function(){

    hamburger_menu.removeClass("invisible");
    hamburger_menu_big.removeClass("visible");
    hamburger_menu_big.addClass("invisible");

  })
})
