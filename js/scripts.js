
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
        disable: 'mobile'
    })

    $(".collapse-button").click(function () {
        $(this).toggleClass('show')
        $('.collapse-content').slideToggle()
    });

    if (screen.width > 990) {
        $('.lang-select').select2();
    } else {
        $('.lang-select-mobile').select2();
    }

});
