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
    let t = document.documentElement.scrollTop || document.body.scrollTop;
    let navList = document.getElementsByClassName("top-nav");
    let videoEle = document.getElementById("videoEle");
    if(t>videoEle.clientHeight){
        navList[0].style.backgroundColor="#110c1e";
    }
    else if(t<videoEle.clientHeight){
        if(navList[0].style) navList[0].removeAttribute("style");
    }
};