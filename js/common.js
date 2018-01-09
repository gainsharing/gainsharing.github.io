/* ------------------------------
 Loading イメージ表示関数
 引数： msg 画面に表示する文言
 ------------------------------ */
function dispLoading(msg){
    // 引数なし（メッセージなし）を許容
    if( msg == undefined ){
        msg = "";
    }
    // 画面表示メッセージ
    var dispMsg = "<div class='loadingMsg'>" + msg + "</div>";
    // ローディング画像が表示されていない場合のみ出力
    if($("#loading").length == 0){
        $("body").append("<div id='loading'>" + dispMsg + "</div>");
    }
}

/* ------------------------------
 Loading イメージ削除関数
 ------------------------------ */
function removeLoading(){
    $("#loading").remove();
}

/* ------------------------------
 アラート
 ------------------------------ */
function editAfterAlert(result){
    var alrtTitle,alrtIcon
    if(result === true){
        alrtTitle = "登録成功";
        alrtIcon = "success";
    }else{
        alrtTitle = "登録失敗";
        alrtIcon = "error";
    }
    // sample4
    var options = {
        title: alrtTitle,
        text: "アラートは自動的に閉じます",
        icon: alrtIcon, // warning, info, error
        timer: 2000, // 3秒後に自動的にアラートを閉じる
        buttons: false,
      }
    swal(options)
}
