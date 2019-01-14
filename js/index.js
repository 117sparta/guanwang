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
window.onscroll = function () {
    let t = document.documentElement.scrollTop || document.body.scrollTop
    let navList = document.getElementsByClassName("top-nav")

    let videoEle = document.getElementById("videoEle")
    if (t > videoEle.clientHeight) {
        navList[0].style.backgroundColor = "#110c1e"
        navList[0].style.color = "#ffffff"
        $("#phoneIcon").attr('src', './images/phone.png')
        $("#mailIcon").attr('src', './images/mail.png')
    }
    else if (t < videoEle.clientHeight) {
        if (navList[0].style) navList[0].removeAttribute("style")
        $("#phoneIcon").attr('src', './images/phone1.png')
        $("#mailIcon").attr('src', './images/mail1.png')
    }
}

$(function () {
    changeVideoSize()
    //监听窗口大小变化
    $(window).resize(function () {
        changeVideoSize()
    })
    //调整视频大小
    function changeVideoSize(){
        let videoWrap = $("#videoWrapper")
        if (window.screen.width > 1024) {
            videoWrap.css({
                height: window.screen.height * 0.7 + 'px'
            })
        } else {
            if (videoWrap.attr('style')) {
                videoWrap.attr('style',null)
            }
        }
    }

    let count_times = 0
    let count_degree = 0
    let count_min = 0
    let count_gun = 0
    let times_id = setInterval(function () {
        count_times += parseInt(Math.random() * 8) + 1
        $("#count_times").html(count_times)
        if (count_times > 420) {
            clearInterval(times_id)
            times_id = setInterval(function () {
                count_times += parseInt(Math.random() * 5) + 1
                $("#count_times").html(count_times)
            }, 60000)
        }
    }, 100)
    let degree_id = setInterval(function () {
        count_degree += parseInt(Math.random() * 200) + 1
        $("#count_degree").html(count_degree)
        if (count_degree > 10670) {
            clearInterval(degree_id)
            degree_id = setInterval(function () {
                count_degree += parseInt(Math.random() * 100) + 1
                $("#count_degree").html(count_degree)
            }, 60000)
        }
    }, 100)
    let min_id = setInterval(function () {
        count_min += parseInt(Math.random() * 600) + 1
        $("#count_min").html(count_min)
        if (count_min > 31235) {
            clearInterval(min_id)
            min_id = setInterval(function () {
                count_min += parseInt(Math.random() * 60) + 1
                $("#count_min").html(count_min)
            }, 60000)
        }
    }, 100)
    let gun_id = setInterval(function () {
        count_gun += parseInt(Math.random() * 3) + 1
        if (count_gun > 200) {
            count_gun = 200
            clearInterval(gun_id)
        }
        $("#count_gun").html(count_gun)
    }, 100)

})
