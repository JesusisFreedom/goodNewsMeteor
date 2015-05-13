Meteor.startup(function () {
  // code to run on server at startup
  Meteor.publish('latestStories', function () {
    Meteor.app.StoryService.latest(Meteor.settings.public.latestCount);
  });

  Meteor.publish('stories', function (page) {
    Meteor.app.StoryService.list(page, Meteor.settings.public.latestCount, Meteor.settings.public.defaultPageLimit);
  });
});
