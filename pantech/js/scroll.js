window.addEventListener("load", function() {

scrollWork();
function scrollWork() {
    var htmlElem = document.querySelector("html");
    var browerSize;
    var prevDeltaY = 0;
    var prevScrollTop = 0;
    browerSize = window.innerHeight;
    
    document.addEventListener("mouseWheel", scrollEvent);
    window.addEventListener("resize", resizeWork);

    function resizeWork() {
        browerSize = window.innerHeight;
        console.log(browerSize);
    }
    
    var setT;
    function scrollEvent() {
        clearTimeout(setT);
        setT = setTimeout ( function() {
            mouseScroll(e);
        }, 150)
    }

    function mouseScroll(e) {
        if (e.wheelDeltaY > 0) {
            prevScrollTop -= browerSize;
            $("html").animate({scrollTop:prevScrollTop});
            console.log("스크롤 올림");
            console.log("prevScrollTop : " + prevScrollTop);
            console.log("브라우저창높이 : " + browerSize);
            console.log("현재델타Y : " + e.wheelDeltaY);
            console.log("prevDeltaY : " + prevDeltaY);
        } else {
            prevScrollTop += browerSize;
            $("html").animate({scrollTop:prevScrollTop});
            console.log("스크롤 올림");
            console.log("prevScrollTop : " + prevScrollTop);
            console.log("브라우저창높이 : " + browerSize);
            console.log("현재델타Y : " + e.wheelDeltaY);
            console.log("prevDeltaY : " + prevDeltaY);
        };
    }
    
}


});