//using noConflict mode
const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq(".slider").slick({
    dots: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  });
});
