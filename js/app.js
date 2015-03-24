(function () {

  var app = angular.module('newsApp', [
    'ngRoute',
    'newsApp.controllers',
    //'noticias.directives',
    //'noticias.filters',
    'newsApp.services'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/newsTimeLine.html',
        controller: 'TimeLineController'
      })
      .when('/map', {
        templateUrl: 'views/newsMap.html',
        controller: 'MapController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();