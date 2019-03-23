// 제이쿼리 공통
;(function($) {

	$(function() {
		// 말머리 셀렉터 박스 스타일
		$('.headSelect').each(function(){
			$(this).find('ul').addClass('hide');
			$(this).find('strong').click(function(){
				$('.headSelect').find('ul').toggleClass('hide');
			});
			$(this).find('li').each(function(index){
				$(this).click(function() {
					if($(this).attr('class')=='on hide'){
						$(this).attr('class','');
						$('.headSelect > ul > li, .headSelect > strong ').removeClass('hide');
					}else{
						$(this).attr('class','on');
						$('.headSelect > ul > li, .headSelect > strong ').addClass('hide');					
					}					
				});
			});
		});

		// 이메일 셀렉터 박스 스타일
		$('.emailSelect').each(function(){
			$(this).find('ul').addClass('hide');
			$(this).find('strong').click(function(){
				$('.emailSelect').find('ul').toggleClass('hide');
			});
			$(this).find('li').each(function(index){
				$(this).click(function() {
					if($(this).attr('class')=='on hide'){
						$(this).attr('class','');
						$('.emailSelect > ul > li, .emailSelect > strong ').removeClass('hide');
					}else{
						$(this).attr('class','on');
						$('.emailSelect > ul > li, .emailSelect > strong ').addClass('hide');					
					}					
				});
			});
		});

		// 검색 셀렉터 박스 스타일
		$('.searchSelect').each(function(){
			$(this).find('li').addClass('hide');
			$(this).find('li').each(function(index){
				$(this).click(function() {
					if($(this).attr('class')=='on hide'){
						$(this).attr('class','');
						$('.searchSelect > ul > li').removeClass('hide');
					}else{
						$(this).attr('class','on');
						$('.searchSelect > ul > li').addClass('hide');					
					}					
				});
			});
		});

		// 목록 셀렉터 박스 스타일
		$('.listSelect').each(function(){
			$(this).find('li').addClass('hide');
			$(this).find('li').each(function(index){
				$(this).click(function() {
					if($(this).attr('class')=='on hide'){
						$(this).attr('class','');
						$('.listSelect > ul > li').removeClass('hide');
					}else{
						$(this).attr('class','on');
						$('.listSelect > ul > li').addClass('hide');				
					}
				});
			});
		});

		// 리스트 테이블 조절
		$('.bbsList  tr:last').find('td') .css({'padding-bottom':'16px'});
		$('.bbsList tbody  tr:first').find('td') .css({'padding-top':'17px'});

		//파일추가하기
		$('.fileAddList ul li:last').addClass('no')

	});
})(jQuery);

// PNG24
var Browser = {
	isIE : navigator.userAgent.toLowerCase().indexOf("msie")!=-1,
	isIE_SV1 : navigator.userAgent.toLowerCase().indexOf("sv1")!=-1,
	isIE_SV2 : navigator.userAgent.toLowerCase().indexOf("sv2")!=-1,
	isIE_6 : navigator.userAgent.toLowerCase().indexOf("msie 6")!=-1,
	isIE_7 : navigator.userAgent.toLowerCase().indexOf("msie 7")!=-1,
	isIE_8 : navigator.userAgent.toLowerCase().indexOf("msie 8")!=-1,
	isFirefox : navigator.userAgent.toLowerCase().indexOf("firefox")!=-1,
	isSafari : navigator.userAgent.toLowerCase().indexOf("safari")!=-1,
	isOpera : navigator.userAgent.toLowerCase().indexOf("opera")!=-1,
	isOpera : navigator.userAgent.toLowerCase().indexOf("chrome")!=-1,
	isNetscape : navigator.userAgent.toLowerCase().indexOf("netscape")!=-1,
	isEtc : navigator.userAgent.toLowerCase().indexOf("gecko")!=-1 && navigator.userAgent.toLowerCase().indexOf("firefox")==-1 && navigator.userAgent.toLowerCase().indexOf("netscape")==-1
};

function setPng24(obj) {
	if (!Browser.isIE_7) {/* NOT IE7 */
		obj.width=obj.height=1;
		obj.url=obj.src;
		obj.className=obj.className.replace(/\bpng24\b/i,'');
		obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');";
		obj.src='';
		return '';
	}
}

function chkPattern(str,type)	//형식 체크
{
  switch(type)
  {
    case "NUM": //숫자만
    pattern = /^[0-9]+$/;
      break;

	case "PHONE" :		// 전화번호 (####-####-####)
		pattern = /^[0-9]{2,4}-[0-9]{3,4}-[0-9]{4}$/;
		break;

	case "MOBILE" :		// 휴대전화 (0##-####-####)
		pattern = /^0[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
		break;

	case "ZIPCODE" :	// 우편번호 (###-###)
		pattern = /^[0-9]{3}-[0-9]{3}$/;
		break;

    case "EMAIL": //메일
    //pattern = /^[._a-zA-Z0-9-]+@[._a-zA-Z0-9-]+\.[a-zA-Z]+$/;
    pattern = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,4}$/;
      break;

    case "DOMAIN": //영자 숫자와	.	다음도 영자
    pattern = /^[.a-zA-Z0-9-]+.[a-zA-Z]+$/;
      break;

    case "ENG": //영자만
      pattern = /^[a-zA-Z]+$/;
      break;

    case "ENGNUM": //영자와	숫자
      pattern = /^[a-zA-Z0-9]+$/;
      break;

	case "KOR" :		// 한글
		pattern = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
		break;

    case "ACCOUNT": //숫자	와 '-'
      pattern = /^[0-9-]+$/;
      break;

    case "HOST": //영자	와 '-'
      pattern = /^[a-zA-Z-]+$/;
      break;
    case "ID": //첫글자는 영자 그 뒤엔 영어숫자 6이상 15자리	이하
      //pattern = /^[a-zA-Z]{1}[a-zA-Z0-9_-]{5,15}$/;
      pattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,15}$/;
      break;

    case "ID2": //첫글자는	영자 그뒤엔	영어숫자 4이상 15자리	이하
      pattern = /^[a-zA-Z0-9._-]+$/;
      break;

    case "DATE": //	형식 : 2002-08-15
      pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
      break;

	case "JUMIN" :		// 주민등록번호
		//pattern = /^[0-9]{6}-[0-9]{7}$/;
		pattern = /^[0-9]{13}$/;
		break;

    default :
      return false;
  }
	return pattern.test(str);
}

//openPop
function openPopup(winNM,width,height){
	var sw=screen.availWidth;                          
	var sh=screen.availHeight;                        

	var px=(sw-width)/2;
	var py=(sh-height)/2;

	var set='top='+py+',left='+px;
	set+=',width='+width+',height='+height+
	',toobar=0,resizable=0,status=0,scrollbars=1';

	window.open(winNM,'',set);
}

/**
 * @param n
 * @returns
 * 콤마생성
 */
function commify(n) {
    var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
    n += '';                                       // 숫자를 문자열로 변환

    while (reg.test(n))
        n = n.replace(reg, '$1' + ',' + '$2');
    return n;
}
