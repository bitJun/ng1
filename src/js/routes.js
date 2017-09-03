define([
	'app',
	'ui.router',
    'controllers/_base'
],function(app){
    var app = angular.module('app',['ui.router']);
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/data');
        $stateProvider
            .state('data',{
                url: '/data',
                templateUrl: 'src/js/templates/data/data.html',
                controllerUrl: 'src/js/controllers/data/data',
                controller: 'DataCtrl'
            })
            .state('account',{
                url: '/account',
                templateUrl: 'src/js/templates/account/account.html',
                controllerUrl: 'src/js/controllers/account/account',
                controller: 'accountCtrl'
            })
            .state('setting',{
                url: '/setting',
                templateUrl: 'src/js/templates/setting/setting.html',
                controllerUrl: 'src/js/controllers/setting/setting',
                controller: 'Setting'
            })
            .state('usersetting',{
                url: '/usersetting',
                templateUrl: 'src/js/templates/setting/usersetting.html',
                controllerUrl: 'src/js/controllers/setting/usersetting',
                controller: 'UserSetting'
            })
    }]);
})