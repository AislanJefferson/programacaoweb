//Adiciona um service "CepService" ao modulo app que utiliza o service http de angularjs
angular.module("app").service("CepService", function ($http) {
    this.get = function (cep) {
        return $http.get("http://api.postmon.com.br/v1/cep/" + cep);
    };
});
