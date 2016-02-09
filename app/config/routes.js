app.config(function($stateProvider) {
    
    $stateProvider
    .state('home', {
        url: '/home',
        template: '<h1>HELLO FROM HOME</h1> <a href="#/banana">Visit Chim Chim</a>'
    })
    .state('view2', {
        url: '/banana',
        template: '<h1>HELLO FROM CHIM CHIM</h1><a href="#/home">GO BACK!</a>'
    })
    
});