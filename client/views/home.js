Template.layout.helpers({
  showHero: function () {
    return Session.get('hero');
  }
});

Template.home.helpers({
  list: function(){
    return Meteor.app.StoryService.list(Session.get('page'), Meteor.settings.public.latestCount, Meteor.settings.public.defaultPageLimit);
  }
});

Template.hero.helpers({
    featured: function () {
      return Meteor.app.StoryService.latest(Meteor.settings.public.latestCount);
    }
  }
);