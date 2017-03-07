'usestrict';
//ボタン押されたときの処理
function talk() {

    const text = $("#textarea").val();//テキストエリアの文字列取得

    //特別な処理を必要とする文字列が入力された場合
    if (text=== "こんにちわ" ||text=== "こんにちは") {
        const h = getHour();
        if(h >= 5 && h <= 9){
          changeText("今の時間は「おはよう」って言いましょうよ！");
        }else if(h >=10 && h<=17){
          changeText("こんにちは！！");
        }else{
          changeText("今の時間は「こんばんわ」って挨拶しましょう！");
        }

        return;//出力後関数を抜ける
  }else if(text=== "こんばんわ" ||text=== "こんばんは"){
          const h = getHour();
          if(h >= 5 && h <= 9){
            changeText("今の時間は「おはよう」って言いましょうよ！");
          }else if(h >=10 && h<=17){
            changeText("今の時間は「こんにちは」って言う挨拶が正しいですね");
          }else{
            changeText("こんばんわ！！");
          }
        return;
  }else if(text=== "おはよう" ||text=== "おはよ！"){
          const h = getHour();
          if(h >= 5 && h <= 9){
            changeText("おはよう！！");
          }else if(h >=10 && h<=17){
            changeText("今の時間は「こんにちは」って言う挨拶が正しいですね");
          }else{
            changeText("今の時間は「こんばんわ」って言いましょう");
          }
        return;
      }





/*************serihu.jsにある単語が入力されたとき ********/
  for (var i = 0; i < serihu[0].length; i++) {
      const quesArray = serihu[0][i].split(',');//質問配列をカンマ区切りで配列に保存
      const answerArray = serihu[1][i].split(',');//答え配列をカンマ区切りで配列に保存

      for (var j = 0; j < quesArray.length; j++) {
          const wordcheck = quesArray[j];

          if (text.indexOf(wordcheck) != -1) {//入力文字列がserif.jsにある単語だったとき
              const rand = Math.floor( Math.random() * answerArray.length );
              changeText(answerArray[rand]);
              return;//出力後関数を抜ける
          }else{//入力文字列がserif.jsにない場合
            const nothingText = ["何言ってんのかわかんない・・・","違う話しよ！"];
            const rand = Math.floor( Math.random() * nothingText.length );
            changeText(nothingText[rand]);
            }
        }
  }

}

//吹き出しの中の文字列書き換えjQuery使用
function changeText(outText){
  $("#balloon-4-bottom-right").text(outText);
}

//日本時間のhourを0〜24の数値で取得
function getHour(){
  const now = new Date();
  const h = now.getHours();
    return h;
}
