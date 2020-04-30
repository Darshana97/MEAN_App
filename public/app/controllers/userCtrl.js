angular
    .module("userControllers", [])

.controller("regCtrl", function($http) {
    this.regUser = function(regData) {
        console.log("form submitted");

        $http.post("/api/users", this.regData).then(function(data) {
            console.log(data.data.success);
            console.log(data.data.message);
        });
    };
});