$(document).ready(function() {
    var url = "https://spreadsheets.google.com/feeds/list/19N2nlNo9brg1F5YsSewE4nQHZBhP77CU0Lv-aY_kT7w/1/public/values?alt=json"

    // The following generates the HTML for each new box.
    var bit1 = '<li><div class="box"><div class="box-title">';
                // Insert title text here
    var bit2 = '</div><div class="box-story">';
                // Insert story text here
    var bit3 = '</div></div></li>';

    $.getJSON(url, function(data) {
        var entry = data.feed.entry;
        $(entry).each(function() {
        	toAdd = bit1 + this.gsx$title.$t + bit2 + this.gsx$story.$t + bit3;
            document.getElementById("grid").innerHTML = toAdd + document.getElementById("grid").innerHTML;
        });
    });

});
