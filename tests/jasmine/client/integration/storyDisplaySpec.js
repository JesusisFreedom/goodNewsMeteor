/**
 * Created by austinadams on 5/9/15.
 */

describe("Story Display", function(){

  beforeEach(function(done){
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
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


  it("The latest n stories", function(done){
    Meteor.subscribe('latestStories', function() {
      var count = Meteor.app.StoryService.latest(4).fetch().length;
      expect(count).toBe(4);
      done();
    });
  });

  it("The list of page * limit stories", function(done){
    expect(Session.get('page')).toBe(0);
    Meteor.subscribe('stories', Session.get('page'), function() {
      var count = Meteor.app.StoryService.list(0, 4, 100).fetch().length;
      expect(Stories.find().count()).toBe(104);
      done();
    });
  });
});