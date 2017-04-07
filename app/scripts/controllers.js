/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {
    console.log("Main Ctrl Loaded");
    var config = {
        apiKey: "AIzaSyBUu2wuRjrWk_w228z7bGnSefWyjlXCCY0",
        authDomain: "globalstarts-812d4.firebaseapp.com",
        databaseURL: "https://globalstarts-812d4.firebaseio.com",
        storageBucket: "globalstarts-812d4.appspot.com",
        messagingSenderId: "854438979646"
    };
    firebase.initializeApp(config);
    this.userName = 'Global Start';
    this.helloText = 'Welcome in Global Start';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
};
angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });