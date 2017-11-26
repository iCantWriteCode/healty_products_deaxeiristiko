app.controller('menuCtrl', function ($scope, $menuAdjust, $rootScope) {

    let open = true;
    $scope.sidemenuToggle = 'show'
    $scope.adjustWidth = 'col-md-10'



    $scope.toggleSidebar = function () {
        open = !open;
        if (!open) {
            $scope.adjustWidth = 'col-md-12';
            $scope.sidemenuToggle = ''
        }
        else {
            $scope.adjustWidth = 'col-md-10'
            $scope.sidemenuToggle = 'show'
        }
        $rootScope.$broadcast('width changed', { open })
    }
});

