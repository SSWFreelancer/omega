$(document).ready(function () {
    $('.tabs__item').click(function (event) {
          $(this).addClass('active');
          $(".tabs__item").not(this).removeClass('active');
    });    
    $('.tabs__item-1').click(function(event){
        $('#tab_01').addClass('target');
        $('#tab_02').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_04').removeClass('target');      

    });
    $('.tabs__item-2').click(function(event){
        $('#tab_02').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_04').removeClass('target');
    });
    $('.tabs__item-3').click(function(event){
        $('#tab_03').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_02').removeClass('target');
        $('#tab_04').removeClass('target');        
    });
    $('.tabs__item-4').click(function(event){
        $('#tab_04').addClass('target');
        $('#tab_01').removeClass('target');
        $('#tab_03').removeClass('target');
        $('#tab_02').removeClass('target');         
    });	

	 $('.content__block svg .svg').mouseenter(function(event){
	  		$('.content__block svg').addClass('active')
	 });
	 $('.content__block svg').mouseleave(function(event){
	  		$('.content__block svg').removeClass('active')
	 });
    $('.svg path').mouseenter(function(event){
    	$(this).addClass('active');
    });	
    $('.svg path').mouseleave(function(event){
    	$(this).removeClass('active');
    });	 
    $('.content__block svg .parking a').mouseenter(function(event){
         $(this).addClass('active')
    });
    $('.content__block svg .parking a').mouseleave(function(event){
         $(this).removeClass('active')
    });
   $('.cost__characteristic a').click(function (event) {
      $('.request-popup').addClass('open');
      $('body').addClass('lock');         
   });        
   $('.content__block.popup .svg path').click(function (event) {
      $('.request-popup').addClass('open');
      $('body').addClass('lock');         
   });  
   $('.content__block .parking').click(function (event) {
      $('.request-popup').addClass('open');
      $('body').addClass('lock');         
   });  

   $('.request-popup>p').click(function (event) {
      $('.request-popup').removeClass('open');
      $('body').removeClass('lock');         
   });      
   $('.request-popup__close').click(function (event) {
      $('.request-popup').removeClass('open');
      $('body').removeClass('lock');         
   });    
   $('.cost__slider').slick({
      arrows: false,
      dots: false,
      fade:true,
      swipe:false,
      slidesToShow: 1,
      asNavFor: '.cost__navslider',      
   });
   $('.cost__navslider').slick({
      arrows: false,
      swipe:false,
      slidesToShow: 3,
      focusOnSelect: true,
      asNavFor: '.cost__slider',     
   });     
}); 	