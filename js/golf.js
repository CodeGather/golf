$(function() {
    $('#slide2').swipeSlide({
        autoSwipe: true, //自动切换默认是
        speed: 3000, //速度默认4000
        continuousScroll: true, //连续滚动默认否
        lazyLoad: false, //懒加载默认否
        autoSwipe: true,
        transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)', //过渡动画linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier
        firstCallback: function(i, sum, me) {
            me.find('.dot').children().first().addClass('cur');
        },
        callback: function(i, sum, me) {
            me.find('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
        }
    });
});