'use strict';
myApp.controller('passListController', ['$scope', function ($scope) {

    $scope.passList = passList;
    $scope.savePass = savePass;
    $scope.addRow = addRow;
    $scope.removeItem = removeItem;
    $scope.typePass = typePass;
    $scope.itemArray = [];
    $scope.inputType = 'password';
    var newItem = {};
    $scope.passEdit = {
        editable: false,
        setEditableTrue: function () {
            this.editable = true;
        },
        setEditableFalse: function () {
            this.editable = false;
        }
    };
    function addRow(linkName, loginName, passName) {
        var userName = loginName;
        var userPass = passName;
        var userLink = linkName;
        savePass(userName, userPass, userLink);
        $scope.itemArray.unshift(newItem);
    }

    function passList() {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var parseStorage = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if (parseStorage.id == 1) {
                    $scope.itemArray.push(parseStorage)
                }
            }
        }
        console.log($scope.itemArray)
    }

    passList();


    function savePass(userName, userPass, userLink) {
        newItem = {
            id: 1,
            name: userName,
            pass: userPass,
            link: userLink
        };
        var noteItem = JSON.stringify(newItem);
        localStorage.setItem(userName, noteItem);
        $scope.passEdit.setEditableFalse();
    }

    function removeItem(index) {
        var curItem = $scope.itemArray[index];
        $scope.itemArray.splice(index, 1);
        localStorage.removeItem(curItem.name)
    }

    function typePass(index) {
        $scope.itemArray[index].inputType = 'text';
    }
}]);
