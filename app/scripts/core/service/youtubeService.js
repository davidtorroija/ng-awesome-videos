'use strict';

angular.module('Service')
.factory('youtubeVideoService', function($http, $location){
  var youtubeFeeds = 'http://gdata.youtube.com/feeds/api/',
  params = {
    params: {
      callback:'JSON_CALLBACK',
      alt:'json-in-script'
    }
  };

  function jsonpRequest(url, params){
    return $http.jsonp(url, params);
  }

  function getResults(data){
    var result = data.data.feed;

    var videos = _(result.entry)
    .map(function(video){

      return{
        title: video.title.$t,
        content: video.media$group.media$description.$t,
        author : video.author[0].name.$t,
        authorURL : video.author[0].uri.$t,
        url: video.media$group.media$player.url,
        thumbnail: video.media$group.media$thumbnail[0].url
      };
    });

    return {
      results: videos,
      title: result.title.$t,
      logo: result.logo.$t
    };
  }

  return {
    getMostPopularVideos: function() {
      return jsonpRequest([youtubeFeeds,'standardfeeds/most_popular?v=2'].join(''), params)
      .then(function(data){
        return getResults(data);
      })
      .catch(function(){
        $location.path('/');
      });
    },
    getVideosBySearch: function(searchText) {
      return jsonpRequest([youtubeFeeds,'videos?q='+searchText+'&max-results=30&format=5'].join(''), params)
      .then(function(data){
        return getResults(data);
      })
      .catch(function(){
        $location.path('/');
      });
    }
  };
});




