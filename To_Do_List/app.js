
$("#myInput").on("keyup",function(e){
    if(e.keyCode == 13 && $("#myInput").val() != "")
    {
        console.log($("#myInput").val());
        var task = $("<div class='task' ></div>").text($("#myInput").val());
        var del = $("<i class='fas fa-trash-alt' id='del'></i>").click(function(){
          var p = $(this).parent();
          p.fadeOut(function(){
            p.remove();
          });
        });
   
      var check = $("<i class='fas fa-check' id='done'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          $(".work1").append(p);
          console.log(p);
          p.fadeIn();
        });
        $(this).remove();
      });

      task.append(del,check);
      $(".work2").append(task);
      $("#myInput").val("");

}
});

$("#add_button").on("click",function(e){
  
  if($("#myInput").val() != "")
  {
      console.log($("#myInput").val());
      var task = $("<div class='task'></div>").text($("#myInput").val());
      var del = $("<i class='fas fa-trash-alt' id='del'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          p.remove();
        });
      });
 
    var check = $("<i class='fas fa-check i' id='done'></i>").click(function(){
      var p = $(this).parent();
      p.fadeOut(function(){
        $(".work1").append(p);
        console.log(p);
        p.fadeIn();
      });
      $(this).remove();
    });

    task.append(del,check);
    $(".work2").append(task);
    $("#myInput").val("");

}
});
            
