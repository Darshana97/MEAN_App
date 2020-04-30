angular
    .module("userControllers", [])

.controller("regCtrl", function($http) {
    var app = this;

    this.regUser = function(regData) {
        app.loading = true;
        app.errorMsg = false;
        console.log("form submitted");

        $http.post("/api/users", regData).then(function(data) {
            if (data.data.success) {
                app.loading = false;
                app.successMsg = data.data.message;
            } else {
                app.loading = false;
                app.errorMsg = data.data.message;
            }
        });
    };
});