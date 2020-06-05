
//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
  var iframeOriginal = true;
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-theVideo"),
      videoSRCauto = videoSRC;
    var iframe = '<iframe class="embed-responsive-item" width="100%" height="350" src="" allowfullscreen></iframe>';
    if(iframeOriginal){
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').remove();
        iframeOriginal = false;
      });
      $(theModal + ' button.lock').click(function () {
        $(theModal + ' iframe').remove();
        iframeOriginal = false
      });
      $('body').click(function (event) {
        if(!$(event.target).closest(trigger).length && !$(event.target).is(trigger)) {
          $(theModal + ' iframe').remove();
          iframeOriginal = false;    
        };
      });
      return null
    } else {
      $("#div-iframe").append(iframe);
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').remove();
        iframeOriginal = false
      });
      $(theModal + ' button.lock').click(function () {
        $(theModal + ' iframe').remove();
        iframeOriginal = false
      });
      $('body').click(function (event) {
        if(!$(event.target).closest(trigger).length && !$(event.target).is(trigger)) {
          $(theModal + ' iframe').remove();
          iframeOriginal = false;    
        };
      });
      return null
    }
  });
}
autoPlayYouTubeModal();

$('.carousel').slick({
  dots: true,
  // adaptiveHeight: true
});