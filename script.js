$(document).ready(function () {

    $("#subtn").click(function () {

        var addItem = $('input[name=list-item]').val();
        if ($('input[name=list-item]').val() == "") {
            alert("You haven't inputted any to-do-list yet!");
        }
        else {
            $("ol").append("<li>" + addItem + "&nbsp &nbsp &nbsp <button class = removeClass>" + "Delete" + "</button>" + "</li>");
            $('input[name=list-item]').val("");
        }

    });

    function removeTodoItem(e, item) {
        e.preventDefault();
        $(item).parent().fadeOut('slow', function () {
            $(item).parent().remove();
        });
    }

    $(".removeClass").on('click', '.removeClass', function () {
        removeTodoItem(e, item);
    });


    $(document).on('click', 'li', function () {
        $(this).fadeOut('slow').wrap("<strike>");

    });

    $('ol').sortable();



    //keypress but not functioning well, dunno the problem

    /*
        $("input[name=list-item]").keypress(function(event) {
            if(event.keyCode == 13) {
              //grab text
              $("#subtn").click();
              //append todotext to ul
              if( $('input[name=list-item]').val() !== "") {
                $("ol").append("<li>" + addItem + "&nbsp &nbsp &nbsp <button class = removeClass>" + "Delete" + "</button>" + "</li>" + "<br/>");
                $(".removeClass").css({"cursor": "pointer", "border-radius": "10px;" , "padding" : "6px", "border-radius": "10px"});
                }
    
              //clear text
              $('input[name=list-item]').val("");
            }
          });
    
        document.body.addEventListener('keypress', (e) => {
            if (e.key == "Enter") {
                var addItem = $('input[name=list-item]').val();
                $("ol").append("<li>" + addItem + "&nbsp &nbsp &nbsp <button class = removeClass>" + "Delete" + "</button>" + "</li>" + "<br/>");
                $(".removeClass").css({ "cursor": "pointer", "border-radius": "10px;", "padding": "6px", "border-radius": "10px" });
                $('input[name=list-item]').val("");
                
        
            }
        
        
        }); */

});

