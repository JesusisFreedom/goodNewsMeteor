Meteor.startup(function () {
  if(Meteor.settings.env === "dev" && Stories.find().count() === 0){
    Meteor.call('storyFactory', 20);
  }

  // code to run on server at startup
  Meteor.publish('latestStories', function () {
    return Meteor.app.StoryService.latest(Meteor.settings.public.latestCount);
  });

  Meteor.publish('stories', function (page) {
    return Meteor.app.StoryService.list(page, Meteor.settings.public.latestCount, Meteor.settings.public.defaultPageLimit);
  });


  if(!process.env.isMirror){
    SyncedCron.start();
  }

});
