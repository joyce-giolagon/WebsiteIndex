$(document).click(function() {
    $(".container").css("grid-template-columns", "repeat(3, 1fr)")
})

$(document).mousemove(function() {
    if ($(".assignment-1:hover").length == 1) {
        $(".assignment-1").css("background", "#CDE0C9")
        $("#p1-first").css("filter", "blur(1px)")
    } else {
        $(".assignment-1").css("background", "white")
        $("#p1-first").css("filter", "blur(0px)")
    }
    if ($(".assignment-2:hover").length == 1) {
        $(".assignment-2").css("background", "#CDE0C9")
        $("#p1-second").css("filter", "blur(1px)")
    } else {
        $(".assignment-2").css("background", "white")
        $("#p1-second").css("filter", "blur(0px)")
    }
    if ($(".assignment-3:hover").length == 1) {
        $(".assignment-3").css("background", "#CDE0C9")
        $("#p1-third").css("filter", "blur(1px)")
    } else {
        $(".assignment-3").css("background", "white")
        $("#p1-third").css("filter", "blur(0px)")
    }
})