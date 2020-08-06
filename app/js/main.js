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
    $('.extracts__container').addClass('show-result')
    $('.extracts-item').addClass('show-result')

});

$('.nav-toggle').on('click', function(){
    $(this).toggleClass('opened')
    $('.menu').slideToggle()
});