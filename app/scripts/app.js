'use strict';

/**
 * @ngdoc overview
 * @name videosApp
 * @description
 * # videosApp
 *
 * Main module of the application.
 */
angular
  .module('videosApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'Movies',
    'Service',
    'youtube-embed'
  ])
  //routes config!
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'scripts/main/views/main.html',
      //   controller: 'MainCtrl',
      //   resolve: {
      //     movies: function($location,$route,youtubeVideoService) {
      //       var id = $route.current.params.idMovie;
      //       return youtubeVideoService.get()
      //       .catch(function() {
      //         $location.path('/');
      //       });
      //     },
      //   }
      // })
      // .when('/movies/edit/:idMovie', {
      //   templateUrl: 'scripts/movies/views/movieEdit.html',
      //   controller: 'MoviesEditCtrl',
      //   resolve: {
      //     movie: function($location,$route,youtubeVideoService) {
      //       var id = $route.current.params.idMovie;
      //       return youtubeVideoService.getById(id)
      //       .catch(function() {
      //         $location.path('/');
      //       });
      //     },
      //     actors: function($location,$route, actorModel) {
      //       return actorModel.get()
      //       .catch(function() {
      //         $location.path('/');
      //       });
      //     },
      //     genres: function($location,$route, genreModel) {
      //       return genreModel.get()
      //       .catch(function() {
      //         $location.path('/');
      //       });
      //     },
      //   }
      // })
      // .when('/movies/:idMovie', {
      //   templateUrl: 'scripts/movies/views/movie.html',
      //   controller: 'MoviesCtrl',
      //   resolve: {
      //     movie: function($location,$route,youtubeVideoService) {
      //       var id = $route.current.params.idMovie;
      //       return youtubeVideoService.getById(id)
      //       .catch(function() {
      //         $location.path('/');
      //       });
      //     },
      //   }
      // })
      // .when('/books', {
      //   templateUrl: 'scripts/books/views/book.html',
      //   controller: 'BooksCtrl',
      //   resolve: {
      //     movie: function($location,$route,youtubeVideoService) {
      //       var id = $route.current.params.idMovie;
      //       return youtubeVideoService.getById(id)
      //       .catch(function() {
      //         $location.path('/');
      //       });
      //     },
      //   }
      // })
      .otherwise({
        redirectTo: '/'
      });
  });

