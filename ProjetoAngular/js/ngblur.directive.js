//Define diretiva atributo "ngBlur" que aplica/remove a classe css error durante o blur caso o model associado seja invalido/valido
app.directive('ngBlur', function () {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModel) {
            $element.on("blur", function () {
                if (ngModel.$invalid) {
                    $element.addClass('error');
                } else {
                    $element.removeClass('error');
                }
            })
        }
    }
});
