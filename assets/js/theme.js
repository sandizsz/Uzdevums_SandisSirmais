$(document).ready(function(){
    $('#check').click(function(){
        if($(this).is(":checked")){
            
            $("body").css('overflow', 'hidden');
            
        }
        else if($(this).is(":not(:checked)")){
          $("body").css('overflow', 'auto');
          
        }
    });
});




 $(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 1129) {
            // if larger or equal
            $("body").css('overflow', 'auto');
            
            $(".nav-flex-items").css('display', 'none');
            $(".dropbtn").css('display', '');
            $("#nav").css('overflow', '');
        } 

        else {
            // if smaller
            
            $(".nav-flex-items").css('display', 'block');
            $(".dropbtn").css('display', 'none');
            $("#nav").css('overflow', 'scroll');
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});


$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40 ) {
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

$("#topBtn").click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
    });
});

var gmarkers1 = [];
var markers1 = [];





// Function to init map


function initMap() {
    var center = new google.maps.LatLng(56.9496,24.1052);
    var mapOptions = {
        zoom: 14,
        center: center,
        mapId: 'e24b393c59b842b4',
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}



// Function to add markers to map


function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

// Marker click listener (zoom in and open info window)
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(13);
        }
    })(marker1, content));
}


// Function to filter markers by category


filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
            
        }
        
        // if Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}

// Add markers (you can add as many as you like)
// Note, marker #5 has a lot of styling and an image in the info window. Just showing an example of what you can do with an info window.
markers1 = [
    ['0', 'Lee Blvd Branch', 56.9496, 24.1052, 'Branch'],
    ['1', 'Lee Blvd ATM', 34.613839, -98.409974, 'ATM'],
    ['2', 'Annex Branch', 34.607799, -98.396419, 'Branch'],
    ['3', 'West Branch', 34.623425, -98.468883, 'Drive-Thru'],
    ['4', 'East ATM', 34.593839, -98.409974, 'ATM'],
    ['5',  '<div style=\"font-size:12px; color:#000; \"><img id=\'popimg\' src=\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/44720/paris.jpg\'  <br/><br/><strong>Address:</strong><br/>123 Happy Place<br/><br/><strong>City-State-Zip:</strong><br/>Lawton, OK. 73509<br/><br/><strong>Phone:</strong><br/>580-555-1234<br/><br/> <strong>Type:</strong><br/>(ATM)<br/><br/><strong>Monday - Friday</strong><br/>9:00 AM - 5:00 PM &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</div>"', 34.713839, -98.409974, 'ATM']
];

// Init map
initMap();