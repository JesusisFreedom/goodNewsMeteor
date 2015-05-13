/**
 * Created by austinadams on 5/9/15.
 */

describe("Integration of StoryService", function(){

  beforeAll(function(){
    Meteor.call('storyFactory', 20);
  });

  afterAll(function(){
    Stories.remove({});
  });

  it("Returns the latest stories", function(){
    var latest = Meteor.app.StoryService.latest(4);
    var count = latest.fetch().length;

    expect(count).toBe(4);
  });

  it("Returns a random story", function(){
    var random = Meteor.app.StoryService.randomStory();
    expect(random.fetch()._id).not.toBeNull();
  });

});