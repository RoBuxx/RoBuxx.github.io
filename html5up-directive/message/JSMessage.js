//give the max number of characters the user can type
var max_tweet = 200;

//$(document) selects the WHOLE document
//.ready means when the WHOLE document is loaded. .ready means when its ready
$(document).ready(

 //start a function by typing function(){}
  function() {

     //select a div id or class by $(
      //.html () lets you type html  brackets
      //you can connect 
       $('#counter').html('I have ' + max_tweet +' characters left');
 $( "#tweeting" ).keyup(function() { // 
  var tweetingValue = $( "#tweeting" ).val().length;
  var charleft = max_tweet - tweetingValue;
  $('#counter').html('You have '+charleft + ' characters left');
  if (charleft < 0) {
    $('#counter').css('color','red');
  }
  
  else if(charleft==0){
    $('#counter').css('color','green');
  }
  else{
    $('#counter').css('color','black');
  }


  }
  )

//When i type,find out how many characters i'm writing

});