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



// mobile version start --------------------------//

  if(rwdW <= mob){

// 변수지정
var bannerBox03Wrap = $('.bannerBox03_Wrap');
// 베너
  var bannerBox03  = $('#bannerBox_03');
// 배너 안 내용을 아우르는 가장 큰 영역 
  var contentWrap = $('.content_warp');
// 진짜 영역 wrap
  var roundSchedule= $('.round_schedule');
  // 경기스케줄 wrap
   var timeSchedule = contentWrap.find('article');
   // 일정(날짜)
    var dateTitle = timeSchedule.find('p');
    // 엠블럼, 팀명, 시간  
    var teamData = timeSchedule.find('dl');
    // 엠블럼(이미지)
     var emBlem = teamData.find('dd');
     // 팀명
     var tiTle  = teamData.find('dt');
     // vs
     var verSus = teamData.find('ul');


// 버튼영역
var btn = $('.btn_area');
// 좌버튼
 var leftBtn = $('.l_btn');
// 우버튼
 var rightBtn = $('.r_btn');

// 가로형 슬라이드형태로 변경
bannerBox03.css({overflow:'hidden'});
roundSchedule.css({float:'left'});

// rS의 개수
var rsLength = roundSchedule.length;
// console.log(rsLength);
// rs의 수에 따라 contetWrap의 가로값을 변경
contentWrap.css({width:rsLength*100+'%'});
// contentWrpa의 가로값
var ctWrapW = contentWrap.innerWidth();
// console.log('contentWrap의 가로값:'+ ctWrapW);
// rondSchedule의 가로값
var roundsW = roundSchedule.innerWidth(); 
// console.log('rondScedule의 가로값:'+roundsW);
// rsLength 하나당 가로값
roundSchedule.css({width:ctWrapW/rsLength});
var roundsWn = roundSchedule.innerWidth();
// console.log('rsLength의 가로값:'+roundsWn);


// btn을 통한 배너 움직이기

// contentWrap.last().prependTo(roundSchedule);
// roundSchedule.css({width:rsLength*100+'%'});

leftBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:0}, function(){
  rsLast = contentWrap.children('section').last();
  rsLast.prependTo(contentWrap);
  contentWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    rsFirst = contentWrap.children('section').first();
    rsFirst.appendTo(contentWrap);
    contentWrap.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭

// mobile version end ===================================//



// tablet version start --------------------------------//

 }else if( mob < rwdW && rwdW < tab) {
  // 변수지정
var bannerBox03Wrap = $('.bannerBox03_Wrap');
// 베너
  var bannerBox03  = $('#bannerBox_03');
// 배너 안 내용을 아우르는 가장 큰 영역 
  var contentWrap = $('.content_warp');
// 진짜 영역 wrap
  var roundSchedule= $('.round_schedule');
  // 경기스케줄 wrap
   var timeSchedule = contentWrap.find('article');
   // 일정(날짜)
    var dateTitle = timeSchedule.find('p');
    // 엠블럼, 팀명, 시간  
    var teamData = timeSchedule.find('dl');
    // 엠블럼(이미지)
     var emBlem = teamData.find('dd');
     // 팀명
     var tiTle  = teamData.find('dt');
     // vs
     var verSus = teamData.find('ul');


// 버튼영역
var btn = $('.btn_area');
// 좌버튼
 var leftBtn = $('.l_btn');
// 우버튼
 var rightBtn = $('.r_btn');

// 가로형 슬라이드형태로 변경
bannerBox03.css({overflow:'hidden'});
roundSchedule.css({float:'left'});

// rS의 개수
var rsLength = roundSchedule.length;
// console.log(rsLength);
// rs의 수에 따라 contetWrap의 가로값을 변경
contentWrap.css({width:rsLength*100+'%'});
// contentWrpa의 가로값
var ctWrapW = contentWrap.innerWidth();
// console.log('contentWrap의 가로값:'+ ctWrapW);
// rondSchedule의 가로값
var roundsW = roundSchedule.innerWidth(); 
// console.log('rondScedule의 가로값:'+roundsW);
// rsLength 하나당 가로값
roundSchedule.css({width:ctWrapW/rsLength});
var roundsWn = roundSchedule.innerWidth();
// console.log('rsLength의 가로값:'+roundsWn);


// btn을 통한 배너 움직이기

// contentWrap.last().prependTo(roundSchedule);
// roundSchedule.css({width:rsLength*100+'%'});

leftBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:0}, function(){
  rsLast = contentWrap.children('section').last();
  rsLast.prependTo(contentWrap);
  contentWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    rsFirst = contentWrap.children('section').first();
    rsFirst.appendTo(contentWrap);
    contentWrap.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭

// tablet version end ======================================//


// pc version start---------------------------------//


}else if( tab <= rwdW && rwdW <= pc) {

// 변수지정
var bannerBox03Wrap = $('.bannerBox03_Wrap');
// 베너
  var bannerBox03  = $('#bannerBox_03');
// 배너 안 내용을 아우르는 가장 큰 영역 
  var contentWrap = $('.content_warp');
// 진짜 영역 wrap
  var roundSchedule= $('.round_schedule');
  // 경기스케줄 wrap
   var timeSchedule = contentWrap.find('article');
   // 일정(날짜)
    var dateTitle = timeSchedule.find('p');
    // 엠블럼, 팀명, 시간  
    var teamData = timeSchedule.find('dl');
    // 엠블럼(이미지)
     var emBlem = teamData.find('dd');
     // 팀명
     var tiTle  = teamData.find('dt');
     // vs
     var verSus = teamData.find('ul');


// 버튼영역
var btn = $('.btn_area');
// 좌버튼
 var leftBtn = $('.l_btn');
// 우버튼
 var rightBtn = $('.r_btn');

// 가로형 슬라이드형태로 변경
bannerBox03.css({overflow:'hidden'});
roundSchedule.css({float:'left'});


contentWrap.children('section').clone(true).appendTo(contentWrap);
roundSchedule= $('.round_schedule');
// rS의 개수
var rsLength = roundSchedule.length;
// console.log(rsLength);
// rs의 수에 따라 contetWrap의 가로값을 변경
contentWrap.css({width:rsLength*50+'%'});
// contentWrpa의 가로값
var ctWrapW = contentWrap.innerWidth();
// console.log('contentWrap의 가로값:'+ ctWrapW);
// rondSchedule의 가로값
var roundsW = roundSchedule.innerWidth(); 
// console.log('rondScedule의 가로값:'+roundsW);
// rsLength 하나당 가로값
roundSchedule.css({width:ctWrapW/rsLength});
var roundsWn = roundSchedule.innerWidth();
// console.log('rsLength의 가로값:'+roundsWn);


// btn을 통한 배너 움직이기

// contentWrap.last().prependTo(roundSchedule);
// roundSchedule.css({width:rsLength*100+'%'});




rsLast = contentWrap.children('section').eq(-3).nextAll();
rsLast.prependTo(contentWrap);
contentWrap.css({marginLeft:'-100%'});


leftBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:0}, function(){
  rsLast = contentWrap.children('section').eq(-3).nextAll();
  rsLast.prependTo(contentWrap);
  contentWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    // rsFirst = contentWrap.children('section').eq(0).prevAll();
    // console.log(rsFirst);
    // rsFirst.appendTo(contentWrap);
    contentWrap.children('section').eq(0).appendTo(contentWrap);
    contentWrap.children('section').eq(0).appendTo(contentWrap);

    contentWrap.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭


/*full version start*/
 }else{

// 변수지정
var bannerBox03Wrap = $('.bannerBox03_Wrap');
// 베너
  var bannerBox03  = $('#bannerBox_03');
// 배너 안 내용을 아우르는 가장 큰 영역 
  var contentWrap = $('.content_warp');
// 진짜 영역 wrap
  var roundSchedule= $('.round_schedule');
  // 경기스케줄 wrap
   var timeSchedule = contentWrap.find('article');
   // 일정(날짜)
    var dateTitle = timeSchedule.find('p');
    // 엠블럼, 팀명, 시간  
    var teamData = timeSchedule.find('dl');
    // 엠블럼(이미지)
     var emBlem = teamData.find('dd');
     // 팀명
     var tiTle  = teamData.find('dt');
     // vs
     var verSus = teamData.find('ul');


// 버튼영역
var btn = $('.btn_area');
// 좌버튼
 var leftBtn = $('.l_btn');
// 우버튼
 var rightBtn = $('.r_btn');

// 가로형 슬라이드형태로 변경
bannerBox03.css({overflow:'hidden'});
roundSchedule.css({float:'left'});


contentWrap.children('section').clone(true).appendTo(contentWrap);
roundSchedule= $('.round_schedule');
// rS의 개수
var rsLength = roundSchedule.length;
// console.log(rsLength);
// rs의 수에 따라 contetWrap의 가로값을 변경
contentWrap.css({width:rsLength*50+'%'});
// contentWrpa의 가로값
var ctWrapW = contentWrap.innerWidth();
// console.log('contentWrap의 가로값:'+ ctWrapW);
// rondSchedule의 가로값
var roundsW = roundSchedule.innerWidth(); 
// console.log('rondScedule의 가로값:'+roundsW);
// rsLength 하나당 가로값
roundSchedule.css({width:ctWrapW/rsLength});
var roundsWn = roundSchedule.innerWidth();
// console.log('rsLength의 가로값:'+roundsWn);


// btn을 통한 배너 움직이기

// contentWrap.last().prependTo(roundSchedule);
// roundSchedule.css({width:rsLength*100+'%'});




rsLast = contentWrap.children('section').eq(-3).nextAll();
rsLast.prependTo(contentWrap);
contentWrap.css({marginLeft:'-100%'});


leftBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:0}, function(){
  rsLast = contentWrap.children('section').eq(-3).nextAll();
  rsLast.prependTo(contentWrap);
  contentWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  contentWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    // rsFirst = contentWrap.children('section').eq(0).prevAll();
    // console.log(rsFirst);
    // rsFirst.appendTo(contentWrap);
    contentWrap.children('section').eq(0).appendTo(contentWrap);
    contentWrap.children('section').eq(0).appendTo(contentWrap);

    contentWrap.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭

 }
};
rwd();

// parseInt() 주어진 값을 정수형 숫자로 변환처리
// ex) : 40px ->parseInt(40px) -> 40
// ex) : 43.3 ->parseInt(43.3) -> 43


var $w =parseInt($(window).width());
$(window).on('resize',function(){
var nowW = $(window).width();
if($w !== nowW){
location.reload();
rwd();
}
});


})(this.jQuery);