 function userInfoValidation(whereClass, whichBtn) {


	$( "#userInfoForm" ).validate({
		   onfocusout:
function(element) {
if ( !this.checkable(element) ) {
this.element(element);
}
},
		rules: {
			fName: {
				required: true,
				minlength: 3
			},
			lName: {
				required: true,
				minlength: 3
			},
			email: {
				required: true
			},
			
			pass:{
				required: true,
				minlength:5
			},
			cPass:{
				equalTo: pass 
			},
			birthday:
			{
				required: true
			}
			
		},
		
		messages: {
			cEmail: 'repeat your Email Address',
			cPass: 'repeat your password' 
		},

		errorPlacement: function( error, element ) {
			error.insertAfter( element);
		},

		submitHandler: function(form) {
				if(whichBtn=='next')
				{
					$('.current').removeClass('current');
				
					$('#progressBarHolder a:nth-of-type(1) .progressSuccess').addClass('progressBtnDone').animate({width:'100%'}, 300);
					$('#form_menu li:nth-of-type(2)').removeClass('disabledBtn').addClass('current');
					$('#form_menu li:nth-of-type(1) a').addClass('done');

					TranslateForm(whereClass);
				}
				
			}
	});
}

function contactInfoValidation(whereClass, whichBtn) {
	$( "#contactInfoForm" ).validate({
		rules: {
			
			province: {
				required: true
				
			},
			country: {
				required: true
			},
			postalCode:
			{
				required: true
			},
			city:{
				required: true
			}
			
		},

		errorPlacement: function( error, element ) {
			error.insertAfter( element);
		},

		submitHandler: function(form) {
				
				console.log(whichBtn);
				if(whichBtn=='next')
				{
					$('.current').removeClass('current');
					
					$('#progressBarHolder a:nth-of-type(2) .progressSuccess').addClass('progressBtnDone').animate({width:'100%'}, 300);
					$('#form_menu li:nth-of-type(3)').removeClass('disabledBtn').addClass('current');
					$('#form_menu li:nth-of-type(2) a').addClass('done');
					TranslateForm(whereClass);
				}
			}
	});
}

function availabilityValidation(whereClass, whichBtn) {

	
	$( "#availabilityForm" ).validate({
		rules: {
			
			mondayFrom1:
{
   required:"#mondayFAD:not(:checked)"
},

tuesdayFrom1:
{
   required:"#tuesdayFAD:not(:checked)"
},
wednesdayFrom1:
{
   required:"#wednesdayFAD:not(:checked)"
},
thursdayFrom1:
{
   required:"#thursdayFAD:not(:checked)"
},
fridayFrom1:
{
   required:"#fridayFAD:not(:checked)"
},
saturdayFrom1:
{
   required:"#saturdayFAD:not(:checked)"
},
sundayFrom1:
{
   required:"#sundayFAD:not(:checked)"
},
mondayTo1:
{
   required:"#mondayFAD:not(:checked)"
},
tuesdayTo1:
{
   required:"#tuesdayFAD:not(:checked)"
},
wednesdayTo1:
{
   required:"#wednesdayFAD:not(:checked)"
},
thursdayTo1:
{
   required:"#thursdayFAD:not(:checked)"
},
fridayTo1:
{
   required:"#fridayFAD:not(:checked)"
},
saturdayTo1:
{
   required:"#saturdayFAD:not(:checked)"
},
sundayTo1:
{
   required:"#sundayFAD:not(:checked)"
}

		},
		 messages: {

            mondayFrom1: "Required Field",
            tuesdayFrom1: "Required Field",
            wednesdayFrom1: "Required Field",
            thursdayFrom1: "Required Field",
            fridayFrom1: "Required Field",
            saturdayFrom1: "Required Field",
            sundayFrom1: "Required Field",
              mondayTo1: "Required Field",
            tuesdayTo1: "Required Field",
            wednesdayTo1: "Required Field",
            thursdayTo1: "Required Field",
            fridayTo1: "Required Field",
            saturdayTo1: "Required Field",
            sundayTo1: "Required Field"

         },

		errorPlacement: function( error, element ) {
			error.insertAfter( element);
		},

		submitHandler: function(form) {
				
				console.log(whichBtn);
				if(whichBtn=='next')
				{
					$('.current').removeClass('current');
					
					$('#progressBarHolder a:nth-of-type(3) .progressSuccess').addClass('progressBtnDone').animate({width:'100%'}, 300);
					$('#form_menu li:nth-of-type(4)').removeClass('disabledBtn').addClass('current');
					$('#form_menu li:nth-of-type(3) a').addClass('done');
					TranslateForm(whereClass);
				}
			}
	});
}
function experienceValidation(whereClass, whichBtn) {



	 	$( "#experienceForm" ).validate({

		
		
		rules: {
			toi1: {
				required:"#priorExperience:checked"
				
			},
			companyName1: {
				required:"#priorExperience:checked"
				
			},
			companyStart1: {
				required:"#priorExperience:checked"
			},
			companyEnd1:
			{
				required: "#priorExperience:checked"
			}
			
		},
		

		errorPlacement: function( error, element ) {
			error.insertAfter( element);
		},

		
	
		

		 submitHandler: function(form) {
				
				if(whichBtn=='next')
				{
					$('.current').removeClass('current');
				
					$('#progressBarHolder a:nth-of-type(4) .progressSuccess').addClass('progressBtnDone').animate({width:'100%'}, 300);
					$('#form_menu li:nth-of-type(5)').removeClass('disabledBtn').addClass('current');
					$('#form_menu li:nth-of-type(4) a').addClass('done');
					TranslateForm(whereClass);
				}
			}

	
    
});
	
}
function uploadsValidation(whereClass, whichBtn) {



	 	$( "#uploadsForm" ).validate({

		
		
		rules: {
			
			smartServeFile:{
				required:true

				}
			
		},
		

		errorPlacement: function( error, element ) {
			error.insertAfter( element)
		},

		
	
		

		 submitHandler: function(form) {
				
				if(whichBtn=='next' )
				{
					
					$('.current').removeClass('current');
				
					$('#progressBarHolder a:nth-of-type(5) .progressSuccess').addClass('progressBtnDone').animate({width:'100%'}, 300);
					$('#form_menu li:nth-of-type(6)').removeClass('disabledBtn').addClass('current');
					$('#form_menu li:nth-of-type(5) a').addClass('done');
					TranslateForm(whereClass);
				}
			}

	
    
});
	
}

 function gettingPaidValidation(whereClass, whichBtn) {


	$( "#gettingPaidForm" ).validate({
		   onfocusout:
function(element) {
if ( !this.checkable(element) ) {
this.element(element);
}
},
		rules: {
			
			
		},
		
		messages: {
			cEmail: 'repeat your Email Address',
			cPass: 'repeat your password' 
		},

		errorPlacement: function( error, element ) {
			error.insertAfter( element);
		},

		submitHandler: function(form) {
				if(whichBtn=='next')
				{
					$('.current').removeClass('current');
				
					$('#progressBarHolder a:nth-of-type(6) .progressSuccess').addClass('progressBtnDone').animate({width:'100%'}, 300);
					$('#form_menu li:nth-of-type(1)').removeClass('disabledBtn').addClass('current');
					$('#form_menu li:nth-of-type(6) a').addClass('done');
					whereClass='first';
					$('#finalSubmitContainer').fadeIn(500);
					TranslateForm(whereClass);

				}
				
			}
	});
}