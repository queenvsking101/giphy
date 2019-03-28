// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    console.log("hello")
    var searchInput = $("input").val();
  $.ajax({
url: "https://api.giphy.com/v1/gifs/search?q="+searchInput+"&rating=pg&api_key=dc6zaTOxFJmzC" ,
method: 'GET',
success:function(response) {
    response.data.forEach(function(course){
        $(".container").append("<img src='"+course.images.fixed_width.url+"'/>")

    });
   // console.log(response);//
//$(".container").html("<img src='"+response.data[0].images.fixed_width.url+"'/>");//



  }

});



});


