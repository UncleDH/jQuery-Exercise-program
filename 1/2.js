var $a = $("p");
var a_txt = $a.text();
var $a_txt = $a.attr("title");
//alert(a_txt);
//alert($a_txt);
var $li_1 = $("<li>香蕉</li>");
$("ul").append($li_1);
var $li_3 = $("<li title='雪梨'>雪梨</li>");
$("ul").append($li_3);
var $li = $("ul li:last").remove();
$("ul").append($li);
//$("ul li").remove("li[title!=菠萝]");
$("ul li:last").empty();
$("ul li").click(function(){
    $(this).clone().appendTo("ul");
})
$("p").replaceWith("<strong>你最不喜欢的水果</strong>");