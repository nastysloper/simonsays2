$(document).ready(function(){

$('.container a').click(function(e){

  // alert("button clicked!");

  e.preventDefault();
    $.post('/color', function(data){
      $('#color_me').html(data);
    });




}); // close .click

}); // close doc ready()


  

 