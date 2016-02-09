app.controller('HomeController', function ($scope) {
    $scope.test = "Hello are you there?";
});

app.controller('MainController', function ($scope, AuthService) {
    $scope.login = function () {
        AuthService.login();
    };
    $scope.logout = function () {
        AuthService.logout();
    };
});

app.service('AuthService', function () {
    this.loggedIn = false;
    this.login = function () {
        this.loggedIn = true;
    }
    this.logout = function () {
        this.loggedIn = false;
    }
});