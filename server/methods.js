if (process.env.IS_MIRROR) {
  Meteor.methods({
    storyFactory: function (number) {
      _(20).times(function () {
        Factory.create('story');
      });
      return true;
    }
  });
}