$(document).ready(function () {

    $("#btnSelectImage").click(function () {
        var finder = new CKFinder();
        finder.selectActionFunction = function (url, data) {
            $("#urlImage").val(url);
        };
        finder.popup();
    });

    CKEDITOR.replace("editor");
});