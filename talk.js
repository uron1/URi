
        //ボタン押されたときの処理
          function talk() {
            // $("#textarea").val() テキストエリアの文字列取得
            let text = $("#textarea").val();

            for (var i = 0; i < serihu[0].length; i++) {
              let ary = serihu[0][i].split(',');
              let answer = serihu[1][i].split(',');


                  for (var a = 0; a < ary.length; a++) {

                    let wordcheck = ary[a];

                    if (text.indexOf(wordcheck) != -1) {


                      let rand = Math.floor( Math.random() * answer.length ) ;
                  $("#balloon-4-bottom-right").text(answer[rand]);
                    return;

                  }else{
                      $("#balloon-4-bottom-right").text("何言ってんのかわかんない・・・");
                  }
                  }

            }

          }
