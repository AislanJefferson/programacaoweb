//Define rota de / para zumbis.html passando zumbisCtrl como controller
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "zumbis.html",
        controller: "zumbisCtrl"
    });
});
