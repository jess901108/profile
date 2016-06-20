myApp.controller('homeController',['$scope',function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        id:0,
        image: "img/game-of-life.png"
    },
    {
        id:1,
        image: "img/poll-app.png"
    },
    {
        id:2,
        image: "img/night-life-app.png"
    },
    {
        id:3,
        image: "img/stock-chart.png"
    },
    {
        id:4,
        image: "img/recipe.png"
    }]
}]);