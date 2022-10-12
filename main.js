
//___________________________________________//
//Function Clone
$(document).ready(function(){
   //jquery code
    $("#add").click(function () {
     $("#area").clone().appendTo ("#wrapper") 
    });
 //Function Delete
    $("#remove").click(function () {
     $("#area:last").remove() 
    });
    
    
    });


//------------------------------------------//







