$(function(){
    $("#login-show").click(function(){
        $("#login-modal").fadeIn();
    });
});

$(function () {
  $(".imghover").hover(function () {
    //マウスオーバーしたときの処理
    $(this).stop().animate({opacity:0.5},"fast");
  },function () {
    //マウスアウトしたときの処理
     $(this).stop().animate({opacity:1.2},"fast");
  });
});
  
let map;
let marker;
let center = {
    lat: 35.60897271371426, // 緯度
    lng: 140.10517581413285// 経度
  };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:35.60897271371426, lng: 140.10517581413285 },
    zoom: 17,
  });
  
  marker = new google.maps.Marker({ 
    position:center, 
    map: map 
  });
  }

  $('#login-show').on('click',function(){
    $('.popup').addClass('show').fadeIn();
});
  
$('#close').on('click',function(){
    $('.popup').fadeOut();
});
