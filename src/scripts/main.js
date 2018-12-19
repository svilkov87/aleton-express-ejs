$(function() {
    console.log('its working!111');

    const $servicesLink = $('.b-nav__dropdown-link')
    const $servicesBlock = $('.b-nav__ul-services')
    const $menuToggle = $('.b-nav__main-link_contacts-toggle')

    $servicesLink.hover(
        function () {
            $servicesBlock.addClass('b-nav__ul-services_active-block')
        },
        function () {
            $servicesBlock.removeClass('b-nav__ul-services_active-block')
        }
    )

    $menuToggle.on( 'click', function() {
        console.log('test')
        $('.b-page__body').toggleClass('b-page__body_slide-left')
        $('.b-page__sidebar').toggleClass('b-page__sidebar_slide-left')
    })
})