function  changeCssInd() {
    var w =  document.body.clientWidth;
        if (w >=  '1000' )
        {
			
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 50)
					{
						$('#header').addClass('header--white');
						
					}
					else
					{
						$('#header').removeClass('header--white');
						
					}
				});
			
			});	
			
		}
        else 
        {
			$('#header').addClass('header--white').removeClass('ind_header');
			
	 };
};
window.onload  = changeCssInd;


$('.search-form__button').on('click', function(){
    $('.advantages').addClass('show-result')
    $('.search-result').addClass('show-result')
    $('.extracts').addClass('show-result')
    // $('.extracts__container').addClass('show-result')
    // $('.extracts-item').addClass('show-result')
});

$('.nav-toggle').on('click', function(){
    $(this).toggleClass('opened')
    $('.menu').slideToggle()
});

$('.menu__list-link').on('click', function(e) {
    $('.extracts').removeClass('show-result') 
    var w =  document.body.clientWidth; 
    if (w <=  '650' )
    {
        $('.menu').slideToggle()
        $('.nav-toggle').toggleClass('opened')
    }
    
});

$('.menu__list-link--extract').on('click', function(e) { 
    e.preventDefault(); 
    $('.menu__list-link').removeClass('active')
    $(this).addClass('active')
    $('.content').addClass('dn')
    $('.price').removeClass('dn')
    $('.extracts').removeClass('dn')
    // $('#content').load('index.html #content');
});



$('.menu__list-link--questions').on('click', function(e) { 
    e.preventDefault(); 
    $('.menu__list-link').removeClass('active')
    $(this).addClass('active')
    $('.content').addClass('dn')
    $('.questions').removeClass('dn')
    $('.how-work').removeClass('dn')
    $('.location').removeClass('dn')    
});


$('.tab').on('click', function(e){
    e.preventDefault(); 
  
    $($(this).siblings()).removeClass('active');
    $($(this).parent().siblings().find('.tab-content')).removeClass('active');
  
    $(this).addClass('active')
    $($(this).attr('href')).addClass('active');
  
  });


  $('.questions__item-title').on('click', function(){
    $(this).parent().toggleClass('active')
    $(this).next().slideToggle()
  });


  $(".fancybox").fancybox();
