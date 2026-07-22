var app = angular.module('Campus360', []);

app.controller('dashboardcontroller', function ($scope) {
    console.log("Dashboard controller is loaded");
    $scope.collegename = "FISAT";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 100;


    $scope.students = [
        { name: "Varsha" },
        { name: "John" },
        { name: "Alice" },
        { name: "Bob" }
    ];

    $scope.addStudent = function () {
        $scope.totalstudents++;
        $scope.showAddStudentForm = false;
        $scope.showdashboard = true;
    }

});