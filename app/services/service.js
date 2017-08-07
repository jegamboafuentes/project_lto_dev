(function () {
    'use strict';
    angular.module('app').factory('userService', Service).factory('carService', Service);
    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getUsers: function () {
                url = globalConfig.apiAddress + "/user";
                return $http.get(url);
            }
            , getUser: function (id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.get(url);
            }
            , createUser: function (user) {
                url = globalConfig.apiAddress + "/user";
                return $http.post(url, user);
            }
            , updateUser: function (user) {
                url = globalConfig.apiAddress + "/user/" + user._id;
                return $http.put(url, user);
            }
            , deleteUser: function (id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.delete(url);
            }
            , getCars: function () {
                url = globalConfig.apiAddress + "/car";
                return $http.get(url);
            }
            , getCar: function (id) {
                url = globalConfig.apiAddress + "/car/" + id;
                return $http.get(url);
            }
            , getCarByUser: function (userId) {
                url = globalConfig.apiAddress + "/car/carbyuser/" + userId;
                return $http.get(url);
            }
            , createCar: function (car) {
                url = globalConfig.apiAddress + "/car";
                return $http.post(url, car);
            }
            , updateCar: function (car) {
                url = globalConfig.apiAddress + "/car/" + car._id;
                return $http.put(url, car);
            }
            , deleteCar: function (id) {
                url = globalConfig.apiAddress + "/car/" + id;
                return $http.delete(url);
            }
        };
    }
})();