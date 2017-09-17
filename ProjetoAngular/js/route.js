//Define rota de / para zumbis.html passando zumbisCtrl como controller
angular.module("app").config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "zumbis.html",
        controller: "zumbisCtrl"
    });
});
