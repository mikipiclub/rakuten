$(function () {
  $('#search_button1, #search_button2, #search_button3').on('click', function () {

    let httpRequest = new XMLHttpRequest();
    let key = $(this).val();
    let t = {
      url: "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?",
      format: 'format=json',
      genreId: '&genreId=' + key,
      applicationId: '&applicationId=xxxxxxx'
    }
    let url = t.url + t.format + t.genreId + t.applicationId;
    let result = '';
    let resultArry = [];

    httpRequest.open('GET', url, true);
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {

        // 結果をresult に格納
        result = JSON.parse(httpRequest.responseText);
        for (let i = 0; i < 10; i++) {
          resultArry.push(`<tr><td>${(i + 1)}</td>
                <td>${result.Items[i].Item.itemName}</td>
                <td><img src="${result.Items[i].Item.mediumImageUrls[0].imageUrl}"></td>
                <td>${result.Items[i].Item.itemPrice}円</td>
                <td>${(result.Items[i].Item.itemCaption).substr(0, 100)}</td></tr>;
            `)
        }
        $('tbody').html(resultArry);

      }
    };
    let data = httpRequest.send(url);

  });
});