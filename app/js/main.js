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
    $('.extract-form').removeClass('dn')
    // $('.extracts-item').addClass('show-result')
});

$('.nav-toggle').on('click', function(){
    $(this).toggleClass('opened')
    $('.menu').slideToggle()
    $('.basket-mobile').toggleClass('dn')

    
});

$('.menu__list-link').on('click', function(e) {
    $('.extracts').removeClass('show-result')
    $('.extract-form').addClass('dn')
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
    $('.extracts').removeClass('dn').addClass('max-width')
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
    $('.extracts').removeClass('max-width')
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

