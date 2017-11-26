app.controller('boatCtrl', function ($scope, $menuAdjust) {

    // Print Page Button
    $scope.printPage = function () {
        window.print();
    }

    // Show & Hide elements
    $scope.editForm = "hide";

    $scope.toggleEditForm = function () {
        if ($scope.editForm === "hide")
            $scope.editForm = "show";
        else $scope.editForm = "hide";
    };

    // Add and Delete Row
    $scope.rows = ['Row 1'];
    $scope.counter = 3;

    $scope.addRow = function () {
        $scope.rows.push('Row ' + $scope.counter);
        $scope.counter++;
    }

    $scope.removeRow = function (idx) {
        $scope.rows.splice(idx, 1);
    }

    // Custom Tabs
    $scope.tab1Class = "show";
    $scope.tab2Class = "hide";
    $scope.tab3Class = "hide";
    $scope.tab4Class = "hide";
    $scope.tab5Class = "hide";
    $scope.tab6Class = "hide";
    $scope.tab1 = "active";
    $scope.tab2 = "inactive";
    $scope.tab3 = "inactive";
    $scope.tab4 = "inactive";
    $scope.tab5 = "inactive";
    $scope.tab6 = "inactive";

    $scope.tab1Toggle = function () {
        if ($scope.tab1Class === "hide") {
            $scope.tab1Class = "show";
            $scope.tab1 = "active";
        }
        if ($scope.tab2Class === "show") {
            $scope.tab2Class = "hide";
            $scope.tab2 = "inactive";
        }
        if ($scope.tab3Class === "show") {
            $scope.tab3Class = "hide";
            $scope.tab3 = "inactive";
        }
        if ($scope.tab4Class === "show") {
            $scope.tab4Class = "hide";
            $scope.tab4 = "inactive";
        }
        if ($scope.tab5Class === "show") {
            $scope.tab5Class = "hide";
            $scope.tab5 = "inactive";
        }
        if ($scope.tab6Class === "show") {
            $scope.tab6Class = "hide";
            $scope.tab6 = "inactive";
        }
    };

    $scope.tab2Toggle = function () {
        if ($scope.tab1Class === "show") {
            $scope.tab1Class = "hide";
            $scope.tab1 = "inactive";
        }

        if ($scope.tab2Class === "hide") {
            $scope.tab2 = "active";
            $scope.tab2Class = "show";
        }

        if ($scope.tab3Class === "show") {
            $scope.tab3Class = "hide";
            $scope.tab3 = "inactive";
        }
        if ($scope.tab4Class === "show") {
            $scope.tab4Class = "hide";
            $scope.tab4 = "inactive";
        }
        if ($scope.tab5Class === "show") {
            $scope.tab5Class = "hide";
            $scope.tab5 = "inactive";
        }
        if ($scope.tab6Class === "show") {
            $scope.tab6Class = "hide";
            $scope.tab6 = "inactive";
        }
    };

    $scope.tab3Toggle = function () {
        if ($scope.tab1Class === "show") {
            $scope.tab1Class = "hide";
            $scope.tab1 = "inactive";
        }

        if ($scope.tab2Class === "show") {
            $scope.tab2Class = "hide";
            $scope.tab2 = "inactive";
        }

        if ($scope.tab3Class === "hide") {
            $scope.tab3Class = "show";
            $scope.tab3 = "active";
        }
        if ($scope.tab4Class === "show") {
            $scope.tab4Class = "hide";
            $scope.tab4 = "inactive";
        }
        if ($scope.tab5Class === "show") {
            $scope.tab5Class = "hide";
            $scope.tab5 = "inactive";
        }
        if ($scope.tab6Class === "show") {
            $scope.tab6Class = "hide";
            $scope.tab6 = "inactive";
        }
    }

    $scope.tab4Toggle = function () {
        if ($scope.tab1Class === "show") {
            $scope.tab1Class = "hide";
            $scope.tab1 = "inactive";
        }

        if ($scope.tab2Class === "show") {
            $scope.tab2Class = "hide";
            $scope.tab2 = "inactive";
        }

        if ($scope.tab3Class === "show") {
            $scope.tab3Class = "hide";
            $scope.tab3 = "inactive";
        }
        if ($scope.tab4Class === "hide") {
            $scope.tab4Class = "show";
            $scope.tab4 = "active";
        }
        if ($scope.tab5Class === "show") {
            $scope.tab5Class = "hide";
            $scope.tab5 = "inactive";
        }
        if ($scope.tab6Class === "show") {
            $scope.tab6Class = "hide";
            $scope.tab6 = "inactive";
        }
    }

    $scope.tab5Toggle = function () {
        if ($scope.tab1Class === "show") {
            $scope.tab1Class = "hide";
            $scope.tab1 = "inactive";
        }

        if ($scope.tab2Class === "show") {
            $scope.tab2Class = "hide";
            $scope.tab2 = "inactive";
        }

        if ($scope.tab3Class === "show") {
            $scope.tab3Class = "hide";
            $scope.tab3 = "inactive";
        }
        if ($scope.tab4Class === "show") {
            $scope.tab4Class = "hide";
            $scope.tab4 = "inactive";
        }
        if ($scope.tab5Class === "hide") {
            $scope.tab5Class = "show";
            $scope.tab5 = "active";
        }
        if ($scope.tab6Class === "show") {
            $scope.tab6Class = "hide";
            $scope.tab6 = "inactive";
        }
    }

    $scope.tab6Toggle = function () {
        if ($scope.tab1Class === "show") {
            $scope.tab1Class = "hide";
            $scope.tab1 = "inactive";
        }

        if ($scope.tab2Class === "show") {
            $scope.tab2Class = "hide";
            $scope.tab2 = "inactive";
        }

        if ($scope.tab3Class === "show") {
            $scope.tab3Class = "hide";
            $scope.tab3 = "inactive";
        }
        if ($scope.tab4Class === "show") {
            $scope.tab4Class = "hide";
            $scope.tab4 = "inactive";
        }
        if ($scope.tab5Class === "show") {
            $scope.tab5Class = "hide";
            $scope.tab5 = "inactive";
        }
        if ($scope.tab6Class === "hide") {
            $scope.tab6Class = "show";
            $scope.tab6 = "active";
        }
    }

})