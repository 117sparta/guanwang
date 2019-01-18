/*window.onload = function(){
    let wrap = document.getElementById("wrap");
    let videoEle = document.getElementById("videoEle");
    let dataBulletin = document.createElement("div");
    dataBulletin.className = 'data-bulletin';
    console.log(videoEle.clientHeight);
    dataBulletin.style.top = ''+(videoEle.clientHeight-videoEle.clientHeight/13)+'px';
    console.log(dataBulletin.style.top);
    wrap.appendChild(dataBulletin);
}
*/

/*window.onresize = function (){
    let dataBulletin = document.getElementsByClassName("data-bulletin");
    let videoEle = document.getElementById("videoEle");
    dataBulletin[0].style.height = videoEle.clientHeight/5;
}*/


$(function () {
    var times_id, degree_id, min_id, gun_id
    //滚动数字
    function scrollNum() {
        let f = 100
        let avg = 105
        let count_times = 0
        let count_degree = 0
        let count_min = 0
        let count_gun = 0
        let max_times = 420
        let max_degree = 10670
        let max_min = 31235
        let max_gun = 200
        times_id = setInterval(function () {
            count_times += Math.ceil(max_times / avg)
            if (count_times > max_times) {
                times_id = clearInterval(times_id)
                count_times = max_times
            }
            $("#count_times").html(count_times)
        }, f)
        degree_id = setInterval(function () {
            count_degree += Math.ceil(max_degree / avg)
            if (count_degree > max_degree) {
                degree_id = clearInterval(degree_id)
                count_degree = max_degree
            }
            $("#count_degree").html(count_degree)
        }, f)
        min_id = setInterval(function () {
            count_min += Math.ceil(max_min / avg)
            if (count_min > max_min) {
                min_id = clearInterval(min_id)
                count_min = max_min
            }
            $("#count_min").html(count_min)
        }, f)
        gun_id = setInterval(function () {
            count_gun += Math.ceil(max_gun / avg)
            if (count_gun > max_gun) {
                count_gun = max_gun
                gun_id = clearInterval(gun_id)
            }
            $("#count_gun").html(count_gun)
        }, f)
    }

    let flag = true//标记数字第一次出现
    //第一次拉到数字出现的地方开始滚动
    function numIsShow() {
        let t = document.documentElement.scrollTop || document.body.scrollTop
        let numText = document.querySelector('.number')
        //数字中线出现在视口
        if (t + window.innerHeight >= (numText.offsetTop + numText.offsetHeight / 2)) {
            if (flag) {
                scrollNum()//数字开始滚动
                flag = false
            }
        }
    }
    numIsShow()//刷新页面看到数字也开始滚动

    //监听鼠标滚动，调整顶部导航颜色
    window.onscroll = function () {
        let t = document.documentElement.scrollTop || document.body.scrollTop
        let navList = document.getElementsByClassName("top-nav")

        let videoEle = document.getElementById("videoEle")
        if (t > videoEle.clientHeight - navList[0].clientHeight) {
            navList[1].style.visibility = "visible"
            navList[0].style.visibility = "hidden"
        } else {
            navList[0].style.visibility = "visible"
            navList[1].style.visibility = "hidden"
        }
        numIsShow()
    }

    //监听鼠标进入数字区域，让数字重新滚动
    var area = document.querySelector('#numArea')
    area.addEventListener('mouseenter', function () {
        if (times_id || degree_id || min_id || gun_id) {
        } else {
            scrollNum()
        }
    })

    //调整视频大小
    function changeVideoSize() {
        let videoWrap = $("#videoWrapper")
        if (window.screen.width > 1024) {
            videoWrap.css({
                height: window.screen.height * 0.7 + 'px'
            })
        } else {
            if (videoWrap.attr('style')) {
                videoWrap.attr('style', null)
            }
        }
    }
    changeVideoSize()
    //监听窗口大小变化，适应视频大小
    $(window).resize(function () {
        changeVideoSize()
    })

    //监听视频加载完成，切换视频文字，调整顶部导航条文字颜色
    var videoEle = document.querySelector("#videoEle")
    var timeId = 0
    videoEle.oncanplay = function () {
        if (timeId) {
            clearInterval(timeId)
        }
        let firstText = $(".content1")
        let secondText = $(".content2")
        let phone = $("#phoneIcon")
        let mail = $("#mailIcon")
        let navList = document.getElementsByClassName("top-nav")
        timeId = setInterval(() => {
            firstText.toggle()
            secondText.toggle()
            if (firstText.is(':visible')) {
                phone.attr('src', './images/phone.png')
                mail.attr('src', './images/mail.png')
                navList[0].style.color = "#ffffff"
            } else {
                phone.attr('src', './images/phone1.png')
                mail.attr('src', './images/mail1.png')
                navList[0].style.color = "#000000"
            }
        }, 5000)

    }

})
