var app = angular.module("contactListApp", []);

  app.directive("ngcCustomUser", function(){
    
    return {
      scope: {u: "=user", l: "@lbl", c: "@credit"},
      template: "{{c}}<br/>{{l}}{{u.name}}</strong><br/>" + 
      "<strong>{{u.email}}</strong><br/>" + 
      "Contact: {{u.phone}}"
    }
  })
  
  app.controller("contactListController", function($scope){
    $scope.contacts = [{id: 0,name: "pete", email:"pete@dev.k", phone: "0886522422"},
    {id: 1,name: "riuss kant", email:"prushgarete@kki.ru", phone: "08226227422"},
    {id: 2,name: "shapedssnste", email:"pegsshhjate@uev.k", phone: "081652263"},
    {id: 3,name: "rushod", email:"rushud@yahoo.co.ng", phone: "087062524242"}
    ];

    
    $scope.c = {name:"Ispoa", email:"idiakosesunday@gmail.com", phone:"08184810380"};
    $scope.editedUser = undefined;

    $scope.add = function(user){
       kuk = {id: $scope.contacts.length, name: user.fname+" "+ user.lname, email: user.email,
       phone: user.phone}
       $scope.contacts.push(kuk);
       user.fname = "";
       user.lname = "";
       user.email = "";
       user.phone = "";
    }

    $scope.handleChange = function(c){
      $scope.currentUser = $scope.contacts[c];
      $scope.editedUser = {id: "", fname: "", lname: "", phone: "", email: ""};
      $scope.editedUser.id = $scope.currentUser.id; 
      $scope.editedUser.fname = $scope.currentUser.name.split(" ")[0];
      $scope.editedUser.lname = $scope.currentUser.name.split(" ")[1];
      $scope.editedUser.email = $scope.currentUser.email;
      $scope.editedUser.phone = $scope.currentUser.phone;
    }

    $scope.delete = function(user){
      $scope.contacts.splice($scope.contacts.indexOf(user),1);
    };

    $scope.edit = function(user){
      user.name = user.fname+" "+ user.lname;
      $scope.contacts[user.id] = user;
      $scope.editedUser = undefined;
    }

  }
  
  );
  