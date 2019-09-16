$(function(){
  // buttonがclickされたとき、変数に検索する値を代入
  $('#search_button1, #search_button2, #search_button3').on('click', function(){
    var keyword = $(this).val();

    // リクエストURLを設定する
    $.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222?', {
      applicationId: "xxxx",
      keyword: keyword,
      hits: 10

    // 結果が帰ってきたらここでそれを受け取り、空でなければ順番に出力していく
    }, function(data){
      if (data.count > 0){
        console.log(data);
        $.each(data.Items, function(i, item){
          var temp = $(`<li><a href="${item.Item.itemUrl}"><img src="${item.Item.mediumImageUrls[0].imageUrl}"></a></li>`);
          $('ul').append(temp);
        }) // each
      } // if
    }); // function(data)
  }); // clickイベント
}); // function