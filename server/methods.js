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

var sources = {
  "ibethel": {
    type: 'rss',
    url: 'http://www.ibethel.org/rss.xml'
  }
};

var sourceActions = {
  'rss': function(sourceName, url){
    data = Scrape.feed(url);
    _.each(data.items, function(item){
      try {
        Stories.insert({
          title: item.title,
          content: [
            {
              type: "text",
              body: item.description
            },
            {
              type: "tags",
              tags: _.values(item.tags)
            }
          ],
          sourceDate: moment(item.pubDate),
          scrapeDate: moment(),
          source: sourceName,
          sourceId: item.link
        });
      }catch(e){
        console.log(e);
      }
    });
  }
};

var scrapeSource = function(name){
  var source = sources[name];
  var action = sourceActions[source.type];
  action(name, source.url);
};

var scrapeSources = function(){
  for(var s in sources){
    scrapeSource(s);
  }
};

scrapeSources();

SyncedCron.add({
  name: 'Parse Sources',
  schedule: function (parser) {
    // parser is a later.parse object
    return parser.text('every 2 hours');
  },
  job: function () {
    scrapeSources();
  }
});