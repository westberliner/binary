FlowRouter.route('/', {
    name: 'home',
    action() {
      BlazeLayout.render('MainLayout', {main: 'Index'})
    }
});

FlowRouter.route('/question/:id', {
    name: 'question',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Question'});
    }
});
