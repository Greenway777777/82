$(document).ready(function () {
    var img_content_width = $("#banner_container a").outerWidth();
    var img_num = $("#banner_container a").length;
    var banner_content_width = img_content_width * img_num + 20;
    if (img_num < 2) {
    } else {
        $('#banner_container').css("width", banner_content_width + "px");
    }
});