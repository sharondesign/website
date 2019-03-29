window.addEventListener("load", function() { 
topIamges();
scrollWork();

function topIamges() {
    var randomLis = document.querySelectorAll(".top li");
    var randomText1 = document.querySelectorAll(".first .text");
    var randomText2 = document.querySelectorAll(".second .text");
    var randomText3 = document.querySelectorAll(".third .text");
    var randomImg = Math.floor(Math.random() * 3);
    var randomNum = Math.floor(Math.random() * 2);
    randomLis[randomImg].classList.add("on");
    randomText1[randomNum].classList.add("on");
    randomText2[randomImg].classList.add("on");
    randomText3[randomImg].classList.add("on");
}

function scrollWork() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    var htmlElem = document.querySelector("html");
    var headerLogo = document.querySelector(".header .logo");
    var headerSns = document.querySelector(".header .sns_top");
    var appDown = document.querySelector(".header .app_bk");
    var rider = document.querySelector(".top .rider");
    var bike = document.querySelector(".ani .bike");
    var people = document.querySelector(".ani .people");
    var pay = document.querySelector(".ani .pay");
    var scrollbtn = document.querySelector(".scroll_btn");

    var browserSize;
    var 지난DeltaY = 0;
    var 지난ScrollTop = 0;
    browserSize = window.innerHeight;

    document.addEventListener("mousewheel", lastEvent);

    var setT;
    function lastEvent(e) {
        clearTimeout(setT);
        setT = 
        setTimeout( function() {
            mouseScroll(e);
        }, 150)
    }

    function mouseScroll(e) {
        // e.preventDefault();
        var 스크롤된높이 = htmlElem.scrollTop;
        if (e.wheelDelta > 0) {
            // 스크롤 올렸음
            지난ScrollTop -= browserSize;
            $('html, body').animate({scrollTop:지난ScrollTop});
            console.log("스크롤 올렸음");
            console.log("지난ScorollTop : " + 지난ScrollTop);
            console.log("브라우저창높이 : " + browserSize);
            console.log("현재델타Y : " + e.wheelDeltaY);
            console.log("지난델타Y : " + 지난DeltaY);
        } else {
            // 스크롤 내렸음
            지난ScrollTop += browserSize;
            $('html, body').animate({scrollTop:지난ScrollTop});
            if (지난ScrollTop > 스크롤된높이) {
            console.log("스크롤된높이 : " + 스크롤된높이);
            console.log("browserSize: " + browserSize);
            appDown.classList.add("on");
            scrollbtn.classList.add("on")
        } else if (지난ScrollTop === 0 || 스크롤된높이 === 0){
            appDown.classList.remove("on");
            scrollbtn.classList.remove("on")
        }
        if (browserSize < 지난ScrollTop || browserSize === 지난ScrollTop ) {
            rider.classList.add("on");
        } else {
            rider.classList.remove("on");
        }
        
        if (지난ScrollTop === browserSize) {
            bike.classList.add("on");
        }
        if (지난ScrollTop > browserSize) {
            people.classList.add("on");
        }
        if (지난ScrollTop > browserSize) {
            pay.classList.add("on");
        }
        if (지난ScrollTop > browserSize) {
            headerLogo.classList.add("on");
            headerSns.classList.add("on");
        } else if (지난ScrollTop < 3000) {
            headerLogo.classList.remove("on");
            headerSns.classList.remove("on");
        }
            // htmlElem.scrollTop += browserSize;
            console.log("스크롤 내렸음");
            console.log("지난ScorollTop : " + 지난ScrollTop);
            console.log("브라우저창높이 : " + browserSize);
            console.log("현재델타Y : " + e.wheelDeltaY);
            console.log("지난델타Y : " + 지난DeltaY);
        };
        
        
    }

    var $scroll_btn = $('.scroll_btn > li > a'),
    $contents = $('.content'),
    $doc = $('html, body'); 

    // 해당위치에 도착시 버튼 바뀌기
        $(window).scroll(function(){ 
            var scltop = $(window).scrollTop();
            $.each($contents, function(idx, item){ 
                var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top; 
                
                if (targetTop <= scltop) {
                    $scroll_btn.removeClass('on');$scroll_btn.eq(idx).addClass('on'); 
                } if (!(0 <= scltop)) {$scroll_btn.removeClass('on'); 
            } 
        }) 
    }); 

}



});