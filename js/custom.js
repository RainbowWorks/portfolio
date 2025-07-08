
$(function () {

    const tl = gsap.timeline({});


    new Typed('.typed-h2', {
        strings: ['Neat.<br>Clear.<br>Purposeful.'],
        typeSpeed: 250,
        backSpeed: 100,
        backDelay: 1000,
        fadeOut: true,
        cursorChar: '',
        loop: false,
        backSpeed: 0,
    });

    // p용 타이핑
    new Typed('.typed-p', {
        strings: [
            '깔끔하게, 정돈된 화면 위에.<br>명확하게, 흐름을 잃지 않게.<br>목적 있게, 사용자 중심으로.'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        fadeOut: true,
        cursorChar: '',
        loop: false,
        backSpeed: 0,
    });


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



