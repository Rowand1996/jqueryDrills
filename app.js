
$(document).ready(function () {
    $("<div>").appendTo("body")
    $("#btnSubmit").click(function () {
        $("<ul>").text($(".textBox").val()).appendTo("div");
        // $("<h2>").text($(".textBox").val()).appendTo("div");
        // $("h2").on( "mouseover", function() {
        //     $( this ).css( "color", "red" );
        //   });
        $("ul").on( "click", function() {
            $( this ).css( "color", "red" );
          });
        $("ul").on("dblclick", function(){
            $(this).remove();
        });
    });
    
    $(".textBox").keyup(function () {
        if ($(".textBox").val() > " ") {
            $("#btnSubmit").removeAttr("disabled");
        }
    });





});