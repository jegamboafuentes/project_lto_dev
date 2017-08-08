(function () {
    'use strict';
    angular.module('app').controller('userController', Controller);
    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, userService, $state, $stateParams) {
        $scope.users = [];
        if ($state.current.name == "users") {
            $rootScope.Title = "User Listing";
            userService.getUsers().then(function (res) {
                $scope.users = res.data;
                //Added by Enrique
                for (var i = 0; i < $scope.users.length; i++) {
                    var carObjectList=[];
                    var nCarsPerUserList=[];
                    userService.getCarByUser($scope.users[i]._id).then(function (res2) {
                        var carObject = res2.data;
                        var nCarsPerUser = carObject.length;  
                        carObjectList[i] = carObject;
                        nCarsPerUserList[i]=nCarsPerUser
                    });
// ********** 8/8/17 Jus put the fucking nCarsPerUser on the array 
                    $scope.users[i].nCars = "Puto";
                    //$scope.users[i].nCars = nCarsPerUser;
                }
            }).catch(function (err) {
                console.log(err);
            });
            $scope.deleteUser = function (id) {
                if (confirm('Are you sure to delete?')) {
                    userService.deleteUser(id).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("users", {}, {
                                reload: true
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
        else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit User";
            var id = $stateParams.id;
            userService.getUser(id).then(function (res) {
                $scope.user = res.data;
            }).catch(function (err) {
                console.log(err);
            });
            $scope.saveData = function (user) {
                if ($scope.userForm.$valid) {
                    userService.updateUser(user).then(function (res) {
                        if (res.data == "updated") {
                            $state.go("users");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
        else if ($state.current.name == "createUser") {
            $rootScope.Title = "Create User";
            $scope.saveData = function (user) {
                $scope.IsSubmit = true;
                if ($scope.userForm.$valid) {
                    userService.createUser(user).then(function (res) {
                        if (res.data == "created") {
                            $state.go("users");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
        else if ($state.current.name == "userDetails") {
            $rootScope.Title = "User *- NAME -*";
            var id = $stateParams.id;
            userService.getUser(id).then(function (res) {
                $scope.user = res.data;
            }).catch(function (err) {
                console.log(err);
            });
            $scope.deleteUser = function (id) {
                if (confirm('Are you sure to delete?')) {
                    userService.deleteUser(id).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("users", {}, {
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