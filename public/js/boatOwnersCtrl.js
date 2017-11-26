app.controller('boatOwnersCtrl', function ($scope, $menuAdjust) {

    $scope.boatOwners = "show";
    $scope.charterBases = "hide";
    $scope.yachts = "hide";
    $scope.boatOwnerTab = "active";
    $scope.charterBasesTab = "inactive";
    $scope.yachtstab = "inactive";



    $scope.boatOwnerToggle = function () {
        if ($scope.boatOwners === "hide") {
            $scope.boatOwners = "show";
            $scope.boatOwnerTab = "active";
        }
        if ($scope.charterBases === "show") {
            $scope.charterBases = "hide";
            $scope.charterBasesTab = "inactive";
        }
        if ($scope.yachts === "show") {
            $scope.yachts = "hide";
            $scope.yachtstab = "inactive";
        }
    };

    $scope.charterBasesToggle = function () {
        if ($scope.boatOwners === "show") {
            $scope.boatOwners = "hide";
            $scope.boatOwnerTab = "inactive";
        }

        if ($scope.charterBases === "hide") {
            $scope.charterBasesTab = "active";
            $scope.charterBases = "show";
        }

        if ($scope.yachts === "show") {
            $scope.yachts = "hide";
            $scope.yachtstab = "inactive";
        }
    };

    $scope.yachtsToggle = function () {
        if ($scope.boatOwners === "show") {
            $scope.boatOwners = "hide";
            $scope.boatOwnerTab = "inactive";
        }

        if ($scope.charterBases === "show") {
            $scope.charterBases = "hide";
            $scope.charterBasesTab = "inactive";
        }

        if ($scope.yachts === "hide") {
            $scope.yachts = "show";
            $scope.yachtstab = "active";
        }

    }

    console.log('yo')

})