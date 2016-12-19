$(document).ready(function() {

    //Not displaying mobile nav on desktop

    $(window).on("resize", function() {
        var mobileNav = $("#mob_nav");
        var windowWidth = $(this).width();
        // console.log(windowWidth);
        if (windowWidth > 842) {
            mobileNav.css("display", "none");
        } else {
            mobileNav.css("display", "block");
        }
    })

    //Hamburger Menu

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

    //Desktop Navigation

    var desktopNav = $("#desktop_menu");
    var sectionNames = desktopNav.find(".sec_name");

    sectionNames.on("click", function() {
        var destination = $(this).data("name");
        $("html, body").animate({
            scrollTop: $(destination).offset().top
        }, 1000);
    })

    //Mobile Navigation

    var mobileMenu = $("#mob_menu");
    var mobileSectionNames = mobileMenu.find(".sec_name");
    mobileSectionNames.on("click", function() {
        var mobileDestination = $(this).data("name");
        $("html, body").animate({
            scrollTop: $(mobileDestination).offset().top
        }, 1000);
    })

    //Colouring dekstop nav

    var bars = desktopNav.find(".bar");
    // console.log(bars.length);
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

    //Gallery

    var gallery_btn = $(".gallery_btn");
    var gallery_closing_btn = $(".close_btn");
    var gallery = $("#gallery");
    gallery_btn.on("click", function() {
        gallery.css("display", "block");
    })
    gallery_closing_btn.on("click", function() {
        gallery.css("display", "none");
    })
})
