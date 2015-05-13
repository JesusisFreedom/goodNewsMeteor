/**
 * Created by austinadams on 5/9/15.
 */

describe("Story Display", function(){

  beforeEach(function(done){
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    Meteor.call('storyFactory', 20, function(err, result){
      done();
    });
    var sub = Meteor.subscribe('latestStories');
  });

  beforeEach(function (done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);


  it("Displays the latest n stories", function(done){
    Meteor.subscribe('latestStories', function() {
      var count = Meteor.app.StoryService.latest(4).fetch().length;
      expect(count).toBe(4);
      //var storiesElemGroup = $("#hero .stories .story");
      //expect(storiesElemGroup.length).toBe(4);
      done();
    });
  });
});