
function clearAdvertising() {
  'use strict';
  console.log("欢迎使用广告去除");
  //阅读全文
  $('#btn-readmore').click();
  $(".ad").remove();
  //文章右侧隐藏
  $('.article-right').remove();
  $('#txtlink').remove();
  $('.mainlr').remove();
  $('.topimg').remove();
  $('.bPic').remove();
  $('.jb51ewm').remove();
  $('.tags').remove();
  $('#pic_container').remove();
  $('.pic_container').remove();
  //class="xgcomm clearfix"
  $('.xgcomm').remove();
  $('#footer').remove();
  $('.subnav').remove();
  $('.nav_top').remove();
  $('.header').remove();
  $('.topTools').remove();
  $('.NavBar').remove();
  $('.box').remove();
  $('.blank5').remove();
  //隐藏文章下面广告
  $('#content').nextAll().remove();
  //文章上面的内容
  $('#content').prevAll().hide();
  $('.title').show();
  $('.title').first().children('p').hide();
  $('.art_desc').remove();
  $('.right-share').remove();
  $('#right-share').remove();
  //class="w750 fl"文字主体
  //文字居中
  // class="article-content border"
  $('#content').css("float", "left");
  $('#content').css("margin", "auto");
  // 头部广告
  $(".logom.fl").remove();
  $(".logor.fr").remove();
  $(".tonglan").remove();
  $(".da").remove();
  $(".rjTestPos").remove();
  $(".soft_picc").remove();
  $(".mt10.rFixedBox").remove();
  // 文章内的广告
  $(".google-auto-placed .ap_container").remove();
  /* $(".main.clearfix").each((i, e) => {
    const flag = $(e).children().is(".mainlr");
    if (flag) {
      $(e).remove();
    }
  }); */
  $(".clearfix").each((i, e) => {
    const flag1 = $(e).children().is(".mainlr");
    const flag2 = $(e).children().is(".topimg");
    if (flag1 || flag2) {
      $(e).remove();
    }
  });
  // 可点击元素
  // $("a").each((i, e) => {
  //   console.log($(e).attr("href"));
  // });
}

window.addEventListener('load', clearAdvertising);