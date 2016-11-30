angular.module('funstuff', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '../views/homeTmpl.html'
    })
    .state('vegan', {
        url: '/vegan',
        templateUrl: '../views/veganTmpl.html'
    })
    .state('catering', {
        url: '/catering',
        templateUrl: '../views/cateringTmpl.html'
    })
    .state('gallery', {
        url: '/gallery',
        templateUrl: '../views/galleryTmpl.html'
    })
    // .state('contact', {
    //     url: '/contact',
    //     templateUrl: '../views/contactTmpl.html'
    // })
    // .state('store', {
    //     url: '/store',
    //     templateUrl: '../views/storeTmpl.html'
    // })
    // .state('cart', {
    //     url: '/cart',
    //     templateUrl: '../views/cartTmpl.html'
    // })
    // .state('cart1', {
    //     url: '/cart1',
    //     templateUrl: '../views/cart1Tmpl.html'
    // })
    // .state('login', {
    //     url: '/login',
    //     templateUrl: '../views/loginTmpl.html'
    // })
    // .state('checkout', {
    //     url: '/checkout',
    //     templateUrl: '../views/checkoutTmpl.html'
    // })
    $urlRouterProvider.otherwise('/');

})
