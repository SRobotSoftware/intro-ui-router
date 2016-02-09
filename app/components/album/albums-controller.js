app.controller('AlbumsController', function ($scope, MusicService) {
    $scope.test = 'Hello Dashboard!';
    $scope.albums = MusicService.getAlbums();
});

app.service('MusicService', function () {
    var albums = [
        {
            id: '123',
            title: 'My Album',
            artist: 'artist',
            albumArt: 'link',
            songs: [
                {
                    title: 'a song',
                    track: 1,
                    length: '1:30'
                }, {
                    title: 'another song',
                    track: 2,
                    length: '1:30'
                }, {
                    title: 'a third song',
                    track: 3,
                    length: '1:30'
                }, ]
        }, {
            id: '2342352',
            title: 'My Other Album',
            artist: 'artist',
            albumArt: 'link',
            songs: [
                {
                    title: 'a song',
                    track: 1,
                    length: '1:30'
                }, {
                    title: 'a song',
                    track: 1,
                    length: '1:30'
                }, {
                    title: 'a song',
                    track: 1,
                    length: '1:30'
                }, ]
        }, {
            id: '5642532',
            title: 'A Third Album',
            artist: 'artist',
            albumArt: 'link',
            songs: [
                {
                    title: 'a song',
                    track: 1,
                    length: '1:30'
                }, {
                    title: 'a song',
                    track: 1,
                    length: '1:30'
                }, {
                    title: 'a song',
                    track: 1,
                    length: '1:30'
                }, ]
        }, ];

    this.getAlbums = function () {
        return albums;
    };

    this.getAlbum = function (title) {
        title = title.split('-').join(' ').toLowerCase();
        for (var i = 0; i < albums.length; i++) {
            var currentAlbum = albums[i];
            if (currentAlbum.title.toLowerCase() === title) {
                return currentAlbum;
            }
        }
    };
});