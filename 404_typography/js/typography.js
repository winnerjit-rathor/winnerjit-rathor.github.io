// JavaScript Document
$(window).load(function() {
	
	$('body').addClass('animationStart');
	
	window.onresize=resizer;

	if($('#w').height() > $('#ia').offset().top )
	{
		$('#ia').css({bottom: $('#w').height()+10+'px' , top:'auto'})
	}
	else
	{
		$('#ia').css({ top:'40vh'})
	}
	
	
	

$('#ht').animate({opacity:'1'} , 500);
$('#ia').delay(800).animate({opacity:'1'} , 100);
$('#w').delay(1800).animate({opacity:'1'} , 100);

$('#typography').delay(3000).animate({top:'-100%'} , 200).delay(4000).animate({left:'-100%'} , 200);   


setTimeout(function() {  delayedspans(); }, 3000);
function delayedspans()
	{
		$('#scene2 span').each(function(index, element) {
			
			var delayamount= (500*index);
			setTimeout(function() {  showspans(element); }, delayamount);
		});
	}

function showspans(element)
{
	$(element).animate({opacity:'1'}, 300); 
}


$('#four').delay(7500).animate({opacity:'1'} , 300 , function(){
	
	
	

});
	setTimeout(function() {  $('#dwi').css({top: ($('#four').height())+60+'px' , bottom:'auto'})
	$('#link').css({top: parseInt($('#dwi').css('top'))+parseInt($('#dwi').css('height'))+10+'px' , bottom:'auto'})
	
	if((parseInt($('#dwi').css('top')) + 34 )>($(window).innerHeight()/2)  || parseInt($('#or').css('top')) < (parseInt($('#link').css('top'))+ parseInt($('#link').css('height')) + 10 ) )
	{
		
		$('#or').css({top: parseInt($('#link').css('top'))+parseInt($('#link').css('height'))+10+'px'  , bottom:'auto'})
	}
	
	else
	{
		$('#or').css({top: '50vh' , bottom:'auto'})
	} }, 7900);
$('#dwi').delay(8000).animate({opacity:'1'} , 300);
$('#link').delay(8000).animate({opacity:'1'} , 300);
$('#or').delay(8500).animate({opacity:'1'} , 300);
$('#checkOut').delay(8900).animate({opacity:'1'} , 300);
$('#musique').delay(9200).animate({opacity:'1'} , 300);


});


function resizer()
{
		if($('#w').height() > $('#ia').offset().top )
		{
		$('#ia').css({bottom: $('#w').height()+10+'px' , top:'auto'})
		}
		
		else
		{
			$('#ia').css({ top:'40vh'})
		}




	$('#dwi').css({top: ($('#four').height())+60+'px' , bottom:'auto'});
	$('#link').css({top: parseInt($('#dwi').css('top'))+parseInt($('#dwi').css('height'))+10+'px' , bottom:'auto'});
	
	if((parseInt($('#dwi').css('top')) + 34 )>($(window).innerHeight()/2)  || parseInt($('#or').css('top')) < (parseInt($('#link').css('top'))+ parseInt($('#link').css('height')) + 10 ) )
	{
			$('#or').css({top: parseInt($('#link').css('top'))+parseInt($('#link').css('height'))+10+'px'  , bottom:'auto'})
	}
		
	else
	{
			$('#or').css({top: '50vh' , bottom:'auto'})
	}
	
}

