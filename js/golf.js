//界面加载
$(function() {
    $('.weui_tab').tab(); //显示主体
});
//图片轮播效果
$(function() {
    $('#slide2').swipeSlide({
        autoSwipe: true, //自动切换默认是
        speed: 3000, //速度默认4000
        continuousScroll: true, //连续滚动默认否
        lazyLoad: true, //懒加载默认否
        axisX: true, //图片的滚动方式
        transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)', //过渡动画linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier
        firstCallback: function(i, sum, me) { //页面加载回调
            me.find('.dot').children().first().addClass('cur');
        },
        callback: function(i, sum, me) { //每次滚动回调
            me.find('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
        }
    });
});
//二维码生成
var txt = "BEGIN:VCARD\r\nVERSION:3.0\r\nN:-Sql\r\nFN:moreshow\r\nTITLE:前端工程师\r\nNICKNAME:21克的爱情\r\nTEL;CELL;VOICE:15000946761\r\nTEL;WORK;VOICE:15000946761\r\nORG:组织机构\r\nEMAIL;PREF;INTERNET:raohong07@163.com\r\nADR;TYPE=WORK:;;启迪漕河泾科技园;松江区;上海市;221100;中国\r\nADR;TYPE=HOME:;;启迪漕河泾科技园;松江区;上海市;221100;中国\r\nNOTE;ENCODING=QUOTED-PRINTABLE:备注来自名片通讯录\r\nEND:VCARD";
$("#qr").click(function() {
    $("#qrcodeimg").empty().qrcode({ render: "image", ecLevel: "L", size: 300, background: "#fff", fill: "#000", text: txt });
});
//微信内置浏览器检测
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    //console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
};
//输入详细地址的字数提示
$(function() {
    var max = $('#count_max').text();
    $('#textarea').on('input', function() {
        var text = $(this).val();
        var len = text.length;
        $('#count').text(len);
        if (len > max) {
            $(this).closest('.weui_cell').addClass('weui_cell_warn');
        } else {
            $(this).closest('.weui_cell').removeClass('weui_cell_warn');
        }
    });
});
//购买信息的验证
var $form = $("#form");
$form.form();
$("#formSubmitBtn").on("click", function() {
    $("#form").validate(function(error) {
        if (error) {

        } else {
            $.toptips('验证通过提交', 'ok');
        }
    });

});
//新手帮助文章
$(function() {
    $("img").addClass('weixin');
    $('.weui-weixin-zan').click(function() {
        if ($(this).hasClass('zaned')) {
            $(this).removeClass('zaned');
            var val = $(this).next().html();
            if (parseInt(val) == 0) {
                var i = 1;
            } else {
                var i = parseInt(val) - 1;
            }
            $(this).next().html(i);
        } else {
            $(this).addClass('zaned');
            var val = $(this).next().html();
            $(this).next().html(parseInt(val) + 1);
            //ajax操作
        }
    });
});