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
  afterEach(function(){
    Stories.remove({});
  });

  it("Displays the latest n stories", function(done){
    var count = Meteor.app.StoryService.latest(4).fetch().length;
    expect(count).toBe(4);
    var storiesElemGroup = $("#hero .stories .story");
    expect(storiesElemGroup.length).toBe(4);
  });
});