$(document).ready(function() {

    //Not displaying mobile nav on desktop
    var hideMobileNav = function() {
        var mobileNav = $("#mob_nav");
        $(window).on("resize", function() {
            var windowWidth = $(this).width();
            if (windowWidth > 842) {
                mobileNav.css("display", "none");
            } else {
                mobileNav.css("display", "block");
            }
        })
    }

    //Hamburger Menu
    var activeHamburgerMenu = function() {
        var hamburgerMenu = $("#hamb_menu");
        var hamburgerMenuBig = $("#hamb_menu_big");
        var closingBtn = $(".closing_btn");
        hamburgerMenu.on("click", function() {
            $(this).addClass("invisible");
            hamburgerMenuBig.addClass("visible");
            $(this).removeClass("visible");
        })
        closingBtn.on("click", function() {
            hamburgerMenu.removeClass("invisible");
            hamburgerMenuBig.removeClass("visible");
            hamburgerMenuBig.addClass("invisible");
        })
    }

    //Desktop Navigation
    var activeDesktopNavigation = function() {
        var desktopNav = $("#desktop_menu");
        var sectionNames = desktopNav.find(".sec_name");
        sectionNames.on("click", function() {
            var destination = $(this).data("name");
            $("html, body").animate({
                scrollTop: $(destination).offset().top
            }, 1000);
        })
    }


    //Mobile Navigation
    var activeMobileNavigation = function() {
        var mobileMenu = $("#mob_menu, #desktop_menu");
        var mobileSectionNames = mobileMenu.find(".sec_name");
        var hamburgerMenuBig = $("#hamb_menu_big");
        var hamburgerMenu = $("#hamb_menu");
        mobileSectionNames.on("click", function() {
            var mobileDestination = $(this).data("name");
            $("html, body").animate({
                scrollTop: $(mobileDestination).offset().top
            }, 1000);
            hamburgerMenu.removeClass("invisible");
            hamburgerMenu.addClass("visible");
            hamburgerMenuBig.removeClass("visible");
            hamburgerMenuBig.addClass("invisible");
        })
    }

    //Colouring dekstop nav
    var colouringDesktopNav = function() {
        var desktopNav = $("#desktop_menu");
        var bars = desktopNav.find(".bar");
        var documentHeight = $(document).height();
        var maxScroll = 0.8775;
        var index = maxScroll / $(bars).length;
        $(document).on("scroll", function() {
            var positionY = $(document).scrollTop();
            var positionPercent = positionY / documentHeight;
            var orangeBarIndex = Math.floor(positionPercent / index);
            bars.each(function(index, value) {
                if (index < orangeBarIndex) {
                    $(value).css("background-color", "#feb933");
                } else {
                    $(value).css("background-color", "#bcbec0");
                }
            })
        })
    }



    //Gallery
    var activateGallery = function() {
        var gallery_btn = $(".gallery_btn");
        var gallery_closing_btn = $(".close_btn");
        var gallery = $("#gallery");
        gallery_btn.on("click", function() {
            gallery.css("display", "block");
        });
        gallery_closing_btn.on("click", function() {
            gallery.css("display", "none");
        });
    }

    hideMobileNav();
    activeHamburgerMenu();
    activeDesktopNavigation();
    activeMobileNavigation();
    colouringDesktopNav();
    activateGallery();
});
