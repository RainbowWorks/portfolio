$(function () {



    const tl = gsap.timeline({});
    gsap.to('.intro h2', { rotation: 360, x: 0, duration: 2 })
    gsap.to('.intro p', { rotation: -360, x: 0, duration: 2 })

    //  tl
    //  .to('.intro h2', { rotation: 360, x: 0, duration: 1 })
    //   .to('.intro h2', { rotation: 0, x: 0, duration: 1 });




    //    tl
    //      .from({}, {})
    //    .from('.intro h2', { y: 100, opacity: 0 })
    //  .from('.intro p', { y: 100, opacity: 0 })
    // .from('.intro span', { width: 0, duration: 2 })
    // .from('.intro em', { opacity: 0 })


    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'training', 'profile'],
        fixedElements: '#header, #footer',
        easing: 'linear',

        afterLoad: function (_, idx) {
            $('#header .gnb>ul>li').removeClass('on');
            $('#header .gnb>ul>li').eq(idx - 1).addClass('on');

            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');

            if (idx == 1) {
                $('#footer .to_top').removeClass('on')
            } else {
                $('#footer .to_top').addClass('on')
            }
        },

        onLeave: function (_, idx, d) {
            // 첫 화면에 왔을 떄 애니메이션 다시 재생하기

            if (idx == 1) {
                tl.restart();
            }
        }


    });


    $('#header .cover_btn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });


    $('#header .cover ul>li>a').on('click', function () {
        $('#header .cover_btn').removeClass('on');
        $('#header .cover').removeClass('on');
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    })
});

$(function () {
    const tr01 = new Swiper(".training .photo", {
        effect: "cards",
        grabCursor: true,

    });
    const tr02 = new Swiper(".training .desc", {
        grabCursor: true,

    });

    tr01.controller.control = tr02;
    tr02.controller.control = tr01;


})



