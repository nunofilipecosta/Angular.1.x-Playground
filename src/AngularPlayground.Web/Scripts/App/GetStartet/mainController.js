(function () {

    var app = angular.module('githubViewer');

    var MainController = function ($scope, github, $interval, $log, $anchorScroll, $location) {

        //$log.log()
        //log.info
        //log.error
        //log.warn
        //log.debug

        var onUserComplete = function (data) {
            $scope.user = data;

            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function (data) {
            $scope.repos = data;

            $location.hash('userdetails');
            $anchorScroll();
        };

        var onError = function (reason) {
            $scope.error = 'Could not fetch the user';
        };

        var decrementCountDown = function () {
            $scope.countDown -= 1;
            if ($scope.countDown < 1) {
                $scope.search($scope.username);
            }
        };

        var countDownInterval = null;
        var startCountDown = function () {
            countDownInterval = $interval(decrementCountDown, 1000, 5);
        };

        $scope.search = function (username) {
            $log.info('Searching for ' + username);
            github.getUser(username)
            .then(onUserComplete, onError);

            if (countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countDown = null;
            }
        };



        $scope.username = 'angular';
        $scope.message = 'Github Viewer';
        $scope.repoSortOrder = '-stargazers_count';
        $scope.countDown = 5;
        startCountDown();
    };

    //app.controller('MainController', ['$scope', '$http', '$interval', MainController]);

    app.controller('MainController', MainController);

}());