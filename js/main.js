
$(document).ready(function(){
    $(".mob_btn_js").click(function(){
        $(".header_sidebar").toggleClass("active");
    });
    $('.home_slider').owlCarousel({
        margin:0,
        nav:true,
        items:1
    })
});
// for ie object-fit
var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

if(ie) {
  $(".item_cover").each(function () {
    var $container = $(this),
        imgUrl = $container.find("img").wrap("<div class='ie_holder'></div>").prop("src");
    if (imgUrl) {
      $container.find(".ie_holder").css("background", 'url(' + imgUrl + ')').addClass("custom_object_fit");
    }
  });
}