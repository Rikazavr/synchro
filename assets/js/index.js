//slider

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('#control_prev').click(function () {
        moveLeft();
    });

    $('#control_next').click(function () {
        moveRight();
    });

});



//hamburger

	$(function(){
  var width   = 200,
      height  = 44 * 4 + 20,
      speed   = 300,
      button  = $('#menu-button'),
      overlay = $('#overlay'),
      menu    = $('#hamburger-menu');

  button.on('click',function(e){
    if(overlay.hasClass('open')) {
      animate_menu('close');
    } else {
      animate_menu('open');
    }
  });

  overlay.on('click', function(e){
    if(overlay.hasClass('open')) {
      animate_menu('close');
    }
  });

  $('a[href="#"]').on('click', function(e){
    e.preventDefault();
  });

  function animate_menu(menu_toggle) {
    if(menu_toggle == 'open') {
      overlay.addClass('open');
      button.addClass('on');
      overlay.animate({opacity: 1}, speed);
      menu.animate({width: width, height: height}, speed);
    }

    if(menu_toggle == 'close') {
      button.removeClass('on');
      overlay.animate({opacity: 0}, speed);
      overlay.removeClass('open');
      menu.animate({width: "0", height: 0}, speed);
    }
  }
});

//scroll
	jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()<50){
        jQuery('#rocketmeluncur').slideUp(500);
    }else{
        jQuery('#rocketmeluncur').slideDown(500);
    }
    var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
    var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
})

jQuery('#rocketmeluncur').click(function(){
    jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
            duration: 600,  
            easing: 'linear'
        });
    
    var self = this;
    this.className += ' '+"launchrocket";
    setTimeout(function(){
      self.className = 'showrocket';
    },800)
});