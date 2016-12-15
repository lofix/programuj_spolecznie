$(document).ready(function (){

  //Not displaying mobile nav on desktop

$(window).on("resize", function(){
  var mobileNav = $("#mob_nav");
  var windowWidth = $(this).width();
  console.log(windowWidth);
  if(windowWidth > 842){
    mobileNav.css("display", "none");
  }
  else{
    mobileNav.css("display", "block");
  }
})

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

  var mobileMenu = $("#mob_menu");
  var mobileSectionNames = mobileMenu.find(".sec_name");
  mobileSectionNames.on("click",function(){
    var mobileDestination = $(this).data("name");
    $("html, body").animate({
                scrollTop: $(mobileDestination).offset().top
            }, 1000);
  })



//Colouring dekstop nav
var bars = desktopNav.find(".bar");
console.log(bars);
var documentHeight = $(document).height();
// console.log(longBars);
// console.log(shortBars);
$(document).on("scroll",function(){
  var positionY = $(document).scrollTop();
  var positionPercent = positionY/documentHeight;
  console.log(positionPercent);
  // console.log(desktopNav.offset().top);

})



})
