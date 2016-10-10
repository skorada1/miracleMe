var app=angular.module('starter.services', [])



app.service('employeeProfileService',function($rootScope,$ionicNavBarDelegate,$location){


  if (window.localStorage['isloggedin'] === 'true') {
    alert('reload after login');
      //$location.path('/login');

        $rootScope.employeedata={
          'employeeName':window.localStorage['ename'],
          'employeePhNumber': window.localStorage['pnumber'],
          'employeeWork': window.localStorage['wnumber'],
          'employeeImage': window.localStorage['eimage'],
        }
        //alert($rootScope.employeedata.employeeImage);
        // $rootScope.base64String3 = btoa(String.fromCharCode.apply(null, new Uint8Array($rootScope.employeedata.employeeImage)));
        // $("#empProfileImage").attr('src', 'data:image/png;base64,' +$rootScope.base64String3);
    $rootScope.hideTabBar = "";
    $ionicNavBarDelegate.showBackButton(false);
    //$rootScope.HideInstructionTab = 'true';
    $location.path('/tab/empsearch');



  } else {

  }


  this.setEmployeeData=function(doc)
  {
    //alert('hi set');
    $rootScope.doc2=doc;
//alert('hi service');
//alert(JSON.stringify(doc));
this.getEmployeeData(doc);
  }

  this.getEmployeeData=function(doc)
  {
//alert('hi get');
    //alert(JSON.stringify(doc));
    return $rootScope.doc2;

  }
})
