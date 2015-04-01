/**
 * Created by N.David on 01/04/2015.
 */
angular.module('app')

    .controller('LoginCtrl',['$scope','$http','$window',function($scope,$http,$window){
        $scope.user = {
            email :'phndavid@gmail.com',
            password : 'David123*'
        };
        $scope.login = function(){
            console.log('Login controller');
            var data = angular.toJson($scope.user);
            console.log(data);
            $http.post('http://localhost:8090/login',data)
                .success(function(data, status, headers, config) {
                    if(data != null){
                        alert(data.response);
                        var jsonstr = data.response;
                        if(data.res){
                            var token = data.token;
                            var grav = data.grav;
                            $window.location.href = '../view/vehicule_admin.html';
                        }
                    }
                })
        };
        $scope.register = function(){
            console.log('Register controller')
            var data = angular.toJson($scope.user);
            console.log(data);
            $http.post('http://localhost:8090/register',data)
                .success(function(data, status, headers, config){
                    if(data != null){
                        alert(data.response);
                    }
                })
        }
    }]);