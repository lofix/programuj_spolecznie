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

  //Desktop Navigation

  var desktop_nav = $("#desktop_menu");
  var section_names = desktop_nav.find(".sec_name");
  console.log(desktop_nav);
  console.log(section_names);
  section_names.on("click",function(){
    var destination = $(this).data("name");
    console.log($(destination).offset());
    $("html, body").animate({
                scrollTop: $(destination).offset().top
            }, 1000);
  })
})
