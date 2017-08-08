(function () {
    'use strict';
    angular.module('app', [
 "ui.router"
 ]).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("users", {
            url: "/"
            , templateUrl: "/views/user/index.html"
            , controller: "userController"
        }).state("createUser", {
            url: "/create"
            , templateUrl: "/views/user/createUser.html"
            , controller: "userController"
        }).state("edit", {
            url: "/edit/:id"
            , templateUrl: "/views/user/createUser.html"
            , controller: "userController"
        }).state("userDetails", {
            url: "/details/:id"
            , templateUrl: "/views/user/userDetails.html"
            , controller: "userController"
        }).state("cars", {
            url: "/cars"
            , templateUrl: "/views/car/viewCars.html"
            , controller: "carController"
        }).state("carsbyuser", {
            url: "/car/carbyuser/:id"
            , templateUrl: "/views/car/viewCars.html"
            , controller: "carController"
        }).state("createCar", {
            url: "/car/registercar/:id"
            , templateUrl: "/views/car/createCar.html"
            , controller: "carController"
        }).state("editCar", {
            url: "/car/edit/:id"
            , templateUrl: "/views/car/createCar.html"
            , controller: "carController"
        });
    }).constant("globalConfig", {
        apiAddress: 'http://localhost:3000/api'
    });
})();