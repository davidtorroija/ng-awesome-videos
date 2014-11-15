'use strict';

 angular.module('videosApp')
 .controller('MainCtrl', function ($scope, youtubeVideos, youtubeVideoService, $location) {

  $scope.videos = youtubeVideos.results;

  $scope.mainTitle = youtubeVideos.title;

  console.log(youtubeVideos);

  $scope.openInNewTab = function openInNewTab(url) {
    window.open(url,'_blank');
  };

  $scope.$watch('search',function(newData, oldData){
    if(newData !== oldData){
      youtubeVideoService.getVideosBySearch(newData)
      .then(function(searchResult){
        $scope.videos = searchResult.results;
        $scope.mainTitle = searchResult.title;
      });
    }
  },true);

  $scope.getLocation = function() {
    return youtubeVideoService.getVideosBySearch()
    .then(function(data){
      return data;
    });
  };

  $scope.select = function(){
    $location.path('/youtubeVideos/' + $scope.selected);
  };
})
//the route config is intentionally here to quickly configure in the same module
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'scripts/main/views/main.html',
    controller: 'MainCtrl',
    resolve: {
      youtubeVideos: function($location,$route,youtubeVideoService) {
        var id = $route.current.params.idMovie;
        return youtubeVideoService.getMostPopularVideos()
        .catch(function() {
          $location.path('/');
        });
      },
    }
  });
});
