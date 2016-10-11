'use strict';
myApp.controller('mainController', ['$scope', '$location', function ($scope, $location) {
    $scope.signUp = signUp;
    $scope.signIn = signIn;
    $scope.userSuccess = false;
    $scope.userError = false;
    function signUp(userName, userPass) {
        if (userName && userPass !== '') {
            var newUser = {
                name: userName,
                pass: userPass,
            };
            var noteItem = JSON.stringify(newUser);
            localStorage.setItem(userName, noteItem);
            $scope.userSuccess = true;
            $scope.userError = false;
        } else {
            $scope.userError = true;
        }

    }

    function signIn(userName, userPass) {
        if (localStorage.getItem(userName) === null) {
            $scope.userError = true;
        } else {
            $scope.userError = false;
            var returnUserName = JSON.parse(localStorage.getItem(userName));
            if (returnUserName.pass == userPass) {
                $location.path('/passList');

            }else{
                $scope.userError = true;
                $scope.userSuccess = false;
            }

        }


    }
}]);
