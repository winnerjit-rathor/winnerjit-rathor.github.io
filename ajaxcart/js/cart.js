
//function to load Products
loadProducts();

var rightClick=0;

//variable to hold the total price
var grandTotalPrice=0;

$(window).load(function() {
	
	
	//run the function resizer if the window resizes
	window.onresize=resizer;
		
	//makethe main section 100% height
	document.querySelector('#main').style.height=window.innerHeight+'px';

   
   
    $('#arrowRight').on('click' , function(){
		var currentLeft=parseInt($('#draggImageGallery').css('left'));
		var widthHalf=parseInt($('#draggImageGallery').css('width'))
		if(   widthHalf/2 > -currentLeft)
		{
        rightClick ++;
        $('#draggImageGallery').clearQueue().animate({left: '-='+$('.product').css('width')
        }, 500)}
		}
		);

    $('#arrowLeft').on('click' , function(){
		var currentLeft=parseInt($('#draggImageGallery').css('left'));
		if(currentLeft< 0)
		{
        rightClick --;
        $('#draggImageGallery').clearQueue().animate({left: '+='+$('.product').css('width')
		
        }, 500);
		}});

	 $('#cartarrowRight').on('click' , function(){
       if($('#cart').width() > $(window).width())
	   {
        $('#cart').animate({left: '-='+$('.cartItem').css('width')
        }, 500)
	   }
		});
		
    $('#cartarrowLeft').on('click' , function(){
		if(parseInt($('#cart').css('left')) < 50)
		{
        
        $('#cart').clearQueue().animate({left: '+='+$('.cartItem').css('width')
		
        }, 500);
		}});

    function resizer()

    {

        
        var allproducts= document.querySelectorAll('.product');
	      $('.imageContainer img').css("width" , parseInt($('#imagegallery').css('width'))/3+'px' );
        $('.product').css("width" , parseInt($('#imagegallery').css('width'))/3+'px' );
        myWidth=parseInt($('.product').css('width'));
        $('#draggImageGallery').css({left: -(myWidth*rightClick)+'px'});
        $('#draggImageGallery').css("width", myWidth*allproducts.length+'px' );
        var difference=parseInt($('#draggImageGallery').css("height"))-parseInt($(".product img").css("height"));
        $(".imageContainer").css("height", $('.product img').css('height'));
        $(".product").animate({"margin-top": difference/2+'px'}, 0);
		    $('#arrowRight').css({height:$('.product img').height()+'px' , marginTop : difference/2+'px'});
		    $('#arrowLeft').css({height:$('.product img').height()+'px' , marginTop : difference/2+'px'});
        document.querySelector('#main').style.height=window.innerHeight+'px';
    }



//the view btn functionality
//"The secret to creativity is knowing how to hide your sources." -Albert Einstein
   $(document).delegate(".view", "click", function () 
    {
		//fade the lightbox in
        $('#lightbox').fadeIn(0);
		//get the parent product and put it in a variable
        var CurrentProduct=$(this).closest( ".product");
		//the the price of this product and put it in a varaible
        var ProductPrice=parseInt($(CurrentProduct).find('.price').html());
		//get the name 
        var ProductName=$(CurrentProduct).find('.pName').html();
		//get the data-sku value
        var ProductSKU=$(CurrentProduct).attr('data-sku');
		//get the data-src value (model selection funtionality)
        var productSrc=$(CurrentProduct).attr('data-src');
		//get the product img
        var ImageSelected=$(CurrentProduct).find('img');
		//now make a clone of the img and put in a varable(this would get appendend in the lightbox)
        var ImagetoBeAppended= $(ImageSelected).clone();
		//hide if fornow
        $(ImagetoBeAppended).addClass('selproduct').css({opacity:0});
		//fade the container lightbox In and perform image flyout function
        $('#lightBoxContainer').fadeIn( 400, function(){
			//again makeclone of the image
            var clone=$(ImageSelected).clone();
			//position and size it with the same values as the img being cloned
            $(clone).css({position:'absolute' , top : $(ImageSelected).offset().top+'px' , left : $(ImageSelected).offset().left+'px', zIndex: "10004" });
			//append it to the body
            $(clone).appendTo('body');
			//append the forst cloen to the lightbox image container
            $(ImagetoBeAppended).appendTo('#lightbox #selProductImg');
			//now animate the second clone to match the postion and size of the first clone(#theflyouteffect)
            $(clone).animate({width:'400px', top : $(ImagetoBeAppended).offset().top+'px' , left : $(ImagetoBeAppended).offset().left+'px' , zIndex: "10004" },  400, function(){

                $(ImagetoBeAppended).css({opacity:1});
                $(clone).remove();

				//apppend all the collected values to the lightbox
                $('#selProductPrice').html('$<span class="priceNum">'+ProductPrice+'</span>');
                $('#selNumber .count').attr('data-statPrice',ProductPrice );
                $('#selProductName').html(ProductName);
			//ajax call to get the additional non-promoted products	
                $.ajax({

        url:"products.php",
        type:'get', 
        data:{"master":productSrc}, //sending the current product_master so as to get the related products
        dataType:'JSON',
        success:function(data){
           
          
          var imgVariations=data.product_variations.split(',');
           $(imgVariations).each(function(index, element) {

          
                  
                    
                        var newSRC='images/'+data.product_master+element+'.png';
                        
                       
                        if(element==data.promoted_img)
                        {

                            $('#selModel').append('<img data-tSKU='+data.product_master+element+' class="currentThumbnail" src='+newSRC+'>');
                            $('.selproduct').attr('data-pSKU', data.product_master+element);
                        }
                        else
                        {
                            $('#selModel').append('<img  data-tSKU='+data.product_master+element+' src="'+newSRC+'">');
                            $('#selProductImg').append('<img data-pSKU='+data.product_master+element+' src='+newSRC+'>');
                        }
                 
           });

          

              
        }

}); 
        
    			       //the following is for the delayed appearence effect
                $('#selProductName').animate({opacity:1}, 200);
                $('#selProductPrice').delay(300).animate({opacity:1}, 200);
                $('#pricelabel').delay(300).animate({opacity:1}, 200);
                $('#model').delay(600).animate({opacity:1}, 200);
                $('#selModel').delay(900).animate({opacity:1}, 200);
                $('#howmany').delay(1200).animate({opacity:1}, 200);
                $('#selNumber').delay(1200).animate({opacity:1}, 200);
				        $('#AddtoCart').delay(1500).animate({opacity:1}, 200);
				        //attach a function to the model thumbnails that would change the display image accordingly
                $(document).delegate("#selModel img" , 'click' , updateImage);
            });

  });

});


//add tocart functionality
    $('#AddtoCart').on('click' , function(){

		//check for the current of the lightbox product 
        var SkuChecker=$('#selProductImg .selproduct').attr('data-pSKU');
		//check if the same object exists in the cart
        var existCheck=document.querySelector('#cart div[data-iSKU="'+SkuChecker+'"]');
		//same flyout functionality
          var clone=$('#selProductImg .selproduct').clone().css({width:'400px'});
		   $(clone).css({position:'absolute' , top : $('#selProductImg .selproduct').offset().top+'px' , left : $('#selProductImg .selproduct').offset().left+'px', zIndex: "10004" });
        $(clone).appendTo('body');
 		//if the object is found in the cart
		//just update the price and qty wth the additional values
          if(existCheck != null)
          {
               currentCount= parseInt($(existCheck).find('.count').html());
			   AdditionalCount=parseInt($('#lightbox').find('.count').html());
			  var  totalCount=AdditionalCount+currentCount;
			   $(existCheck).find('.count').css({opacity:0}).html(totalCount);
			  CurrentItemPrice=parseInt(existCheck.querySelector('.itemCartInfo .cartItemQty .count').getAttribute('data-statPrice'));
				totalPrice=CurrentItemPrice*totalCount;
			   existCheck.querySelector('.itemCartInfo .itemPriceContainer .priceNum').innerHTML=totalPrice;
			   existCheck.querySelector('.itemCartInfo .itemPriceContainer').style.opacity=0;
			   var AppendedImg=$(existCheck).find('.selproduct');
			   
          }
		  
		//else if it is not found 
else
	{
		//make a clone of the lightbox product
		//retain the required values and delete the no nrequired ones
        newCartItem = $('#lightbox').clone().removeAttr('id').addClass('cartItem').attr('data-iSKU', SkuChecker);
        newCartItem.find('#selProductName').removeAttr('id').addClass('cartItemName');
        newCartItem.find('#selProductPrice').removeAttr('id').addClass('itemPriceContainer');
        newCartItem.find('#selNumber').removeAttr('id').addClass('cartItemQty');
        newCartItem.find('#pricelabel').removeAttr('id').addClass('itemPriceLabel');
        newCartItem.find('#selInfo').removeAttr('id').addClass('itemCartInfo');
        newCartItem.find('#model').remove();
        newCartItem.find('#selModel').remove();
        newCartItem.find('#howmany').remove();
        newCartItem.find('#AddtoCart').remove();
		newCartItem.find('#closeLightBox').remove();
        newCartItem.find('#selProductImg').attr('id' , '').html('').addClass('itemCartImgContainer');

        var cartPrice=parseInt($('#selProductPrice').find('.priceNum').html());
     
        var AppendedImg=$('#selProductImg .selproduct').clone().css({height:'200px', width:'auto', opacity:0});
      
        var itemTotalPrice=cartPrice;
   		
		//appaend the new item with new values to the cart
        $(newCartItem).appendTo('#cart');
        $(AppendedImg).appendTo(newCartItem.find('.itemCartImgContainer'));
		$(newCartItem).find('.itemCartInfo').append('<button class="remove">remove</button>')
      
		var totalItems=document.querySelectorAll('.cartItem').length+1;
					  var oneItemWidth=parseInt($('.cartItem').css('width'));
					  $('#cart').css({width: totalItems*oneItemWidth+'px' })


       
	}
	//again the flyout function
	
	 $('#lightbox').fadeOut( 400, function(){
		 
		 $('#myCartBtnContainer').animate({bottom:'240px'} , 100);
			$('#carttext').removeClass('mc').addClass('tt');
			$('#pIcon').removeClass('p').addClass('c');
            $('#cartContainer').addClass('cartActive').animate({bottom:'0px'} , 100 ,function(){
                $(clone).animate({height:'200px' , width:'200px', top : $(AppendedImg).offset().top+'px' , left : $(AppendedImg).offset().left+'px' },  400 , function(){

					      

					$(existCheck).find('.count').animate({opacity:1}, 500);
					$(existCheck).find('.itemPriceContainer').animate({opacity:1}, 500);
					
                    $(clone).remove();
					  $(AppendedImg).css({ opacity:1});
					  	
					  

                });

            });

        });
		//at the end call the updatePrice function that updates the total price
		albertEinstein();
    });



    $('#lightBoxContainer').on('click', RemoveLightBox);
	
	//the model image update function
    function updateImage(){

        $('#selProductImg .selproduct').css({opacity:0}).removeClass('selproduct');
        $('#selProductImg img[data-pSKU="'+$(this).attr('data-tSKU')+'"]').css({opacity:1}).addClass('selproduct');
        $('.currentThumbnail').removeClass('currentThumbnail');
        $(this).addClass('currentThumbnail');
    }


//function attached to all the plus button on the pgae
//use of delegate to accomodate those .plus which have been dynamically appended
    $(document).delegate(".plus", "click", function (){
        var count=parseInt(this.parentNode.querySelector('.count').innerHTML);
        var CurrentItemPrice=parseInt(this.parentNode.querySelector('.count').getAttribute('data-statPrice'));

        count+=1;
        CurrentItemPrice=CurrentItemPrice*(count);
        this.parentNode.querySelector('.count').innerHTML=count;
        this.parentNode.parentNode.querySelector('.priceNum').innerHTML=CurrentItemPrice;
		
		albertEinstein()
    });
	
//function attached to all the minus button on the pgae
//use of delegate to accomodate thoses .minus which have been dynamically appended
    $(document).delegate(".minus", "click", function () {


        var count = parseInt(this.parentNode.querySelector('.count').innerHTML);
        if (count > 1) {

        var CurrentItemPrice = parseInt(this.parentNode.querySelector('.count').getAttribute('data-statPrice'));

        count -= 1;
        CurrentItemPrice = CurrentItemPrice * (count);
        this.parentNode.querySelector('.count').innerHTML = count;
        this.parentNode.parentNode.querySelector('.priceNum').innerHTML = CurrentItemPrice;
		
		albertEinstein()
            }
    });
	
	//remove button functionality
	$(document).delegate(".remove", "click", function () {


      
        $(this).closest('.cartItem').remove();
		albertEinstein();
        
           
    });
	
	//cart show/hide functionality
	$('#myCartBtnContainer').on('click', function(){
		if($('#carttext').hasClass('mc'))
		{
			
			$('#cartContainer').addClass('cartActive').animate({bottom:'0px'} , 100);
           	$('#myCartBtnContainer').animate({bottom:'240px'} , 100);
			$('#carttext').removeClass('mc').addClass('tt');
			$('#pIcon').removeClass('p').addClass('c');
			$('#lightBoxContainer').fadeIn(400);
			$('#lightbox').fadeOut(0);
		}
		else
		{
			$('#carttext').removeClass('tt').addClass('mc');
			$('#cartContainer').removeClass('cartActive').animate({bottom:'-240px'} , 100);
           	$('#myCartBtnContainer').animate({bottom:'0px'} , 100);
			$('#pIcon').removeClass('c').addClass('p');
				RemoveLightBox('cartBtn')
		}
		
		
		});
		
		
	
});
//ligtbox destroy function
function RemoveLightBox(event)
{
	
	//use of event target to target just the parent container , the cross btn and cartBtn
    if($(event.target).is($('#lightBoxContainer')) || $(event.target).is($('#closeLightBox')) || event=='cartBtn')
    {
            $('#lightBoxContainer').fadeOut( 400, function(){
            $('#selProductName').css({opacity:0}).html('');
            $('#selProductPrice').css({opacity:0}).html('');
            $('#pricelabel').css({opacity:0});
            $('#model').css({opacity:0});
            $('#selModel').css({opacity:0}).html('');
            $('#howmany').css({opacity:0});
            $('#selNumber .count').html('1');
            $('#selNumber').css({opacity:0});
			      $('#AddtoCart').css({opacity:0});
            $('#selProductImg').html('');

            if($('#cartContainer').hasClass('cartActive'))
            {
                $('#cartContainer').removeClass('cartActive').animate({bottom:'-240px'} , 100);
        				$('#myCartBtnContainer').animate({bottom:'0px'} , 100);
        			  $('#carttext').removeClass('tt').addClass('mc');
        			  $('#pIcon').removeClass('c').addClass('p');
            }
        });

    }

}

//function that loads products via ajax Call
function loadProducts()
{
   $.ajax({

        url:"products.php",
        type:'get', 
        dataType:"JSON",
        success:function(data){
           

            console.log(data);

            //loop through each of the array as product within array data 

          $.each(data, function(i , product) {

            //making and appending products the old fashioned way
            //make the divs with document.createElement
            //give them required attributes
            //append the parentContainer to the page
            //append the subElements to the parentContainer
  
         var productContainer=document.createElement('div');
         $(productContainer).attr({
             class: "product",
             'data-src':product['product_master'] ,
             'data-sku':product['product_id']

         });

        var productImgContainer=document.createElement('div');
        $(productImgContainer).addClass('imageContainer');

        var productImg=document.createElement('img');
         $(productImg).attr({
               alt: 'productImg',
               src:"images/"+product['product_master']+product['promoted_img']+".png" ,
                
           });

        var productInfoContainer=document.createElement('div');

        $(productInfoContainer).addClass('info');

        var productName=document.createElement('h3');
        $(productName).html(product['product_name']).addClass('pName');

        var priceLabel=document.createElement('span');
        $(priceLabel).html('Price: $').addClass('dsymb');

        var productPrice=document.createElement('span');
        $(productPrice).html(product['product_price']).addClass('price');

        var viewBtn=document.createElement('button');
        $(viewBtn).html('view').addClass('view');

        $(productContainer).appendTo('#draggImageGallery');
        $(productImgContainer).appendTo(productContainer);
        $(productImg).appendTo(productImgContainer);
        $(productInfoContainer).appendTo(productContainer);
        $(productName).appendTo(productInfoContainer);
        $(priceLabel).appendTo(productInfoContainer);
        $(productPrice).appendTo(productInfoContainer);
        $(viewBtn).appendTo(productInfoContainer);


        //Function that handles appending of the Images based on browser window size
        ImageAppending();
   
});

        },
        error:function(jqHXR, textStatus, errorThrown){

            alert(errorThrown);
        }

    });
}
function ImageAppending()
{
   var cImage=0;
   $('#draggImageGallery img').on('load', function(){

    cImage++;
   if(cImage==$('#draggImageGallery img').length)
    {
        $('#loader').fadeOut(500);
        $('#arrowLeft').fadeIn(500);
        $('#arrowRight').fadeIn(500);

        var allproducts= document.querySelectorAll('.product');

     $('.imageContainer img').css("width" , parseInt($('#imagegallery').css('width'))/3+'px' );
     $('.product').css("width" , parseInt($('#imagegallery').css('width'))/3+'px' );
     myWidth=parseInt($('.product').css("width"));
     $('#draggImageGallery').css("width", myWidth*allproducts.length+'px' );

     var difference=parseInt($('#draggImageGallery').css("height"))-parseInt($(".product img").css("height"));

     for(var i=0; i <allproducts.length ; i++)
     {
          $(allproducts[i]).delay((i+1) * 500).fadeTo(500, 1);
     }

     $(".imageContainer").css("height", $('.product img').height()+'px');
     $('#arrowRight').css({height:$('.product img').height()+'px' , marginTop : difference/2+'px'});
     $('#arrowLeft').css({height:$('.product img').height()+'px' , marginTop : difference/2+'px'});

     $(".product").css("margin-top", difference/2+'px')

}
    });

 
  
}
//this the magic function called at the end of most the functions
//each time it is called it loops through the cart items 
//it detects changes , makes mathematical calculations jut as Einstein does and hence the name
//then using .html() shows the world its awesome work, the total price
//"God does not care about our mathematical difficulties. He integrates empirically." -Albert Einstein 
function albertEinstein()
{
	grandTotalPrice=0;
	
	$('.cartItem').each(function(index, element) {
        
		var AddedPrice=parseInt($(element).find('.priceNum').html());
		
		
		grandTotalPrice=grandTotalPrice+AddedPrice;
    });
	
	$('#gtPrice').html(grandTotalPrice);
	
}

//all the quote from http://rescomp.stanford.edu/~cheshire/EinsteinQuotes.html
