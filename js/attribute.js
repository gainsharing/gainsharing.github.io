$('input[type="text"]').keyup(function() {
    var val = $(this).val();
    if(val===""){
        // 子要素css追加/削除
        $(this).next('span').addClass("glyphicon-remove");
        // 親要素css追加/削除
        $(this).parent().addClass("has-error has-feedback");
    }else{
        // 子要素css追加/削除
        $(this).next('span').removeClass("glyphicon-remove");
        // 親要素css追加/削除
        $(this).parent().removeClass("has-error has-feedback");
    }
});
