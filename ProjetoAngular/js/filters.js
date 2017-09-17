//define um modulo de nome filters sem dependencias com um filtro chamado upper
angular.module("filters", []).filter("upper", function () {
    return function (input) {
        return input.toUpperCase();
    };
});
