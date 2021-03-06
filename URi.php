<!DOCTYPE html>
<html lang="ja">
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
    <meta name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1" />
    <link rel="stylesheet" media="all" type="text/css" href="/URi/css/URi.css" />
    <!-- ※スマートフォン用のスタイル（smart.css） -->
    <link rel="stylesheet" media="all" type="text/css" href="/URi/css/smartURi.css" />
    <link rel="shortcut icon" href="http://uron.webcrow.jp/pic/favicon.ico">
    <meta charset="utf-8">
    <title>URi</title>
    <script type="text/javascript">
var xmlHttp;

function loadText(){
  if (window.XMLHttpRequest){
    xmlHttp = new XMLHttpRequest();
  }else{
    if (window.ActiveXObject){
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
      xmlHttp = null;
    }
  }
  xmlHttp.onreadystatechange = checkStatus;
  xmlHttp.open("GET", "/header.html", true);

  xmlHttp.send(null);
}

function checkStatus(){
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
    var node = document.getElementById("disp");
    node.innerHTML = xmlHttp.responseText;
  }
}
</script>
  </head>
  <body>
    <link rel="stylesheet" href="index.css">
      <script type="text/javascript">
        loadText();
      </script>
      <div id="URi">
        <img src="https://pbs.twimg.com/profile_images/815156621412167680/74VIEOSJ.jpg" alt="" width="350px" height="350px" id="URichan">
        <div id="balloon-4-bottom-right">現在開発中です</div>
          <div id="form" >
            <textarea name="msg" cols=50 rows=30 id="textarea"></textarea>
            <script type="text/javascript" src="serihu.js"></script>
            <script type="text/javascript" src="talk.js"></script>
            <div class="button" onclick="talk()">
              <script type="text/javascript" src="index.js"></script>
              <p>話しかける</p>
            </div>
          </div>
        </div>
  </body>
</html>
