import { Meteor } from 'meteor/meteor';

Template.Question.onCreated(function(){
    var self = this;
    self.autorun(function(){
        var id = FlowRouter.getParam('id');
        self.subscribe('question', id);
    });
});

Template.Question.helpers({
  question: () => {
    var id = FlowRouter.getParam('id');
    return Questions.findOne({_id: id});
  }
});

Template.Question.events({
  'click .answer': function(e, template, question) {
    var id = FlowRouter.getParam('id');
    Meteor.call('changeAnswerOfQuestion', id);
  },
  'click .back': function(e) {
    location.href = '/';
  }
});
