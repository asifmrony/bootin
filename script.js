$(".my-slider").owlCarousel({
    loop: true,
    center: true,
    stagePadding: 510,
    margin: 1,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0
        },
        600: {
            items: 1,
            stagePadding: 0
        },
        1000: {
            items: 1.1,
            stagePadding: 0
        },
        1200: {
            items: 1.4,
            stagePadding: 0
        },
        1300: {
            items: 1.5,
            stagePadding: 0
        },
        1500: {
            items: 1.7,
            stagePadding: 0
        },
        1700: {
            items: 2,
            stagePadding: 0
        }
    }
});

// $('.owl-carousel').owlCarousel({
//     center: true,
//     items: 2,
//     loop: true,
//     margin: 10,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         1200: {
//             items: 3
//         }
//     }
// })

$(".category-slider").owlCarousel({
    loop: true,
    center: true,
    dots: false,
    stagePadding: 510,
    margin: 1,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0
        },
        576: { //480
            items: 2,
            stagePadding: 0
        },
        768: {
            items: 3,
            stagePadding: 0
        },
        992: { //1020
            items: 4,
            stagePadding: 0
        },
        1200: {
            items: 5,
            stagePadding: 0
        }
    }
});


function openSlideMenu() {
    document.getElementById('mobileSideMenu').style.width = '50vw';
}

function closeSlideMenu() {
    document.getElementById('mobileSideMenu').style.width = '0';
}