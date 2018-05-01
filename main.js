$(document).ready(function(){
$("#zbutton").click(function(){$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp"+new Date(), function(a) {
  $("#quote").html(a[0].content + "&mdash; " + a[0].title)});
});
})