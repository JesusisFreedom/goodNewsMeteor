StoriesController = RouteController.extend({
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