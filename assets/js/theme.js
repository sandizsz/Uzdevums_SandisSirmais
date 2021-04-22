$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');

    if ($(".hamburger").hasClass("is-active")) {
        $("body").css('overflow', 'hidden');
        $("ul").animate({left: '0px'});
        $(".dropdown").css('display', 'none');

      }

    else {
        $("body").css('overflow', 'auto');
        $("ul").animate({left: '-100%'});
        $(".dropdown").css('display', '');
    }
});

// Nav menu open and close with hamburger menu, make body unscrollable, but nav menu scrollable

$(document).ready(function() {
  // This will fire when document is ready:
  $(window).resize(function() {
      // This will fire each time the window is resized:
      if($(window).width() >= 1130) {
          // if larger or equal
          $("body").css('overflow', 'auto');
          $(".hamburger").css('display', 'none');
          $(".nav-dropdown-mobile").css('display', 'none');
          $("#nav").css('overflow', '');
      } 

      else {
          // if smaller
          $(".nav-dropdown-mobile").css('display', 'block');
          $(".hamburger").css('display', '');
          $("#nav").css('overflow', 'scroll');
      }
  }).resize(); // This will simulate a resize to trigger the initial run.
});


// Responsive design for nav menu to be opened when the window is resized - show hamburger menu.

function validateForm() {
  var isValid = true;
  var buttonchecked = document.querySelector("input[type='checkbox']").checked;
  $('#register_form input, textarea').each(function() {
    if ( $(this).val() === '' )
        isValid = false;
  });
  
  if (isValid == true && buttonchecked == true) {
        $(".form-pazinojums").css('display', 'block');
    $(".email-button").css('display', 'none');
    $('#register_form')[0].reset();

  }

}

// Validate form and push out a message when the button 'Sūtīt' is clicked



$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 50 ) {
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });

$("#topBtn").click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
    });
});


// Scroll to top button which appears when user has scrolled down a certain amount -> when clicked it jumps to the top of the page

$(".hamburger-box").click(function(){
  $('html, body').animate({scrollTop : 0}, 100);
  });

// Jump the page to the top when hamburger menu is opened to avoid a gap between the divider and ul menu


var gmarkers1 = [];
var markers1 = [];

var icon1 = "assets/img/googlemapsmarker.svg";
var icon2 = "assets/img/googlemapsmarker2.svg";


markers1 = [
  ['0', '<div id="infowindow"> <img class = "img_smaller_mobile" src = "assets/img/PurchLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Purch restaurant</h3><p>+371 25425254</br>Dzelzavas iela 51A, Rīga</p></div></div>', 	56.9569506, 24.1892936, ['Rīga','Ēdināšana']],
  ['1', '<div id="infowindow"> <img src = "assets/img/KurtsLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Kurts coffee</h3><p>+371 23202079</br>Tērbatas iela 2i, Rīga</p></div></div>', 56.952127, 24.116603, ['Rīga', 'Ēdināšana']],
  ['2', '<div id="infowindow"> <img class = "img_smaller_mobile" src = "assets/img/KurtsLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Kurts coffee</h3><p>+371 23202079</br>Cēsu iela 20, Rīga</p></div></div>', 56.9651915, 24.1405323, ['Rīga', 'Ēdināšana']],
  ['3', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.95051, 24.11203, ['Rīga','Drive-Thru']],
  ['4', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9606, 24.1754, ['Rīga', 'Skaistumkopšana']],
  ['5',  '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9535, 24.1180, [ 'Rīga', 'Skaistumkopšana']],
  ['6', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.98, 24.1754, ['Rīga', 'Izklaide']],
  ['7', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9680, 24.1750, ['Rīga', 'Izklaide']],
];

var markerCallback = function() {
  for (var i=0; i<gmarkers1.length; i++) {
      gmarkers1[i].setIcon(icon1);
  }
  this.setIcon(icon2);
  
}

// Loop through markers and set to icon2 the selected marker




 function initMap() {

    var center = new google.maps.LatLng(56.95051, 24.11203);

    // Added a variable for map center
        
    var mapOptions = {
          zoom: 13,
          center: center,
          mapId: "e24b393c59b842b4",
          disableDefaultUI: true,
          gestureHandling: 'greedy',
          scrollwheel: false,
     };

    //Customization of the map itself

   

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        for (i = 0; i < markers1.length; i++) {
          addMarker(markers1[i]);
        }

      // Initialized the map in #map-canvas, added markers from an array

        
      var zoomControlDiv = document.createElement('div');
      var zoomControl = new ZoomControl(zoomControlDiv, map);

  zoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);


  infowindow = new google.maps.InfoWindow({
    content: '',

});

      }

     


      function ZoomControl(controlDiv, map) {
  
        // Creating divs & styles for custom zoom control
        controlDiv.style.padding = '5px';
      
        // Set CSS for the control wrapper
        var controlWrapper = document.createElement('div');
        controlDiv.className += "ZoomControl";
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
       
              infowindow.setContent(content);
              infowindow.open(map, marker1);
 
            };
          })(marker1, content)
        );

        
      $(document).ready(function() {
        // This will fire when document is ready:
        $(window).resize(function() {
            // This will fire each time the window is resized:
            if($(window).width() >= 768) {
                // if larger or equal
                infowindow.set("pixelOffset", new google.maps.Size(250, 100)); 
            } 
    
            else if ($(window).width() >= 576) {
                // if smaller

                infowindow.set("pixelOffset", new google.maps.Size(150, 235)); 
             
            }

            else {
              infowindow.set("pixelOffset", new google.maps.Size(100, 250)); 
            }
        }).resize(); // This will simulate a resize to trigger the initial run.
    });
    
// To set infowindow to the place accordingly to the design, by changing pixelofset when window is resized
  

    google.maps.event.addListener(map, "click", function(event) {
      infowindow.close();
      marker1.setIcon(icon1)
      
      
  });
        
}

// This closes infowindow and changes marker to icon1 when clicked on the map



updateView = function (element) {
  var bounds = new google.maps.LatLngBounds();
  if (element) {
      //Get array with names of the checked boxes
      checkedBoxes = ([...document.querySelectorAll('input[type=radio]:checked')]).map(function(o) { return o.id; });
      console.log(checkedBoxes);
      for (i = 0; i < markers1.length; i++) {
          marker = gmarkers1[i];
        
          //Filter to show any markets containing ALL of the selected options
          if(typeof marker.category == 'object' && checkedBoxes.every(function (o) {
      return (marker.category).indexOf(o) >= 0;})){
        bounds.extend(marker.getPosition());
              marker.setVisible(true);
          }
          else {
              marker.setVisible(false);
          }
          
          map.fitBounds(bounds);
      }
  }
 
}


// This function updatesview and filter sthe markers to show only markers that fit into categories - after that it reads their LatLng to create a bound that show only those markers that are checked in the dropdown menu


function valueChanged(){

  if(document.getElementById("Rīga").checked == true || document.getElementById("Ogre").checked == true || document.getElementById("Jelgava").checked == true)  {
    $("label[for=sort-relevance]").css('display', 'none');
    $("label[for=sort-relevance]").remove();
    
    
  }
 

  if (document.getElementById("Izklaide").checked == true || document.getElementById("Ēdināšana").checked == true || document.getElementById("Skaistumkopšana").checked == true) {
    $("label[for=sort-relevance1]").css('display', 'none');
    $("label[for=sort-relevance1]").remove();
  }

}


// This will hide the option 'Izvēlies' whenever any other option has been chosen in the dropdown menu


$(document).ready(function() {
  // dropdown funkcija priekš option filtra
  $(".dropdown-el").on("click", function() {

    var dropdowntext1 = $('.mapselect1 input[type="radio"]:checked+label').text();
    var dropdowntext2 = $('.mapselect2 input[type="radio"]:checked+label').text();
     // This will fire each time the window is resized:
      if( dropdowntext1 == "Rīga" && dropdowntext2 == "Ēdināšana") 
      { 
         //show the div
         $(".uznemumi-edinasana").show();
      } 
      else 
      {  
         //hide the div
         $(".uznemumi-edinasana").hide(); 
      }

      if( dropdowntext1 == "Rīga" && dropdowntext2 == "Skaistumkopšana") 
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


// Shows the div above the map of the information on the markers for user to see if the categories match



$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();

  var clickedOption = $('#' + $(e.target).attr('for'));
  if( clickedOption ) {
    $('#' + $(e.target).attr('for')).prop('checked', true);
    updateView(this);
  }
  
  $(this).toggleClass('expanded');
  valueChanged();
});

$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});

// for dropdown menu to expand and to initialize other functions mentioned above



$(document).ready(function() {
  // This will fire when document is ready:
   $(window).resize(function() {
      // This will fire each time the window is resized:
            if($(window).width() >= 769) {
                $('.show-more').hide();
                $('.project:gt(19)').show();
            } 
    
            else {
                $('.show-more').show();
                $('.project:gt(19)').hide();
            }
                // if smaller
                
        }).resize(); // This will simulate a resize to trigger the initial run.
    });


      
      $('.show-more').on('click', function() {
        $('.project:gt(19)').toggle();
        $(this).text() === 'Skatīt vairāk' ? $(this).text('Skatīt mazāk') : $(this).text('Skatīt vairāk');
      });

// When window size goes below tablet width of 768, it shows only 19 images from the grid and creates a button "Skatīt vairāk/mazāk" which shows or hides the rest of the images when clicked.
    

const buttons = document.querySelectorAll('.project');
const button = document.querySelector('.project');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const overlayDiv = document.querySelectorAll('.overlay__inner div')[0];
const overlayDiv1 = document.querySelectorAll('.overlay__inner div')[1];
const overlayImage = document.querySelectorAll('.overlay__inner img')[0];
const overlayImage1 = document.querySelectorAll('.overlay__inner img')[1];
const overlayParagraph = document.querySelector('.overlay__inner p');


// Defined constants that will be reused in the function

$(".project").click(function(event) {
    $(".project").removeClass("active");
    $(event.currentTarget).addClass("active");
});


// Adds class .active to the current clicked on image from the grid


$(".project").on('click' , function open(e) {
    if ($(".active").find('.video-wrap-iedvesmasstasti').length == 1) {

  overlay.classList.add('open');
  $("body").css('overflow', 'hidden');

  const src= e.currentTarget.querySelectorAll('div')[0].className;
  overlayDiv.className = src;
  
  const src1= e.currentTarget.querySelectorAll('div')[1].className;
  overlayDiv1.className = src1;

  const src2= e.currentTarget.querySelectorAll('img')[0].src;
  overlayImage.src = src2;

  const src3= e.currentTarget.querySelectorAll('img')[1].src;
  overlayImage1.src = src3;

  const src4= e.currentTarget.querySelectorAll('img')[1].className;
  overlayImage1.className = src4;

  const src5= e.currentTarget.querySelector('p').textContent;
  overlayParagraph.textContent = src5;
    } 
})






function close() {
    $("body").css('overflow', 'auto');
overlayParagraph.textContent = "";
  overlay.classList.remove('open');
  overlayDiv.classList.remove('video-wrap-iedvesmasstasti');
  overlayDiv.classList.remove('play-btn-iedvesmasstasti');
  overlayImage1.classList.remove('placeholder-iedvesmasstasti');
  overlayImage.src = "";
  overlayImage1.src = "";

}

// when X is clicked on an open video in iedvesmasstasti, it removes the classnames making sure the next video that is opened doesnt duplicate their classname

if ( $('.open').length > 0 ) {
  buttons.forEach(button => button.addEventListener('click', open)); 
}



if ( $('.close').length > 0 ) {
  document.querySelector('.close').addEventListener('click', close);  
}


// This will fire only when the page has class .open or .close in order to stop it from firing when the page doesnt these classes

// JS for page - iedvesmasstasti.html