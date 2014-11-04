//create var for points
$(document).ready(
function(){

	

var points = 0;

//this adds the hover funtcion to change to blue on mouseover then back to green on mouse out
$( "#box1" ).hover(
  function() {
    $( this ).css( "background","blue" );
    points++; //add +1 to points

    //redisplay the points with the new value by replacing the value of the whole div
    $('div#pointdisplay').html('Points: '+ points);
    
  }, function() {
  $( this ).css( "background","green" );
  }
); 
})