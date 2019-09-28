// 楽天APIを使って自分で決めた商品ジャンル3つの
// ランキングデータ10位までを
// json形式で取得しテーブルで表示する

// 下記4つの方式で作成すること
// 1.XMLHttpRequest();
// 2.jQueryによるAjax通信
// 3.fetchを用いたAjax通信
// 4.Promiseを用いた非同期通信

// HTML部分
// 1.○○○○ //商品ジャンル1　←クリック
// 2.○○○○ //商品ジャンル2　←クリック
// 3.○○○○ //商品ジャンル3　←クリック
// //上記のどれかをクリックしたら下記の表示がでる

// 順位	画像	商品名	値段	内容
// 1				
// 2				
// 3				
// 4				
// 5				
// 6				
// 7				
// 8				
// 9				
// 10			


$(function () {
  // buttonがclickされたとき、変数に検索する値を代入
  $('#search_button1, #search_button2, #search_button3').on('click', function () {
    var keyword = $(this).val();
    console.log(keyword)

    // リクエストURLを設定する
    $.get('https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?', {
      applicationId: "xxxxxxxxxx",
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