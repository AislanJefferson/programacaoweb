//Define diretiva ngZumbiSubmit requisitando o objeto pai ser um form que que executa a fc submit se form valido ou alerta se form invalido
angular.module("app").directive('ngZumbiSubmit', function () {
    return {
        restrict: "E",
        require: '^form',
        scope: {
            submit: "&"
        },
        template: '<button type="submit" class="btn btn-primary">Salvar</button>',
        link: function ($scope, $element, $attrs, formCtrl) {
            $element.on("click", function () {
                if (formCtrl.$valid) {
                    $scope.submit();
                } else {
                    alert("invalido")
                }
            })
        }
    }
});
