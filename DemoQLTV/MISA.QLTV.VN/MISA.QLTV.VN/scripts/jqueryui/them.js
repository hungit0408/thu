
$(function () {
   
    $("#dialog").dialog({
        autoOpen: false,
        width: 340,
        height:186
    });

    $("#btnAddCategorySymbol").on("click", function () {
        $("#dialog").dialog("open");
    });
}); 