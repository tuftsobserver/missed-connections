$(document).ready(function() {
	var colors = ['wedgewood','pistachio','rooster','heliotrope','festival','cosmos'];
    var url = "https://spreadsheets.google.com/feeds/list/19N2nlNo9brg1F5YsSewE4nQHZBhP77CU0Lv-aY_kT7w/1/public/values?alt=json"
    $.getJSON(url, function(data) {
        var entry = data.feed.entry;
        var i = 0;
        $(entry).each(function() {
        	if (i == colors.length) i = 0;
        	$('.container--cards').append('<div class="card--'+colors[i]+' box"><p class="card__headline">'+this.gsx$title.$t+'</p></div>');
        	i++;
        });
        $(entry).each(function() {
        	if (i == colors.length) i = 0;
        	$('.container--cards').append('<div class="card--'+colors[i]+' box"><p class="card__headline">'+this.gsx$title.$t+'</p></div>');
        	i++;
        });
    });

});
