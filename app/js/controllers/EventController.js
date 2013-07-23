'use strict';

eventsApp.controller("EventController",
  function EventController($scope, eventData) {
    $scope.sortorder = 'name';
    $scope.snippet = '<span style="color:red;">hi there</span>';
    $scope.event = eventData.event;
    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);
