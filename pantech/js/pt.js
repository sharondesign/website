window.addEventListener("load", function() {

scrollWork();
gnbMenu();
searchMenu();
productWork();
moviePlay();
otherLink(); 
breadcrumbMenu();
subSearch();

//메인페이지 스크롤
// function scrollWork() {
//     var htmlElem = document.querySelector("html");
//     var browserSize;
//     var a = 0;
//     browserSize = window.innerHeight;

//     document.addEventListener("mousewheel", lastEvent);
//     window.addEventListener("resize", resizeWork);

//     function resizeWork() {
//         browserSize = window.innerHeight;
//         console.log(browserSize)
//     }
//     var setT;
//     function lastEvent(e) {
//         clearTimeout(setT);
//         setT = setTimeout( function() {
//             mouseScroll(e);
//         }, 150)
//     }

//     function mouseScroll(e) {
//         // e.preventDefault();
//         if (e.wheelDeltaY > 0) {
//             // 스크롤 올렸음
//             a -= browserSize;
//             $("html").animate({scrollTop:a});
//             console.log("스크롤 올렸음");
//             console.log(a);
//             console.log(browserSize);
//             console.log(e.wheelDeltaY);
//         } else {
//             // 스크롤 내렸음
//             a += browserSize;
//             $("html").animate({scrollTop:a});
//             // htmlElem.scrollTop += browserSize;
//             console.log("스크롤 내렸음");
//             console.log(a);
//             console.log(browserSize);
//             console.log(e.wheelDeltaY);
//         };
//     }
// }



//메인페이지 마우스휠스크롤
function scrollWork() {
    var htmlElem = document.querySelector("html");
    var wrap = document.querySelector(".wrap.index");
    var topBtn = document.querySelector(".btn_top");
    var logoImg = document.querySelector(".logo img");
    var browserSize;
    var 지난DeltaY = 0;
    var 지난ScrollTop = 0;
    browserSize = 884;
    document.addEventListener("mousewheel", lastEvent);
    document.addEventListener("scroll", counter);
    topBtn.addEventListener("click", topWork);
    // window.addEventListener("resize", resizeWork);

    // function resizeWork() {
    //     browserSize = window.innerHeight = 884;
    //     console.log(browserSize)
    // }
    
    var setT;
    function lastEvent(e) {
        clearTimeout(setT);
        setT = setTimeout( function() {
            mouseScroll(e);
        }, 150)
    }

    function mouseScroll(e) {
        if(!document.querySelector(".index_main")) {return}
        // e.preventDefault();
        if (e.wheelDeltaY > 0) {
            // 스크롤 올렸음
            지난ScrollTop -= browserSize;
            $("html").animate({scrollTop:지난ScrollTop});
            console.log("스크롤 올렸음");
            console.log("지난ScorollTop : " + 지난ScrollTop);
            console.log("브라우저창높이 : " + browserSize);
            console.log("현재델타Y : " + e.wheelDeltaY);
            console.log("지난델타Y : " + 지난DeltaY);
        } else {
            // 스크롤 내렸음
            지난ScrollTop += browserSize;
            $("html").animate({scrollTop:지난ScrollTop});
            // htmlElem.scrollTop += browserSize;
            console.log("스크롤 내렸음");
            console.log("지난ScorollTop : " + 지난ScrollTop);
            console.log("브라우저창높이 : " + browserSize);
            console.log("현재델타Y : " + e.wheelDeltaY);
            console.log("지난델타Y : " + 지난DeltaY);
        };
        // 지난DeltaY = e.wheelDeltaY ;
    }

    function counter() {
        var scrollHeight = htmlElem.scrollTop;
        
        if(scrollHeight > 883) {
            logoImg.setAttribute("src", "images/logo_blue.png");
            wrap.className = 'wrap index topchange';
        } else if (scrollHeight < 884) {
            logoImg.setAttribute("src", "images/logo.png");
            wrap.className = 'wrap index';
        }
        if(scrollHeight > 0) {
            $(topBtn).fadeIn();
        } else if (scrollHeight < 884) {
            $(topBtn).fadeOut();
        }
        
    }
//탑버튼 애니메이션
    function topWork(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop:0 }, "1000");
    }

}


// function gnbMenu() {
//     var gnb = document.querySelector(".gnb");
//     var targetUls = document.querySelectorAll(".gnb > li")

//     for (var i = 0; i < targetUls.length; i++) {
//         targetUls[i].addEventListener("mouseenter", overWork);
//         targetUls[i].addEventListener("mouseleave", outWork);
//     }
//     // console.log(targetUls);
//     var openmenu;
//     var bg;
//     function overWork(e) {
//         var submenu = e.target.querySelector("ul");
//         var gnbBg = e.target.parentNode;
//         console.log(gnbBg);
//         if (submenu) {
//             submenu.classList.add("on");
//             openmenu = submenu
//         }
//         if (gnbBg) {
//             gnbBg.classList.add("on");
//             bg = gnbBg
//         }
//     }
//     function outWork(e) {
//         if (openmenu === undefined) {
//             return;
//         }
//         if (bg === undefined) {
//             return;
//         }
//         openmenu.classList.remove("on");
//         bg.classList.remove("on")
//     }
// }


// 헤더메뉴
function gnbMenu() {
    var headerBar = document.querySelector(".header");
    var gnb = document.querySelector(".gnb");
    var targetUls = document.querySelectorAll(".depth2");
    var lnbBtns = document.querySelectorAll(".lnb");
    gnb.addEventListener("mouseenter", overWork);
    gnb.addEventListener("mouseleave", outWork);
    for ( var i = 0; i < lnbBtns.length; i++) {
        lnbBtns[i].addEventListener("click", lnbWork);
    }
    
    // console.log(lnbBtns);
    
    
    var depth2Menu;

    function overWork(e) {

        if (targetUls) {
            for (var i = 0; i < targetUls.length; i++) {
                targetUls[i].classList.add("on");
            }
            depth2Menu = targetUls;
        }
        gnb.classList.add("on");
        headerBar.style.borderBottom = "2px solid #666666";
    }

    function outWork(e) {
        // console.log("out");
        if (depth2Menu === undefined) {
            return;
        }
        if (depth2Menu){
            for (var i = 0; i < targetUls.length; i++) {
                targetUls[i].classList.remove("on");
            }
        }
        gnb.classList.remove("on");
        headerBar.style.borderBottom = "";
    }

    function lnbWork(e) {
        e.preventDefault();
        if (e.target.classList.contains("on")) {
            e.target.classList.remove("on");
        } else {
            e.target.classList.add("on");
        }
        var depth3 = e.target.parentNode.querySelector("ul");
        console.log(depth3)
        // if (depth3 === undefined) {return}
        if (depth3.classList.contains("on")) {
            depth3.classList.remove("on");
        } else {
         depth3.classList.add("on");
        }
    }
}


//메인검색바
function searchMenu() {
    var Hsearch = document.querySelector(".header");
    var searchBtn = document.querySelectorAll(".util > a");
    // console.log(searchBtn)
    // Hsearch.addEventListener("click", searchWork);
    searchBtn[1].addEventListener("click", searchWork);
    function searchWork(e) {
        e.preventDefault();
       
        if (e.target.tagName !== "A" && e.target.className !== "search") {
            return;
        }
        if (Hsearch.classList.contains("on")) {
            Hsearch.classList.remove("on");
        } else {
            Hsearch.classList.add("on");
        }
    }
}
    
// 메인 상품슬라이드메뉴
function productWork() {
    if(!document.querySelector(".index_main")) {return}
    var productBtn = document.querySelector(".btn_pro");
    var proBtnBack = document.querySelector(".btn_back");
    var productDiv = document.querySelector(".main_top > .product");
    productBtn.addEventListener("click", proBtnWork);
    proBtnBack.addEventListener("click", proBtnWork);
    // console.log(productDiv);

    function proBtnWork(e) {
        e.preventDefault();
        if (productDiv.classList.contains("on")) {
            productDiv.classList.remove("on");
            productDiv.style.transition = "all 0.2s";
        } else {
            productDiv.classList.add("on");
            productDiv.style.transition = "all 1s";
            
        }
    }
}

//메인 동영상 클릭
function moviePlay() {
    if(!document.querySelector(".index_main")) {return}
    var mBtn = document.querySelector(".info .movie");
    var mcloseBtn = document.querySelector(".info .close_btn");
    var mPlay = document.querySelector(".movie_bg")
    mBtn.addEventListener("click", mBtnWork);
    mcloseBtn.addEventListener("click", mBtnWork);

    function mBtnWork(e) {
        e.preventDefault();
        if (mPlay.classList.contains("on")) {
            mPlay.classList.remove("on");
        } else {
            mPlay.classList.add("on");
        }
    }
}


//메인 하단링크메뉴
function otherLink() {
    var targetUl = document.querySelector(".other_link ul");
    var targetLis = document.querySelectorAll(".other_link ul li");

    for(var i = 0; i < targetLis.length; i++) {
        targetLis[i].addEventListener("mouseenter", overWork);
        targetLis[i].addEventListener("mouseleave", outWork);
    }

    function overWork(e) {
        e.target.classList.add("on");
    }
    function outWork(e) {
        e.target.classList.remove("on");
    }
}

//서브페이지 브레드커럼브
function breadcrumbMenu() {
    var bcMBtns = document.querySelectorAll(".local > a");
    var targetUls = document.querySelectorAll(".local ul");
    for ( var i = 0; i < bcMBtns.length; i++) {
        bcMBtns[i].addEventListener("click", clickWork);
    }
    
    function clickWork(e) {
        e.preventDefault();
        var targetUl = e.target.parentNode.querySelector("ul");
        if (targetUl.classList.contains("on")) {
            targetUl.classList.remove("on");
        } else {
            for (var i = 0; i < targetUls.length; i++) {
                targetUls[i].classList.remove("on");
            }
            targetUl.classList.add("on");
        }
        if (e.target.classList.contains("on")) {
            e.target.classList.remove("on")
        } else {
            for (var i = 0; i < bcMBtns.length; i++) {
                bcMBtns[i].classList.remove("on");
            }
            e.target.classList.add("on")
        }
    }
}


//서브 공통 하단검색바
// function subSearch() {
//     var pageBtn = document.querySelector(".p_btn");
//     pageBtn.addEventListener("click", clickWork);

//     function clickWork(e) {
//         e.preventDefault();
//         var searchBar = e.target.parentNode.querySelector(".schbar");
//         // if (e.target.className !== "search") {return}
//         if (e.target.className === "search") {
//             e.target.classList.add("on");
//         } else {
//             e.target.classList.remove("on");
//         }
//         if(searchBar.classList.contains("on")) {
//             searchBar.classList.remove("on");
//         } else {
//             searchBar.classList.add("on");
            
//         }

//         console.log(searchBar)
//     }

// }


function subSearch() {
    if (document.querySelector(".index_main")) { return }
    var pageBtns = document.querySelectorAll(".p_btn > a");
    pageBtns[2].addEventListener("click", clickWork);
    console.log(pageBtns)
    function clickWork(e) {
        e.preventDefault();
        var searchBar = e.target.parentNode.querySelector(".schbar");
        if (e.target.className === "search") {
            e.target.classList.add("on");
        } else {
            e.target.classList.remove("on");
        }
        if (searchBar.classList.contains("on")) {
            searchBar.classList.remove("on");
        } else {
            searchBar.classList.add("on");   
        }
    }

}



});