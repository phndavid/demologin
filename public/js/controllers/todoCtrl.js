angular.module('app')
    .controller('VehiculesController' ,['$scope','vehiculesFactory', function($scope,vehiculesFactory){
    $scope.vehicules = vehiculesFactory.getVehicules();
    $scope.addVehicule = function(){
        var model = $scope.newVehicule.model;
        var placa = $scope.newVehicule.placa;
        var trackerNumber = $scope.newVehicule.trackerNumber;
        if((model != '' || model == undefined) && (placa != ''|| placa == undefined ) && (trackerNumber != ''|| trackerNumber == undefined)){
            $scope.vehicules.push({model:model,placa:placa, state:'off', doors: 'locked', direction: 'nn', trackerNumber:trackerNumber });
            $scope.newVehicule.model =''; 
            $scope.newVehicule.placa = ''; 
            $scope.newVehicule.trackerNumber = '';
        }else{
            alert("Por favor, ingrese todos los datos")
        }
    }
    $scope.selectVehicule = function(vehicule){
        $scope.actualVehicule = vehicule; 
    } 
    var latLng = new google.maps.LatLng(3.3422583, -76.529313);
    var markers = [];
    var mapOptions = {
     center: latLng,
     zoom:15,
     styles:[
     {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "on"
        }
        ]
    }
    ]                       


}
var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions)
var marker = new google.maps.Marker({
             position: latLng,
             map: map,
             title: 'Universidad Icesi',
             icon:'http://gavinwillis.co.uk/newimages/pointer.png',
             visible: true
            });
marker.setMap(map);
markers.push(marker);
$scope.markerall = function(){
console.log(markers[0]);
   markers[0].setVisible(false);
   console.log(markers[0].setVisible(true));
} 
}]);

	