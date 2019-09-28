$(function () {
  // buttonがclickされたとき、変数に検索する値を代入
  $('#search_button1, #search_button2, #search_button3').on('click', function () {

    // 押したボタンのジャンルIDを取得
    var keyword = $(this).val();

    // リクエストURLを設定する
    $.get('https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?', {
      applicationId: "xxxxxxxx",
      format: 'json',
      genreId: keyword

      // 結果が帰ってきたらここでそれを受け取り、空でなければ順番に出力していく
    }, function (data) {

      // 配列に格納
      let rrArry = [];

      console.log(data);
      rrArry.push(`<tr>
                    <th>順位</th>
                    <th>画像</th>
                    <th>商品名</th>
                    <th>値段</th>
                    <th>内容</th>
                  </tr>`);

      for (let i = 0; i < 10; i++) {
        rrArry.push(`<tr><td>${(i + 1)}</td>
          <td>${data.Items[i].Item.itemName}</td>
          <td><img src="${data.Items[i].Item.mediumImageUrls[0].imageUrl}"></td>
          <td>${data.Items[i].Item.itemPrice}円</td>
          <td>${(data.Items[i].Item.itemCaption).substr(0,100)}</td></tr>;
      `)}
      $('tbody').html(rrArry);

      // }) // each
    }); // function(data)
  }); // clickイベント
}); // function