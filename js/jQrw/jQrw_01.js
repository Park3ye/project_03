//jQrw_01.js
(function($) {

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
/*    $('.headBox').css({'backgroundColor':'#aff'});
    $('.bannerox').css({'backgroundColor':'#a90', 
                      'borderBottom':'1px solid #333'});
    $('.contentBox').css({'backgroundColor':'#90a', 
                      'borderBottom':'1px solid #333'});
    $('.footBox').css({'backgroundColor':'#79a', 
                      'borderBottom':'1px solid #333'});*/

 }else if( mob < rwdW && rwdW < tab) {
/*    $('.headBox').css({'backgroundColor':'#f90'});
    $('.bannerox').css({'backgroundColor':'#a09', 
                      'borderBottom':'1px solid #333'});
    $('.contentBox').css({'backgroundColor':'#9a3', 
                      'borderBottom':'1px solid #333'});
    $('.footBox').css({'backgroundColor':'#78f',
                      'borderBottom':'1px solid #333'});*/

}else if( tab <= rwdW && rwdW <= pc) {
/*    $('.headBox').css({'backgroundColor':'#f89'});
    $('.bannerox').css({'backgroundColor':'#a90', 
                      'borderBottom':'1px solid #333'});
    $('.contentBox').css({'backgroundColor':'#90a', 
                      'borderBottom':'1px solid #333'});
    $('.footBox').css({'backgroundColor':'#79a', 
                      'borderBottom':'1px solid #333'});
*/
  }else{ 
/*      $('.headBox').css({'backgroundColor':'#cd8'});
    $('.bannerox').css({'backgroundColor':'#67a', 
                      'borderBottom':'1px solid #333'});
    $('.contentBox').css({'backgroundColor':'#a09', 
                      'borderBottom':'1px solid #333'});
    $('.footBox').css({'backgroundColor':'#f98', 
                      'borderBottom':'1px solid #333'});*/
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

// 반응형 짤떄 js 에서 css정하는 법   
// 더 향상시키자면, bgc와 borderBottom의 값을 변수로 지정하여 값을 먹이면 더 깔끔한 코딩을 짤 수 있다.