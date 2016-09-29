// Fungsi Geolocation


var maps = angular.module('maps', []);


maps.controller('MapCtrl', function ($scope, $ionicLoading) {
    $scope.mapCreated = function (map) {
        $scope.map = map;
    };

    $scope.centerOnMe = function () {
        console.log("Centering");
        if (!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log('Got pos', pos);
            $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            $scope.loading.hide();
        }, function (error) {
            alert('Unable to get location: ' + error.message);
        });
    };
});


// Directive

var mapsdirective = angular.module('maps.directive', []);

mapsdirective.directive('map', function () {
    return {
        restrict: 'E',
        scope: {
            onCreate: '&'
        },
        link: function ($scope, $element, $attr) {
            function initialize() {
                var latLng = new google.maps.LatLng();
                var mapOptions = {
                    center: latLng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map($element[0], mapOptions);
                
                google.maps.event.addListenerOnce(map, 'idle', function(){
 
                    var marker = new google.maps.Marker({
                        map: map,
                        animation: google.maps.Animation.DROP,
                        position: latLng
                    });
                    
                    var isicontent = '<div><h1>Halo Ini Saya</h1></div>'+
                                   '<div><p>Ini Lokasi Saya</p></div>';
                    
                    var infoWindow = new google.maps.InfoWindow({
                        content: isicontent
                    });
 
                google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
                });      
 
                });
    

                $scope.onCreate({
                    map: map
                });

                // Stop the side bar from dragging when mousedown/tapdown on the map
                google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                    e.preventDefault();
                    return false;
                });
            }

            if (document.readyState === "complete") {
                initialize();
            } else {
                google.maps.event.addDomListener(window, 'load', initialize);
            }
        }
    }
});