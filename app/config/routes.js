app.config(function($stateProvider) {
    
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'hc'
    })
    .state('banana', {
        url: '/banana',
        templateUrl: 'app/components/banana/banana.html',
        controller: 'BananaController',
        controllerAs: 'bc'
    })
    
});