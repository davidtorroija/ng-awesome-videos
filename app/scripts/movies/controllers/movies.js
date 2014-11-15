'use strict';

/**
 * @ngdoc function
 * @name videosApp.controller:MainCtrl
 * @description
 * # MoviesCtrl
 * Controller of the videosApp
 */
angular.module('videosApp')
  .controller('MoviesCtrl', function ($scope,movie) {
    console.log(movie);

    movie.year = moment(movie.releaseYear).format('YYYY');
    $scope.movie = movie;

  });
