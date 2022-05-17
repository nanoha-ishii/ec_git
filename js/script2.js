
//2ページ目画像切り替え//
$(function () {
    $(".js-sub-img img").on("click", function () {
      // mainに切り替えるimgのsrc取得
      img = $(this).attr("src");
      // currentクラス付け替え(枠線などを変えたい時に)
      $(".js-sub-img li").removeClass("current");
      $(this).parent().addClass("current");
      // fadeOutできたらsrc変更してfadeIn
      $(".js-main-img img").fadeOut(50, function () {
        $(".js-main-img img")
          .attr("src", img)
          .on("load", function () {
            $(this).fadeIn();
          });
      });
    });
  });

  $(function(){
    var value = 1628; // りんごの単品価格
    var maxNum = 5; // 注文できる個数の上限
    var tagInput = $('#jsNum'); // 入力対象のinputタグID名
    var tagOutput = $('#jsPrice'); // 出力対象のinputタグID名
    tagInput.on('change', function() {
      var str = $(this).val();
      var num = Number(str.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
      if(num == 0) {
        num = '';
      } else if (num > maxNum) { // 上限を超える個数を入力した場合
        num = maxNum;
      }
      $(this).val(num);
      if(num != 0) {
        var price = num * value;
        tagOutput.val(price);
    }
  });
});

