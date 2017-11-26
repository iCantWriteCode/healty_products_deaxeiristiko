app.controller('boatsCtrl', function ($scope, $menuAdjust) {

    $scope.adjustWidth = 'col-md-10'

    $scope.$on('width changed', function (event, args) {
        if (!args.open)
            $scope.adjustWidth = 'col-md-12'
        else
            $scope.adjustWidth = 'col-md-10'
    })


})