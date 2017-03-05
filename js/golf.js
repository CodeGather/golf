$(function() {
    $('#slide2').swipeSlide({
        autoSwipe: true, //自动切换默认是
        speed: 3000, //速度默认4000
        continuousScroll: true, //连续滚动默认否
        lazyLoad: true, //懒加载默认否
        axisX: true,
        transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)', //过渡动画linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier
        firstCallback: function(i, sum, me) {
            me.find('.dot').children().first().addClass('cur');
        },
        callback: function(i, sum, me) {
            me.find('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
        }
    });
});
$(function() {
    $(document).on('swipe', '#item .weui_cell', function() {
        $('.delete').hide()
        $('.delete', this).show();
    })
    $(document).on('tap', '.delete', function() {
        $(this).parent().parent('.weui_cell').remove();
    })
});
var txt = "BEGIN:VCARD\r\nVERSION:3.0\r\nN:-Sql\r\nFN:moreshow\r\nTITLE:前端工程师\r\nNICKNAME:21克的爱情\r\nTEL;CELL;VOICE:15000946761\r\nTEL;WORK;VOICE:15000946761\r\nORG:组织机构\r\nEMAIL;PREF;INTERNET:raohong07@163.com\r\nADR;TYPE=WORK:;;启迪漕河泾科技园;松江区;上海市;221100;中国\r\nADR;TYPE=HOME:;;启迪漕河泾科技园;松江区;上海市;221100;中国\r\nNOTE;ENCODING=QUOTED-PRINTABLE:备注来自名片通讯录\r\nEND:VCARD";
$("#qr").click(function() {
    $("#qrcodeimg").empty().qrcode({ render: "image", ecLevel: "L", size: 300, background: "#fff", fill: "#000", text: txt });
});