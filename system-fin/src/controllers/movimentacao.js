angular.module('app',["firebase" ])
.controller('appCtrl',function($scope,$firebase){
  
  
  var ref = new Firebase("");
        var sync = $firebase(ref);


  $scope.DB = sync.$asArray();
  
 
  //  FALTA INSERIR CHAVE ESTRANGEIRA CATEGORIA E USER
  $scope.app={valor:'',data:'',nome:'',descricao:''}
  
  
  $scope.add=function(){
    $scope.DB.$add($scope.app);
    $scope.app={valor:'',data:'',nome:'',descricao:''}
  
  }
  
  $scope.edit=function(value){
    $scope.app=value
  }
  $scope.delete=function(item){
    $scope.DB.$remove(item)
  }
  
   $scope.delete=function(item){
    $scope.DB.$remove(item)
  }
 
})