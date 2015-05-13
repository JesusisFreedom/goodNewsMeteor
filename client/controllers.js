Meteor.startup(function(){
  Session.set('page', 0);
});
StoriesController = RouteController.extend({
  waitOn: function(){
    return [Meteor.subscribe('stories', Session.get('page')), Meteor.subscribe('latestStories')]
  },
  layoutTemplate: 'layout',
  latest: function () {
    Session.set('hero', true);
    this.render('home');
  },
  story: function(slug){
    Session.set('hero', false);
    this.render('story')
  }
});