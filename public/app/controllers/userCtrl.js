angular
    .module("userControllers", [])

.controller("regCtrl", function($http) {
    var app = this;

    this.regUser = function(regData) {
        app.errorMsg = false;
        console.log("form submitted");

        $http.post("/api/users", regData).then(function(data) {

            if (data.data.success) {
                app.successMsg = data.data.message;
            } else {
                app.errorMsg = data.data.message;
            }
        });
    };
});