/*bannerBox_03.js*/
/*경기 일정에 관한 박스 제어 스크립트*/

(function($){

//max480
//max767
//max1366
//min1367~over value

var rwd = function(){ 
  var rwdW = parseInt($(window).width());
  var mob = 480;
  var tab = 768;
  var pc = 1366;

  if(rwdW <= mob){

// 변수지정

var bannerBox04Wrap = $('.bannerBox04_Wrap');
// 베너
  var bannerBox04  = $('#bannerBox_04');
// profile 내용을 아우르는 큰 영역 
  var profileWarp = $('.profile_wrap');
// 선수단이미지와 제목을 감싼 wrap
  var profileArea= $('.profile_area');
// 선수단 이미지 dd
  var profileImage = profileArea.find('dd');
// 구단 명  
  var profileTitle = profileArea.find('dt');



// 가로형 슬라이드형태로 변경
bannerBox04.css({overflow:'hidden'});
profileArea.css({float:'left'});

// pfA의 개수
var pfALength = profileArea.length;
// console.log(pfALength);
// rs의 수에 따라 contetWrap의 가로값을 변경
profileWarp.css({width:pfALength*100+'%'});
// profileWarp 가로값
var pfWWidth = profileWarp.innerWidth();
// console.log('가장 큰 박스의 가로값:'+ pfWWidth);
// profileArea의 가로값
var pfAWidth = profileArea.innerWidth(); 
// console.log('내용물을 감싼 박스의 가로값:'+pfAWidth);
// pfALength 하나당 가로값
profileArea.css({width:pfWWidth/pfALength});
var pfAsize = profileArea.innerWidth();
// console.log('각각의 박스 하나에 가로값:'+pfAsize);


// btn을 통한 배너 움직이기

// profileWarp.last().prependTo(profileArea);
// profileArea.css({width:pfALength*100+'%'});
// 버튼영역
var btn = $('.profile_btn');
// 좌버튼
 var leftBtn = $('.pf_l_btn');
// 우버튼
 var rightBtn = $('.pf_r_btn');

leftBtn.on('click', function(e){
  e.preventDefault(); 
  profileWarp.stop(false,true).animate({marginLeft:0}, function(){
  pfLast = profileWarp.children('dl').last();
  pfLast.prependTo(profileWarp);
  profileWarp.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  profileWarp.stop(false,true).animate({marginLeft:'-200%'}, function(){
    pfFirst = profileWarp.children('dl').first();
    pfFirst.appendTo(profileWarp);
    profileWarp.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭







 }else if( mob < rwdW && rwdW < tab) {

// 변수지정

var bannerBox04Wrap = $('.bannerBox04_Wrap');
// 베너
  var bannerBox04  = $('#bannerBox_04');
// profile 내용을 아우르는 큰 영역 
  var profileWarp = $('.profile_wrap');
// 선수단이미지와 제목을 감싼 wrap
  var profileArea= $('.profile_area');
// 선수단 이미지 dd
  var profileImage = profileArea.find('dd');
// 구단 명  
  var profileTitle = profileArea.find('dt');



// 가로형 슬라이드형태로 변경
bannerBox04.css({overflow:'hidden'});
profileArea.css({float:'left'});

// pfA의 개수
var pfALength = profileArea.length;
// console.log(pfALength);
// rs의 수에 따라 contetWrap의 가로값을 변경
profileWarp.css({width:pfALength*100+'%'});
// profileWarp 가로값
var pfWWidth = profileWarp.innerWidth();
// console.log('가장 큰 박스의 가로값:'+ pfWWidth);
// profileArea의 가로값
var pfAWidth = profileArea.innerWidth(); 
// console.log('내용물을 감싼 박스의 가로값:'+pfAWidth);
// pfALength 하나당 가로값
profileArea.css({width:pfWWidth/pfALength});
var pfAsize = profileArea.innerWidth();
// console.log('각각의 박스 하나에 가로값:'+pfAsize);


// btn을 통한 배너 움직이기

// profileWarp.last().prependTo(profileArea);
// profileArea.css({width:pfALength*100+'%'});
// 버튼영역
var btn = $('.profile_btn');
// 좌버튼
 var leftBtn = $('.pf_l_btn');
// 우버튼
 var rightBtn = $('.pf_r_btn');

leftBtn.on('click', function(e){
  e.preventDefault(); 
  profileWarp.stop(false,true).animate({marginLeft:0}, function(){
  pfLast = profileWarp.children('dl').last();
  pfLast.prependTo(profileWarp);
  profileWarp.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  profileWarp.stop(false,true).animate({marginLeft:'-200%'}, function(){
    pfFirst = profileWarp.children('dl').first();
    pfFirst.appendTo(profileWarp);
    profileWarp.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭



}else if( tab <= rwdW && rwdW <= pc) {

 }
};
rwd();




var $w =parseInt($(window).width());
$(window).on('resize',function(){
var nowW = $(window).width();
if($w !== nowW){
location.reload();
rwd();
}
});


})(this.jQuery);