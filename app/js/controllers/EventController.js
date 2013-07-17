'use strict';

eventsApp.controller("EventController",
  function EventController($scope) {
    $scope.sortorder = 'name';
    $scope.snippet = '<span style="color:red;">hi there</span>';
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2014',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/AngularShieldLogo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: 2,
          level: 'Intermediate',
          abstract: 'In this session you will learn the ins and outs of directives.',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'Bob Smith',
          duration: 1,
          level: 'Introductory',
          abstract: 'In this session you will learn the ins and outs of scopes.',
          upVoteCount: 0
        },
        {
          name: 'Well behaved Controllers',
          creatorName: 'Bob Smith',
          duration: 4,
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of controllers.',
          upVoteCount: 0
        }
      ]
    };

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);
