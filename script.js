$(document).ready(function(){

  var projects = {
    showProjectDescription: function(div1, div2){
      $(div1).mouseover(function(){
        var self = this;
        $(self).find(div2).slideDown(350);
      });
      $(div1).mouseleave(function(){
        var self = this;
        $(self).find(div2).slideUp(350);
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
    }, 500);
    return false;
});

  aboutMe.toggleViews();

  projects.showProjectDescription(".thumbnail", ".caption");

});
