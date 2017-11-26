var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


app.config(function ($routeProvider, $locationProvider) {
    // $locationProvider.hashPrefix('');
    // Remove angular# from URL
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/product", {
            templateUrl: "views/product.html"
        })
        .when("/products", {
            templateUrl: "views/products.html"
        })
        .otherwise({
            redirectTo: '/'
        });


})