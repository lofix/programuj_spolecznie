$(document).ready(function (){

  //Hamburger Menu

  var hamburgerMenu = $("#hamb_menu");
  var hamburgerMenuBig = $("#hamb_menu_big");
  var closingBtn = $(".closing_btn");

  hamburgerMenu.on("click", function(){
    $(this).addClass("invisible");
    hamburgerMenuBig.addClass("visible");
    $(this).removeClass("visible");
  })
  closingBtn.on("click", function(){

    hamburgerMenu.removeClass("invisible");
    hamburgerMenuBig.removeClass("visible");
    hamburgerMenuBig.addClass("invisible");

  })

  //Desktop Navigation

  var desktopNav = $("#desktop_menu");
  var sectionNames = desktopNav.find(".sec_name");

  sectionNames.on("click",function(){
    var destination = $(this).data("name");
    $("html, body").animate({
                scrollTop: $(destination).offset().top
            }, 1000);
  })

  //Mobile Navigation

  var mobileNav = $("#mob_menu");
  var mobileSectionNames = mobileNav.find(".sec_name");
  console.log(mobileSectionNames);
  mobileSectionNames.on("click",function(){
    var mobileDestination = $(this).data("name");
    $("html, body").animate({
                scrollTop: $(mobileDestination).offset().top
            }, 1000);
  })

})
