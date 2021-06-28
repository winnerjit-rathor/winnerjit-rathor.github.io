$(window).load(function() {

    $(window).bind('mousewheel DOMMouseScroll scroll', function(event) {
        // var in_viewport = $('section:in-viewport').first();
        // console.log(in_viewport.height() - $(window).innerHeight());
        // if(in_viewport.height() <= $(window).innerHeight()) {
        //  event.preventDefault();
        //  mousewheelSection(event);
        // }

    });

    if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function() {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }

    $('#preloadOverlay').fadeOut();
    $('section').css('min-height', $(window).innerHeight() + 'px');
    $('#bgImgHolder').css('height', ($(window).innerHeight() + $(window).innerHeight() * 0.25) + 'px');
    $('section#contact').css({
        'height': $(window).innerHeight() + 'px',
        'min-height': '667px'
    });

    if ($(window).innerWidth() > 768) {

        $('#work .main').css('min-height', $(window).innerHeight() + 'px');

    } else {

        $('#work .main').css('min-height', 480 + 'px');

        $('section#home').css({
            backgroundColor: 'rgba(31, 112, 183, 0.6)',
            'z-index': '-1'
        });
        $('section#about').css({
            backgroundColor: 'rgba(31, 112, 183, 1)',
            'z-index': '3'
        });
        $('section#work').css({
            backgroundColor: 'rgba(31, 112, 183, 0.6)',
            'z-index': '3'
        });
        $('section#skills').css({
            backgroundColor: 'rgba(31, 112, 183, 1)',
            'z-index': '3'
        });
        $('section#contact').css({
            backgroundColor: 'rgba(31, 112, 183, 0.6)',
            'z-index': '3'
        });

    }

    $('body').on('keydown', function(e) {


        if (e.which == 9) {

            $('#sideNav').addClass('sideactive').stop().animate({
                'left': '0',
                top: '0px'
            }, 300, function() {

                $('#sideNav').css({
                    'z-index': '29999'
                });

            });

            $('section').stop().animate({
                'marginLeft': '100px'
            }, 300);
            $('#mainHam').addClass('hamActive');
            // do your code
        }
    });


    skillsAdjust();


    var email = $.trim($('#cEmail').val());

    function validateEmail() {

        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        if (reg.test($.trim($('#cEmail').val()))) {
            return true;
        } else {
            return false;

        }

    }

    $('#contactForm input, #contactForm textarea').on('blur', function(event) {

        event.preventDefault();

        if ($.trim($(this).val()) == '') {

            $(this).addClass('wrongInput');

        } else {

            $(this).removeClass('wrongInput');
        }

        if ($(this).attr('id') == 'cEmail') {

            var checkEmail = validateEmail();

            if (checkEmail == false) {

                $(this).addClass('wrongInput');
            } else {

                $(this).removeClass('wrongInput');
            }
        }

    });


    $('#submitContact').on('click', function(event) {

        event.preventDefault();
        var emailCheck = validateEmail();


        if (emailCheck == true) {

            ajaxSubmit();

        } else {


        }
    });

    $.each($('.main'), function(index, val) {

        var newHeight = parseInt($(this).css('height'));
        var newWidth = parseInt($(this).css('width'));

        if ($(this).parent().attr('id') != 'contact' && $(this).parent().attr('id') != 'work') {
            $(this).css({
                marginTop: -(newHeight / 2) + 'px',
                top: '50%',
                left: '50%',
                marginLeft: -(newWidth / 2) + 'px',
                position: 'absolute'
            });

            if ($(window).innerHeight() < newHeight) {
                $(this).parent().css({
                    height: newHeight + 'px'
                });
            }
        }


    });



    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
    var mobiledevice;

    if (agentID !== null) {

        if ($(window).innerWidth() > 651) {


            $('head').find('style').remove();
            $('head').append('<style>#sideNav:before{border-width: 0 200px ' + $(window).innerHeight() + 'px}</style>');

        } else {

            $('head').find('style').remove();
            $('head').append('<style>#sideNav{border-width:0 0 100px ' + $(window).innerWidth() + 'px}#sideNav:before{border-width:0 0px 160px 0px}</style>');

        }
    }
    allSlash = window.location.href.split('/');
    currentSection = allSlash[(allSlash.length) - 1];

    var homeContentHeight = parseInt(316) + parseInt($('#nameText').css('height')) + 170;


    if ($(window).innerHeight() <= homeContentHeight) {

        var exceptLogo = parseInt($('#nameText').css('height')) + 110;

        var aspectRatio = document.querySelector('#logoContainer img').naturalHeight / document.querySelector('#logoContainer img').naturalWidth;


        $('#logoContainer img').css({
            'height': $(window).innerHeight() - exceptLogo + 'px',
            width: 'auto',
            margin: '0 auto'
        });

        var cWidth = parseInt($('#logoContainer').css('width'));

        $('#logoContainer img').css({
            'max-height': cWidth * aspectRatio + 'px'
        });

        var currentLogoHeight = parseInt($('#logoContainer').css('height'));
        if ($(window).innerWidth() >= 450) {

            $('#logoContainer').css({
                'margin-top': 0,
                top: '20px',
                marginLeft: -cWidth / 2 + 'px'

            });
        } else {
            $('#logoContainer').css({
                'margin-top': 0,
                top: '20px',
                marginLeft: 0
            });


        }

        var currentNameText = parseInt($('#nameText').css('height'))

        $('#nameText').css({
            'margin-top': 0,
            top: 'calc( 30px + ' + currentLogoHeight + 'px)'
        });




    } else {
        $('#logoContainer img').css({
            'height': 'auto',
            width: '100%',
            'max-height': '316px'
        });
        if ($(window).innerWidth() >= 450) {

            $('#logoContainer').css({
                'margin-top': -(266) + 'px',
                top: '50%',
                marginLeft: '-215px'
            });
        } else {
            $('#logoContainer').css({
                'margin-top': -(266) + 'px',
                top: '50%',
                marginLeft: '0'
            });

        }
        $('#nameText').css({
            'margin-top': '60px',
            top: '50%'
        });

    }



    $('body').animate({
        scrollTop: $('#' + currentSection).offset().top
    }, 600);

    $('html').animate({
        scrollTop: $('#' + currentSection).offset().top
    }, 600);
    $('.mainSel').removeClass('.mainSel');

    $('a[data-pos="' + currentSection + '"]').addClass('mainSel');


});

$('#mainHam').on('click', function(event) {


    if ($('#sideNav').hasClass("sideactive")) {
        $(this).removeClass('hamActive');

        if ($(window).innerWidth() > 650) {
            $('#sideNav').removeClass('sideactive').stop().animate({
                'left': '-250px',
                top: '0'
            }, 300, function() {

                $('#sideNav').css({
                    'z-index': '0'
                });

            });

        } else {
            $('#sideNav').removeClass('sideactive').stop().animate({
                'left': '0',
                top: '-380px'
            }, 300, function() {

                $('#sideNav').css({
                    'z-index': '29999'
                });

            });



        }

        $('section').stop().animate({
            'marginLeft': '0'
        }, 300);

    } else {
        if ($(window).innerWidth() > 650) {
            $(this).addClass('hamActive');

        } else {
            $(this).addClass('hamActive');

        }

        $('#sideNav').css({
            'z-index': '2999'
        });


        $('#sideNav').stop().animate({
            'left': 0,
            'top': 0
        }, 300).addClass('sideactive');
        if ($(window).innerWidth() > 1024) {

            $('section').stop().animate({
                'marginLeft': '100px'
            }, 300);
        }
    }

});

$('#mainNav a , #sideLogo a , #downArrow a').on('click', function(e) {
    e.preventDefault();
    var sectionId = $(this).attr('data-pos');
    $('.mainSel').removeClass('mainSel');
    $(this).addClass('mainSel');
    $('#mainHam').removeClass('hamActive');
    var currentDomain = document.domain;

    window.history.pushState({
        urlPath: sectionId
    }, $(this).html(), sectionId);
    var currentTitle = $('title').html().split('-');
    $('title').html(currentTitle[0] + ' - ' + $(this).html());


    $('body').delay(300).animate({
        scrollTop: $('#' + sectionId).offset().top
    }, 600);

    $('html').delay(300).animate({
        scrollTop: $('#' + sectionId).offset().top
    }, 600);

    if ($('#sideNav').hasClass("sideactive")) {



        if ($(window).innerWidth() > 650) {

            $('#sideNav').removeClass('sideactive').stop().animate({
                'left': '-250px',
                top: '0'
            }, 300, function() {

                $('#sideNav').css({
                    'z-index': '0'
                });

            });
        } else {

            $('#sideNav').removeClass('sideactive').stop().delay(400).animate({
                'left': '0',
                top: '-380px'
            }, 300, function() {

                $('#sideNav').css({
                    'z-index': '29999'
                });

            });
        }

        $('section').stop().animate({
            'marginLeft': '0'
        }, 300);

    }

});

document.addEventListener("touchmove", scroller);
document.addEventListener("scroll", scroller);

function scroller() {
    /* Act on the event */
    var s = $(window).scrollTop();
    d = $(document).height();
    c = $(window).height();

    scrollPercent = (s / (d - c)) * 100;

    opacityNum = (scrollPercent / 25);
    opacityNum2 = ((40 - scrollPercent) / 25);

    if (scrollPercent > 70) {

        portfolioPieceAdjust();
    }

    if (scrollPercent > 1.5) {

        $('#downArrow').fadeOut(100);
    } else {
        $('#downArrow').fadeIn(100);
    }
    //console.log('oc2: '+opacityNum2);

    var sectionArray = ['about', 'work', 'skills', 'contact'];

    $.each(sectionArray, function(index, sec) {

        var myTopPos = $('#' + sec).offset().top - s;
        var myHeight = $('#' + sec).height();


        if (myTopPos <= 0 && myTopPos >= -myHeight) {

            $('#' + sec + ' h4').addClass('fixedhead');

            if (sec == 'contact' && $(window).innerWidth() > 768) {

                $('#contactForm').css({
                    'padding-top': '120px',
                    marginTop: '-60px'
                });
            }

        }

        // else if(myTopPos <= 60 && myTopPos >= -(myHeight+60) && sec=='work') {

        //     $('#'+sec+' h4').addClass('fixedhead');
        // }
        else {

            $('#' + sec + ' h4').removeClass('fixedhead');
            $('#contactForm').css({
                'padding-top': '0px',
                marginTop: '0px'
            });

        }

    });

    if ($(window).innerWidth() > 1024) {

        $('section').css({
            backgroundColor: 'rgba(31, 112, 183, 0)',
            'z-index': '1'
        });
        $('#bgImgHolder').css({
            'top': -((c * 0.25) * (scrollPercent * 0.5 / 100)) + 'px'
        });

        if (opacityNum > 0.6) {

            $('#wrapper').css({
                backgroundColor: 'rgba(31, 112, 183, ' + (opacityNum) + ')'
            });
            $('#logoContainer').css({
                opacity: (0.7 - opacityNum),
                top: (50 - opacityNum * 10) + '%'
            });
            $('#nameText').css({
                opacity: (0.7 - opacityNum),
                top: (50 - opacityNum * 10) + '%'
            });
        } else {

            $('#wrapper').css({
                backgroundColor: 'rgba(31, 112, 183, ' + (0.6) + ')'
            });
            $('#logoContainer').css({
                opacity: 1
            });
            $('#nameText').css({
                opacity: 1
            });
        }

        $('#logoContainer').stop().animate({
            position: 'fixed',
            top: (50 - opacityNum * 15) + '%'
        }, 200);
        $('#nameText').stop().animate({
            position: 'fixed',
            top: (50 - opacityNum * 15) + '%'
        }, 200);

        if (scrollPercent > 16) {

            $('#about .main').stop().animate({
                opacity: 1
            }, 300);

        } else {
            $('#about .main').stop().animate({
                opacity: 0
            }, 300);

        }

        if (opacityNum2 < 1) {


            $('body').css({
                'background-position': '0 ' + (opacityNum2 * 15) + 'px'
            });



            if (opacityNum2 < -1 && opacityNum2 > -1.45) {


                $('#wrapper').css({
                    backgroundColor: 'rgba(31, 112, 183, ' + (1.85 + opacityNum2) + ')'
                });

            } else if (opacityNum2 <= -1.45) {

                $('#wrapper').css({
                    backgroundColor: 'rgba(31, 112, 183, ' + (0.4) + ')'
                });

            } else {
                $('#wrapper').css({
                    backgroundColor: 'rgba(31, 112, 183, ' + (0.8) + ')'
                });

            }


            if (opacityNum2 < 0.4) {

                animateSVGDraw($('svg.diamondsvg'));

            }


        }


    } else {


        animateSVGDraw($('svg.diamondsvg'));
        $('#logoContainer').css({
            'z-index': '-1'
        });
        $('#nameText').css({
            'z-index': '-1'
        });
        $('#about .main').stop().animate({
            opacity: 1
        }, 300);
        $('section#home').css({
            backgroundColor: 'rgba(31, 112, 183, 0.6)',
            'z-index': '-1'
        });
        $('section#about').css({
            backgroundColor: 'rgba(31, 112, 183, 1)',
            'z-index': '3'
        });
        $('section#work').css({
            backgroundColor: 'rgba(31, 112, 183, 0.6)',
            'z-index': '3'
        });
        $('section#skills').css({
            backgroundColor: 'rgba(31, 112, 183, 1)',
            'z-index': '3'
        });
        $('section#contact').css({
            backgroundColor: 'rgba(31, 112, 183, 0.6)',
            'z-index': '3'
        });
        $('#wrapper').css({
            backgroundColor: 'rgba(31, 112, 183, 0)'
        });

        if (scrollPercent > 25) {



            $('#logoContainer').css({
                'z-index': '-1',
                opacity: 0
            });
            $('#nameText').css({
                'z-index': '-1',
                opacity: 0
            });

        } else {

            $('#logoContainer').css({
                'z-index': '-1',
                opacity: 1
            });
            $('#nameText').css({
                'z-index': '-1',
                opacity: 1
            });
        }



    }


    updateSectionPath();
};


jQuery.extend(jQuery.easing, {
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
});



//If you want to add SVG to the DOM, jQuery won't do
//http://www.benknowscode.com/2012/09/using-svg-elements-with-jquery_6812.html

function SVG(tag) {

    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function replacePolygonsWithPaths(parentElement) {


    var polygons = $(parentElement).find('polygon');

    $.each(polygons, function() {

        var points = $(this).attr('points');
        var polyPoints = points.split(/[ ,]+/);
        var endPoint = polyPoints[0] + ', ' + polyPoints[1];

        $(SVG('path'))
            .attr('d', 'M' + points + ' ' + endPoint)
            .attr('fill', $(this).attr('fill'))
            .attr('stroke', $(this).attr('stroke'))
            .attr('stroke-width', $(this).attr('stroke-width'))
            .insertAfter(this);

    });

    $(polygons).remove();
    hideSVGPaths($('svg'));
}


function hideSVGPaths(parentElement)  {

    var paths = $(parentElement).find('path');

    //for each PATH..
    $.each(paths, function() {

        //get the total length
        var totalLength = this.getTotalLength();
        // //console.log(totalLength);

        //set PATHs to invisible

        if ($(this).parent().attr('class') == 'diamondsvg') {
            $(this).css({
                'stroke-dashoffset': totalLength,
                'stroke-dasharray': totalLength + ' ' + totalLength,
                'fill-opacity': 0
            });

        } else if ($(this).parent().attr('class') == 'workSvg') {
            $(this).css({
                'stroke-dashoffset': 0,
                'stroke-dasharray': totalLength + ' ' + totalLength

            });

        } else {
            $(this).css({
                'stroke-dashoffset': 0,
                'stroke-dasharray': totalLength + ' ' + totalLength,
                'fill-opacity': 0.7
            });

        }



    });


}

function customSVGDraw(_parentElement, num) {

    var paths = $(_parentElement).find('path');

    //for each PATH..

    $.each(paths, function(i) {

        //get the total length
        var totalLength = this.getTotalLength();



        $(this).css({
            'stroke-dashoffset': totalLength - totalLength * num,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });

        //animate


    });


}

function animateSVGDraw(_parentElement) {

    var paths = $(_parentElement).find('path');

    //for each PATH..

    $.each(paths, function(i) {

        //get the total length
        var totalLength = this.getTotalLength();



        $(this).animate({
            'stroke-dashoffset': 0,
            'stroke-dasharray': totalLength + ' ' + totalLength
        }, 1000);

        $(this).delay(0).animate({
            'fill-opacity': 0.7
        }, 500);

        $('.skill p').delay(1000).animate({
            'opacity': 1
        }, 500);

        $('.skill h3').delay(900).animate({
            'opacity': 1
        }, 500);
        $('.skill img').delay(900).animate({
            'opacity': 1
        }, 500);

        //animate


    });


}


function replaceWithPaths(parentElement) {


    replacePolygonsWithPaths(parentElement);

}

function startSVGAnimation(parentElement) {

}


replaceWithPaths($('svg'));
startSVGAnimation($('svg'));
skillsAdjust();

function skillsAdjust() {



    var totalImages = document.querySelectorAll('.skill');

    for (var i = 1; i <= totalImages.length; i++)


    {

        if ($('.main').innerWidth() < 422 * 3 && $('.main').innerWidth() > 901) {
            if ($(window).innerHeight() < 800) {
                $('#skills').css({
                    'min-height': '800px'
                });
                $('#skills .main').css({
                    'min-height': '800px'
                })

            }

            $('#skillsCont').stop().animate({
                width: 900 + 'px',
                height: '700px'
            }, 0, function() {



                $.each($('.skill'), function(index, val) {

                    if (index == 2) {
                        $(val).stop().animate({
                            left: '50%',
                            marginLeft: '-217.5px',
                            top: '310px',
                            opacity: 1
                        }, 600);
                    } else if (index == 0) {
                        $(val).stop().animate({
                            left: 0,
                            marginLeft: 0,
                            top: 0,
                            opacity: 1
                        }, 600);
                    } else if (index == 1) {
                        $(val).stop().animate({
                            right: 0,
                            marginLeft: 0,
                            top: 0,
                            left: '473px',
                            opacity: 1
                        }, 600);
                    }

                });




            });




            break;


        } else if ($('.main').innerWidth() < 901) {
            $('#skillsCont').stop().animate({
                width: 100 + '%',
                height: '1200px'
            }, 0, function() {

                if ($(window).innerHeight() < 1300) {


                    $('section#skills').css({
                        'min-height': '1300px'
                    })
                }

                $.each($('.skill'), function(index, val) {


                    $(val).stop().animate({
                        left: '50%',
                        marginLeft: '-217.5px',
                        top: 400 * index + 'px',
                        opacity: 1
                    }, 600);


                });




            });



            break;


        } else {
            $('#skillsCont').stop().animate({
                width: 1280 + 'px',
                height: '500px'
            }, 0, function() {



                $.each($('.skill'), function(index, val) {



                    var totalImages = document.querySelectorAll('.skill');


                    $(val).stop().animate({
                        left: 422 * (index),
                        top: 0 + 'px',
                        marginLeft: 0,
                        marginTop: 0,
                        opacity: 1
                    }, 600);



                });




            });

        }


    }
}

function portfolioPieceAdjust() {


    cWindowWidth = $(window).innerWidth();

    newPieceHeight = 300;
    newPieceWidth = 300;

    if (cWindowWidth > 768) {

        if (((newPieceWidth * 3) + 20) < cWindowWidth * 0.9) {

            newPieceHeight = 300;
            newPieceWidth = 300;

        } else {

            newPieceHeight = cWindowWidth * 0.9 / 3;
            newPieceWidth = cWindowWidth * 0.9 / 3;
        }

        $('.portfolioPiece').not('#clone').animate({
            opacity: 1
        }, 0);
        $('#workPieceContainer').animate({
            left: 0
        }, 0);



        $('#workPieceContainer').css({
            width: ((newPieceWidth * 3) + 20) + 'px',
            height: newPieceHeight * 3 + 'px',
            position: 'relative',
            margin: '0 auto'
        })

        $.each($('.portfolioPiece'), function(index, val) {


            if (index == 0) {
                $(val).stop().animate({
                    left: 0,
                    top: 0 + 'px',
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    width: newPieceWidth + 'px',
                    height: newPieceHeight + 'px'
                }, 600, function() {


                });
            } else if (index == 1) {
                $(val).stop().animate({
                    left: newPieceWidth + 10 + 'px',
                    top: 0 + 'px',
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    width: newPieceWidth + 'px',
                    height: newPieceHeight + 'px'
                }, 600);
            } else if (index == 2) {
                $(val).stop().animate({
                    left: (newPieceWidth * 2) + 20 + 'px',
                    top: 0 + 'px',
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    width: newPieceWidth + 'px',
                    height: newPieceHeight + 'px'
                }, 600);
            } else if (index == 3) {
                $(val).stop().animate({
                    left: (newPieceWidth / 2) + 10 + 'px',
                    top: (newPieceHeight * 0.8) + 'px',
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    width: newPieceWidth + 'px',
                    height: newPieceHeight + 'px'
                }, 600);
            } else if (index == 4) {
                $(val).stop().animate({
                    left: (newPieceWidth * 1.5) + 10 + 'px',
                    top: (newPieceHeight * 0.8) + 'px',
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    width: newPieceWidth + 'px',
                    height: newPieceHeight + 'px'
                }, 600);

            } else if (index == 5) {
                $(val).stop().animate({
                    left: newPieceWidth + 10 + 'px',
                    top: (newPieceHeight * 1.6) + 'px',
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    width: newPieceWidth + 'px',
                    height: newPieceHeight + 'px'
                }, 600);

            }

            $(val).find('svg').delay(600).css({
                width: '100%'
            });
            $(val).find('img').delay(600).css({
                width: '98%',
                left: '1%',
                marginLeft: 0
            });

        });
    } else {
        // console.log('662');

        newPieceHeight = cWindowWidth * 0.7;
        newPieceWidth = cWindowWidth * 0.7;

        var totalPieces = document.querySelectorAll('.portfolioPiece');

        if (newPieceWidth < 400) {
            $('#work .main').width('100%');

            arrowHeight = parseInt($('#arrowLeft').css('height'));
            $('#arrowLeft, #arrowRight').css('margin-top', -(arrowHeight / 2) + 'px')
            $('#workPieceContainer').css({
                width: (cWindowWidth * totalPieces.length) + 'px',
                position: 'absolute',
                margin: '0 auto',
                marginLeft: '0%',
                top: '50%',
                marginTop: -(newPieceHeight / 2) + 'px'
            });

            $.each($('.portfolioPiece'), function(index, val) {

                $(val).stop().animate({
                    left: (cWindowWidth * index) + 'px',
                    top: 0 + 'px',
                    marginRight: 0 + 'px',
                    marginLeft: cWindowWidth * 0.15 + 'px',
                    marginTop: 0,
                    opacity: 1,
                    width: newPieceWidth + 'px',
                    height: newPieceHeight + 'px'
                }, 600);
                $(val).find('svg').css({
                    width: '100%'
                });
                $(val).find('img').css({
                    width: '95%',
                    left: '2.5%',
                    marginLeft: 0
                });

            });
        } else {
            $('#workPieceContainer').css({
                width: (100 * totalPieces.length) + '%',
                height: '420px',
                position: 'absolute',
                top: '50%',
                marginTop: '-160px'
            });

            $.each($('.portfolioPiece'), function(index, val) {

                $(val).stop().animate({
                    left: ((100 / totalPieces.length) * (index)) + '%',
                    top: 0 + 'px',
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    width: (100 / totalPieces.length) + '%',
                    height: 400 + 'px'
                }, 600);
                $(val).find('svg').css({
                    width: 400 + 'px'
                });
                $(val).find('img').css({
                    'width': '380px',
                    left: '50%',
                    marginLeft: '-190px'
                });
            });
        }


    }




}

$('#arrowRight').on('click', function(event) {

    var currentLeft = parseInt($('#workPieceContainer').position().left);


    var curentObject = (-currentLeft * 6) / $('#workPieceContainer').innerWidth();



    if (-curentObject > -4) {
        $('#workPieceContainer').clearQueue().animate({
            left: +(-(curentObject.toFixed()) - 1) * 100 + '%'
        }, 300);
        $('.portfolioPiece').animate({
            opacity: 0
        }, 100);
        $('div [data-piece=piece' + (-parseInt(-curentObject.toFixed()) + 2) + ']').animate({
            opacity: 1
        }, 300);



    } else {
        $('#workPieceContainer').clearQueue().animate({
            left: +0 + '%'
        }, 300);

        $('.portfolioPiece').stop().animate({
            opacity: 0
        }, 100);
        $('div [data-piece=piece' + (1) + ']').stop().animate({
            opacity: 1
        }, 300);

    }

});



$('#arrowLeft').on('click', function(event) {

    var currentLeft = parseInt($('#workPieceContainer').position().left);


    var curentObject = (-currentLeft * 6) / $('#workPieceContainer').innerWidth();


    if ((-curentObject) < -1) {
        $('#workPieceContainer').stop().animate({
            left: +(-curentObject.toFixed() + 1) * 100 + '%'
        }, 300);

        $('.portfolioPiece').animate({
            opacity: 0
        }, 100);
        $('div [data-piece=piece' + (curentObject.toFixed()) + ']').animate({
            opacity: 1
        }, 300);

    } else {
        $('#workPieceContainer').stop().animate({
            left: +0 + '%'
        }, 300);

        $('.portfolioPiece').stop().animate({
            opacity: 0
        }, 100);
        $('div [data-piece=piece' + (1) + ']').stop().animate({
            opacity: 1
        }, 300);

    }

});

$('.portfolioPiece svg').on('click', function(event) {

    var currentrPiece = $(this).parent();

    $('body').css('overflow', 'hidden');

    $('.portfolioPiece').not($(this).parent()).fadeOut('0', function() {

    });

    if ($(window).innerWidth() > 768) {
        currentrPiece.animate({
            left: '50%',
            top: '50%',
            marginLeft: '-150px',
            marginTop: '-150px'
        }, 300, function() {


            var pieceClone = currentrPiece.clone().css({
                top: (currentrPiece.position().top),
                left: (currentrPiece.position().left),
                position: 'absolute'
            });
            currentrPiece.css('opacity', 0);
            $(pieceClone).appendTo('#workPieceContainer');
            $(pieceClone).find('svg path').animate({
                'fill-opacity': 1
            }, 0);
            $(pieceClone).attr('id', 'clone').animate({
                left: '50%',
                top: '50%',
                height: '300%',
                width: '300%',
                marginLeft: '-150%',
                marginTop: '-150%',
                opacity: 0
            }, 500);

        });
    }

    var pieceId = currentrPiece.attr('data-piece');

    $('.workOverlay').fadeOut(0);
    $('#overlay').fadeIn(500, function() {

        $('.portfolioPiece').not('#clone').fadeOut(0);


        //var newHeight=parseInt($('#'+pieceId+' img').css('height'))+parseInt($('#'+pieceId+' p').css('height'));



        $('#' + pieceId).fadeIn(0, function() {


            var newHeight = parseInt($('#' + pieceId + ' img').css('height')) + parseInt($('#' + pieceId + ' p.client').css('height')) + parseInt($('#' + pieceId + ' p.desc').css('height')) + parseInt($('#' + pieceId + ' h4').css('height')) + 30;
            $('body').css({
                'overflow': 'hidden'
            });

            if ($(window).innerWidth() > 930) {
                $('#' + pieceId).css({
                    'margin-top': '0',
                    top: '50%',
                    height: 0,
                    'max-width': 0,
                    marginLeft: 0,
                    opacity: 0
                });
            } else {
                $('#' + pieceId).css({
                    'margin-top': '0',
                    top: '50%',
                    height: newHeight + 'px',
                    'max-width': '900px',
                    left: '2.5%',
                    marginLeft: 0,
                    opacity: 0
                });

            }

            if ($(window).innerHeight() > newHeight) {

                if ($(window).innerWidth() > 930) {

                    $('#' + pieceId).animate({
                        'margin-top': '-' + newHeight / 2 + 'px',
                        top: '50%',
                        height: newHeight + 'px',
                        'max-width': '900px',
                        marginLeft: '-460px',
                        opacity: 1
                    }, 300)

                } else {
                    $('#' + pieceId).animate({
                        'margin-top': '-' + newHeight / 2 + 'px',
                        top: '50%',
                        height: newHeight + 'px',
                        'max-width': '900px',
                        marginLeft: '0',
                        opacity: 1
                    }, 300)

                }

            } else {
                if ($(window).innerWidth() > 930) {

                    $('#' + pieceId).animate({
                        'margin-top': '20px',
                        top: 0,
                        'margin-bottom': '20px',
                        height: newHeight + 'px',
                        'max-width': '900px',
                        marginLeft: '-460px',
                        opacity: 1
                    }, 300)

                } else {
                    $('#' + pieceId).animate({
                        'margin-top': '20px',
                        top: 0,
                        'margin-bottom': '20px',
                        height: newHeight + 'px',
                        'max-width': '900px',
                        marginLeft: '0',
                        opacity: 1
                    }, 300)

                }


            }

        });



    });

    /* Act on the event */
});

$('.overlayClose').on('click', function() {

    portfolioPieceAdjust();
    $('.portfolioPiece').fadeIn(300);

    $('body').css({
        'overflow': 'auto',
        'overflow-x': 'hidden'
    });
    $('#overlay').fadeOut(300, function() {

        $('.workOverlay').fadeOut(0);
        $('.workOverlay').css('height', 0);

        $('#clone').fadeOut(0, function() {
            $('#clone').remove();
        });

    });

});

$('.portfolioPiece').on('mouseover', 'path', function() {

    $(this).closest('.portfolioPiece').find('span').addClass('activePPhead');

});

$('.portfolioPiece ').on('mouseout', 'path', function() {

    $(this).closest('.portfolioPiece').find('span').removeClass('activePPhead');

});
window.onresize = resizer;

function resizer() {
    // $('#sideNav').css('border-width', '0 0 '+$(window).innerHeight()+'px'+' 130px');
    //  console.log($(window).innerWidth());

    $('#bgImgHolder').css('height', $(window).innerHeight() + $(window).innerHeight() * 0.25 + 'px');


    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);


    if (agentID !== null) {

        if ($(window).innerWidth() > 651) {

            $('head').find('style').remove();
            $('head').append('<style>#sideNav:before{border-width: 0 200px ' + $(window).innerHeight() + 'px}</style>');

        } else {

            $('head').find('style').remove();
            $('head').append('<style>#sideNav{border-width:0 0 100px ' + $(window).innerWidth() + 'px}#sideNav:before{border-width:0 0px 160px 0px}</style>');

        }
    }


    if ($('#sideNav').hasClass("sideactive")); {
        if ($(window).innerWidth() > 650) {
            $('#sideNav').css({
                'left': '-250px',
                top: '0',
                'z-index': '0'
            }).removeClass('sideactive');
            $('#mainHam').removeClass('hamActive');
            $('section').css('margin-left', 0);

        } else {
            $('#sideNav').css({
                'left': '0',
                top: '-380px',
                'z-index': '29999'
            }).removeClass('sideactive');
            $('#mainHam').removeClass('hamActive');
            $('section').css('margin-left', 0);


        }



    }


    if ($(window).innerWidth() < 930) {

        $('.workOverlay').css('margin-left', 0);
    } else {
        $('.workOverlay').css('margin-left', '-460px');

    }

    var homeContentHeight = parseInt($('#logoContainer').css('height')) + parseInt($('#nameText').css('height')) + 170;

    if ($(window).innerHeight() <= homeContentHeight) {

        var exceptLogo = parseInt($('#nameText').css('height')) + 110;

        var aspectRatio = document.querySelector('#logoContainer img').naturalHeight / document.querySelector('#logoContainer img').naturalWidth;

        $('#logoContainer img').css({
            'height': $(window).innerHeight() - exceptLogo + 'px',
            width: 'auto',
            margin: '0 auto'
        });

        var cWidth = parseInt($('#logoContainer').css('width'));

        $('#logoContainer img').css({
            'max-height': cWidth * aspectRatio + 'px'
        });

        var currentLogoHeight = parseInt($('#logoContainer').css('height'));
        if ($(window).innerWidth() >= 450) {

            $('#logoContainer').css({
                'margin-top': 0,
                top: '20px',
                marginLeft: -cWidth / 2 + 'px'
            });
        } else {
            $('#logoContainer').css({
                'margin-top': 0,
                top: '20px',
                marginLeft: 0
            });
        }

        var currentNameText = parseInt($('#nameText').css('height'))

        $('#nameText').css({
            'margin-top': 0,
            top: 'calc( 30px + ' + currentLogoHeight + 'px)'
        });

    } else {
        $('#logoContainer img').css({
            'height': 'auto',
            width: '100%',
            'max-height': '316px'
        });

        if ($(window).innerWidth() >= 450) {

            $('#logoContainer').css({
                'margin-top': -(266) + 'px',
                top: '50%',
                marginLeft: '-215px'
            });

        } else {

            $('#logoContainer').css({
                'margin-top': -(266) + 'px',
                top: '50%',
                marginLeft: '0'
            });

        }

        $('#nameText').css({
            'margin-top': '60px',
            top: '50%'
        });

    }




    if ($(window).innerWidth() < 580) {



        $('#workPieceContainer').css('left', '0');

    } else {


    }

    if ($(window).innerWidth() > 1024) {
        $('#logoContainer').css({
            'z-index': '1'
        });
        $('#nameText').css({
            'z-index': 1
        });
    }




    $('section').css('min-height', $(window).innerHeight() + 'px');
    $('section#contact').css({
        'height': $(window).innerHeight() + 'px',
        'min-height': '667px'
    });
    skillsAdjust();
    portfolioPieceAdjust();



    $.each($('.main'), function(index, val) {

        var newHeight = parseInt($(this).css('height'));
        var newWidth = parseInt($(this).css('width'));


        if ($(this).parent().attr('id') != 'contact' && $(this).parent().attr('id') != 'work') {
            $(this).css({
                marginTop: -(newHeight / 2) + 'px',
                top: '50%',
                left: '50%',
                marginLeft: -(newWidth / 2) + 'px',
                position: 'absolute'
            });

            if ($(window).innerHeight() < newHeight) {

                $(this).css({
                    marginTop: 20 + 'px',
                    top: '0',
                    left: '0',
                    marginLeft: '0',
                    position: 'relative',
                    margin: '0 auto'
                });

                $(this).parent().css({
                    height: newHeight + 'px'
                });
            } else {
                $(this).css({
                    marginTop: -(newHeight / 2) + 'px',
                    top: '50%',
                    left: '50%',
                    marginLeft: -(newWidth / 2) + 'px',
                    position: 'absolute'
                });

                $(this).parent().css({
                    height: 'auto'
                });
            }
        }




    });


}

$('#formContainer button').on('click', function(event) {
    event.preventDefault();

});
$('section').css('min-height', $(window).innerHeight() + 'px');

if ($(window).innerWidth() > 768) {

    $('#work .main').css('min-height', $(window).innerHeight() + 'px');

} else {
    $('#work .main').css('min-height', 480 + 'px');

}

$('svg path').on('load', function() {

});

function mousewheelSection(e) {

    var in_viewport = $('section:in-viewport').first();


    if (e.originalEvent.wheelDelta < 0) {
        //scroll down
        console.log('Down');
        sectionId = in_viewport.next().attr('id');
        console.log(sectionId);
    } else {
        //scroll up
        console.log('Up');
        sectionId = in_viewport.prev().attr('id');
        console.log(sectionId);
    }

    window.history.pushState({
        urlPath: sectionId
    }, $(this).html(), sectionId);
    var currentTitle = $('title').html().split('-');
    $('title').html(currentTitle[0] + ' - ' + $(this).html());

    // console.log( $('#'+sectionId).offset().top);

    $('body').delay(300).stop().animate({
        scrollTop: $('#' + sectionId).offset().top
    }, 600);

    $('html').delay(300).stop().animate({
        scrollTop: $('#' + sectionId).offset().top
    }, 600);
}

function updateSectionPath() {
    var new_url;
    var in_viewport = $('section:in-viewport').first();
    if (history.replaceState) {

        new_url = in_viewport.attr('id');
        history.replaceState('', '', new_url);

        var currentTitle = $('title').html().split('-');
        $('title').html($.trim(currentTitle[0]) + ' - ' + in_viewport.attr('data-tname'));
        $('.mainSel').removeClass('mainSel');
        $('a[data-pos="' + in_viewport.attr('id') + '"]').addClass('mainSel');
    }
}

function ajaxSubmit() {

    var nameValue = $.trim($('#cName').val());
    var emailValue = $.trim($('#cEmail').val());
    var msgValue = $.trim($('#msgText').val());

    $('#preloadOverlay').fadeIn(300);

    $('#emailMsg').delay(300).fadeIn(0);
    $('#contactForm').delay(300).fadeOut(0);


    $.ajax({

            url: './process/eprocess.php',
            type: 'POST',
            dataType: 'text',
            data: {
                name: nameValue,
                email: emailValue,
                msg: msgValue
            },

        })

        .done(function(data) {

            $('#preloadOverlay').fadeOut(300, function() {


                $('#contactForm input, #contactForm textarea').val('');
                $('#emailMsg').delay(1000).fadeOut(300);
                $('#contactForm').delay(1000).fadeIn(300);

            });



        })
        .fail(function() {
            alert("error");
        })

}