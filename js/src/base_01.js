/*jQuery start---------*/ 
 (function($) { 
 var baseUrl = './src/'; 
 var myHtml = [ 
 {make:'headBox_01',    load:'all/headBox_01.html'}, 
 {make:'bannerBox_02',  load:'main/bannerBox_02.html'}, 
 {make:'bannerBox_03',  load:'main/bannerBox_03.html'}, 
 {make:'bannerBox_04',  load:'main/bannerBox_04.html'}, 
 {make:'mainConTent_05',  load:'main/mainConTent_05.html'}, 
 {make:'mainConTent_06',  load:'main/mainConTent_06.html'}, 
 {make:'mainConTent_07',  load:'main/mainConTent_07.html'}, 
 {make:'mainConTent_08',  load:'main/mainConTent_08.html'}, 
 {make:'footBox_09', load:'all/footBox_09.html'} 
 ] 
 // Join, Login, menu 페이지도 짜야합니다. 총 11페이지.
 // 모바일 기준. pc버전부턴 추가.
 for(var i = 0; i < myHtml.length; i++){ 
 ImportFile(myHtml[i].make, baseUrl + myHtml[i].load); 
 } 
 }) (this.jQuery); 
 /*jQuery end---*/