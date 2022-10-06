var app = angular.module('myApp', []);
        app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
    app.controller('formCtrl', function($scope,$http) {
        $scope.items = [];
        $scope.form = {};
        var acc_tokens;
        $scope.login = function(){
            var login = angular.copy($scope.form)
            $http.post(`http://localhost:3000/login`,login).then(resp=>{
                    acc_tokens = resp.data;
                    console.log(acc_tokens);
                    localStorage.setItem("token",JSON.stringify(resp.data))
                    window.location.href = './index.html';
                }).catch(err=>{
                    console.log("Error ",err);
                    alert("Đăng nhập thất bại thất bại!");
                })
                
        }
        $scope.initialize = async function(){
            var token = JSON.parse(localStorage.getItem('token'))
            console.log(token.access_token)
            $http.get("http://localhost:3000/users",{
                    headers: {'Authorization': `Bearer ${token.access_token}`}
                }).then(resp=>{
                $scope.items = resp.data;
            })
            $scope.edit = function(item){
                $scope.form = angular.copy(item);
            }

            $scope.reset = function(){
                $scope.form = {}
            }

            $scope.create = function(){
                var item = angular.copy($scope.form);
                console.log(item);
                $http.post(`http://localhost:3000/users`,item,{
                    headers: {'Authorization': `Bearer ${token.access_token}`}
                }).then(resp=>{
                    $scope.items.push(resp.data);
                    console.log(resp.data);
                    $scope.reset();
                    alert("Thêm tài khoản thành công!");
                }).catch(err=>{
                    console.log("Error ",err);
                    alert("Thêm tài khoản thất bại!");
                })
            }

            $scope.update = function(){
                var item = angular.copy($scope.form);
                $http.put(`http://localhost:3000/users/${item.id}`,item,{
                    headers: {'Authorization': `Bearer ${token.access_token}`}
                }).then(resp=>{
                    var index = $scope.items.findIndex(p=>p.username == item.username);
                    $scope.items[index] = item;
                    $scope.reset();
                    alert('Cập nhật tài khoản thành công!');
                    console.log(resp.data);
                }).catch(err=>{
                    alert('Lỗi cập nhật tài khoản!')
                    console.log("Error ",err);
                })
            }
            $scope.delete = function(item){
                $http.delete(`http://localhost:3000/users/${item.id}`,{
                    headers: {'Authorization': `Bearer ${token.access_token}`}
                }).then(resp=>{
                    console.log(item.username)  
                    var index = $scope.items.findIndex(p=>p.username == item.username);
                    $scope.items.splice(index,1);
                    $scope.reset();
                    alert('Xoá tài khoản thành công!');
                    console.log(resp.data);
                }).catch(err=>{
                    alert('Lỗi xoá tài khoản!')
                    console.log("Error ",err);
                })
            }
        }

        $scope.initialize();
        
    });