window.addEventListener("load", function(){
scrollWork();
portfolioWork();


//헤더고정
function scrollWork() {
    var htmlElem = document.querySelector("html");
    var headerElem = htmlElem.querySelector(".header_fixed");
    var m_btn = headerElem.querySelector(".mobile_btn");
    var navElem = headerElem.querySelector (".nav");
    document.addEventListener("scroll", counter);
    var i = 0;
    function counter () {
        i += 1;
        var scrollHeight = htmlElem.scrollTop;
        if(scrollHeight > 850) {
            headerElem.classList.add("on");
            navElem.classList.remove("on");
            m_btn.classList.remove("on");
            document.querySelector(".inner > .profile").classList.add("on");
        } if (scrollHeight > 2200) {
            document.querySelector(".about .motto").classList.add("on");
        } else if (scrollHeight < 850) {
            headerElem.classList.remove("on");
            navElem.classList.remove("on");
            m_btn.classList.remove("on");
        }
    }

    // 모바일버튼 
    m_btn.addEventListener("click", function m_btnWork(e){
        e.preventDefault();
        if (navElem.classList.contains("on")) {
            navElem.classList.remove("on");
            m_btn.classList.remove("on");
        } else {
            navElem.classList.add("on");
            m_btn.classList.add("on");
        }
    });
    
// 부드러운 스크롤 내리기
    var $navmenu = $('.nav > li > a'),
    $contents = $('.section'),
    $doc = $('html, body'); 

    $(function () {
        $navmenu.on('click', function(e){ 
            var $target = $(this).parent(), 
            idx     = $target.index(),
            section = $contents.eq(idx),
            offsetTop = section.offset().top; 
            $doc.stop()
             .animate({scrollTop :offsetTop}, 500);
             return false;
            });
        });

    // 해당위치에 도착시 버튼 색상바뀌기
        $(window).scroll(function(){ 
            var scltop = $(window).scrollTop();
            $.each($contents, function(idx, item){ 
                var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top; 
                
                if (targetTop <= scltop) {
                    $navmenu.removeClass('on');$navmenu.eq(idx).addClass('on'); 
                } if (!(0 <= scltop)) {$navmenu.removeClass('on'); 
            } 
        }) 
    }); 

}

// 디자인 포트폴리오 탭 변경
function portfolioWork() {
    var portfolioElem = document.querySelector(".section.portfolio")
    var designtabs = portfolioElem.querySelectorAll(".tab li a")
    var designcontents = portfolioElem.querySelectorAll(".contain ul")
    var sitePage = portfolioElem.querySelector(".site_slider");
    var targetAs = sitePage.querySelectorAll(".site_slider .subcon");
    var pageElem = portfolioElem.querySelector(".p_page");
    var imgPage = pageElem.querySelector(".p_page > img");
    
    for ( var i = 0; i < designtabs.length; i++) {
        designtabs[i].onclick = ( function(j) {
            return function() {
                // console.log(j)
                if (designtabs[j].classList.contains("on")) {
                    // removeOn();
                } else {
                    removeOn();
                    designtabs[j].classList.add("on");
                    designcontents[j].classList.add("on");
                }

                return false;
            }
        })(i);
    }
    function removeOn() {
        for ( var i = 0; i < designtabs.length; i++) {
            designtabs[i].classList.remove("on");
            designcontents[i].classList.remove("on");
        }
    } 
   
    // 디자인 상세페이지
    for ( var i = 0; i < designcontents.length; i++) {
        designcontents[i].addEventListener("click", function pageWork(e) {
            if (e.target.tagName === "SPAN" || e.target.tagName === "STRONG") {
                var imgSrc = e.target.parentNode.getAttribute("href");
                imgPage.setAttribute("src", imgSrc);
                pageOn();
            } else if (e.target.tagName === "A") {
                var imgSrc = e.target.getAttribute("href");
                imgPage.setAttribute("src", imgSrc);
                pageOn();
            } 
            e.preventDefault();
        })
    }
    // 사이트슬라이드 상세페이지    
    sitePage.addEventListener("click", function slideWork(e) {
        if (targetAs) {
            for (var i = 0; i < targetAs.length; i++) {
            targetAs[i].setAttribute("target", "_blank");
             }
         }
        if (e.target.className !== "more") {return;}
        if (e.target.tagName === "A") {
            var imgSrc = e.target.getAttribute("href");
            imgPage.setAttribute("src", imgSrc);
            pageOn();
        } 
        e.preventDefault();
    })

    // 상세페이지 열기
    function pageOn() {
        if (imgPage.parentNode.classList.contains("on")) {
            imgPage.parentNode.classList.remove("on");
        } else {
            imgPage.parentNode.classList.add("on");
        } 
    }



    // 상세페이지 닫기
    pageElem.addEventListener("click", function closeWork(e) {
        e.preventDefault();
        if (e.target) {
            pageElem.classList.remove("on");
        }
    })
        
}

 

        




});