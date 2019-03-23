// window.addEventListener("load", function() {
$(document).ready(function(){

var a = $('.slider').bxSlider({
    auto:true,
    pagerCustom : '.list',
    pause : 4000,
    onSliderLoad: function() {
        var root = this;
        root.stopAuto();
        setTimeout(function(){
            root.startAuto();
            // console.log("10초후")
        },10000);

    },
    onSlideBefore : function($slideElement, oldIndex, newIndex){
        var root =  this;
        // console.log(newIndex)
        if(newIndex === 0){
            root.stopAuto();
          setTimeout(function(){
            root.startAuto();
          },10000);
        }
        if(newIndex === 2){
            root.stopAuto();
          setTimeout(function(){
            root.startAuto();
          },5200);
        }
    }
});

$('.view_slider').bxSlider({
    maxSlides: 3,
    moveSlides: 1,
    slideWidth :560
});

navMenu();
explain();

//헤더메뉴
function navMenu() {
    var htmlElem = document.querySelector("html");
    var moreBtn = document.querySelector(".gnb .more");
    var headerB = document.querySelector("header");
    var navwrap = document.querySelector(".navwrap");
    var schElem = document.querySelector(".search");

    var dealerwrap = document.querySelector(".dealerwrap");
    var mobileMenu = document.querySelector(".m_header .menu");
    var mobileDealer = document.querySelector(".m_header .dealer");
    var closeBtn = document.querySelectorAll(".navbtn_close")
    var mWidth = window.innerWidth;

    moreBtn.addEventListener("click", moreBtnWork);
    schElem.addEventListener("click", srchWork);
    mobileDealer.addEventListener("click", dealerWork);
    mobileMenu.addEventListener("click", mMenuWork);
    for (var i = 0; i < closeBtn.length; i++) {
        closeBtn[i].addEventListener("click", closeWork);
    }
    
    function srchWork(e) {
        e.preventDefault();
        if (schElem.value === "" && e.target.classList.contains(".btn_sch")) {
            alert("검색어를 입력해 주세요.");
            console.log(e.target.classList.contains(".btn_sch"))
        }
    }
    // more버튼
    function moreBtnWork(e) {
        e.preventDefault();

        if (headerB.classList.contains("on")) {
            headerB.classList.remove("on"); 
            htmlElem.classList.remove("on");
            navwrap.classList.remove("on"); 
        } else {
            headerB.classList.add("on");
            htmlElem.classList.add("on");
            navwrap.classList.add("on");
        }   
    }

    //모바일메뉴버튼
    function mMenuWork(e) {
        e.preventDefault();

        if (navwrap.classList.contains("on")){
            navwrap.classList.remove("on");
            htmlElem.classList.remove("on");
            headerB.classList.remove("on");
         } else {
             navwrap.classList.add("on");
             htmlElem.classList.add("on");
             headerB.classList.add("on");
        } 
    }

    //모바일 딜러버튼
    function dealerWork(e) {
        e.preventDefault();

        if (dealerwrap.classList.contains("on")) {
            dealerwrap.classList.remove("on");
            htmlElem.classList.remove("on");
            headerB.classList.remove("on");
        } else {
            dealerwrap.classList.add("on");
            htmlElem.classList.add("on");
            headerB.classList.add("on")
        }
    }

    //닫기버튼
    function closeWork(e) {
        e.preventDefault();

        if (navwrap.classList.contains("on")) {
            navwrap.classList.remove("on");
            htmlElem.classList.remove("on");
            headerB.classList.remove("on");
        } else if (dealerwrap.classList.contains("on")) {
            dealerwrap.classList.remove("on");
            htmlElem.classList.remove("on");
            headerB.classList.remove("on");
        }
    }
}

//부연설명
function explain() {
    var infoBtn = document.querySelector(".section .info");
    var close = document.querySelectorAll(".section .explain .close");
    var ex2 = document.querySelector(".explain.num2");
    var ex3 = document.querySelector(".explain.num3");
    for ( var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", closeWork);
    }
    infoBtn.addEventListener("click", explainWork);
    // console.log(close)
    function explainWork(e) {
        e.preventDefault();
        if(e.target.tagName !== "SPAN") {return}

        if (e.target.classList.contains("num2")) {
            ex3.classList.remove("on");
            ex2.classList.add("on");
        } else if (e.target.classList.contains("num3")) {
            ex2.classList.remove("on");
            ex3.classList.add("on");
        }
    }

    function closeWork(e) {
        e.preventDefault();
        if (e.target.tagName !== "A") {return}
        // console.log(e.target)
        if(ex2.classList.contains("on")){
            ex2.classList.remove("on");
        } else if (ex3.classList.contains("on")){
            ex3.classList.remove("on");
        }
    }
}




});