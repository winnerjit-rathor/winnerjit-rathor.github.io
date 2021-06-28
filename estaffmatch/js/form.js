
document.ready=function(){

$(window).on('resize', resizer); //resizer function attached to resize event of woindow

//showing bulbImg if window size is greater than 769
if(window.innerWidth > 769 && $('#header').hasClass('welcome'))
	{
		$('#bulbImg').fadeIn(0);
	}

//css properties of uploadContainer if 90% of window size is less than 500px
if((window.innerWidth*0.9)<500)
	{
		$('#uploadContainer').css({marginLeft:'-45%'});
		$('#uploadContainer div#uploadProgress').css({width:'55%'});
	}
//else the following css properties
	{
		$('#uploadContainer').css({marginLeft:'-250px'});
	    $('#uploadContainer div#uploadProgress').css({width:'75%'});
	}
//setting height of the #main div according to screen size
if(window.innerHeight > (parseInt($('#welcomeScreen1').css('height'))+110))
	{
		$('#main').height((window.innerHeight-100));
		$('#welcomeScreens').height((window.innerHeight-100));
	}
//else the following heights
else
	{
		$('#main').height(parseInt($('#welcomeScreen1').css('height'))+10);
		$('#welcomeScreens').height(parseInt($('#welcomeScreen1').css('height'))+10);
	}


//var screenViewHeight to get the activeScreens height(this functionality has been called in all the functions)
var screenViewHeight=($('.activeScreen').height() )+'px';
//set the screenContainer height according to the variable
$('#screensContainer').height(screenViewHeight);

//getting the top position of the active screen(this functionality has been called in all the functions)
var offsetPos=$('.activeScreen').position().top-$('#screensContainer').offset().top;
//animating the scrollTop of the #screenContainer according to the offsetPos variable
$('#screensContainer').animate({scrollTop:$('#screensContainer').scrollTop()+offsetPos}, 300);

$('#userInfo').css('top', '0');

$("#formMenuBtn a").on('click'  , function(){
	
if($('#formContainer').hasClass('menuActive'))
	{
		$('#formContainer').removeClass('menuActive');
	}
else
	{
		$('#formContainer').addClass('menuActive');

		if($(window).innerWidth()< 768)
			{
						
				$('#main').addClass('fullHeight');

				if((window.innerHeight-100) > 350)
					{
						$('#main').height((window.innerHeight-100));								
					}
							
				else
					{
						$('#main').height(350);			
					}

			}
	}

});

//activating time picker plugin for .dayFrom
$(".dayFrom").timepicki();
//activating time picker plugin for .dayTo
$(".dayTo").timepicki();
//appending required message span to parent of .dayFrom
//$(".dayFrom").parent().append('<span class="message">Required.</span>');
//appending required message span to parent of .dayTo
//$(".dayTo").parent().append('<span class="message">Required.</span>');

//function attached to the #form_menu buttons for animating activeScreens
//involving css properties and classes 
//avoid any changes here
$('#form_menu ul a:not(#finalSubmit)').on('click', function() {
	
	var screenID= ($(this).attr('data-screen'));
	$('.activeScreen').removeClass('activeScreen');
	$('#'+screenID).addClass('activeScreen');
	$('#'+screenID).next().animate({top: $('#'+screenID).position().top+ $('#'+screenID).height()+'px'});
	$('.activeScreen').next('.screen').find('.screenHead').removeClass('screenHeadActive');
	$('.activeScreen').find('.screenHead').addClass('screenHeadActive');
	var screenViewHeight=($('.activeScreen').height() )+'px';
	$('#screensContainer').animate({height:screenViewHeight},300);
	var offsetPos=$('.activeScreen').offset().top-$('#screensContainer').offset().top;
	$('#screensContainer').animate({scrollTop:$('#screensContainer').scrollTop()+offsetPos+1}, 300);
	$('#main').removeClass('fullHeight');
	$('#main').css({height:'auto'});
	$('.current').removeClass('current');
	$(this).parent().addClass('current');
	$('#formContainer').removeClass('menuActive');

});

//mainMenu dropdown button function related to the hamBurger button
$('.menuNav img').on('click' , function()
{
	if($('#mobileNav').hasClass('Mobilehidden'))
	{
		$('#mobileNav').removeClass('Mobilehidden');
		$('#mobileNav').slideDown(300);

	}
	else
	{
		$('#mobileNav').addClass('Mobilehidden');
		$('#mobileNav').slideUp(300);
	}
});

//android :checked fix for checkboxes styling
$('input[type=checkbox]').on('change', function() {
	
	if($(this).prop('checked')==false)
	{
			$('label[for='+$(this).attr('id')+'] span' ).removeClass('checked');
	}
	
	else
	{
		$('label[for='+$(this).attr('id')+'] span' ).addClass('checked');
	}
});

//android :checked fix for radio buttons styling
$('input[type=radio]').on('change', function() {
	
	if($(this).prop('selected')==false)

	{		
			$('label[for='+$(this).attr('id')+'] span' ).removeClass('selected');
	}
	
	else
	{
		$('.selected').removeClass('selected');
		$('label[for='+$(this).attr('id')+'] span' ).addClass('selected');
	}
});

//menu close button functionality
$('#menuClose').on('click',  function(event) {
	
	$('#formContainer').removeClass('menuActive');
	$('#main').removeClass('fullHeight');
		var screenViewHeight=($('.activeScreen').height() )+'px';

			$('#main').css({height:'auto'});
			$('#screensContainer').animate({height:screenViewHeight},300);
});

//function attached to .nextBtn functionality
$('.nextBtn').on('click', function(event) {
	
//each button has a specific validation function attached form the custom-validation.js
//the Ajax calls for database submission would be saved in each of validation functions	
	if($(this).hasClass('userinfoSub'))
	{
		userInfoValidation('.userinfoSub' , 'next');	
	}

	else if($(this).hasClass('experienceSub'))
	{
		experienceValidation('.experienceSub' , 'next');
	}	

	else if($(this).hasClass('contactinfoSub'))
	{
	 	contactInfoValidation('.contactinfoSub' , 'next');		
	}

	else if($(this).hasClass('contactinfoSub'))
	{
	 	contactInfoValidation('.contactinfoSub' , 'next');		
	}

	else if($(this).hasClass('availabilitySub'))
	{
	 	availabilityValidation('.availabilitySub' , 'next');		
	}

	else if($(this).hasClass('uploadsSub'))
	{
	 	uploadsValidation('.uploadsSub' , 'next');	
	}

	else if($(this).hasClass('gettingPaidSub'))
	{
	 	gettingPaidValidation('.gettingPaidSub' , 'next');	
	}

});	

//attaching function for activeScreen functionality to progressBtns
$(document).delegate(".progressBtnDone", "click", function () {
	
	var screenID= ($(this).attr('data-screen'));
	$('.activeScreen').removeClass('activeScreen');
	$('#'+screenID).addClass('activeScreen');
	$('#'+screenID).next().animate({top: $('#'+screenID).position().top+ $('#'+screenID).height()+'px'});
	$('.activeScreen').next('.screen').find('.screenHead').removeClass('screenHeadActive');
	$('.activeScreen').find('.screenHead').addClass('screenHeadActive');
	var screenViewHeight=($('.activeScreen').height() )+'px';
	$('#screensContainer').animate({height:screenViewHeight},300);
	var offsetPos=$('.activeScreen').offset().top-$('#screensContainer').offset().top;
	$('#screensContainer').animate({scrollTop:$('#screensContainer').scrollTop()+offsetPos}, 300);
	$('#main').removeClass('fullHeight');
	$('#main').css({height:'auto'});
	$('.current').removeClass('current');

});

//attaching function to freeAllDaysCheck checkbox
//deals with hiding and showing first time input field
$('#freeAllDaysCheck').on('change', function() {
			
	if($(this).prop('checked')==false)
		{

			$('#availability h5').first().find('.availCheckbox').removeAttr('checked').fadeOut(0);
			$('#availability h5').first().fadeIn(300);
			$('#availability #mondayField').fadeIn(300, function(){

				var screenViewHeight=($('.activeScreen').height() )+'px';
				$('#screensContainer').animate({height:screenViewHeight},300);
		
			});

			$('#freeAllDaysCheck').removeAttr('checked');
			$('.availBtns').first().fadeIn(300).find('.addRow').fadeIn(300);
			
		}

		else
		{

			$('#availability h5:nth-of-type(1)').fadeOut(300);
			$('.availBtns').first().fadeOut(300);
			$('#availability #mondayField').fadeOut(300 ,function(){

				var screenViewHeight=($('.activeScreen').height() )+'px';
				$('#screensContainer').animate({height:screenViewHeight},300);
			});

			$('#freeAllDaysCheck').attr('checked' ,'checked');
		}
	
});	

//attaching function to all individual .FAD checkboxes
//deals with hiding and showing input time fields for all individual days 
$('.FAD').on('change', function() {

	if($(this).prop('checked')==false)
		{
			$(this).closest('.dayContainer').find('.availField').fadeIn(300 ,function(){

				var screenViewHeight=($('.activeScreen').height())+'px';
				$('#screensContainer').animate({height:screenViewHeight},0);
			
			});

			$(this).closest('.dayContainer').find('.addRow').fadeIn(300);
	
		}	

	else	
		{

			$(this).closest('.dayContainer').find('.availField').fadeOut(300 ,function(){

				$(this).closest('.dayContainer').find('.addRow').fadeOut(0);
				var screenViewHeight=($('.activeScreen').height() )+'px';
				$('#screensContainer').animate({height:screenViewHeight},0);

			});

		}
});

//function attached to #sameforAllDays functionality
$('#sameAllDays').on('change', function(event) {
		
	if($(this).prop('checked')==false)
		{
			
		
			$('#fAllDayMain').fadeOut(300);	
			$('#availability h5').fadeIn(300);
			$('#availability h5').first().find('.availCheckbox').find('input').removeAttr('checked').closest('.availCheckbox').fadeIn(300);
			$('.availCheckbox ').find('input:not(:checked)').closest('.dayContainer').find('.availField' ).fadeIn(300);

			
			$('.availBtns ').fadeIn(300, function(){

				var screenViewHeight=($('.activeScreen').height() )+'px';
				$('#screensContainer').animate({height:screenViewHeight},30);

			});
			$('.availBtns').first().fadeIn(300).find('.addRow').fadeIn(300);
			//if($('#availability h5').first().find('.FAD').prop('checked')==true)
			///{
			//	$('#mondayField').fadeOut(300);
			//}


			$('#sameAllDays').removeAttr('checked');

		}

			else
			{
				$('#fAllDayMain').fadeIn(300);

				if($('#freeAllDaysCheck').prop('checked')==false)
				{
					$('#availability h5').first().find('.availCheckbox').find('input').removeAttr('checked').closest('.availCheckbox').fadeOut(0);
					$('.availField ').not(':first').fadeOut(300);
					$('.availField ').first().fadeIn(300);
					$(this).closest('.dayContainer').find('.availCheckbox').fadeOut(0);
					$('#availability h5 ').not(':first').fadeOut(300);
					
					$('.availBtns ').fadeOut(300, function(){

					var screenViewHeight=($('.activeScreen').height() )+'px';
					$('#screensContainer').animate({height:screenViewHeight}, 30);
				});
					$('.availBtns').first().fadeIn(300).find('.addRow').fadeIn(300);
				}

				else
				{
					
					$('.availField ').fadeOut(300);
					$('#availability h5 ').fadeOut(300);
					$('.availBtns ').fadeOut(300, function(){

					var screenViewHeight=($('.activeScreen').height() )+'px';
					$('#screensContainer').animate({height:screenViewHeight}, 30);
				});
				}
				
				

				$('#sameAllDays').attr('checked' ,'checked');
			}
			
			
});	

//function attached to #sameAddress checkbox
//deals with getting adress information from the contactInfo screen and putting it in the gettingPaid screen 
$('#sameAddress').on('change', function() {

	if($(this).prop('checked')==true)
	{
		
		if($('#address').val()!="")
		{
				$('#billAddress').val($('#address').val());
		}
		
		$('#billCity').val($('#city').val());
		$('#billCountry').val($('#country').val());
		$('#billPostalCode').val($('#postalCode').val());
	}

	else
	{
		$('#billAddress').val('');
		$('#billCity').val('');
		$('#billCountry').val('');
		$('#billPostalCode').val('');

	}
});


$('#priorExperience').on('change', function(event) {
	
	if($(this).prop('checked')==true)
	{
		$('#companyName1').attr({
			placeholder: '*Company name'
			
		});
		$('#toi1').find('option').first().html('*Type of Industry');
		$('#companyStart1').attr({
			placeholder: '*Start Date'
			
		});
		$('#companyEnd1').attr({
			placeholder: '*End Date'
			
		});
	}
	else
	{
		$('#companyName1').attr({
			placeholder: 'Company name'
			
		});
		$('#toi1').find('option').first().html('Type of Industry');
		$('#companyStart1').attr({
			placeholder: 'Start Date'
			
		});
		$('#companyEnd1').attr({
			placeholder: 'End Date'
			
		});
	}
});
//function attached to .addRow buttons 
//it takes the previous fields duplicates them and  appends them to the page 
//the id and name attribute of each new field is of the form dayName+From+totalnumberoffieldsbefore it
$('.addRow').on('click' , function(){

	var totalFields=$(this).parent().parent().find('.availField').length;
	var newField = $(this).parent().parent().find('.availField').last().clone();
	
	$(newField).find('.dayFrom').attr({

		id: $(this).attr('data-day')+'From'+(totalFields+1),
		name: $(this).attr('data-day')+'From'+(totalFields+1)

	}).removeClass('error');	

	$(newField).find('.dayTo').attr({

		id: $(this).attr('data-day')+'To'+(totalFields+1),
		name: $(this).attr('data-day')+'To'+(totalFields+1)

	}).removeClass('error');	

	var newFrom= $(newField).find('.dayFrom');
	var newTo=$(newField).find('.dayTo');

	$(newFrom).attr('placeholder' , '12 : 59 : AM');
	$(newTo).attr('placeholder' , '12 : 59 : AM');

	$(newField).html('');
	$(newField).append(newFrom);
	$(newField).append('<span>to</span>');
	$(newField).append(newTo);
	$(newField).find('input').timepicki();
	$(newField).insertAfter( $(this).parent().parent().find('.availField').last()).fadeOut(0).fadeIn(300);
	
	var screenViewHeight=($('.activeScreen').height() )+'px';
	$('#screensContainer').animate({height:screenViewHeight}, 30);
});

//function attached to .addExperience buttons 
//it takes the previous fields duplicates them and  appends them to the page 
//each field is diffrentiated numerically
$('.addExperience').on('click', function(){

	var totalRows=$(this).parent().parent().find('.experienceRow').length;
	var newRow = $(this).parent().find('.experienceRow').last().clone();

	$(newRow).find('.companyName').attr({
		id: 'companyName'+(totalRows+1),
		name: 'companyName'+(totalRows+1),
			placeholder: 'Company Name'
	}).removeClass('error');	

	$(newRow).find('.companyEnd').attr({
		id: 'companyEnd'+(totalRows+1),
		name: 'companyEnd'+(totalRows+1),
		placeholder:'End Date'
	}).removeClass('error');	

	$(newRow).find('.companyStart').attr({
		id: 'companyStart'+(totalRows+1),
		name: 'companyStart'+(totalRows+1),
			placeholder: 'Start Date'
	}).removeClass('error');	

	$(newRow).find('.toi').attr({
		id: 'toi'+(totalRows+1),
		name: 'toi'+(totalRows+1)
	}).removeClass('error');	

	$(newRow).find('label.error').removeClass('error').remove();

	$(newRow).find('.toi').find('option').first().html('Type of Industry');	
	$(newRow).insertAfter( $(this).parent().find('.experienceRow').last()).fadeOut(0).fadeIn(300);
	var screenViewHeight=($('.activeScreen').height() )+'px';
	$('#screensContainer').animate({height:screenViewHeight}, 30);

});

//function attached to each of the .uploadBtn
//these button enables the upload container and fades it in
$('.uploadBtn').on('click', function(event) {
	event.preventDefault();

	$('#uploadHead').html($(this).html());
	$('#uploadFile').val('');
	if(this.id=='uploadPhoto')
	{
		$('#uploadblurb').html(" Show us that you look the part, by uploading a work-friendly photo. ");
	}
	else if(this.id=='videoUpload')
	{
		$('#uploadblurb').html('Please upload a video');
	}
	else
	{
		$('#uploadblurb').html('Please upload a image');
	}
	$('#uploadFile').attr('data-btn', $(this).attr('id'));
	$('#UploadLightbox').fadeIn(300);
	$('#uploadProgress .progressSuccess').css({width:'0'});
	
});

$('#doneBtn button').on('click' , function(event)
{
	event.preventDefault();
	var targetBtn=$(this).closest('#uploadContainer').find('#uploadFile').attr('data-btn');

	var filePath=($(this).closest('#uploadContainer').find('#uploadFile').val());
	if(filePath!='')
	{

		fileName=filePath.substring(filePath.lastIndexOf('\\')+1);
		
		$('#uploadProgress .progressSuccess').animate({width:'100%'},1000,function(){

			$('#'+targetBtn).closest('.btnContainer').find('.fileValues').val(fileName);
		$('#'+targetBtn).html(fileName);
		$('#UploadLightbox').fadeOut(300);
		});
	}
	
	
	
});

//#uploadClose button destroys the uploadContainer
$('#uploadClose').on('click', function(){

	$('#UploadLightbox').fadeOut(300);
	
});

//#welcome1Btn button fadesOut welcomeScreen1 
//fadesIn welcomeScreen2
////swithces classes for header
$('#welcome1Btn').on('click',  function() {
	
	
	$('#welcomeScreen1').fadeOut(300);
	$('#welcomeScreen1Btn').fadeOut(300);
	$('#welcomeScreen2').fadeIn(300);
	$('#welcomeScreen2Btn').fadeIn(300);
	if(window.innerWidth > 769)
	{
		$('#lockImg').fadeIn(300);
	}
	
	$('#bulbImg').fadeOut(300);
	$('#header').removeClass('welcome');
	$('#header').addClass('welcome2');

});

//#welcome2Btn button fadesOut welcomeScreen2 
//fadesIn #screenContainer
//swithces classes for header
$('#welcome2Btn').on('click',  function() {
	
	/* Act on the event */
	$('#welcomeScreen2').fadeOut(300);
	$('#welcomeScreen2Btn').fadeOut(300);
	$("#welcomeScreens").fadeOut(300 );
	$('#lockImg').fadeOut(300);
	$('#formContainer').fadeIn(0 , function(){

var screenViewHeight=($('.activeScreen').height() )+'px';

$('#screensContainer').height(screenViewHeight);


	});
	
$('#main').removeClass('fullHeight').css({height:'auto'});
$('#header').removeClass('welcome2');
$('#screensContainer').fadeOut(0).fadeIn(1000);	
	
});

//the #finalSubmit button fadesIn the congrats screen
//fadesOut the #screenContainer
$('#finalSubmit').on('click',  function() {

	$('#screensContainer').fadeOut(0);	
	/* Act on the event */
	$('#congratsScreen').fadeIn(300);
	$('#congratsScreenBtn').fadeIn(300);
	$("#welcomeScreens").fadeIn(300);

	$('#formContainer').fadeOut(0 , function(){
	if(window.innerWidth > 769)
	{
		$('#trophyImg').fadeIn(300);
	}


	});

	
$('#main').addClass('fullHeight').css({height:'auto'});
$('#header').addClass('congrats');

	
});


}

//function resizer called everytime window is resized
//this works for jQuery media queries
function resizer()
{
	

	//welcomeScreen2 jQuery media query
	if(window.innerWidth > 769 && $('#header').hasClass('welcome2'))
	{
		$('#lockImg').fadeIn(0);
	}
	//congratsScreen jQuery media query
	else if(window.innerWidth > 769 && $('#header').hasClass('congrats'))
	{
		$('#trophyImg').fadeIn(0);
	}
	//welcomeScreen1 jQuery media query
	else if(window.innerWidth > 769 && $('#header').hasClass('welcome'))
	{
		$('#bulbImg').fadeIn(0);
	}
	//welcomeScreens jQuery media query
	else
	{
		$('#lockImg').fadeOut(0);
		$('#bulbImg').fadeOut(0);
		$('#trophyImg').fadeOut(0);
	}
	//uploadContainer jQuery media query
	if((window.innerWidth*0.9)<500)
	{
			$('#uploadContainer').css({marginLeft:'-45%'});
			$('#uploadContainer div#uploadProgress').css({width:'55%'});
	}
	//uploadContainer jQuery media query
	else
	{
		$('#uploadContainer').css({marginLeft:'-250px'});
			$('#uploadContainer div#uploadProgress').css({width:'75%'});
	}
	//welcomeScreens jQuery media queries for Window height and #main div height
	if($('#header').hasClass('welcome') || $('#header').hasClass('congrats') || $('#header').hasClass('welcome2'))
	{
		if((window.innerHeight-100) > parseInt($('#welcomeScreen1').css('height')))
		{
			$('#main').height((window.innerHeight-100));
			$('#welcomeScreens').height((window.innerHeight-100));
			console.log(parseInt($('#welcomeScreen1').css('height')));

		}
		else
		{
			$('#main').height(parseInt($('#welcomeScreen1').css('height'))+10);
			$('#welcomeScreens').height(parseInt($('#welcomeScreen1').css('height'))+10);
			
		}

	}
	//NON welcomeScreens jQuery media queries for Window height and #main div height
	//when menu is active
	if($('#main').hasClass('fullHeight') && !$('#header').hasClass('welcome') && !$('#header').hasClass('welcome2') && !$('#header').hasClass('congrats') )
	{
		if(window.innerWidth < 768)
		{
			$('#main').height((window.innerHeight-100));

			if($('#formContainer').hasClass('menuActive'))
			{

				if((window.innerHeight-100)>350)
				{
					$('#main').height((window.innerHeight-100));
				}
								
				else
				{
					$('#main').height(350);						
				}						
													
			}

			else
			{
			
				$('#main').css({
					height: 'auto'
				});
			}
		}
		
	}

	/**The media queries for activeScreens **/
	if($('.activeScreen').attr('id')=='review')
	{
		$('#screensContainer').height($('.activeScreen').height());
	}
	else
	{
		if(window.innerWidth<769)
			{
				if($('#gettingPaid').hasClass('activeScreen'))
				{
						var screenViewHeight=($('.activeScreen').height() )+'px';
				}
				var screenViewHeight=($('.activeScreen').height() )+'px';
			}
			else
			{
				var screenViewHeight=($('.activeScreen').height() )+'px';
			}
		$('#screensContainer').animate({height:screenViewHeight},30);
	}

	var offsetPos=$('.activeScreen').offset().top-$('#screensContainer').offset().top;
	$('#screensContainer').animate({scrollTop:$('#screensContainer').scrollTop()+offsetPos},0);
}

//Function TranslateForm called after each validation from custom-validation.js
//this deals with the Next Bitton functionality
//Scrolls #screenContainer to the next screen
//Adjusts the height
//Handle with care
function TranslateForm(myParentIdentifierClass)
{
	if(myParentIdentifierClass=='first')
	{
		$('#userInfo').addClass('activeScreen');
		$('#formContainer').addClass('menuActive');
		$('#main').addClass('fullHeight');
		if(window.innerWidth<769)
		{
		$('#main').height($(window).height()-100);
		}
	}
	else
	{
		$('.activeScreen').next('.screen').addClass('activeScreen');
	}
	
	$('.activeScreen').find('.screenHead').addClass('screenHeadActive');
	$(myParentIdentifierClass).closest('.activeScreen').find('.screenHead').removeClass('screenHeadActive');
	$(myParentIdentifierClass).closest('.activeScreen').removeClass('activeScreen');
	
	if(window.innerWidth<769)
	{

		if(myParentIdentifierClass=='.uploadsSub')
		{
			var screenViewHeight=($('.activeScreen').height() )+'px';

		}
		var screenViewHeight=($('.activeScreen').height() )+'px';
	}

	else
	{
		var screenViewHeight=($('.activeScreen').height() )+'px';
	}
		
	
	$('#screensContainer').height(screenViewHeight);
	
	var offsetPos=$('.activeScreen').offset().top-$('#screensContainer').offset().top;
	$('#screensContainer').animate({scrollTop:$('#screensContainer').scrollTop()+offsetPos+1}, 300);
}	
