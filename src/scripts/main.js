$(function() {
    console.log('its working!111');

    $('.b-nav__li_dropdown-link').on( 'click', function() {
        $(this).children('.b-nav__span').toggleClass('b-nav__span_active-nav-span')
        $('.b-menu').toggleClass('b-menu_active-toggle')
        $('.b-nav__logo').toggleClass('b-nav__logo_active-logo')

        $('.b-menu__li').each( function () {

            let delayData = $( this ).data('fade')
            let listItems = $( this )

            setTimeout(function () {
                listItems.toggleClass('b-menu__li_fade-effect');
            }, delayData + '00' )

        } )
        
    })

    $('.b-menu__li').hover(
        function () {
            $('.b-menu__li').not($(this)).addClass('b-menu__li_blur')
        },
        function () {
            $('.b-menu__li').not($(this)).removeClass('b-menu__li_blur')
        }
    )

})