/**
 * Created by Administrator on 2017/2/20.
 */
window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        mousewheelControl: true,
        // loop: true,
        speed: 500,  //切换速度（单位：毫秒）
        keyboardControl: true,
        // effect: 'fade',       //切换效果  fade、cube、coverflow、flip
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
            console.log(swiper.activeIndex);

            if (swiper.activeIndex == 1) {
                setTimeout(function () {
                    $('.p2 .box,.p2 .boxOther').removeClass('current');
                }, 200);
            }
            if (swiper.activeIndex != 1) {
                $('.p2 .box,.p2 .boxOther').addClass('current');
            }
            /*待修改-索引是6*/
            if (swiper.activeIndex == 1) {
                setTimeout(function () {
                    $('.p7 .box').removeClass('current');
                }, 200);
            }
            if (swiper.activeIndex != 1) {
                $('.p7 .box').addClass('current');
            }
            /*待修改-索引是8*/
            if (swiper.activeIndex == 2) {
                setTimeout(function () {
                    $('.p8 .box').removeClass('current');
                    setTimeout(function () {
                        $('.p8 .box img+img').addClass('ani').attr({
                            'swiper-animate-effect': 'fadeOutDown',
                            'swiper-animate-delay': '1s',
                            'swiper-animate-duration': '3s'
                        })
                    }, 500)
                }, 200);
            }
            if (swiper.activeIndex != 2) {
                $('.p8 .box').addClass('current');
            }
            /*待修改-索引是10*/
            if (swiper.activeIndex == 1) {
                setTimeout(function () {
                    $('.p10 .box').removeClass('current');
                    setTimeout(function () {
                        $('.p10 .box img:nth-child(4),.p10 .box img:nth-child(5)').addClass('ani').attr({
                            'swiper-animate-effect': 'fadeIn',
                            'swiper-animate-delay': '1s',
                            'swiper-animate-duration': '3s'
                        })
                    }, 500)
                }, 200);
            }
            if (swiper.activeIndex != 1) {
                $('.p10 .box').addClass('current');
            }
            /*待修改-索引是12*/
            if (swiper.activeIndex == 1) {


                (function () {
                    var p12 = document.querySelector('.p12');
                    var moveLength = 0;
                    var startPosition, endPosition, deltaX, deltaY;

                    p12.addEventListener('touchstart', function (e) {
                        var touch = e.touches[0];
                        startPosition = {
                            x: touch.pageX,
                            y: touch.pageY
                        };
                    });

                    p12.addEventListener('touchmove', function (e) {
                        var touch = e.touches[0];
                        endPosition = {
                            x: touch.pageX,
                            y: touch.pageY
                        };

                        deltaX = endPosition.x - startPosition.x;
                        deltaY = endPosition.y - startPosition.y;
                        moveLength = parseInt(Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2)));
                        console.log(moveLength);


                        if ($('.p12 img:nth-child(1)').get(0).style.marginTop >= -406 + 'px') {
                            $('.p12 img:nth-child(1)').get(0).style.marginTop = -406 + 'px';
                        } else {
                            $('.p12 img:nth-child(1)').get(0).style.marginTop = -520 + moveLength + 'px';

                        }
                        if ($('.p12 img:nth-child(2)').get(0).style.marginTop >= -366 + 'px') {
                            $('.p12 img:nth-child(2)').get(0).style.marginTop = -366 + 'px';
                        } else {
                            $('.p12 img:nth-child(2)').get(0).style.marginTop = -430 + moveLength + 'px';

                        }
                        if ($('.p12 img:nth-child(3)').get(0).style.marginTop >= -368 + 'px') {
                            $('.p12 img:nth-child(3)').get(0).style.marginTop = -368 + 'px';
                        } else {
                            $('.p12 img:nth-child(3)').get(0).style.marginTop = -432 + moveLength + 'px';

                        }

                        //txt
                        if ($('.p12 .txt').get(0).style.marginLeft <= -410 + 'px') {
                            $('.p12 .txt').get(0).style.marginLeft = -410 + 'px';
                        } else {
                            $('.p12 .txt').get(0).style.marginLeft = -180 + moveLength + 'px';

                        }
                    });
                })();

            }

        }


    });


};