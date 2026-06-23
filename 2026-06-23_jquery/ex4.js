"use strict";


$(() => {
    $("div.card")
    .text("Заглушка")
    .css("border", "2px solid black")
    .css("margin", "4px")
    .on("click", function() {
        $(this)
        .css("border-color", "red")
        .css("background", "bisque");
    })
    .on("mouseout", function() {
        $(this)
        .css("border-color", "green")
        .css("background", "none");
    });
});
