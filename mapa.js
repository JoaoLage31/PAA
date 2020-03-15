"use strict";

window.onload = function() {
	
   var directionsOptions = {
		polylineOptions: {
			strokeColor: '#EA5149'
		}
	}
    
    
	render_map();
	
	$(".grande").click(function() {
        var id = $(this).attr('id').substring($(this).attr('id').length -  2);
        var url_pequeno = [
            'Passeio das Virtudes, Porto, Portugal',
				'Jardim da Cordoaria, Porto, Portugal',
				'Capoeira Central dos Leões, Porto, Portugal',
				'Era uma vez em Paris.., Porto, Portugal',
				'Cafe Au Lait, Porto, Portugal',
				'Plano B, Porto, Portugal',
				'R. de Cândido dos Reis, Porto, Porto, Portugal',
				'Coliseu do Porto, Porto, Portugal',
				'Maus Hábitos, Porto, Portugal',
				'Praça dos Poveiros, 4000-222 Porto, Porto, Portugal',
				'R. de Passos Manuel, Porto, Porto, Portugal',
				'Ateneu Comercial do Porto, Porto, Portugal',
				'Silo Auto, Porto, Portugal'
        ];
		  var path = [];
    
        $('#pequena' + id).toggleClass("color" +id + " no-color"); 
        
        $.each($('.pequena'), function(index) {
           if ($(this).hasClass('color' + $(this).attr('id').substring($(this).attr('id').length -  2))) path.push(url_pequeno[index]);
        });
		  
		  if (path.length > 0) render_map(path);
			else render_map();
    });
    
	
	function render_map(path) {
        
        
		
    var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(41.1508269, -8.6048431),
		styles:[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#6bb440"
            },
            {
                "gamma": "1.54"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f3e56c"
            },
            {
                "gamma": "1.40"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e3a4a4"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "1.49"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#6792e1"
            },
            {
                "gamma": "1.79"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#484848"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#a1a1d7"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#435fa8"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
                };
	
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	
	if (path != null) {
		
		var directions_renderer = new google.maps.DirectionsRenderer(directionsOptions);
		var directions_service = new google.maps.DirectionsService();
		var waypoints = [];
		
      
        
		for (var n = 1; n < path.length - 1; n++) waypoints.push({
			location: path[n],
			stopover: true
		});
		
		var directions_request = {
			'origin': path[0],
			'destination': path[path.length - 1],
			'waypoints': waypoints,
			optimizeWaypoints: true,
			travelMode: google.maps.TravelMode.WALKING
		};
		var status;
        
        

		directions_renderer.setMap(map);
		directions_service.route(directions_request, function(response, status) {
			
			if (status == google.maps.DirectionsStatus.OK) directions_renderer.setDirections(response);
			else window.alert('Impossível encontrar o caminho.');
			
		});
	}
	
}
}


