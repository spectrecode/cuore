$('.owl-carousel').owlCarousel({
    // stagePadding: 50,
    loop:true,
    margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

var img1Mobile = function(){
    var width        = $(window).width();

    $('.gallery_cards').each(function(){
        if (width < 768){
            $(this).addClass('.owl-carousel')
        } else{
            $(this).removeClass('.owl-carousel')
        }
    })

}


$(document).ready(function(){
    img1Mobile()
});

$(window).resize(function(){
    img1Mobile()
});
