(function () {

  angular.module('newsApp.controllers', [])
    .controller('TimeLineController', ['$scope', '$routeParams', 'newsService', function ($scope, $routeParams, newsService) {
      
      $scope.title = "Angular News Time Line";

      newsService.all().then(function (data) {
         $scope.newsList = data;
         //$scope.newsTitle = data[0].title;
      });

      /*var type = $routeParams.type;

      if (type) {
        $scope.type = type;

        pokemonService.byType(type).then(function (data) {
          $scope.pokemons = data
          $scope.groupped = partition(data, 4);
        });
      } else {
        pokemonService.all().then(function (data) {
          $scope.pokemons = data;
          $scope.groupped = partition(data, 4);
        });
      }


      function partition(data, n) {
        return _.chain(data).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
      }*/

    }])

    .controller('MapController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    
     $scope.mapTitle = "Angular News Map";

     http://www.openstreetmap.org/#map=14/10.4186/-75.5209&layers=ND

     var map = L.map('map').setView([10.4186, -75.5209], 15);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',
      maxZoom: 18
    }).addTo(map);

     var marker = L.marker([10.4186, -75.5209]).addTo(map);
    
    }])

    .controller('HeaderController', function () {
      $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
      };
    })

})();