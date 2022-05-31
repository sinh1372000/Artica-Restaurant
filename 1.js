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

    new WOW().init();
})

document.addEventListener('DOMContentLoaded',function(){
    var status = 'under100';
    var navbar = document.getElementById('Menu');
    window.addEventListener('scroll',function(){
        if ( window.pageYOffset > 300){
            if ( status == 'under100') {
                status = 'over100';
                navbar.classList.add('logovamenufixed');               
            }
        }
        else if ( window.pageYOffset <= 300) {
            if ( status == 'over100' ) {
                status = 'under100';
                navbar.classList.remove('logovamenufixed');               
            }
        }
    })
},false);