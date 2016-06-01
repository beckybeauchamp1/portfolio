$(document).ready(function(){

  var projects = {
    showProjectDescription: function(div1, div2){
      $(div1).mouseover(function(){
        var self = this;
        var imgCap = $(self).find(".img-thumbnails")
        console.log(imgCap)
        $(self).find(div2).slideDown(500);
        imgCap.css("-webkit-filter", "blur(20px)");
      });
      $(div1).mouseleave(function(){
        var self = this;
        var imgCap = $(self).find(".img-thumbnails")
        console.log(imgCap)
        $(self).find(div2).slideUp(500);
        imgCap.css("-webkit-filter", "blur(0px)");
      });
    }
  };

  var aboutMe = {
    toggleViews: function(){
      $(".about-subheaders").on("click", function(evt){
        evt.preventDefault();
        $(".about-info").hide();
        var toggleViewType = $(this).text();
        $("." + toggleViewType).toggle();
      });
    }
  };

  $("a.toscroll").on('click',function(e) {
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#")+1);
    $('html, body').animate({
        scrollTop: $('#'+hash).offset().top
    }, 1000);
    return false;
});

  aboutMe.toggleViews();

  projects.showProjectDescription(".thumbnail", ".caption");

});
