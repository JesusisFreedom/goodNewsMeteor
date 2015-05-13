Meteor.startup(function () {
  Session.set('page', 0);
  Meteor.subscribe('stories', Session.get('page'));
  Meteor.subscribe('latestStories');
});