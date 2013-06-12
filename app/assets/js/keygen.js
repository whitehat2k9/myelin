// Generated by CoffeeScript 1.6.2
var KeygenCtrl;

KeygenCtrl = function($scope, $window, pgp) {
  var blobProps;

  $scope.generate = function() {
    return $scope.keys = pgp.generate_key_pair(1, 2048, "" + $scope.name + " <" + $scope.email + ">");
  };
  blobProps = {
    "type": "text\/plain"
  };
  $scope.downloadPrivateKey = function() {
    return $window.location = $window.URL.createObjectURL(Blob([$scope.keys.privateKeyArmored], blobProps));
  };
  return $scope.downloadPublicKey = function() {
    return $window.location = $window.URL.createObjectURL(Blob([$scope.keys.publicKeyArmored], blobProps));
  };
};
