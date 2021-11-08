$(document).ready(function(){

    $(".owl-carousel").slick({

        variableWidth: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "10px",
        autoplay: true
    });

});

/*document.querySelector("#items").addEventListener('wheel', event => {

    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0);
    } else {
        event.target.scrollBy(-300, 0);
    }

});*/