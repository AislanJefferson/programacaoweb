//Define a diretiva atributo ngCepValidator que sera normalizada como ng-cep-validator no html
app.directive("ngCepValidator", function (CepService, $rootScope) {
    return {
        restrict: "A",
        require: "ngModel",
        link: function ($scope, $element, $attrs, ngModel) {
            $scope.$watch($attrs.ngModel, function (value) {
                if (value) {
                    if (value.match(/^[0-9]{5}-[0-9]{3}$/)) {
                        CepService.get(value).then(function (response) {
                            $rootScope.$broadcast("cep", response.data);
                        });
                        ngModel.$setValidity($attrs.ngModel, true);
                    } else {
                        ngModel.$setValidity($attrs.ngModel, false);
                    }
                } else {
                    ngModel.$setValidity($attrs.ngModel, false);
                }
            });
        }
    }
});
