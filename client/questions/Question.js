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
  },
  getPollAnswerYes: function(q) {
    return q.pollAnswer[0].count;
  },
  getPollAnswerNo: function(q) {
    return q.pollAnswer[1].count;
  }
});

Template.Question.events({
  'click .answer': function(e, template, question) {
    var id = FlowRouter.getParam('id');
    Meteor.call('changeAnswerOfQuestion', id);
  },
  'click .poll-answer-yes': function(e) {
    var id = FlowRouter.getParam('id');
    Meteor.call('incrementPollAnswerOfQuestion', id, 0);
  },
  'click .poll-answer-no': function(e) {
    var id = FlowRouter.getParam('id');
    Meteor.call('incrementPollAnswerOfQuestion', id, 1);
  },
  'click .back': function(e) {
    location.href = '/';
  }
});
