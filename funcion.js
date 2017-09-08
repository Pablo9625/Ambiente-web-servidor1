
				
           (function() {
	   window.onload = function() {
           var mapDiv       = document.getElementById('mapa_grande');
           var latlng       = new google.maps.LatLng(10.028969, -84.203988);
           var options      = {center: latlng, zoom: 4, mapTypeId: google.maps.MapTypeId.ROADMAP, streetViewControl: true};
           var map          = new google.maps.Map(mapDiv, options);
           var bounds       = new google.maps.LatLngBounds();

        
           
           var persona      = new google.maps.MarkerImage('imagenes/persona.png');
           var Estadio      = new google.maps.MarkerImage("imagenes/Estadio.png");
					
           var marker = new google.maps.Marker({position: new google.maps.LatLng(40.014031, -82.918099), map: map, title: 'MLG Arena ',  icon:Estadio});
           bounds.extend(new google.maps.LatLng(40.014031, -82.918099));
           
           google.maps.event.addListener(marker, 'click', function() {window.location.href = '';});
           
           var marker = new google.maps.Marker({position: new google.maps.LatLng(34.040418, -118.269305), map: map, title: 'Centro de convenciones', icon:Estadio});
           bounds.extend(new google.maps.LatLng(34.040418, -118.269305));
           google.maps.event.addListener(marker, 'click', function() {window.location.href = '';});  
           

        
           
           //Icono personalizado
           if (navigator.geolocation){
               navigator.geolocation.getCurrentPosition(function(objPosicion){
                   var usuario = new google.maps.Marker({position: new google.maps.LatLng(objPosicion.coords.latitude, objPosicion.coords.longitude),map: map, title: 'Tú ubicación actual', icon: persona});
                   bounds.extend(new google.maps.LatLng(objPosicion.coords.latitude, objPosicion.coords.longitude));
               }, function(objError){

               });
           }
           
           // Adjusting the map to new bounding box
           map.fitBounds(bounds)
       }
				
       
					
    })();