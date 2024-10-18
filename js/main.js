var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
 $(function (){
     console.log($('div').is('news-page'))

    if($(window).width() <= 990){

        $('.price-list').slick({
            centerMode: true,
            slidesToShow: 2,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                        variableWidth: true
                    }
                }
            ]
        });
        if(!$('section').hasClass('review-page')){
            $('.review-list').slick({
                centerMode: true,
                slidesToShow: 2,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            slidesToShow: 1,
                            variableWidth: true
                        }
                    }
                ]
            });
        }


        $('.reg-help-list').slick({
            centerMode: true,
            slidesToShow: 2,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                        variableWidth: true
                    }
                }
            ]
        });
        $('.help-list').slick({
            centerMode: true,
            slidesToShow: 2,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                        variableWidth: true
                    }
                }
            ]
        });
        if($('section').hasClass('news-page')){
            console.log('aaaa')

        } else{
            $('.news-list').slick({
                centerMode: true,
                slidesToShow: 2,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }

    }
 })