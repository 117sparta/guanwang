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
    let flag = true
    numIsShow()
    //监听滚动事件
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

    function numIsShow() {
        let t = document.documentElement.scrollTop || document.body.scrollTop
        let numText = document.querySelector('.number')
        if (t + window.innerHeight >= (numText.offsetTop + numText.offsetHeight / 2)) {
            if (flag) {
                scrollNum()//数字开始滚动
                flag = false
            }
        }
    }

    //动态数字
    function scrollNum() {
        let f = 100
        let count_times = 0
        let count_degree = 0
        let count_min = 0
        let count_gun = 0
        let times_id = setInterval(function () {
            count_times += parseInt(Math.random() * 3) + 1
            $("#count_times").html(count_times)
            if (count_times > 420) {
                clearInterval(times_id)
                times_id = setInterval(function () {
                    count_times += parseInt(Math.random() * 5) + 1
                    $("#count_times").html(count_times)
                }, 60000)
            }
        }, f)
        let degree_id = setInterval(function () {
            count_degree += parseInt(Math.random() * 100) + 1
            $("#count_degree").html(count_degree)
            if (count_degree > 10670) {
                clearInterval(degree_id)
                degree_id = setInterval(function () {
                    count_degree += parseInt(Math.random() * 100) + 1
                    $("#count_degree").html(count_degree)
                }, 60000)
            }
        }, f)
        let min_id = setInterval(function () {
            count_min += parseInt(Math.random() * 300) + 1
            $("#count_min").html(count_min)
            if (count_min > 31235) {
                clearInterval(min_id)
                min_id = setInterval(function () {
                    count_min += parseInt(Math.random() * 60) + 1
                    $("#count_min").html(count_min)
                }, 60000)
            }
        }, f)
        let gun_id = setInterval(function () {
            count_gun += parseInt(Math.random()) + 1
            if (count_gun > 200) {
                count_gun = 200
                clearInterval(gun_id)
            }
            $("#count_gun").html(count_gun)
        }, f)
    }

    changeVideoSize()
    //监听窗口大小变化
    $(window).resize(function () {
        changeVideoSize()
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

    //切换视频文字，调整导航条文字颜色
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
        }, 7000)

    }


})
