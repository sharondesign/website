window.addEventListener("load", function() {

scrollWork();
function scrollWork() {
    var htmlElem = document.querySelector("html");
    var browserSize;
    var 지난DeltaY = 0;
    var 지난ScrollTop = 0;
    browserSize = window.innerHeight;

    document.addEventListener("mousewheel", lastEvent);
    window.addEventListener("resize", resizeWork);

    function resizeWork() {
        browserSize = window.innerHeight;
        console.log(browserSize)
    }
    var setT;
    function lastEvent(e) {
        clearTimeout(setT);
        setT = setTimeout( function() {
            mouseScroll(e);
        }, 150)
    }

    function mouseScroll(e) {
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

}


});