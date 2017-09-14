$(function(){
    var len = $(".list li").length;
    var index = 0;//图片序号
    var timer;
    $(".list li").click(function() {
        index = $(".list li").index(this);//获取鼠标点击的li的index
        showPic(index);
    }).eq(0).mouseover();
    //滑入停止动画，滑出开始动画
    $('.container').hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            showPic(index);
            index++;
            //最后一张图片之后，转到第一张
            if (index == len) {
                index = 0;
            }
        }, 3000);
    }).trigger("mouseleave");

    function showPic(curIndex) {
        var picWidth = $(".container ul.pic li").width();
        $(".pic").stop(true, false).animate({
            "marginLeft": -picWidth * curIndex + "px"   //改变marginTop属性的值达到轮播的效果
        }, 1000);
        $(".list li").removeClass("on")
            .eq(curIndex).addClass("on");
    }
});