$(function () {
    khoimonan = $('.nhieumon').isotope({
        itemSelector: '.motmon',
        layoutMode: 'masonry'
    });

    khoimonan.imagesLoaded().progress(function () {
        khoimonan.isotope('layout');
    });

    $('.tieudect a').click(function () {

        khoimonan.isotope({ filter: $(this).data('monan') })
        return false;
    })
})