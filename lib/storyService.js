/**
 * Created by austinadams on 5/9/15.
 */

function StoryService() {}

StoryService.prototype.latest = function(number) {
  return Stories.find({}, {
      sort: [['date', 'desc']],
      limit: number
    }
  );
};

StoryService.prototype.list = function (page, skip, limit) {
  var options = {
    sort: [['date', 'desc']],
    limit: limit
  };
  if (page > 0) options.limit = page * limit;
  options.skip = skip;

  return Stories.find({}, options);
};

StoryService.prototype.randomStory = function () {
  var count = Stories.find().count();
  var rand = Math.floor(Math.random() * count);
  return Stories.find({}, {
    limit: 1,
    skip: rand
  });
};

Meteor.app.StoryService = new StoryService();