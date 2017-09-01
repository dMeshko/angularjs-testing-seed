angular.module("angularjs.testing").config([
    "$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/"); //for undefined state go to the default/home

        $stateProvider.state("app", {
            url: "/",
            abstract: "true",
            views: {
                // "header": {
                //     controller: "HeaderController",
                //     template: require("app/common/header.html")
                // },
                "content": {
                    templateUrl: "app/components/home/home.html",
                    controller: "HomeController"
                },
                // "footer": {
                //     controller: "FooterController",
                //     template: require("app/common/footer.html")
                // }
            }
        }).state("app.home", {
            url: "" // Empty string for "app" state to override the / abstract state
        });
    }
]);