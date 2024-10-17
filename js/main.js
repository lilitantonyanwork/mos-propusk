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

var init = false;
var swiper1;
function swiperCard(item) {

    if (window.innerWidth <= 990) {
        console.log(init)

        if (!init) {
            console.log(item)
            init = true;
            swiper1 = new Swiper(item, {
                slidesPerView: 2,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {

                    480: {
                        slidesPerView: 1,

                    },
                    600: {
                        slidesPerView: 2,

                    },

                },
            });
            init = false;
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard('.help-list');
swiperCard('.price-list');
swiperCard('.review-list');
swiperCard('.news-list');
window.addEventListener("resize", swiperCard('.help-list'));
window.addEventListener("resize", swiperCard('.price-list'));
window.addEventListener("resize", swiperCard('.review-list'));

window.addEventListener("resize", swiperCard('.news-list'));