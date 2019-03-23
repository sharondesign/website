window.addEventListener("load", function() {
inhouseBtn();
innovaScroll();
svcMenu();
gnbmenu();
commerceBtn();




function svcMenu() {
    var svc = document.querySelector(".svc");
    // if (!svc) {return}
    svc.addEventListener("click", svcWork);

    function svcWork(e) {
        e.preventDefault();

        if(e.target.tagName !== "A") {
            return;
        }
        var svcUl = e.target.parentNode.querySelector("ul");
        var svcA = e.target.parentNode.querySelector("a");

        if (svcA.classList.contains("on")) {
            svcA.classList.remove("on");
        } else {
            svcA.classList.add("on");
        }
        if (svcUl.classList.contains("on")) {
            svcUl.classList.remove("on");
        } else {
            svcUl.classList.add("on");
        }
    }
}


function gnbmenu() {
    var htmlElem = document.querySelector("html");
    var bg = document.querySelector(".header");
    var targetImg = document.querySelector(".logo img");
    var gnbBtn = document.querySelector(".gnb");
    var gnbLi = document.querySelectorAll(".gnb > li");
    var subLi = document.querySelectorAll(".gnb .sub");
    document.addEventListener("scroll", counter);
    var i = 0;

    function counter () {
        var bgHeader = htmlElem.scrollTop
        if (bgHeader > 50) {
            bg.classList.add("on");
            targetImg.setAttribute("src", "images/h1_sk_planet_s.png")
            targetImg.style.paddingTop = "18px";            
        } else if (bgHeader < 50) {
            bg.classList.remove("on");
            targetImg.setAttribute("src", "images/h1_sk_planet.png")
            targetImg.style.paddingTop = "";
        }
    }

    for (var i = 0; i < gnbLi.length; i++) {
        gnbLi[i].addEventListener("mouseenter", overWork);
        gnbLi[i].addEventListener("mouseleave", outWork);
    }
    var depth1;

    function overWork(e) {
        var sub1 = e.target.querySelector("ul");
        if (sub1) {
            sub1.classList.add("on");
            bg.style.height = "148px";
            depth1 = sub1;
        }
    }

    function outWork(e) {
        if (depth1 === undefined) {
            return;
        }
        depth1.classList.remove("on");
        bg.style.height = "103px";
    }

    for (var i = 0; i < subLi.length; i++) {
        subLi[i].addEventListener("mouseenter", overSub);
        subLi[i].addEventListener("mouseleave", outSub);
    }   
    var depth2;

    function overSub(e) {
        var sub2 = e.target.querySelector("ul");
        console.log(sub2)
        if (sub2) {
            sub2.classList.add("on");
            bg.style.height = "195px";
            depth2 = sub2;
        }
    }

    function outSub(e) {
        if (depth2 === undefined) {
            return;
        }
        console.log(depth2)
        depth2.classList.remove("on");
        bg.style.height = "148px";
    }
}


function inhouseBtn() {
    var inhouse = document.querySelector(".inhouse");
    inhouse.addEventListener("click", inhouseWork);

    function inhouseWork(e) {
        e.preventDefault();

        if(e.target.tagName !== "IMG") {
            return;
        }
        var targetUl = e.target.parentNode.parentNode.querySelector("ul");
        if (targetUl.classList.contains("on")) {
            targetUl.classList.remove("on");
        } else {
            targetUl.classList.add("on");
        }
    }
}

function innovaScroll() {
    if (document.querySelector(".main_content")) { return }
    var htmlElem = document.querySelector("html");
    document.addEventListener("scroll", counter);
    var i = 0;
    function counter () {
        var scrollHeight = htmlElem.scrollTop;
        if (scrollHeight > 170) {
            document.querySelector(".data").classList.add("on");
        }
        if (scrollHeight > 270) {
            document.querySelector(".biz").classList.add("on");
        }
    }
}


function commerceBtn() {
    if (!document.querySelector(".main_content")) { return }
    var commerce = document.querySelector(".main_content .col1.Business .num1");
    var marketing = document.querySelector(".main_content .col1.Business .num2");
    var infoAside = document.querySelector(".info_aside");
    var asideDiv = document.querySelectorAll(".info_aside > div");
    var close = document.querySelectorAll(".info_aside > div > a");

    close[0].addEventListener("click", closeWork);
    close[1].addEventListener("click", closeWork);
    marketing.addEventListener("click", clickWork);
    commerce.addEventListener("click", clickWork);
            
    function clickWork(e) {
        e.preventDefault();
        var targetLi = e.target.parentNode.parentNode;
        var targetLis = targetLi.parentNode.querySelectorAll("li");
        if(e.target.tagName !== "IMG"){return}
            for (var i = 0; i < targetLis.length; i++) {
                targetLis[i].classList.remove("on")
            }
            targetLi.classList.add("on");

            
        // 처음 클릭시
        if (!asideDiv[0].classList.contains("on") && !asideDiv[1].classList.contains("on")) {
            if (targetLi.classList.contains("num1")) {
                asideDiv[1].classList.remove("on");
                asideDiv[1].style.zIndex = "0";
                asideDiv[0].classList.add("on");
                asideDiv[0].style.zIndex = "100";
                infoAside.classList.add("on");

            } else if (targetLi.classList.contains("num2") ) {
                asideDiv[0].classList.remove("on");
                asideDiv[0].style.zIndex = "0";
                asideDiv[1].classList.add("on");
                asideDiv[1].style.zIndex = "100";
                infoAside.classList.add("on");
            }
        } else {
        // 두번째부터 클릭시
            // console.log("2");
            if (targetLi.classList.contains("num1")) {
                asideDiv[0].classList.remove("on");
                asideDiv[1].style.zIndex = "0";
                asideDiv[0].classList.add("on");
                asideDiv[0].style.zIndex = "100";
            } else if (targetLi.classList.contains("num2") ) {
                asideDiv[0].classList.remove("on");
                asideDiv[0].style.zIndex = "0";
                asideDiv[1].classList.add("on");
                asideDiv[1].style.zIndex = "100";
            }
        }
    }
    function closeWork(e) {
        e.preventDefault();
        // console.log(e.target)
        if (infoAside.classList.contains("on")) {
            infoAside.classList.remove("on");
            asideDiv[0].classList.remove("on");
            asideDiv[1].classList.remove("on");
        } 
        commerce.classList.remove("on");
        marketing.classList.remove("on");
        
    }
    
}




});