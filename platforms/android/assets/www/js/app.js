var app = angular.module('starter', ['ionic',
    'maps', 'ngCordova', 'maps.directive', 'wisata', 'ListATM', 'ListLapangan', 'ListMesjid', 'ListMall', 'ListRumkit', 'ListPolisi', 'ListPantai', 'ListKuliner', 'ListSejarah', 'ListBelanja', 'ListKeluarga', 'ListOleh']);

var wisata = angular.module('wisata', []);


wisata.service('tarikDataWisataService', function ($http, $q) {
    var wisataData = $q.defer();
    $http.get('data/wisata.json').then(function (data) {
        wisataData.resolve(data);
    });

    this.getData = function () {
        return wisataData.promise;
    }
});

wisata.controller('tarikDataWisataCtrl', function ($scope, tarikDataWisataService) {

    var wisata = tarikDataWisataService.getData();
    wisata.then(function (data) {
        $scope.wisata = data.data;
    })

})

app.service('tarikDataService', function ($http, $q) {
    var fasumData = $q.defer();
    $http.get('data/fasilitas.json').then(function (data) {
        fasumData.resolve(data);
    });

    this.getData = function () {
        return fasumData.promise;
    }
});

app.controller('tarikDataCtrl', function ($scope, tarikDataService) {

    var fasum = tarikDataService.getData();
    fasum.then(function (data) {
        $scope.fasum = data.data;
    })

})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/index',
        templateUrl: 'page/default.html'
    });

    $stateProvider.state('maps', {
        url: '/maps',
        templateUrl: 'page/map.html'
    });

    $stateProvider.state('wisata', {
        url: '/wisata',
        templateUrl: 'page/wisata.html'
    });

    $stateProvider.state('fasum', {
        url: '/fasum',
        templateUrl: 'page/fasum.html'
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'page/about.html'
    });

    $stateProvider.state('atm', {
        url: '/atm',
        templateUrl: 'page/fasum/atm.html'
    });

    $stateProvider.state('lapangan', {
        url: '/lapangan',
        templateUrl: 'page/fasum/lapangan.html'
    });

    $stateProvider.state('mall', {
        url: '/mall',
        templateUrl: 'page/fasum/mall.html'
    });

    $stateProvider.state('mesjid', {
        url: '/mesjid',
        templateUrl: 'page/fasum/mesjid.html'
    });

    $stateProvider.state('polisi', {
        url: '/polisi',
        templateUrl: 'page/fasum/polisi.html'
    });

    $stateProvider.state('rs', {
        url: '/rs',
        templateUrl: 'page/fasum/rs.html'
    });

    $stateProvider.state('toilet', {
        url: '/toilet',
        templateUrl: 'page/fasum/mesjid.html'
    });

    // Objek wisata navigation

    $stateProvider.state('pantai', {
        url: '/pantai',
        templateUrl: 'page/wisata/pantai.html'
    });

    $stateProvider.state('kuliner', {
        url: '/kuliner',
        templateUrl: 'page/wisata/kuliner.html'
    });

    $stateProvider.state('sejarah', {
        url: '/sejarah',
        templateUrl: 'page/wisata/sejarah.html'
    });

    $stateProvider.state('belanja', {
        url: '/belanja',
        templateUrl: 'page/wisata/belanja.html'
    });

    $stateProvider.state('keluarga', {
        url: '/keluarga',
        templateUrl: 'page/wisata/keluarga.html'
    });

    $stateProvider.state('oleholeh', {
        url: '/oleholeh',
        templateUrl: 'page/wisata/oleholeh.html'
    });

    $urlRouterProvider.otherwise('/index');
});

//app.directive('navigateTo',function(){
//    
//});

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.directive('browseTo', function ($ionicGesture) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            var handleTap = function (e) {
                // todo: capture Google Analytics here
                var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
            };
            var tapGesture = $ionicGesture.on('tap', handleTap, $element);
            $scope.$on('$destroy', function () {
                // Clean up - unbind drag gesture handler
                $ionicGesture.off(tapGesture, 'tap', handleTap);
            });
        }
    }
});