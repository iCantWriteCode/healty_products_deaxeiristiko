app.service('$menuAdjust', function () {

    return {
        toggleSidebar: function (sidemenuToggle) {
            if (sidemenuToggle === "show")
                sidemenuToggle = "";
            else
                sidemenuToggle = "show";
            return sidemenuToggle;
        },
        widthAdjust: function (adjustWidth) {
            if ($scope.adjustWidth === "col-md-9")
                $scope.adjustWidth = "col-md-12";
            else
                $scope.adjustWidth = "col-md-9";
            return adjustWidth;
        }

    }

})
