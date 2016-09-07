'use strict';

var App = angular.module('routingApp',['ui.router','ngMaterial','ngMessages']);
 App.controller('DemoCtrl', function() {
      this.topDirections = ['left'];
      this.bottomDirections = ['right'];
      this.isOpen = true;
      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';
      this.availableDirections = ['right'];
      this.selectedDirection = 'right';
    });




App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider,$scope){
				

				// For any unmatched url, send to /business
				$urlRouterProvider.otherwise("/home")
				
				$stateProvider
						.state('home', {
							url: "/home",
							templateUrl: "home.html"
						})
				$stateProvider
						.state('movies', {
							url: "/shortfilm",
							templateUrl: "movies.html"
						})
				$stateProvider
						.state('albums', {
							url: "/albumsongs",
							templateUrl: "albums.html"
						})
				$stateProvider
						.state('series', {
							url: "/webseries",
							templateUrl: "series.html"
						})
				$stateProvider
						.state('single', {
							url: "/single",
							templateUrl: "single.html"
						})
				$stateProvider
						.state('shows', {
							url: "/shows",
							templateUrl: "shows.html"
						})
				$stateProvider
						.state('history', {
							url: "/history",
							templateUrl: "history.html"
						})
				$stateProvider
						.state('news', {
							url: "/news",
							templateUrl: "news.html"
						})
				/*$stateProvider
						.state('upload', {
							url: "/upload",
							templateUrl: "upload_index.html"
						})*/		
			}]);
