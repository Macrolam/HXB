/**
 * Created by Administrator on 2017/2/19.
 */
window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheelControl: true,
        loop: true,
        speed: 1500,  //切换速度（单位：毫秒）
        keyboardControl: true,
        effect: 'fade',       //切换效果  fade、cube、coverflow、flip
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },

        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);

            console.log(swiper.activeIndex);

           /* if(swiper.activeIndex==5){
                setTimeout(function () {
                    $('.swiper-slide').eq(swiper.activeIndex).find('img:nth-child(3)').addClass(' wanMove');
                },2000)*/

            }

            
    });


    //page1文字控制---最后执行的代码a--定时器
    ;
    (function () {
        var oTxt = document.querySelector('.txt');
        var arr = ['大漆', '本草纲目 记载', '凡验漆,惟稀者以物蘸起', '细而不断,端而急收', '大漆又名生漆', '漆树自然分泌的乳,白色的液体', '日晒后形成黑色漆膜', '八年以上的漆树可产漆', '三伏天所割之漆质最佳'];
        var oTagP = null;
        var timerTxt = null;
        var j = 0;

        timerTxt = setInterval(function () {
            oTagP = document.createElement('p');
            oTagP.innerHTML = arr[j];
            oTxt.appendChild(oTagP);
            j++;
            if (j > arr.length - 1) {
                j = 0;
                clearInterval(timerTxt);
            }
            var aa = document.getElementsByTagName('p')[0];
            aa.style.opacity = '0.4';


            $('.txt p').animate({
                'opacity': '.5',
            }, 10000).animate({
                'opacity': '1',
            }, 1000)
        }, 500);

        /*时间间隔不一致------未能实现*/
        function stepTime(beginTime) {
            var endTime = 2000;
            return beginTime += Math.floor((endTime - beginTime) * 0.2);//总是返回608s
        }

        //page1  咖啡豆控制
        setTimeout(function () {
            setTimeout(function () {
                $(".p1 img:nth-child(5),.p1 img:nth-child(6)").addClass('animated wanMove');
            }, 2000);
        }, 2000);


    })();

};