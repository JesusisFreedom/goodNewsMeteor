/**
 * Created by austinadams on 5/9/15.
 */

describe("StoryService", function () {

  beforeEach(function () {
    mock(global, 'Stories');
    StoryService = Meteor.app.StoryService;

  });

  it("Returns the latest", function () {
    var ret = {};
    spyOn(Stories, 'find').and.returnValue(ret);
    var number = 4;
    expect(StoryService.latest(number)).toBe(ret);
    expect(Stories.find.calls.argsFor(0)).toEqual([{}, {limit: number, sort: [['date', 'desc']]}]);
  });

  it("Returns the rest - on page 0", function () {
    var ret = {};
    spyOn(Stories, 'find').and.returnValue(ret);
    var number = 4;
    var page = 0;
    var limit = 10;
    expect(StoryService.list(page, number, limit)).toBe(ret);
    expect(Stories.find.calls.argsFor(0)).toEqual([{}, {
      limit: limit,
      sort: [['date', 'desc']],
      skip: number
    }]);
  });

  it("Returns the rest - but paginated", function () {
    var ret = {};
    spyOn(Stories, 'find').and.returnValue(ret);
    var number = 4;
    var page = 2;
    var limit = 10;
    expect(StoryService.list(page, number, limit)).toBe(ret);
    expect(Stories.find.calls.argsFor(0)).toEqual([{}, {
      limit: limit * page,
      sort: [['date', 'desc']],
      skip: number
    }]);
  });

  it("Returns a random story", function(){
    var ret = {
      //Mocks the count on find
      count: function(){
        return 10;
      }
    };
    spyOn(Stories, 'find').and.returnValue(ret);

    expect(StoryService.randomStory()).toBe(ret);
    var keys = Object.keys(Stories.find.calls.argsFor(1)[1]);
    expect(keys).toContain("skip");
  });
});