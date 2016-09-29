var atm = angular.module('ListATM', []);

atm.service('tarikDataATMService', function ($http, $q) {
    var ATMData = $q.defer();
    $http.get('data/fasumatm.json').then(function (data) {
        ATMData.resolve(data);
    });

    this.getData = function () {
        return ATMData.promise;
    }

});

atm.controller('tarikDataATMCtrl', function ($scope, tarikDataATMService) {
    var ATM = tarikDataATMService.getData();
    ATM.then(function (data) {
        $scope.ATM = data.data;
    })
});

//  List Lapangan Mulai

var lapangan = angular.module('ListLapangan', []);

lapangan.service('tarikDataLapanganService', function ($http, $q) {
    var lapanganData = $q.defer();
    $http.get('data/fasumlapangan.json').then(function (data) {
        lapanganData.resolve(data);
    });

    this.getData = function () {
        return lapanganData.promise;
    }

});

atm.controller('tarikDataLapanganCtrl', function ($scope, tarikDataLapanganService) {
    var lapangan = tarikDataLapanganService.getData();
    lapangan.then(function (data) {
        $scope.lapangan = data.data;
    })
});

// List Mesjid

var mesjid = angular.module('ListMesjid', []);

mesjid.service('tarikDataMesjidService', function ($http, $q) {
    var mesjidData = $q.defer();
    $http.get('data/fasummesjid.json').then(function (data) {
        mesjidData.resolve(data);
    });

    this.getData = function () {
        return mesjidData.promise;
    }

});

mesjid.controller('tarikDataMesjidCtrl', function ($scope, tarikDataMesjidService) {
    var mesjid = tarikDataMesjidService.getData();
    mesjid.then(function (data) {
        $scope.mesjid = data.data;
    })
});

// List Mall

var mall = angular.module('ListMall', []);

mall.service('tarikDataMallService', function ($http, $q) {
    var mallData = $q.defer();
    $http.get('data/fasummall.json').then(function (data) {
        mallData.resolve(data);
    });

    this.getData = function () {
        return mallData.promise;
    }

});

mall.controller('tarikDataMallCtrl', function ($scope, tarikDataMallService) {
    var mall = tarikDataMallService.getData();
    mall.then(function (data) {
        $scope.mall = data.data;
    })
});

// List Rumkit Kesehatan

var rumkit = angular.module('ListRumkit', []);

rumkit.service('tarikDataRumkitService', function ($http, $q) {
    var rumkitData = $q.defer();
    $http.get('data/fasumrumkit.json').then(function (data) {
        rumkitData.resolve(data);
    });

    this.getData = function () {
        return rumkitData.promise;
    }

});

rumkit.controller('tarikDataRumkitCtrl', function ($scope, tarikDataRumkitService) {
    var rumkit = tarikDataRumkitService.getData();
    rumkit.then(function (data) {
        $scope.rumkit = data.data;
    })
});

// List Polisi

var polisi = angular.module('ListPolisi', []);

polisi.service('tarikDataPolisiService', function ($http, $q) {
    var polisiData = $q.defer();
    $http.get('data/fasumpolisi.json').then(function (data) {
        polisiData.resolve(data);
    });

    this.getData = function () {
        return polisiData.promise;
    }

});

polisi.controller('tarikDataPolisiCtrl', function ($scope, tarikDataPolisiService) {
    var polisi = tarikDataPolisiService.getData();
    polisi.then(function (data) {
        $scope.polisi = data.data;
    })
});

// batas list Fasilitas umum


// mulai list Wisata

// list pantai

var pantai = angular.module('ListPantai', []);

pantai.service('tarikDataPantaiService', function ($http, $q) {
    var pantaiData = $q.defer();
    $http.get('data/wisatapantai.json').then(function (data) {
        pantaiData.resolve(data);
    });

    this.getData = function () {
        return pantaiData.promise;
    }

});

pantai.controller('tarikDataPantaiCtrl', function ($scope, tarikDataPantaiService) {
    var pantai = tarikDataPantaiService.getData();
    pantai.then(function (data) {
        $scope.pantai = data.data;
    })
});

// kuliner list

var kuliner = angular.module('ListKuliner', []);

kuliner.service('tarikDataKulinerService', function ($http, $q) {
    var kulinerData = $q.defer();
    $http.get('data/wisatakuliner.json').then(function (data) {
        kulinerData.resolve(data);
    });

    this.getData = function () {
        return kulinerData.promise;
    }

});

kuliner.controller('tarikDataKulinerCtrl', function ($scope, tarikDataKulinerService) {
    var kuliner = tarikDataKulinerService.getData();
    kuliner.then(function (data) {
        $scope.kuliner = data.data;
    })
});

// wisata sejarah list

var sejarah = angular.module('ListSejarah', []);

sejarah.service('tarikDataSejarahService', function ($http, $q) {
    var sejarahData = $q.defer();
    $http.get('data/wisatasejarah.json').then(function (data) {
        sejarahData.resolve(data);
    });

    this.getData = function () {
        return sejarahData.promise;
    }

});

sejarah.controller('tarikDataSejarahCtrl', function ($scope, tarikDataSejarahService) {
    var sejarah = tarikDataSejarahService.getData();
    sejarah.then(function (data) {
        $scope.sejarah = data.data;
    })
});

/// wisata belanja

var belanja = angular.module('ListBelanja', []);

belanja.service('tarikDataBelanjaService', function ($http, $q) {
    var belanjaData = $q.defer();
    $http.get('data/wisatabelanja.json').then(function (data) {
        belanjaData.resolve(data);
    });

    this.getData = function () {
        return belanjaData.promise;
    }

});

belanja.controller('tarikDataBelanjaCtrl', function ($scope, tarikDataBelanjaService) {
    var belanja = tarikDataBelanjaService.getData();
    belanja.then(function (data) {
        $scope.belanja = data.data;
    })
});


// wisata keluarga

var keluarga = angular.module('ListKeluarga', []);

keluarga.service('tarikDataKeluargaService', function ($http, $q) {
    var keluargaData = $q.defer();
    $http.get('data/wisatakeluarga.json').then(function (data) {
        keluargaData.resolve(data);
    });

    this.getData = function () {
        return keluargaData.promise;
    }

});

keluarga.controller('tarikDataKeluargaCtrl', function ($scope, tarikDataKeluargaService) {
    var keluarga = tarikDataKeluargaService.getData();
    keluarga.then(function (data) {
        $scope.keluarga = data.data;
    })
});

///

var oleh = angular.module('ListOleh', []);

oleh.service('tarikDataOlehService', function ($http, $q) {
    var olehData = $q.defer();
    $http.get('data/wisataoleh.json').then(function (data) {
        olehData.resolve(data);
    });

    this.getData = function () {
        return olehData.promise;
    }

});

oleh.controller('tarikDataOlehCtrl', function ($scope, tarikDataOlehService) {
    var oleh = tarikDataOlehService.getData();
    oleh.then(function (data) {
        $scope.oleh = data.data;
    })
});