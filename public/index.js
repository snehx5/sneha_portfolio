var app = angular.module('sneha-portfolio', ['ngMaterial'], ['ngRoute']).config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){

$routeProvider.
  when('/home', {
   templateUrl:'templates/home.html',
   controller: 'HomeCtrl'
  }).
  when('/contact', {
    templateUrl:'/templates/contact.html',
    controller: 'ContactCtrl'
  }).
  when('/my-account', {
    templateUrl:'/templates/my-account.html',
    controller: 'MyAccountCtrl'
  }).
  when('/tariff-plan', {
    templateUrl:'templates/tariff-plan.html',
    controller: 'TariffPlanCtrl'
  }).
  otherwise('/home');
}]);

app.controller('HomeCtrl', function($scope) {

});

app.controller('ContactCtrl', function($scope) {

});

app.controller('AccountCtrl', function($scope) {

});

app.controller('TariffPlanCtrl', function($scope) {

});






















