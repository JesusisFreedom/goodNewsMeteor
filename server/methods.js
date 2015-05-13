if (process.env.IS_MIRROR || Meteor.settings.env === 'dev') {
  Meteor.methods({
    storyFactory: function (number) {
      _(number).times(function () {
        Factory.create('story');
      });
      return true;
    }
  });
}