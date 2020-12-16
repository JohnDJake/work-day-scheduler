const DateTime = luxon.DateTime;

$(document).ready(function () {
    // get the current date and time
    var currentDateTime = DateTime.local();
    // get the stored events
    var storedEvents = JSON.parse(localStorage.getItem("dailySchedule")) || {};
    // display the date on the page
    $("#currentDay").text(currentDateTime.toLocaleString(DateTime.DATE_HUGE));
    // set the text for each textarea from the stored data
    // and set the formatting for each textarea based off the time
    $(".description").each(function (index, el) {
        // keys in stored events match the textarea ID
        $(el).val(storedEvents[$(el).attr("id")]);
        var time = parseInt($(el).attr("data-time"));
        if (time < currentDateTime.hour) {
            $(el).addClass("past");
        } else if (time == currentDateTime.hour) {
            $(el).addClass("present");
        } else {
            $(el).addClass("future");
        }
    });

    // update the stored value for only the corresponding hour when a save button is pressed
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        storedEvents[$(event.target).attr("data-ref")] = $("#" + $(event.target).attr("data-ref")).val();
        localStorage.setItem("dailySchedule", JSON.stringify(storedEvents));
    })
})