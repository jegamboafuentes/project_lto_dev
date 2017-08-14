(function () {
    'use strict';
    angular.module('app').controller('carController', Controller);
    Controller.$inject = ['$scope', '$rootScope', 'carService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, carService, $state, $stateParams) {
        $scope.cars = [];
        if ($state.current.name == "cars") {
            $rootScope.Title = "All cars listing";
            carService.getCars().then(function (res) {
                $scope.cars = res.data;
            }).catch(function (err) {
                console.log(err);
            });
            $scope.deleteCar = function (id) {
                if (confirm('Are you sure you want to delete this car?')) {
                    carService.deleteCar(id).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("cars", {}, {
                                reload: true
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
        else if ($state.current.name == "carsbyuser") {
            $rootScope.Title = "Car Listing";
            var userId = $stateParams.id;
            carService.getCarByUser(userId).then(function (res) {
                $scope.cars = res.data;
            }).catch(function (err) {
                console.log(err);
            });
            $scope.deleteCar = function (userId) {
                if (confirm('Are you sure you want to delete this car')) {
                    carService.deleteCar(userId).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("cars", {}, {
                                reload: true
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
        else if ($state.current.name == "editCar") {
            $rootScope.Title = "Edit car";
            var id = $stateParams.id;
            carService.getCar(id).then(function (res) {
                $scope.car = res.data;
            }).catch(function (err) {
                console.log(err);
            });
            $scope.saveDataCar = function (car) {
                if ($scope.carForm.$valid) {
                    carService.updateCar(car).then(function (res) {
                        if (res.data == "updated") {
                            $state.go("cars");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
        else if ($state.current.name == "createCar") {
            $rootScope.Title = "Register car";
            $scope.saveDataCar = function (car) {
                car.idUser = $stateParams.id;
                $scope.IsSubmit = true;
                if ($scope.carForm.$valid) {
                    carService.createCar(car).then(function (res) {
                        if (res.data == "created") {
                            $state.go("cars");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
        else if ($state.current.name == "carDetails") {
            $rootScope.Title = "User *- NAME -*";
            var id = $stateParams.id;
            carService.getCar(id).then(function (res) {
                $scope.car = res.data;
            }).catch(function (err) {
                console.log(err);
            });
            $scope.deleteCar = function (id) {
                if (confirm('Are you sure to delete this car?')) {
                    carService.deleteCar(id).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("cars", {}, {
                                reload: true
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();