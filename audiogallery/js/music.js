// JavaScript Document
window.onload=init;
var leftPos;
//varaible to track the postion of the mosue pointer exactly from the left position of the remote relative to the screen  
var continueFollow;
//varaiable to determint when the volume roller is following the mouse pointer

//usual onload function
function init(){
document.querySelector('#power').onclick=openClose;
document.querySelector('#sliderBack').onmouseout=slideStart;
document.querySelector('#sliderBack').onmousedown=slideStop;
document.querySelector('#sliderBack').onmousemove=slider;
document.querySelector('#playButton').onmousedown=startPlaying;
document.querySelector('#stopButton').onmousedown=stopPlaying;
document.querySelector('#pauseButton').onmousedown=pausePlaying;
document.querySelector('#preview').onmousedown=lengthSwitch;
document.querySelector('#full').onmousedown=lengthSwitch;


//getting all the audio players and setting there volume to 0.02 as the page 
var allAudioPlayers= document.querySelectorAll("audio");
	  
	   for(var i=0; i<allAudioPlayers.length ; i++)
	{
				allAudioPlayers[i].volume=0.02;
				allAudioPlayers[i].addEventListener('ended' , stopPlay);
				//adding eventlistener ended to check if the audio has stopped playing
				//Note: event listerners cannot travel downwards in DOM-level ( body - element(any))
				//But can travel upwards in DOM-level ( element(any) - body)
	}
//getting all the songs and attaching an onclick event to each of them	
	var AllSongs=document.querySelectorAll('.songname');
	for(var i=0; i<AllSongs.length ; i++)
	{
		AllSongs[i].onclick=songSelect;
		
	}	
	//getting all the volume numbers and attaching an onclick event to each of them	
	var VolumeNumbers=document.querySelectorAll('.number');
	for(var i=0; i<VolumeNumbers.length ; i++)
	{
		VolumeNumbers[i].onclick=volumeControl;
	}
}

//openCLose function handels the power Button functioinality
function openClose()
{
		if(document.querySelector('.current')!=null)
	{
		
		document.querySelector('audio.current').pause();
		document.querySelector('audio.current').currentTime = 0;
		document.querySelector('.current').className='';
			allBars=document.querySelectorAll('#indicator div');
			for(var i=0; i<allBars.length ; i++)
		{
			allBars[i].className='stopAnim';
		}
		
			document.querySelector('#timer').style.webkitAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.MozAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.OAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.animation='Hidetimer 0.2s linear';
			document.querySelector('.selectsongname').innerHTML="NO SONG SELECTED"
			document.querySelector('.activated').className="";
	}
	document.querySelector('.remoteshow').className="";
	//checking if the power is ON
	if(document.querySelector('#PowerIndicator').className=='green')
		{
		
			document.querySelector('#PowerIndicator').className='red'
			document.querySelector('#textIndicator').className='off';
			document.querySelector('#volumeIndicator').className='';
			document.querySelector('#indicator').className='';
			document.querySelector('#remoteContainer').className='';
			document.querySelector('#remoteScreen span#off').className='remoteshow';
			document.querySelector('#songsContainer').className='';
		}
		//checking if the power is OFF
		else
		{
			document.querySelector('#dvd_open').className='close'
			document.querySelector('#textIndicator').className='on';
			document.querySelector('#PowerIndicator').className='green'
			document.querySelector('#indicator').className='indicatorShow';
			document.querySelector('#remoteContainer').className='remoteOpen';
			document.querySelector('#remoteScreen span#selectsongspan').className='remoteshow';
			document.querySelector('#songsContainer').className='songCshow';
			document.querySelector('#volumeIndicator').className='volumeOn';
		}
}


function songSelect()
{
	
	document.querySelector("#textIndicator").innerHTML="STOP";
	//getting all the audio elements and stopping them

			document.querySelector('#timer').style.webkitAnimation='Hidetimer 0.2s';
			document.querySelector('#timer').style.MozAnimation='Hidetimer 0.2s';
			document.querySelector('#timer').style.OAnimation='Hidetimer 0.2s';
			document.querySelector('#timer').style.animation='Hidetimer 0.2s';
			allBars=document.querySelectorAll('#indicator div');
	
			for(var i=0; i<allBars.length ; i++)
			{
				allBars[i].className='stopAnim';
			}
	
	//removing any preselected song
	if(document.querySelector('.current')!=null)
	{
		document.querySelector('audio.current').pause();
		document.querySelector('audio.current').currentTime = 0;
		document.querySelector('.current').className='';
		
		
	}
	document.querySelector('#remoteScreen span.remoteshow').className=' ';
	document.querySelector('#remoteScreen span#optionselect').className='remoteshow';
	//changing the name of the song in selectsongname div to the current selected song
	document.querySelector('.selectsongname').innerHTML=this.innerHTML;
	//changing the data-song attribute to the currentsongs data-song attribute
	document.querySelector('.selectsongname').setAttribute('data-songselect' , this.getAttribute('data-song'));
	var songname=this.getAttribute("data-song")+'_preview';
	//selecting the audio element having the current song and giving it class current(which would play)
	document.querySelector('source[data-songnumber="'+songname+'"]').parentNode.className='current';
	document.querySelector("#full").className="";
	document.querySelector("#preview").className="activated";
	document.querySelector('#dvd_open').className='close';
}

//function lengthSwitch deals with the preview/full functionality 
function lengthSwitch()
{
			document.querySelector('#timer').style.webkitAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.MozAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.OAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.animation='Hidetimer 0.2s linear';
			
	if(document.querySelector('.current')!=null)
	{
		
		document.querySelector('audio.current').pause();
		document.querySelector('audio.current').currentTime = 0;
		document.querySelector('.current').className='';
			allBars=document.querySelectorAll('#indicator div');
			for(var i=0; i<allBars.length ; i++)
		{
			allBars[i].className='stopAnim';
		}
		
		  document.querySelector("#textIndicator").innerHTML="STOP";
		  
		  document.querySelector('#remoteScreen span.remoteshow').className=' ';
	
	//get the current slelected songs name 
	var songNameInitial=this.parentNode.querySelector('.selectsongname').getAttribute('data-songselect');
	//determinine if it is preview
	if(this.id=='preview' && songNameInitial!='' )
		{
			var SongName=songNameInitial+'_preview';
			document.querySelector('.activated').className="";
			this.className="activated";
			document.querySelector('#remoteScreen span#previewsspan').className='remoteshow';
			document.querySelector('source[data-songnumber="'+SongName+'"]').parentNode.className='current';	
	
			
		}
		//determinine if it is full
	else if(this.id=='full' && songNameInitial!='')
		{
			var SongName=songNameInitial+'_full';
			document.querySelector('.activated').className="";
			this.className="activated";
			document.querySelector('source[data-songnumber="'+SongName+'"]').parentNode.className='current';
			document.querySelector('#remoteScreen span#fullsspan').className='remoteshow';
					
	
	
		}
			

		
	}
	
	
	
		
}

//function stopPlaying stops all the songs 
function stopPlaying()
{
			document.querySelector('#timer').style.webkitAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.MozAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.OAnimation='Hidetimer 0.2s linear';
			document.querySelector('#timer').style.animation='Hidetimer 0.2s linear';

	var allAudioPlayers= document.querySelectorAll("audio");
	for(var i=0; i<allAudioPlayers.length ; i++)
	{
		allAudioPlayers[i].pause();
		allAudioPlayers[i].currentTime = 0;
	}
      
	if(document.querySelector('#PowerIndicator').className=='green')
	{
	document.querySelector('#dvd_open').className='open';
	document.querySelector('#textIndicator').innerHTML='open';
	
	//to change the animation of the indicator bars
	allBars=document.querySelectorAll('#indicator div');
	
	for(var i=0; i<allBars.length ; i++)
	{
		allBars[i].className='stopAnim';
	}
	document.querySelector('.remoteshow').className='';
	document.querySelector('#remoteScreen span#stopspan').className='remoteshow';
	}
}
//function pausePlaying pause just the current song
function pausePlaying()
{
	if(document.querySelector('#remoteScreen span#stopspan').className!='remoteshow')
	{
		document.querySelector("audio.current").pause();
	
	document.querySelector('#textIndicator').innerHTML='Pause';
	allBars=document.querySelectorAll('#indicator div');
	
	for(var i=0; i<allBars.length ; i++)
	{
		allBars[i].className='stopAnim';
	}
	
	document.querySelector('#remoteScreen span.remoteshow').className=' ';			
	document.querySelector('#remoteScreen span#pausespan').className='remoteshow';
	}
		
		document.querySelector('#timer').style.webkitAnimationPlayState='paused';
		document.querySelector('#timer').style.MozAnimationPlayState='paused';
		document.querySelector('#timer').style.OAnimationPlayState='paused';
		document.querySelector('#timer').style.animationPlayState='paused';

}
function startPlaying()
{
	//check if atleast one song is selected
	if(document.querySelector(' audio.current source')!=null)
	{

	document.querySelector('#remoteScreen span.remoteshow').className=' ';
	var PreviewCheck=document.querySelector(' audio.current source').getAttribute('data-songnumber');
	
	//check the ype of song selected and choose the relative span to showup
	if(PreviewCheck.indexOf('preview')>1)
		{
			document.querySelector('#remoteScreen span#previewspan').className='remoteshow';
		}
	else
		{
			document.querySelector('#remoteScreen span#fullspan').className='remoteshow';
		}
		
		document.querySelector('#dvd_open').className='close';
		
		//starting the playAnimaton
		var allBars=document.querySelectorAll('#indicator div');
		for(var i=0; i<allBars.length ; i++)
		{
			allBars[i].className='startAnim';
		}
		//playing the current selected song
	  document.querySelector("audio.current").play();
	  
	  document.querySelector("#textIndicator").innerHTML="PLAY";
	  var newDuration=	document.querySelector('audio.current').duration;
		
	document.querySelector('#timer').style.webkitAnimation='timer '+newDuration+'s  running';
	document.querySelector('#timer').style.MozAnimation='timer '+newDuration+'s  running';
	document.querySelector('#timer').style.OAnimation='timer '+newDuration+'s  running';
	document.querySelector('#timer').style.animation='timer '+newDuration+'s';
	document.querySelector('#timer').style.animationPlayState='running';	
	}
}

//function stopPlay() runs when the song has ended playing using the custom event listener  
function stopPlay()
{

	
allBars=document.querySelectorAll('#indicator div');
	
	for(var i=0; i<allBars.length ; i++)
	{
		allBars[i].className='stopAnim';
	}
	
		  document.querySelector("#textIndicator").innerHTML="STOP";

}


//function slider(e) deals with the volume slider event using onmousemove
function slider(e)
{
	//determine the exact location of the slider div from the left of the screen
	leftOffset=document.querySelector('#sliderContainer').offsetLeft+document.querySelector('#remoteContainer').offsetLeft;
	//get the position of the mosue form the left of the screen 
	 	mouseX = e.pageX;
	//calculating the difference to determine mouse position relative to the left of the slider
	leftPos=mouseX-leftOffset;
	if(leftPos<=236)
	{
	//removing slow move class to make it look it is following but still animating
	document.querySelector('#rollerFill').className='';
	document.querySelector('#roller').className='';
	//defining the width of the rollerFill according to the postion of the pointer
	document.querySelector('#rollerFill').style.width=leftPos+5+'px';
	//defining the left position of the roller according to the postion of the pointer
	document.querySelector('#roller').style.left=leftPos-5+'px';
	}
	//if get continueFollow=='stop' stop following (ON MOUSE OUT)
	if(continueFollow=='stop')
	{
		
		return false;
	}
}

//sliderDrag handles the auto adjust feature of the slider(if user leaves the pointer at an undefine position then the slider would automatically slide to the nearest defined position) 
function sliderDrag()
{
	//NewPos will define the width of the rollerFill and left position of the roller 
	var NewPos;
	//slideVolume will change the volume of all audio players
	var SlideVolume;
	//NewVolumeText will change the volume text
	var NewVolumeText;
	//dividing the sldier in 6 blocks 
	
	block=(leftPos*1/44);
	
	if((block > 0 ) && (block <=0.5))
	{
		NewPos=-5;
		SlideVolume=0;
		NewVolumeText=0;
	}
	else if((block > 0.5 ) && (block <=1.5))
	{
		NewPos=47;
		SlideVolume=0.02;
		NewVolumeText=1;
	}
	else if((block > 1.5  && block <=2.5))
	{
		NewPos=90;
		SlideVolume=0.04;
		NewVolumeText=2;
	}
	 else if((block > 2.5  && block <=3.5))
	{
		NewPos=135;
		SlideVolume=0.06;
		NewVolumeText=3;
	}
	else if((block > 3.5  && block <=4.5))
	{
		NewPos=179;
		SlideVolume=0.08;
		NewVolumeText=4;
	}
	else if((block > 4.5 ))
	{
		NewPos=223;
		SlideVolume=0.10;
		NewVolumeText=5;
	}
		document.querySelector('#volumeIndicator').innerHTML=NewVolumeText;
		document.querySelector('#rollerFill').className='slowMove';
		document.querySelector('#roller').className='slowMove';
		document.querySelector('#rollerFill').style.width=NewPos+5+'px';
		document.querySelector('#roller').style.left=NewPos+'px';
		
	var allAudioPlayers= document.querySelectorAll("audio");
	  
	   for(var i=0; i<allAudioPlayers.length ; i++)
	{
				allAudioPlayers[i].volume=SlideVolume;

		
		
	}
}


//starts following when mouse Enters the slider
function slideStart()
{

	continueFollow='continue';
		sliderDrag();
}


//stops following when mouse Leaves the slider
function slideStop()
{
	
	continueFollow='stop';
	sliderDrag();
}

//volumeCOntrol on the volume Numbers click
function volumeControl()
{
	document.querySelector('#volumeIndicator').innerHTML=this.innerHTML;
	//NewVolume gets the current Volume as a multiple of 0.02
	var NewVolume=(this.innerHTML)*1*0.02;
	var allAudioPlayers= document.querySelectorAll("audio");
	  
	   for(var i=0; i<allAudioPlayers.length ; i++)
	{
				allAudioPlayers[i].volume=NewVolume;

	}
	//defining the position based on the number selected
	var newPos = this.getAttribute('data-pos')*1;
		
		document.querySelector('#rollerFill').className='slowMove';
		document.querySelector('#roller').className='slowMove';
		document.querySelector('#rollerFill').style.width=newPos+5+'px';
		document.querySelector('#roller').style.left=newPos+'px';
		
}

