jQuery(function($) {

	//language
	$(".kor a").addClass("on");
	$('a.lang').click(function(){
		$('a.lang').removeClass("on");
		$(this).addClass("on");
	});
	//width_setting
	function setWidth(){
		//LNB
		var docuSize = $(document).width();
		var a = ((docuSize-1200)/2);
		if(docuSize <= 1024){
			$("#pantech_nav").css({ 'left':'0px' });
			$("#pantech_utilMenu").css({ 'left':'0px' });
			if (jQuery.browser.version  <= 8) {
				$("#pantech_wrap").css({'margin-left':'0px','margin':'0px'});
			}
		}else{
			if (jQuery.browser.version  <= 8) {
				$("#pantech_nav").css({ 'left': '0px' });
				$("#pantech_utilMenu").css({ 'left': '0px' });
				$("#pantech_wrap").css("margin-left",a+"px");
			}if (jQuery.browser.version  == 9) {
				$("#pantech_nav").css({ 'position':'fiexd','left': a + 'px' });
				$("#pantech_utilMenu").css({ 'position':'fiexd','left': a + 'px' });
				$("#pantech_wrap").css({ 'left': a + 'px','margin-left':'0px' });
			}
			$("#pantech_nav").css({ 'position':'fiexd','left': a + 'px' });
			$("#pantech_utilMenu").css({ 'position':'fiexd','left': a + 'px' });
			$("#pantech_wrap").css({ 'left': a + 'px','margin-left':'0px' });
		}
		//pr_press
		var div_wrap = $("div.div_wrap");
		var div_wrap_width = div_wrap.width();
		$("div.gallery_product div.view").css({ 'width': (div_wrap_width - 280) + 'px' });
	}

	//LNB LEFT Controls
	$(window).resize(function () {
		setWidth();
		if($(window).height() < 640){
			$("#pantech_utilMenu").hide();
			$("#pantech_container .main #pantech_footer").hide();
		}else if($(window).height() > 640){
			$("#pantech_utilMenu").show();
			$("#pantech_container .main #pantech_footer").show();
		}
    });
	setWidth();

	//subPage LNB
	/* init. setting */
	$lnb = $("div #pantech_lnb ul li");
	$lnb.find("ul").hide();
	if($lnb.find("a.oneDepthsMenu").hasClass("on")){
		$("#pantech_nav").css("width","240px");
		$("#pantech_container .sub").css("margin-left","240px");
		$("#pantech_container .submain").css("margin-left","240px");
		var currentOne  = $("a.on");
		$(currentOne).find("img").attr("src", function(){return $(this).attr("src").replace("_off","_on");});
		$(currentOne).parent().find("ul.towDepths_wrap").show();
		$(currentOne).parent().find("ul.towDepths_wrap li.towDown a.on").next("ul.threeDepths_wrap").show();
	}else{
		$("#pantech_nav").css("width","135px");
		$("#pantech_container .sub").css("margin-left","135px");
		$("#pantech_container .submain").css("margin-left","135px");
		$("#pantech_container .main").css("margin-left","135px");
	}

	//tabMenu
	/* Default Action */
	$(".tab_content").hide();
	$("ul.tabs li:first a").addClass("on");
	$("ul.tabs li:first").show();
	$(".tab_content:first").show();
	/* On Click Event */
	$("ul.tabs li").click(function() {
		$("ul.tabs li a").removeClass("on");
		$(this).find("a").addClass("on");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

	//History Control
	/* History Tab */
	$("ul.tabs2").find("li:first a").addClass("on");
	/* History Tab On Click Event */
	$("ul.tabs2 li").click(function() {
		$(this).parent().find("li a").removeClass("on");
		$(this).find("a").addClass("on");
		var indexNum = $(this).index();
		$(this).parent().parent().find("div.history_container ul").css("top",-(indexNum * 122)+"px");
		return false;
	});

	$("div.detailBox div.zoomClose").click(function() {
		$(this).parent().hide();
		$("#g li").removeClass("active");
		$(".history_thum_list li a").removeClass("on");
    });


	//faq toggle
    $("table.faq tbody tr:odd").hide();
    $("table.faq td.title").find("a").click(function(){
    	$currentOdd = $(this).parent().parent();
    	$currentEven = $(this).parent().parent().next("tr");
    	$currentEven.toggle();
    	$currentOdd.toggleClass("on");
    	$("table.faq tbody tr:odd").not($currentEven).hide();
    	$("table.faq tbody tr:even").not($currentOdd).removeClass("on");
    });

    $("table.toxic tbody tr.moreContents").hide();
    $("table.toxic tr.title").click(function(){
    	if($(this).next().hasClass("active")){
    		$(this).next().removeClass("active").hide();
        	$(this).find("td.textC img").attr("src", function(){return $(this).attr("src").replace("_close","_open");});
        	$(this).find("td.textC img").attr("alt", "more");
    	}else{
    		$("table.toxic tr.title").find("td.textC img").attr("src", function(){return $(this).attr("src").replace("_close","_open");});
    		$("table.toxic tr.title").find("td.textC img").attr("alt", "more");
    		$("table.toxic tbody tr.moreContents").removeClass("active").hide();
    		$(this).next().addClass("active").show();
    		$(this).addClass("on");
        	$(this).find("td.textC img").attr("src", function(){return $(this).attr("src").replace("_open","_close");});
        	$(this).find("td.textC img").attr("alt", "close");
    	}
    });

    //gallery_control
    $("ul.gallery li").hover(function(){
    	$(this).addClass("on");
 	},function(){
		$(this).removeClass("on");
	});

    $("img.zoom").live("click",function(){
    	var $id = $(this).attr("id");
    	var $atchfileId = $(this).attr("alt");
		var arr_atch = $atchfileId.split("|");
	
    	ipage.gtJson($id);
    	ipage.gtJsonFile(arr_atch[0],arr_atch[1]);

    	if (jQuery.browser.version  < 9) {
    		$("div.div_wrap").removeClass("hide");
    	}else{
    		$("div.div_wrap").slideDown(800);
    	}
    	setWidth();
    	
    	$.smoothScroll({scrollTarget: "p1"});
    });


    $("div.div_wrap div.zoomClose").click(function() {
    	if (jQuery.browser.version  < 9) {
    		$(".div_wrap").addClass("hide");
    		$("#g li").removeClass("active");
    		$("ul.galleryhide").addClass("borderT_blue01");
    		
    	}else{
    		$("div.div_wrap").slideUp(500);
    		$("#g li").removeClass("active");
    		$("ul.galleryhide").addClass("borderT_blue01");
    	}
    });

    // radiobutton
	$("input:radio").addClass("radio_check");

	//border_ADD
	$("ol.privacy li:odd").css("background","url('/images/common/bg_line01.gif') repeat-y left top");
	$("#en ol.privacy li:odd").css("background","none");
	$("table.history_text").each(function(){
		$(this).find("td:last").css("padding-bottom","40px");
	});
	//border_REMOVE
	$("ul.roll").each(function(){
		$(this).find("li:last").css("border-bottom","none");
	}); 
	$("table.specifications").find("tr:last th").css("border-bottom","none");
	$("table.specifications").find("tr:last td").css("border-bottom","none");
	$("ul.history_list li:first").css("border-top","none");
	$("table.specifications").attr("border","0px");
	$("table.history_text:last").css("border-bottom","none");

	//removeClass
	$(".blog").removeClass("mgt30");
	$(".twitter").removeClass("mgt30");

	//product submain
	/* Default Action */
	$("ul.product_category li:first").find("ul").css("display","block");
	/* On Click Event */
	$("ul.product_category li a.category").click(function(){
		$("ul.product_category li a.category").find("img").attr("src", function(){return $(this).attr("src").replace("_on","_off");});
		$(this).find("img").attr("src", function(){return $(this).attr("src").replace("_off","_on");});
		if (jQuery.browser.version  < 9) {
    		$("ul.product_list").css("display","none");
    	}else{
    		$("ul.product_list").slideUp(400);
    	}
		if (jQuery.browser.version  < 9) {
			$(this).parent().find("ul").css("display","block");
    	}else{
    		$(this).parent().find("ul").slideDown(400);
    	}
	});

	//utilMenu
	$(".topUtil").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find("a img").attr("src", function(){return $(this).attr("src").replace("_on","_off");});
			$(this).find("div").hide();
		}else{
			$(this).addClass("on");
			$(this).find("a img").attr("src", function(){return $(this).attr("src").replace("_off","_on");});
			$(this).find("div").show();
		}
	});
	$(".familywrap").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find("div").hide();
		}else{
			$(this).addClass("on");
			$(this).find("div").show();
		}
	});

	//ci
	$("ul.ciStory li").css("cursor","pointer");
	$("ul.ciStory li").click(function(){
		var tabIndex = $("ul.ciStory li").index(this);
		var ciImage = "/images/ko/pantech/ci_big0"+ (tabIndex + 1) +".jpg";
		$("div.ciStory img").attr("src", ciImage);
		$("ul.ciStory li").find("img").attr("src", function(){return $(this).attr("src").replace("_on","_off");});
		$(this).find("img").attr("src", function(){return $(this).attr("src").replace("_off","_on");});
	});
	
	$("#en ul.ciStory li").css("cursor","pointer");
	$("#en ul.ciStory li").click(function(){
		var tabIndex = $("#en ul.ciStory li").index(this);
		var ciImage = "/images/en/pantech/ci_big0"+ (tabIndex + 1) +".jpg";
		$("#en div.ciStory img").attr("src", ciImage);
		$("#en ul.ciStory li").find("img").attr("src", function(){return $(this).attr("src").replace("_on","_off");});
		$(this).find("img").attr("src", function(){return $(this).attr("src").replace("_off","_on");});
	});

	//paging
	if($(".page span").eq(0).hasClass("this")){
		$(".page span").eq(0).css("background","none");
	}
	$(".page span").eq(0).find("a").css("background","none");


	if( jQuery.browser.msie && (jQuery.browser.version == 7 || jQuery.browser.version == 8) )
		setTimeout("step1()",500);
});

function step1(){
	if(parseInt($("#pantech_nav").css('left')) < 0){
		if(parseInt($("#pantech_nav").parent().css('left')) < 0){
			$("#pantech_nav").css('left','0px');
			$("#pantech_nav").parent().css('left','0px');

			setTimeout("step2()",100);
		} else {
			$("#pantech_nav").css('left',$("#pantech_nav").parent().css('left'));
		}
	}
}

function step2(){
	if(parseInt($("#pantech_nav").css('left')) < 0)	step1();
}


