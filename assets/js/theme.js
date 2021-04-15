$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');

    if ($(".hamburger").hasClass("is-active")) {
        $("body").css('overflow', 'hidden');
        $("ul").css('left', '0');
        $(".dropdown").css('display', 'none');

      }

    else {
        $("body").css('overflow', 'auto');
        $("ul").css('left', '-100%');
        $(".dropdown").css('display', '');
    }
});





function validateForm() {
  var isValid = true;
  var buttonchecked = document.querySelector("input[type='checkbox']").checked;
  $('#register_form input, textarea').each(function() {
    if ( $(this).val() === '' )
        isValid = false;
  });
  
  if (isValid == true && buttonchecked == true) {
        $(".form_pazinojums").css('display', 'block');
    $(".email-button").css('display', 'none');
    $('#register_form')[0].reset();

  }

}





 $(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 1130) {
            // if larger or equal
            $("body").css('overflow', 'auto');
            

            $(".hamburger").css('display', 'none');
            $(".nav-flex-items").css('display', 'none');
           
            $("#nav").css('overflow', '');
        } 

        else {
            // if smaller
            $(".nav-flex-items").css('display', 'block');
            $(".hamburger").css('display', '');
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
    
 }




      //var infowindow; // = new google.maps.InfoWindow({
      //    content: ''
      //});
      // Function to init map
      function initMap() {
        console.log("init map")

       
      
      

        var center = new google.maps.LatLng(56.9496, 24.1682);
        var mapOptions = {
          zoom: 13,
          center: center,
          mapId: "e24b393c59b842b4",
          disableDefaultUI: true,
          gestureHandling: 'greedy',
          scrollwheel: false,
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        for (i = 0; i < markers1.length; i++) {
          addMarker(markers1[i]);
        }


        
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
    

    google.maps.event.addListener(map, "click", function(event) {
      infowindow.close();
      markerCallback();
      
      
  });
        
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
        ['0', '<div id="infowindow"> <img class = "img_smaller_mobile" src = "assets/img/PurchLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Purch restaurant</h3><p>+371 25425254</br>Dzelzavas iela 51A, Rīga</p></div></div>', 	56.9569506, 24.1892936, ['Rīga','Ēdināšana']],
        ['1', '<div id="infowindow"> <img src = "assets/img/KurtsLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Kurts coffee</h3><p>+371 23202079</br>Tērbatas iela 2i, Rīga</p></div></div>', 56.952127, 24.116603, ['Rīga', 'Ēdināšana']],
        ['2', '<div id="infowindow"> <img class = "img_smaller_mobile" src = "assets/img/KurtsLogo.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">Kurts coffee</h3><p>+371 23202079</br>Cēsu iela 20, Rīga</p></div></div>', 56.9651915, 24.1405323, ['Rīga', 'Ēdināšana']],
        ['3', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.95051, 24.11203, ['Rīga','Drive-Thru']],
        ['4', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9606, 24.1754, ['Rīga', 'Skaistumkopšana']],
        ['5',  '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9535, 24.1180, [ 'Rīga', 'Skaistumkopšana']],
        ['6', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.98, 24.1754, ['Rīga', 'Izklaide']],
        ['7', '<div id="infowindow"> <img src = "assets/img/AUCHlogo 1.svg"> <div class="AuchUznemums-child1"><h3 class="infouznemums">AUCH beauty home</h3><p>+371 28361686, +371 23202079</br>auchbeauty@gmail.com</br>Cēsu iela 20, Rīga</p></div></div>', 56.9680, 24.1750, ['Rīga', 'Izklaide']],
    ];

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
        //toggle elements with class .ty-compact-list that their index is bigger than 2
        $('.project:gt(19)').toggle();
        //change text of show more element just for demonstration purposes to this demo
        $(this).text() === 'Skatīt vairāk' ? $(this).text('Skatīt mazāk') : $(this).text('Skatīt vairāk');
      });

const buttons = document.querySelectorAll('.project');
const button = document.querySelector('.project');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const overlayDiv = document.querySelectorAll('.overlay__inner div')[0];
const overlayDiv1 = document.querySelectorAll('.overlay__inner div')[1];
const overlayImage = document.querySelectorAll('.overlay__inner img')[0];
const overlayImage1 = document.querySelectorAll('.overlay__inner img')[1];
const overlayParagraph = document.querySelector('.overlay__inner p');

$(".project").click(function(event) {
    $(".project").removeClass("active");
    $(event.currentTarget).addClass("active");
});


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
    } else {
       
  
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

if ( $('.open').length > 0 ) {
  buttons.forEach(button => button.addEventListener('click', open)); 
}



if ( $('.close').length > 0 ) {
  document.querySelector('.close').addEventListener('click', close);  
}




