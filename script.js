$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#top-button').fadeIn();
    } else{
      $('#top-button').fadeOut();
    }
  });

  $("#top-button").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});

// ••• Slider button •••

var count = 0;
$(".sidebar-fade-button , .sidebar-call-black-screen").click(function() 
{
    count++;
    var isEven = function(someNumber) 
    {
        return (someNumber % 2 === 0) ? true : false;
    };

    if (isEven(count) === false)
    {
        $('.sidebar-fade-div').css({"right":"0"});
        $('.sidebar-call-black-screen').css({"display":"block"});
    }
    else if (isEven(count) === true) 
    {
        $('.sidebar-fade-div').css({"right":"calc(-50% - 12px)"});
        $('.sidebar-call-black-screen').css({"display":"none"});
    }
});