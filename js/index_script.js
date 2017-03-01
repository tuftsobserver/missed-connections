var url = "https://spreadsheets.google.com/feeds/list/19N2nlNo9brg1F5YsSewE4nQHZBhP77CU0Lv-aY_kT7w/1/public/values?alt=json"

// Reusable segments of HTML for each box
// Generates one box as follows:
// html1 + "title text" + html2 + "story text" + html3
var html1 = '<li><div class="box"><div class="box-title">';
var html2 = '</div><div class="box-story">';
var html3 = '</div></div></li>';

$.getJSON(url, function(data) {

    // Pulls all data in from google sheets at once
    var entry = data.feed.entry;
    //added to keep track of the entries
    var story_count = 0;
    //added to get different images in
    var image_num = 1;
    $(entry).each(function() {
        // Steps through and combines surrounding html with text for each box
        story_count = story_count + 1;
    	toAdd = html1 + this.gsx$title.$t + html2 + this.gsx$story.$t + html3;
        document.getElementById("grid").innerHTML = toAdd + document.getElementById("grid").innerHTML;

        //every 4 elements insert an image

        if (story_count == 2) {
            console.log ('test');

            toAdd = '<li> <div class = "photo"> <img src="'+image_num.toString()+'.png" style="max-height: 100px; max-width: 100px;" alt="a doodle"> </div></li>' 
            //toAdd = '<li> <div class = "photo"> <div class= "box"> <img src="doodle.png" style="max-height: 100px; max-width: 100px;" alt="a doodle of a question mark"> </div></div></li>'
            document.getElementById("grid").innerHTML = toAdd + document.getElementById("grid").innerHTML;
            story_count = 0;
            image_num+=1
        }
        //resset image count if get through 3
        if(image_num > 3){
            image_num = 1;
        }
    })

    // Runs the following AFTER the above function is complete by using 'promise'
    $(entry).promise().done(function() {
        // AnimOnScroll function uses masonry, classie, and imagesloaded to configure our boxes.
        // credit to http://tympanus.net/Development/GridLoadingEffects/index8.html
        new AnimOnScroll(document.getElementById('grid'), {
            minDuration: 0.4,
            maxDuration: 0.7,
            viewportFactor: 0.4
        });
    });
});
