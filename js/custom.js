$(function(){
   
//$('.nav-bar').click(function(){
//       $('.nav-link').addClass('show');
//   }); 
//    
$('.part-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  arrows: false,
  autoplaySpeed: 500,
});    
$('.service-main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  arrows: false,
  dots: true,
  autoplaySpeed: 1500,
});            
$('.team-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  arrows: false,
  dots: true,
  autoplaySpeed: 2500,
});  
$('.blog-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  arrows: false,
  dots: true,
  autoplaySpeed: 2500,
});  
        
//WOW.JS 
new WOW().init();     
    
    
});