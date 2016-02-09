app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

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
        .state('albums', {
            url: '/albums',
            controller: 'AlbumsController',
            templateUrl: 'app/components/album/albums.html'
        })
        .state('album', {
            url: '/albums/:title',
            controller: 'AlbumController',
            controllerAs: 'ac',
            templateUrl: 'app/components/album/album.html',
            resolve: {
                album: function($stateParams, MusicService) {
                    return MusicService.getAlbum($stateParams.title);
                }
            }
        })
        .state('auth', {
            abstract: true,
            controller: function ($state, AuthService) {
                if (!AuthService.loggedIn) {
                    $state.go('home');
                }
            },
            template: '<ui-view></ui-view>'
        })
        .state('auth.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dc'
        })

});