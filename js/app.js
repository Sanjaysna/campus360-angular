var app = angular.module("Campus360", []);

app.controller("dashboardcontroller", function ($scope) {

    console.log("Dashboard controller is loaded");

    $scope.collegename = "FISAT";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 100;

    $scope.showAddStudentForm = false;
    $scope.showdashboard = true;
    $scope.fees = 23000;
    $scope.today = new Date();


    $scope.departments=["CSE","MCA","MBA","M-com","EEE"];
    $scope.selectedDepartment = "CSE";

    $scope.isdisabled = true;

    $scope.allowAdmission = function () {
        $scope.isdisabled = false;
    };

    $scope.isReadOnly=true;
    $scope.toggleReadOnly = function () {
        $scope.isReadOnly = !$scope.isReadOnly;
    };



    $scope.showAddStudentForm = false;

    $scope.addStudent = function () {
        $scope.totalstudents++;
    };

    $scope.students = [
        { name: "Varsha" },
        { name: "John" },
        { name: "Alice" },
        { name: "Bob" }
    ];

});