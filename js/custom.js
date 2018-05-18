/*
 Template Name: Davy-Del
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */


(function ($) {

    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.back-to-top').addClass('active');
            } else {
                $('.back-to-top').removeClass('active');
            }
        });
        $('#back-to-top').click(function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
        /*-------------------------------------------------------------------------*
         *             02. change Menu background on scroll js                     *
         *-------------------------------------------------------------------------*/
        $(window).on('scroll', function () {
            var menu_area = $('.tv-menu-area-fix');
            if ($(window).scrollTop() > 200) {
                menu_area.addClass('tv-sticky-menu');
            } else {
                menu_area.removeClass('tv-sticky-menu');
            }
        }); // $(window).on('scroll' end


        /*-------------------------Navigation ------------------------------------------------*/

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        /*-------------------------Smooth scroll to anchor ------------------------------------------------*/
        $('a.page-scroll').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });

    });

})(jQuery);

