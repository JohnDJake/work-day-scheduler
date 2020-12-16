const DateTime = luxon.DateTime;

$(document).ready(function() {
    var currentDateTime = DateTime.local();
    $("#currentDay").text(currentDateTime.toLocaleString(DateTime.DATE_HUGE));
    $(".description").each(function(index, el) {
        var elTime = parseInt($(el).attr("data-time"));
        if (elTime < currentDateTime.hour) {
            $(el).addClass("past");
        } else if (elTime == currentDateTime.hour) {
            $(el).addClass("present");
        } else {
            $(el).addClass("future");
        }
    });
})