Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  controller: 'StoriesController'
});

Router.route('/:slug', {
  name: 'story',
  controller: 'StoriesController'
});
