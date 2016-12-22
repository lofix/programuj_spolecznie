$(document).ready(function() {
    var mobileNav = $("#mob_nav");
    var hamburgerMenu = $("#hamb_menu");
    var hamburgerMenuBig = $("#hamb_menu_big");
    var closingBtn = $(".closing_btn");
    var desktopNav = $("#desktop_menu");
    var sectionNames = desktopNav.find(".sec_name");
    var mobileMenu = $("#mob_menu, #desktop_menu");
    var mobileSectionNames = mobileMenu.find(".sec_name");
    var bars = desktopNav.find(".bar");
    var documentHeight = $(document).height();
    var maxScroll = 0.8775;
    var index = maxScroll / $(bars).length;
    var gallery_btn = $(".gallery_btn");
    var gallery_closing_btn = $(".close_btn");
    var gallery = $("#gallery");


    //Not displaying mobile nav on desktop

    $(window).on("resize", function() {
        var windowWidth = $(this).width();
        if (windowWidth > 842) {
            mobileNav.css("display", "none");
        } else {
            mobileNav.css("display", "block");
        }
    })

    //Hamburger Menu

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


    sectionNames.on("click", function() {
        var destination = $(this).data("name");
        $("html, body").animate({
            scrollTop: $(destination).offset().top
        }, 1000);
    })

    //Mobile Navigation

    mobileSectionNames.on("click", function() {
        var mobileDestination = $(this).data("name");
        $("html, body").animate({
            scrollTop: $(mobileDestination).offset().top
        }, 1000);
        // hamburgerMenu.addClass("visible");
        // hamburgerMenuBig.addClass("invisible");
    })

    //Colouring dekstop nav



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


    gallery_btn.on("click", function() {
        gallery.css("display", "block");
    });
    gallery_closing_btn.on("click", function() {
        gallery.css("display", "none");
    });

});
