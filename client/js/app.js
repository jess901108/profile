var myApp = angular.module('myApp',[
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate']).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider.when('/home',{templateUrl: '/partials/home.html',controller: 'homeController'});
        $routeProvider.when('/about',{templateUrl: '/partials/about.html',controller: 'aboutController'});
        $routeProvider.when('/contacts',{templateUrl: '/partials/contacts.html',controller: 'contactsController'});
        $routeProvider.otherwise({redirectTo: '/home'});
        
        $locationProvider.html5Mode({enabled:true, requireBase:false});
    }])
    .filter('startFrom', function(){
        return function(data,start){
            return data.slice(start);
        }
    })