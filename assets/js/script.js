const DateTime = luxon.DateTime;

$(document).ready(function() {
    $("#currentDay").text(DateTime.local().toLocaleString(DateTime.DATE_HUGE))
})