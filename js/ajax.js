//
// JSONへ変換
//
function json_encode(obj){
    return JSON.stringify(obj)
}

//
// 初期表示テーブル取得
//
function request(url,param,csrf_token,queryType){
    // 取得条件セット(JSONへ変換)
    var conditision = json_encode(param);
    // API指定
    var requestUrl = url;
    // 初期表示データ取得
    var result = ajax_request(requestUrl,conditision,csrf_token,queryType)
    // 結果return
    return result;
}

//
// Ajax通信でデータ取得
//
function ajax_request(requestUrl,conditision,csrf_token,queryType){
    var obj

    $.ajax({
        type: 'POST',
        // リクエストURL
        url: requestUrl,
        contentType: 'application/json;charset=utf-8',
        // タイムアウト(ミリ秒)
        //timeout: 10000,
        // キャッシュするかどうか
        cache: true,
        // サーバに送信するデータ(name: value)
        data: conditision,
        // レスポンスを受け取る際のMIMEタイプ(html,json,jsonp,text,xml,script)
        // dataType: 'json',
        dataType: 'html',
        // Ajax通信前処理
        beforeSend: function(jqXHR) {
            // Laravelでは、csrf-tokenが必要
            return jqXHR.setRequestHeader('X-CSRF-TOKEN', csrf_token);
        },
        // コールバックにthisで参照させる要素(DOMなど)
        // context: domobject
    }).done(function(response, textStatus, jqXHR) {
        // JSONをパース
        var data = JSON.parse(response);
        // 成功時処理
        if(queryType==='save'){
            // INSERT/UPDATE/DELET
            if(data.result == true){
                // 成功アラート表示
                editAfterAlert(true);
            }else{
                // 失敗アラート表示
                editAfterAlert(false);
            }
        }else{
            // SELECT
            obj = '';
        }
    }).fail(function(jqXHR, textStatus, errorThrown ) {
        // 失敗アラート表示
        editAfterAlert(false);
    }).always(function(data_or_jqXHR, textStatus, jqXHR_or_errorThrown) {
        // doneまたはfail実行後の共通処理
        return obj
    });
}
