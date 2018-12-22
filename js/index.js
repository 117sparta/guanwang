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
    let phoneIcon = document.getElementById("phoneIcon");
    let mailIcon = document.getElementById("mailIcon");
    let link = document.getElementById("linkToNews");
    let diviLine1 = videoEle.clientHeight/4;
    let diviLine2 = videoEle.clientHeight-videoEle.clientHeight/4;
    if(t>=diviLine1) {
        navList[0].style.color = "white";
        phoneIcon.src="images/phone1-white.png";
        link.className="link-scroll-down";
        mailIcon.src="images/mail-light.png";
    }
    else {
        navList[0].style.color="black";
        phoneIcon.src="images/phone1-black.png";
        link.className="link-scroll-up";
        mailIcon.src="images/mail-black.png";
    }
    if(t>=diviLine2){
        navList[0].style.backgroundColor="white";
        navList[0].style.color = "black";
        phoneIcon.src="images/phone1-black.png";
        mailIcon.src="images/mail-black.png";
        link.className="link-scroll-up";
    } else if(t>=diviLine1 && t<diviLine2) {
        navList[0].style.backgroundColor = "transparent";
        navList[0].style.color = "white";
        phoneIcon.src="images/phone1-white.png";
        mailIcon.src="images/mail-light.png";
        link.className="link-scroll-down";
    }
};