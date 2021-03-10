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

var icon1 = "assets/img/googlemapsmarker.svg";
var icon2 = "assets/img/googlemapsmarker2.svg";


var markerCallback = function() {
    for (var i=0; i<gmarkers1.length; i++) {
        gmarkers1[i].setIcon(icon1);
    }
    this.setIcon(icon2);
    console.log("iepisu ikonu");
 }
      //var infowindow; // = new google.maps.InfoWindow({
      //    content: ''
      //});
      // Function to init map
      function initMap() {
        console.log("init map")

        infowindow = new google.maps.InfoWindow({
            content: '',
            pixelOffset: new google.maps.Size(250, 100)

        });

      

        var center = new google.maps.LatLng(56.9496, 24.1052);
        var mapOptions = {
          zoom: 13,
          center: center,
          mapId: "e24b393c59b842b4",
          disableDefaultUI: true
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        for (i = 0; i < markers1.length; i++) {
          addMarker(markers1[i]);
        }

        
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

  zoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);

  

      }

     


      function ZoomControl(controlDiv, map) {
  
        // Creating divs & styles for custom zoom control
        controlDiv.style.padding = '5px';
      
        // Set CSS for the control wrapper
        var controlWrapper = document.createElement('div');
        controlDiv.className += "appendix";
        controlWrapper.style.cursor = 'pointer';
        controlWrapper.style.textAlign = 'center';
        controlWrapper.style.width = '56.45px'; 
        controlWrapper.style.height = '57px';
        controlWrapper.style.marginRight = '67px';
        controlWrapper.style.marginBottom = '157px';
        controlDiv.appendChild(controlWrapper);
        
        // Set CSS for the zoomIn
        var zoomInButton = document.createElement('div');
        zoomInButton.style.width = '56.45px'; 
        zoomInButton.style.height = '57px';
        zoomInButton.style.marginBottom = '21px';
        /* Change this to be the .png image you want to use */
        zoomInButton.style.backgroundImage = 'url("assets/img/zoomin.svg")';
        controlWrapper.appendChild(zoomInButton);
          
        // Set CSS for the zoomOut
        var zoomOutButton = document.createElement('div');
        zoomOutButton.style.width = '56.45px'; 
        zoomOutButton.style.height = '57px';
        /* Change this to be the .png image you want to use */
        zoomOutButton.style.backgroundImage = 'url("assets/img/zoomout.svg")';
        controlWrapper.appendChild(zoomOutButton);
      
        // Setup the click event listener - zoomIn
        google.maps.event.addDomListener(zoomInButton, 'click', function() {
          map.setZoom(map.getZoom() + 1);
        });
          
        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(zoomOutButton, 'click', function() {
          map.setZoom(map.getZoom() - 1);
        });  
          
      } 

    
      

 $(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 768) {
            // if larger or equal
            $(".appendix").css('display', 'block');
            
        } 

        else {
            // if smaller
            $(".appendix").css('display', 'none');

            
            
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});
      
$(document).ready(function() {
    // dropdown funkcija priekš option filtra
    $(".demoSelect").on("change", function() {
        // This will fire each time the window is resized:
        if( $("#one").val() == "Rīga" && $("#two").val() == "Ēdināšana") 
        { 
           //show the div
           $(".uznemumi-edinasana").show();
        } 
        else 
        {  
           //hide the div
           $(".uznemumi-edinasana").hide(); 
        }

        if( $("#one").val() == "Rīga" && $("#two").val() == "Skaistumkopšana") 
        { 
           //show the div
           $(".skaistumkopsana").show();
        } 
        else 
        {  
           //hide the div
           $(".skaistumkopsana").hide(); 
        }

            
            
        
    });// This will simulate a resize to trigger the initial run.
});   





      // Function to add markers to map
      function addMarker(marker) {
        console.log("Add marker",marker)
        var category = marker[4];
        var pos = new google.maps.LatLng(marker[2], marker[3]);
        var content = marker[1];

        var marker1 = new google.maps.Marker({
          position: pos,
          category: category,
          map: map,
          icon: icon1,
         
        });

        gmarkers1.push(marker1);

        
        
       

        // Marker click listener (zoom in and open info window)
       

        google.maps.event.addListener(marker1, 'click', markerCallback);


        google.maps.event.addListener(marker1,"click", (function(marker1, content) {
            return function() {
              console.log("Gmarker 1 gets pushed");
              
              infowindow.setContent(content);
              infowindow.open(map, marker1);
            };
          })(marker1, content)
        );
      }



      
      // Function to filter markers by category
      //filterMarkers = function (category) {
      
filterMarkers = function (category) {
    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < gmarkers1.length; i++) {
        marker = gmarkers1[i];

        // If is same category or category not picked
        if((typeof marker.category == 'object' && marker.category.indexOf(category) >= 0) || category.length == 0){
            marker.setVisible(true);
            bounds.extend(marker.getPosition());
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
        map.fitBounds(bounds);
    }
}
      
      markers1 = [
        ['0', '<div id="infowindow"> <img src = "/assets/img/PurchLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Purch restaurant</h3><p>+371 25425254</br>Dzelzavas iela 51A, Rīga</p></div></div>', 	56.9569506, 24.1892936, ['Rīga','Ēdināšana']],
        ['1', '<div id="infowindow"> <img src = "/assets/img/KurtsLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Kurts coffee</h3><p>+371 23202079</br>Tērbatas iela 2i, Rīga</p></div></div>', 56.952127, 24.116603, ['Rīga', 'Ēdināšana']],
        ['2', '<div id="infowindow"> <img src = "/assets/img/KurtsLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Kurts coffee</h3><p>+371 23202079</br>Cēsu iela 20, Rīga</p></div></div>', 56.9651915, 24.1405323, ['Rīga', 'Ēdināšana']],
        ['3', '<div id="infowindow"> <img src = "/assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.95051, 24.11203, ['Rīga','Drive-Thru']],
        ['4', '<div id="infowindow"> <img src = "/assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9606, 24.1754, ['Rīga', 'Skaistumkopšana']],
        ['5',  '<div id="infowindow"> <img src = "/assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9535, 24.1180, [ 'Rīga', 'Skaistumkopšana']],
        ['6', '<div id="infowindow"> <img src = "/assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.98, 24.1754, ['Rīga', 'Izklaide']],
        ['7', '<div id="infowindow"> <img src = "/assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9680, 24.1750, ['Rīga', 'Izklaide']],
    ];


    const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);


