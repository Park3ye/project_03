/*mainConTent_05.js*/
/*경기 영상 박스 제어 스크립트*/

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

var mainConTent05Wrap = $('.mainConTent_05_Wrap');
// 베너
  var mainConTent05  = $('#mainConTent_05');
// league영상 제목을 아우르는 큰 영역 
  var leagueviewWrap = $('.leagueview_wrap');
// 영상과 제목이 담긴 dl들을 감싼 wrap
  var playlistWrap= $('.playlist_wrap');
// 영상과 제목을 담은 dl
  var playList = $('.palylist')
// 경기영상  dd
  var playVideo = playList.find('dd');
// 경기 제목 dt 
  var playTitle = playList.find('dt');



// 가로형 슬라이드형태로 변경
mainConTent05.css({overflow:'hidden'});
playlistWrap.css({float:'left'});

// playlistWrap의 개수
var plwLength = playlistWrap.length;
console.log(plwLength);
// playlistWrap의 수에 따라 leagueviewWrap의 가로값을 변경
leagueviewWrap.css({width:plwLength*100+'%'});
// playlistWarp 가로값
var lvwWidth = leagueviewWrap.innerWidth();
console.log('가장 큰 박스의 가로값:'+ lvwWidth);
// playlistWrap의 가로값
// var plwAWidth = playlistWrap.innerWidth(); 
// console.log('내용물을 감싼 박스의 가로값:'+plwAWidth);
// plwLength 하나당 가로값
playlistWrap.css({width:lvwWidth/plwLength});
var soloSize = playlistWrap.innerWidth();
console.log('각각의 박스 하나에 가로값:'+soloSize);


// btn을 통한 배너 움직이기

// leagueviewWrap.last().prependTo(leagueviewWrap);
// leagueviewWrap.css({width:plwLength*100+'%'});
// 버튼영역
var btn = $('.view_btn');
// 좌버튼
 var leftBtn = $('.view_l_btn');
// 우버튼
 var rightBtn = $('.view_r_btn');

leftBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:0}, function(){
  elementLast = leagueviewWrap.children('div').last();
  elementLast.prependTo(leagueviewWrap);
  leagueviewWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    elementFirst = leagueviewWrap.children('div').first();
    elementFirst.appendTo(leagueviewWrap);
    leagueviewWrap.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭







 }else if( mob < rwdW && rwdW < tab) {
  
  // 변수지정

var mainConTent05Wrap = $('.mainConTent_05_Wrap');
// 베너
  var mainConTent05  = $('#mainConTent_05');
// league영상 제목을 아우르는 큰 영역 
  var leagueviewWrap = $('.leagueview_wrap');
// 영상과 제목이 담긴 dl들을 감싼 wrap
  var playlistWrap= $('.playlist_wrap');
// 영상과 제목을 담은 dl
  var playList = $('.palylist')
// 경기영상  dd
  var playVideo = playList.find('dd');
// 경기 제목 dt 
  var playTitle = playList.find('dt');



// 가로형 슬라이드형태로 변경
mainConTent05.css({overflow:'hidden'});
playlistWrap.css({float:'left'});

// playlistWrap의 개수
var plwLength = playlistWrap.length;
console.log(plwLength);
// playlistWrap의 수에 따라 leagueviewWrap의 가로값을 변경
leagueviewWrap.css({width:plwLength*100+'%'});
// playlistWarp 가로값
var lvwWidth = leagueviewWrap.innerWidth();
console.log('가장 큰 박스의 가로값:'+ lvwWidth);
// playlistWrap의 가로값
// var plwAWidth = playlistWrap.innerWidth(); 
// console.log('내용물을 감싼 박스의 가로값:'+plwAWidth);
// plwLength 하나당 가로값
playlistWrap.css({width:lvwWidth/plwLength});
var soloSize = playlistWrap.innerWidth();
console.log('각각의 박스 하나에 가로값:'+soloSize);


// btn을 통한 배너 움직이기

// leagueviewWrap.last().prependTo(leagueviewWrap);
// leagueviewWrap.css({width:plwLength*100+'%'});
// 버튼영역
var btn = $('.view_btn');
// 좌버튼
 var leftBtn = $('.view_l_btn');
// 우버튼
 var rightBtn = $('.view_r_btn');

leftBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:0}, function(){
  elementLast = leagueviewWrap.children('div').last();
  elementLast.prependTo(leagueviewWrap);
  leagueviewWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    elementFirst = leagueviewWrap.children('div').first();
    elementFirst.appendTo(leagueviewWrap);
    leagueviewWrap.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭


















}else if( tab <= rwdW && rwdW <= pc) {



var mainConTent05Wrap = $('.mainConTent_05_Wrap');
// 베너
  var mainConTent05  = $('#mainConTent_05');
// league영상 제목을 아우르는 큰 영역 
  var leagueviewWrap = $('.leagueview_wrap');
// 영상과 제목이 담긴 dl들을 감싼 wrap
  var playlistWrap= $('.playlist_wrap');
// 영상과 제목을 담은 dl
  var playList = $('.palylist')
// 경기영상  dd
  var playVideo = playList.find('dd');
// 경기 제목 dt 
  var playTitle = playList.find('dt');






// 가로형 슬라이드형태로 변경
mainConTent05.css({overflow:'hidden'});
leagueviewWrap.css({overflow:'hidden'});

// playlistWrap.css({float:'left'});



// 마지막 요소 처음으로 2개 이동
leagueviewWrap.children('div').eq(-3).nextAll().prependTo(leagueviewWrap);
// leagueviewWrap marginLeft -100%
leagueviewWrap.css({marginLeft:'-100%'});

// leagueviewWrap 한개 더 복사 
// mainConTent05.children('article').clone(true).appendTo(mainConTent05);




// playlistWrap의 개수
var plwLength = playlistWrap.length;
console.log(plwLength);
// playlistWrap의 수에 따라 leagueviewWrap의 가로값을 변경
leagueviewWrap.css({width:plwLength*50+'%'});
// leagueviewWrap.css({width:pcfullwLength*100+'%'});
// playlistWarp 가로값
var lvwWidth = leagueviewWrap.innerWidth();
// console.log('가장 큰 박스의 가로값:'+ lvwWidth);
// playlistWrap의 가로값
var plwAWidth = playlistWrap.innerWidth(); 
// console.log('내용물을 감싼 박스의 가로값:'+plwAWidth);
// plwLength 하나당 가로값
playlistWrap.css({width:lvwWidth/plwLength});
var soloSize = playlistWrap.innerWidth();
// console.log('각각의 박스 하나에 가로값:'+soloSize);


// btn을 통한 배너 움직이기

// leagueviewWrap.last().prependTo(leagueviewWrap);
// leagueviewWrap.css({width:plwLength*100+'%'});
// 버튼영역
var btn = $('.view_btn');
// 좌버튼
 var leftBtn = $('.view_l_btn');
// 우버튼
 var rightBtn = $('.view_r_btn');

leftBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:0}, function(){
  var elementLast = leagueviewWrap.children('div').eq(-3).nextAll();
  elementLast.prependTo(leagueviewWrap);
  leagueviewWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    leagueviewWrap.children('div').eq(0).appendTo(leagueviewWrap);
    leagueviewWrap.children('div').eq(0).appendTo(leagueviewWrap);
    leagueviewWrap.css({marginLeft:'-100%'});
  });
}); //rightBtn 클릭






 } /*pc end*/

 /*full start*/
 else{


var mainConTent05Wrap = $('.mainConTent_05_Wrap');
// 베너
  var mainConTent05  = $('#mainConTent_05');
// league영상 제목을 아우르는 큰 영역 
  var leagueviewWrap = $('.leagueview_wrap');
// 영상과 제목이 담긴 dl들을 감싼 wrap
  var playlistWrap= $('.playlist_wrap');
// 영상과 제목을 담은 dl
  var playList = $('.palylist')
// 경기영상  dd
  var playVideo = playList.find('dd');
// 경기 제목 dt 
  var playTitle = playList.find('dt');






// 가로형 슬라이드형태로 변경
mainConTent05.css({overflow:'hidden'});
leagueviewWrap.css({overflow:'hidden'});

// playlistWrap.css({float:'left'});





// leagueviewWrap 한개 더 복사 
// mainConTent05.children('article').clone(true).appendTo(mainConTent05);




// playlistWrap의 개수
var plwLength = playlistWrap.length;
console.log(plwLength);
// playlistWrap의 수에 따라 leagueviewWrap의 가로값을 변경
leagueviewWrap.css({width:plwLength*50+'%'});
// leagueviewWrap.css({width:pcfullwLength*100+'%'});
// playlistWarp 가로값
var lvwWidth = leagueviewWrap.innerWidth();
// console.log('가장 큰 박스의 가로값:'+ lvwWidth);
// playlistWrap의 가로값
var plwAWidth = playlistWrap.innerWidth(); 
// console.log('내용물을 감싼 박스의 가로값:'+plwAWidth);
// plwLength 하나당 가로값
playlistWrap.css({width:lvwWidth/plwLength});
var soloSize = playlistWrap.innerWidth();
// console.log('각각의 박스 하나에 가로값:'+soloSize);

// 마지막 요소 처음으로 2개 이동
leagueviewWrap.children('div').eq(-3).nextAll().prependTo(leagueviewWrap);
// leagueviewWrap marginLeft -100%
leagueviewWrap.css({marginLeft:'-100%'});


// btn을 통한 배너 움직이기

// leagueviewWrap.last().prependTo(leagueviewWrap);
// leagueviewWrap.css({width:plwLength*100+'%'});
// 버튼영역
var btn = $('.view_btn');
// 좌버튼
 var leftBtn = $('.view_l_btn');
// 우버튼
 var rightBtn = $('.view_r_btn');

leftBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:0}, function(){
  var elementLast = leagueviewWrap.children('div').eq(-3).nextAll();
  elementLast.prependTo(leagueviewWrap);
  leagueviewWrap.css({marginLeft:'-100%'});
  });
}); //leftBtrn 클릭

rightBtn.on('click', function(e){
  e.preventDefault(); 
  leagueviewWrap.stop(false,true).animate({marginLeft:'-200%'}, function(){
    leagueviewWrap.children('div').eq(0).appendTo(leagueviewWrap);
    leagueviewWrap.children('div').eq(0).appendTo(leagueviewWrap);
    leagueviewWrap.css({marginLeft:'-100%'});
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