var monthNeededDrawn = [
    [
        {
            month: 6,
            message: "黄村公交维修厂充电站验收完成，正式投入运营",
            right:false
        },
        {
            month: 9,
            message: '运营平台搭建完成',
            otherMessage: '一开始组建并不容易，我们讨论了很久一开始组建并不容易，我们讨论了很久一开始组建并不容易，我们讨论了很久一开始组建并不容易，我们讨论了很久。',
            image: 'images/articulture.png',
            right:true
        }
    ],
    [
        {
            month: 2,
            message: '团队组建完成',
            right:true
        },
        {
            month: 7,
            message: '12月与公交集团达成协议在黄村公交维修厂建设公交汽车专用充电',
            right:false
        }
    ]
];
var points = [];
$(document).ready(function () {
    let distance = 300;
    let intervalOfYear = 250;
    let dividingNum = 13;
    let timeLine = $('.timeLine');
    let interval = intervalOfYear / dividingNum;
    let startPoint = 50;
    let top = $('.car').position().top;
    for (let i = 0; i < monthNeededDrawn.length; i++) {
        startPoint += distance * i;
        for (let j = 0; j < monthNeededDrawn[i].length; j++) {
            points.unshift(
                {
                    x: -3,
                    y: startPoint + (13 - monthNeededDrawn[i][j].month) * interval,
                    message: monthNeededDrawn[i][j].message,
                    otherMessage: monthNeededDrawn[i][j].otherMessage,
                    image: monthNeededDrawn[i][j].image,
                    right: monthNeededDrawn[i][j].right
                }
            );
        }
    }
    points.sort(function (a, b) {
        return a.y - b.y;
    });
    for (let i = 0; i < points.length; i++) {//画点
        let circle = $('<div></div>');
        circle.addClass('circle1');
        circle.css({"top": points[i].y + "px", "left": +points[i].x + "px"});
        timeLine.append(circle);
    }
    $('.timeLine').on('mouseup', (e) => { //监听鼠标松开事件，用来进行小车的移动。
        let distance = e.clientY - $('.newsHeader').outerHeight() - 90 + $('body').scrollTop(); //判断鼠标向下还是向上移动
        let car = $('.car');
        if (distance > -23 && distance < 520) {
            if (distance <= points[0].y) {
                car.animate({
                    top: points[0].y - 45
                },700);
                if(points[0].id) {
                    $(points[0].id).show(400);
                }
            } else if (distance >= points[points.length - 1].y) {
                car.animate({
                    top: points[points.length - 1].y - 45
                },700);
                if(points[points.length-1].id) $(points[points.length - 1].id).show(400);
            } else if (distance < top) {
                for (let i = 0; i < points.length; i++) {
                    if(distance>points[i].y && distance<points[i+1].y){
                        car.animate({
                            top: points[i].y - 45
                        },700);
                        if(points[i].id) {
                            $(points[i].id).show(400);
                        }
                        for(let j=i+1;j<points.length;j++) $(points[j].id).hide(400);
                        break;
                    }
                }
            } else if(distance > top){
                for (let i = 0; i < points.length; i++) {
                    if(distance>points[i].y && distance<points[i+1].y){
                        car.animate({
                            top: points[i+1].y - 45
                        },700);
                        if(points[i+1].id) {
                            $(points[i+1].id).show(400);
                        }
                        for(let j=0;j<i+1;j++) $(points[j].id).hide(400);
                        break;
                    }
                }
            }
        }
    });
    for (let i = 0; i < points.length; i++) {
        drawDialog(points[i],i)
    }
});
function drawDialog(i,index){
    let timeSequence = $('.timeSequence');
    let container = $('<div></div>');
    let shape = $('<span></span>');
    let content = $('<div></div>');
    if (i.otherMessage) {
        var hiddenContent = $('<p></p>');
        hiddenContent.append(i.otherMessage);
        hiddenContent.addClass('hiddenContent');
        hiddenContent.attr('id','hiddenContent'+index);
        i.id='#hiddenContent'+index;
    }
    if (i.image) {
        var image = $('<img src=' + i.image + '/>');
        image.addClass('hiddenImage')
    }
    container.addClass('dialog-container distance'+index);
    if(i.right){
        shape.addClass('small-shape-right');
    } else {
        shape.addClass('small-shape-left');
    }
    container.css({"top": (35 + i.y) + 'px',"z-index":points.length-index});
    content.addClass('dialog-content');
    content.append(i.message);
    container.append(shape);
    container.append(content);
    container.attr('id','container'+index);
    if (i.otherMessage) {
        container.append(hiddenContent);
    }
    if (i.image) {
        hiddenContent.append('<br/>', image);
    }
    timeSequence.append(container);
}